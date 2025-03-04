# MERN Stack Airbnb Clone

## 🚀 Overview
This is a **MERN Stack** Airbnb Clone that allows users to **sign up, log in, and book places**. The project includes authentication, listing management, and a fully responsive UI.

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token), bcrypt
- **Database:** MongoDB with Mongoose ORM
- **Hosting:** Vercel (Frontend) & Render/Heroku (Backend)

## 📌 Features
✅ **User Authentication** (Signup, Login, Logout)  
✅ **JWT Token-Based Authentication**  
✅ **Create, Read, Update, Delete (CRUD) Listings**  
✅ **Image Upload Support**  
✅ **Responsive UI using Tailwind CSS**  
✅ **Secure Routes with JWT Middleware**  
✅ **Filter & Search Listings**  
✅ **User Dashboard**  

## 🖥️ Installation & Setup

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/your-username/mern-airbnb-clone.git
cd mern-airbnb-clone
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```

#### Create a `.env` file in the backend directory:
```
PORT=3500
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:
```sh
npm run dev
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```

The app should now be running at `http://localhost:5173/` (or your Vite default port).

## 🏗️ API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | User Signup |
| POST | `/api/auth/login` | User Login |
| GET | `/api/places` | Get All Listings |
| POST | `/api/places` | Create New Listing |
| PUT | `/api/places/:id` | Update Listing |
| DELETE | `/api/places/:id` | Delete Listing |

## 📸 Screenshots
_Include screenshots of your project to showcase UI/UX_

## 🚀 Deployment
1. **Frontend:** Deploy on Vercel
2. **Backend:** Deploy on Render/Heroku
3. **MongoDB:** Use MongoDB Atlas

## 🤝 Contributing
Contributions are welcome! Fork this repo and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

## 💡 Contact
For any issues or inquiries, reach out via GitHub Issues.

---
### 🌟 Don't forget to star the repo if you found it useful! ⭐

