📚 Quiz Platform
An online platform where users can create, take, and evaluate quizzes. Built with Node.js, Express, MongoDB, and vanilla HTML/CSS/JS.

🚀 Features
✅ Create quizzes with multiple-choice questions

✅ Save quizzes to MongoDB

✅ Take quizzes and get instant scores

✅ Clean UI with vanilla HTML/CSS

🛠️ Tech Stack
Backend: Node.js, Express.js, MongoDB, Mongoose
Frontend: HTML, CSS, JavaScript (no frameworks)
Database: MongoDB (local or cloud)
Tools: Postman (for testing APIs), Git, VS Code


quiz-platform/
├── backend/
|   |---Controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── create.html
│   ├── take.html
│   └── style.css
├── package.json
└── README.md


🔧 Setup Instructions
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/Karthick9298/NeuroNexus-QuizzApp.git
cd quiz-platform
2. Install backend dependencies
bash
Copy
Edit
cd backend
npm install
3. Start MongoDB
Make sure MongoDB is running locally on your system:

bash
Copy
Edit
mongod
4. Run the backend server
bash
Copy
Edit
node server.js
Server runs on http://localhost:3000.

5. Access the frontend
Open in browser:

arduino
Copy
Edit
http://localhost:3000/
