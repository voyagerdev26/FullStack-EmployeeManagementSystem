# Employee Management System (EMS)

A **Full Stack Employee Management System (EMS)** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This application is designed to simplify employee management by providing separate dashboards for administrators and employees, along with features like attendance tracking, leave management, payslip generation, and secure authentication.

The project demonstrates how real-world business applications are developed using modern web technologies, REST APIs, role-based authorization, and background job scheduling.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* Secure user authentication using JSON Web Tokens (JWT).
* Role-based access control for **Admin** and **Employee**.
* Protected routes to prevent unauthorized access.
* Persistent login using authentication tokens.

### 👨‍💼 Admin Dashboard

The administrator has complete control over the organization.

Admin can:

* Add new employees.
* Edit employee information.
* Delete employee accounts.
* View all employees.
* Manage employee attendance.
* Approve or reject leave requests.
* Generate employee payslips.
* Monitor employee records from a centralized dashboard.

### 👨‍💻 Employee Dashboard

Employees can manage their personal information and daily activities.

Employees can:

* View their profile.
* Mark daily attendance.
* Apply for leave.
* Track leave request status.
* View attendance history.
* Download or view generated payslips.

---

## 📅 Attendance Management

The application includes a complete attendance management system.

Features include:

* Daily attendance marking.
* Attendance history.
* Employee-wise attendance records.
* Admin monitoring of attendance.
* Prevention of duplicate attendance entries.

---

## 📝 Leave Management

Employees can request leave directly through the application.

Features include:

* Leave application form.
* Leave status tracking.
* Admin approval or rejection.
* Leave history for every employee.
* Real-time leave updates.

---

## 💰 Payslip Management

The system allows administrators to generate salary slips for employees.

Features include:

* Payslip generation.
* Employee-wise salary records.
* Secure access to payslips.
* Employees can view their own payslips only.

---

## ⚡ Background Jobs with Inngest

The project uses **Inngest** to handle background tasks and asynchronous workflows.

Examples include:

* Processing long-running tasks.
* Scheduling background operations.
* Executing asynchronous workflows without blocking user requests.
* Improving application performance by offloading non-critical operations.

---

## 🌐 REST API

The backend follows RESTful API principles.

Implemented APIs include:

* Authentication APIs
* Employee APIs
* Attendance APIs
* Leave APIs
* Payslip APIs

The APIs are built using **Node.js** and **Express.js** and communicate with the frontend using JSON.

---

## 🗄️ Database

MongoDB is used as the primary database.

Collections include:

* Users
* Employees
* Attendance
* Leave Requests
* Payslips

The database is designed to efficiently manage employee-related data while maintaining proper relationships between records.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* Inngest

### Database

* MongoDB
* Mongoose

---

## 📂 Project Highlights

* Full Stack MERN Architecture
* Clean Folder Structure
* Role-Based Authentication
* Secure REST APIs
* CRUD Operations
* Attendance Management
* Leave Management
* Payslip Generation
* Background Job Processing
* Responsive User Interface
* Scalable Backend Architecture

---

## 🎯 Purpose of the Project

This project was built to gain hands-on experience with real-world full-stack development. It demonstrates how modern enterprise applications manage employees, authenticate users, handle business workflows, and organize data efficiently using the MERN stack.

The project showcases practical implementation of authentication, REST APIs, database design, role-based authorization, CRUD operations, and background job scheduling, making it a strong portfolio project for aspiring Full Stack Developers.

---

## 👨‍💻 Author

Developed by **Dev Sharma**

If you found this project helpful, consider giving it a ⭐ on GitHub!
