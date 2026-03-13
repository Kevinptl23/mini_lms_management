# 🎓 Mini LMS System (Learning Management System)

A **Mini Learning Management System** built using the **MERN Stack** that allows an **Admin to manage courses, centers, and student admissions**, while **Centers can view their enrolled students and available courses**.

This project demonstrates **role-based dashboards, CRUD operations, and center-based student management**.

---

# 🚀 Features

### 👨‍💼 Admin Dashboard

* Admin Login
* Dashboard Statistics
  * Total Courses
  * Total Students
  * Total Centers
* Create and Manage Courses
* Create Training Centers
* Student Admission Form
* View and Manage Students
* Course & Center Dropdown in Student Form

### 🏢 Center Dashboard

* Center Login
* View Available Courses
* View Students belonging only to that Center
* Dashboard Statistics
* Clean and Attractive UI

---

# 🛠 Tech Stack

### Frontend

* React.js
* Bootstrap
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Tools

* Git
* GitHub
* Postman

---

# 📂 Project Structure

```
mini-lms-system
│
├── backend
│   ├── controllers
│   │   ├── courseController.js
│   │   ├── studentController.js
│   │   └── centerController.js
│   │
│   ├── models
│   │   ├── Course.js
│   │   ├── Student.js
│   │   └── Center.js
│   │
│   ├── routes
│   │   ├── courseRoutes.js
│   │   ├── studentRoutes.js
│   │   └── centerRoutes.js
│   │
│   ├── config
│   │   └── db.js
│   │
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── CenterDashboard.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Students.jsx
│   │   │   └── Centers.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

# 🔐 Login Credentials

### Admin Login

```
Email: admin@lms.com
Password: 123456
```

### Center Login

Admin can create centers with **ID and Password**, and the center can login using those credentials.

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/mini-lms-system.git
```

```
cd mini-lms-system
```

---

# 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```
npm run dev
```

Server will start on:

```
http://localhost:8080
```

---

# 3️⃣ Frontend Setup

Open new terminal:

```
cd frontend
npm install
```

Run React app:

```
npm run dev
```

Frontend will start on:

```
http://localhost:5173
```

---

# 📊 Dashboard Features

### Admin Dashboard

* Total Courses
* Total Students
* Total Centers

### Center Dashboard

* Total Students in Center
* Available Courses
* Active Admissions

---

# 📸 Screenshots

(Add screenshots here if needed)

Example:

```
Admin Dashboard Screenshot
Center Dashboard Screenshot
Student Admission Form
Course Management Page
```

---

# 🎯 Future Improvements

* JWT Authentication
* Role Based Authorization
* Course Enrollment System
* Payment Integration
* Dashboard Analytics Charts
* Student Search & Filter

---

# 👨‍💻 Author

**Kevin Ribadiya**

B.Tech Computer Science
Parul University

GitHub:
https://github.com/yourusername

---

# ⭐ Project Purpose

This project was built as part of an **interview assignment** to demonstrate:

* MERN Stack Development
* CRUD Operations
* REST API Integration
* Role Based Dashboard
* Clean UI Design
* GitHub Project Management
