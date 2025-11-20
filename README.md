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

### 🧪 API Testing
***************************************************

POST https://g3-job-dockets-api.onrender.com/jobs

Update job details in the database

{
  "clientName": "Sky Builders Pvt Ltd",
  
  "siteLocation": "Chennai, Tamil Nadu, Kerala"
}

---

GET https://g3-job-dockets-api.onrender.com/jobs?status=open
List jobs.
Optional Query:
  ?status=open | closed

---

POST https://g3-job-dockets-api.onrender.com/jobs/:jobId/dockets
Body:
{
  "role": "electrician",
  "supervisorName": "amar",
  "date": "29-11-2025",
  "workerName": "Anu",
  "hoursWorked": 18,
  "notes": "Completed foundation trench work."
}

---

GET https://g3-job-dockets-api.onrender.com/jobs/:id
Returns a single job including all its dockets.

---

PATCH https://g3-job-dockets-api.onrender.com/jobs/:id/:status
Mark a job as closed.

---

GET https://g3-job-dockets-api.onrender.com/jobs/:jobId/dockets?from=22-11-2025&to=25-11-2025
List dockets for a job.

Optional Filters:
  ?from=DD-MM-YYYY &to=DD-MM-YYYY → filter by date range
  ?supervisorName=John → filter by supervisor

---

GET https://g3-job-dockets-api.onrender.com/dockets/summary
Returns a simple summary across all jobs.

***************************************************
