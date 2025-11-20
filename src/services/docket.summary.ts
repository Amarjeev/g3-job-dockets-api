import DocketModel from "../models/docket.schema";

export const docketSummaryService = {
  getSummary: async () => {
    // Total docket count
    const totalDockets = await DocketModel.countDocuments();

    // Group hours by role
    const hoursByRole = await DocketModel.aggregate([
      { $unwind: "$labourItems" },
      {
        $group: {
          _id: "$labourItems.role",
          totalHours: { $sum: "$labourItems.hoursWorked" },
        },
      },
    ]);

    // Format output
    const totalHoursByRole: Record<string, number> = {};
    hoursByRole.forEach((role: any) => {
      totalHoursByRole[role._id] = role.totalHours;
    });

    return { totalDockets, totalHoursByRole };
  },
};
