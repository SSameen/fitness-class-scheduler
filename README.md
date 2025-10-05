#Fitness Class Scheduler

A full-featured **React + Vite** project to perform **CRUD operations** (Create, Read, Update, Delete) using a **local JSON Server**.  
Built to understand key React concepts like `useState`, `useEffect`, `Axios`, `async–await`, and **Promises** for data handling.  
Styled beautifully using **Bootstrap** and enhanced with **Dark/Light Mode** toggle.


##Project Overview

The **Fitness Class Scheduler** app helps manage fitness class schedules efficiently — allowing users to:

- View all available fitness classes (with trainer, time, and details)
- Add new classes using a form
- Edit/update existing classes
- Delete classes easily
- View enrolled clients and their respective classes
- Switch between light and dark themes


## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Bootstrap 5
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Backend (Mock API):** JSON Server
- **Deployment (Optional):** Vercel / Netlify


## 📁 Folder Structure
fitness-scheduler/
│
├── public/
│ └── index.html
│
├── src/
│ ├── api/
│ │ └── classApi.js
│ ├── assets/
│ │ └── logo.png
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── Home.jsx
│ │ ├── AddClass.jsx
│ │ ├── UpdateClass.jsx
│ │ └── Clients.jsx
│ ├── context/
│ │ └── ThemeContext.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── db.json
├── package.json
└── README.md


## ⚙️ Installation & Setup
git clone https://github.com/yourusername/fitness-scheduler.git
cd fitness-scheduler

### 1️⃣ Clone the repositorynstall dependencies
npm install

3️⃣ Run the JSON Server (Mock API)
npx json-server --watch db.json --port 5000


➡️ The mock API will run at:
http://localhost:5000

4️⃣ Start the frontend (React app)
npm run dev


➡️ The app will run at:
http://localhost:5173

🔗 API Structure
Entities:

1. CLASS
-------------
- ClassID (PK)
- ClassName
- TrainerName
- Time
- Description (optional)

2. CLIENT
-------------
- ClientID (PK)
- ClientName
- EnrolledClassID (FK -> CLASS.ClassID)

Relationships:
----------------
- A CLIENT is enrolled in one CLASS (Many-to-One)
- A CLASS can have many CLIENTS enrolled (One-to-Many)


### Usage
###  Manage Classes

View all available classes

Add a new class

Edit or delete existing classes

###  Manage Clients

View all clients

Add a new client

Assign clients to a class

Edit or remove clients

### Theme Context

You can toggle between light and dark mode using the ThemeContext located in:

src/context/ThemeContext.jsx

### Adding Logo in Navbar

In Navbar.jsx, replace the title with your logo:

Make sure your logo is stored in:
src/assets/logo.png

### Author

Sameen Saiyed (Sam / Samee)
Certified Personal Trainer (GGFI) & Fitness Coach
Owner — ATHLEVERSE Studio

### License

This project is open-source under the MIT License.

### Show Your Support

If you found this project useful, please consider giving it a star on GitHub!


