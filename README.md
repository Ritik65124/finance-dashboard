# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built to track and analyze financial activities. This project demonstrates frontend development skills including UI design, state management, and data visualization.

---

## 🚀 Live Demo

👉[ritik65124s-projects/finance-dashboard](https://finance-dashboard-xi-swart.vercel.app/)

## 📂 GitHub Repository

👉 https://github.com/Ritik65124/finance-dashboard

---

## 🧠 Features

### 📊 Dashboard Overview

* Total Balance, Income, and Expense summary cards
* Line chart for balance trend
* Pie chart for income vs expenses

### 📋 Transactions Section

* View transactions (Date, Amount, Category, Type)
* Search by category
* Filter by Income/Expense
* Responsive table with empty state

### 🔐 Role-Based UI

* Viewer → Can only view data
* Admin → Can add transactions
* Role switch using dropdown

### ➕ Add Transaction

* Modal form to add new transactions
* Real-time UI update
* Data stored in localStorage

### 📈 Insights

* Highest spending category
* Basic financial observations

---

## ⚙️ Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts
* Zustand (State Management)

---

## 🧩 State Management

Zustand is used to manage:

* Transactions data
* User role (Admin/Viewer)
* Persistent storage using localStorage

---

## 📱 Responsive Design

* Mobile-friendly layout
* Cards stack on small screens
* Table supports horizontal scroll
* Modal adapts to screen size

---

## 💾 Data Persistence

* Transactions are saved in localStorage
* Data remains after page refresh

---

## 🛠️ Setup Instructions

```bash
npm install
npm run dev
```

---

## 🧪 Assumptions

* Static/mock data is used
* No backend integration required
* Role-based access is simulated on frontend

---

## ✨ Optional Enhancements (Future Scope)

* Dark mode
* Edit/Delete transactions
* Advanced analytics
* API integration

---

## 📌 Conclusion

This project focuses on building a clean, intuitive, and functional finance dashboard while demonstrating frontend best practices and user experience design.

---
