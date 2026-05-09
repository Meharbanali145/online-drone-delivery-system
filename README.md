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

```
# Project Structure

```text
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
