let counter = 0;

export const generateJobId = (): string => {
  counter++;
  const padded = String(counter).padStart(4, "0");
  return `JOB-${padded}`;
};
