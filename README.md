# 🚁 Online Drone Delivery System

A role-based backend system built with **Node.js**, **Express**, and **MongoDB** that manages drone deliveries with separate **Customer** and **Admin** roles.

---

## 📌 Overview

This system allows customers to register and place delivery orders, while admins manage the drone listings(available drones) and process delivery requests.

---

## 👥 Roles

**Customer**
- Register and log in
- Place delivery orders

**Admin**
- Add and manage available drones
- View incoming delivery requests
- Accept and update orders to delivered status

---

## ✅ Functional Requirements

### i. Validation
Ensures the format of incoming data is correct before processing. For example, an email must follow the format `ali@gmail.com`, not `12334.4.44`.

### ii. Verification
Confirms that the data sent to the server is genuine. In real-world systems, this is handled by sending an OTP to verify the user's identity before granting access.

### iii. Authentication
Checks the identity of a user at login using their name, email, and password.

### iv. Authorization
Controls what each user is allowed to do after logging in. For example, in a university portal, a student can view their marks but cannot edit them — only faculty staff can. Similarly, in this system:
- A **customer** can register and place orders
- An **admin** can view orders and update their status to delivered

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB

# Project Structure
```
drone-delivery-system/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── config/
│   │
│   ├── app.js
│   ├── server.js
│   ├── README.md
│   └── .gitignore
```
# 👤 User

# Register

<img width="1366" height="768" alt="Screenshot (877)" src="https://github.com/user-attachments/assets/e7f37483-d271-48aa-9883-facdef5303f5" />

# Login
<img width="1366" height="768" alt="Screenshot (878)" src="https://github.com/user-attachments/assets/1645d402-419e-421e-9aea-441b0fbb6094" />

# Creates delivery request
<img width="1366" height="768" alt="Screenshot (879)" src="https://github.com/user-attachments/assets/ca776836-b88b-44f0-94e2-b51cc56af263" />

# logout
<img width="1366" height="768" alt="Screenshot (880)" src="https://github.com/user-attachments/assets/48ab8513-c49b-49bd-863c-50b6eed75602" />

# 🛠 Admin
# login

<img width="1366" height="768" alt="Screenshot (881)" src="https://github.com/user-attachments/assets/405e4464-5031-4402-b5fa-afb8f20a3fd3" />

# Drone (Listing)

<img width="1366" height="768" alt="Screenshot (882)" src="https://github.com/user-attachments/assets/c558ff15-b8b1-4369-8370-bae5dcf9872a" />

# Available drones from listing schema

<img width="1366" height="768" alt="Screenshot (883)" src="https://github.com/user-attachments/assets/8ec22ed3-fe86-4401-a9e6-476bb9da9c5b" />

# viewing all requests from customers

<img width="1366" height="768" alt="Screenshot (884)" src="https://github.com/user-attachments/assets/836060ca-1e0e-4b4b-aa39-4b82cb6c839c" />

# Assigns a drone to a delivery(requests)
<img width="1366" height="768" alt="Screenshot (885)" src="https://github.com/user-attachments/assets/fab7dbf4-f0df-4518-b4c4-3ab0b3e0f85b" />

# You can see Delivery Updation status to delivered
<img width="1366" height="768" alt="Screenshot (886)" src="https://github.com/user-attachments/assets/d1c447b3-87ef-42ce-8795-a3979983110a" />

