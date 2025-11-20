# Job Dockets & Time Tracking Mini-API

This project is a backend application built using **Node.js**, **Express**, and **TypeScript**, with **MongoDB Atlas** as a NoSQL cloud database.  
It supports managing job dockets, workers, supervisors, and work-hour tracking.

---

## 🚀 API Access

**Production (Deployed on Render):**  
`https://g3-job-dockets-api.onrender.com`

**Local Development URL:**  
`http://localhost:3000/`

---

## 📦 Installation

Clone this repository and install dependencies:


npm install
Development Mode :npm run dev

## Production Mode

Set up environment variables
MONGO_URL=<your_mongo_connection_string>
PORT=3000

🧪 API Testing
***************************************************
1. Add New Job
   POST https://g3-job-dockets-api.onrender.com/jobs

   {
  "clientName": "Sky Builders Pvt Ltd",
  "siteLocation": "Chennai, Tamil Nadu"
   }

   db strecture
   ************
   {
  "_id": {
    "$oid": "691ef6303ea6a97496238b67"
  },
  "jobNumber": "JOB-0001",
  "clientName": "ABC Constructions",
  "siteLocation": "Bangalore, Karnataka",
  "status": "open",
  "createdAt": {
    "$date": "2025-11-20T11:06:24.745Z"
  },
}
************************************************
   

   
