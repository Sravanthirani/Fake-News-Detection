# 📰 Fake News Detection App

## 📌 Project Overview
This project is a *full-stack web application* that detects whether news articles are real or fake based on data from the *Google Fact Check API*. The system consists of a *React.js frontend* and a *Node.js backend* that processes news articles and integrates with external fact-checking APIs.

## 🔧 Features
- 📰 Detects whether a news article is real or fake.
- 🔍 Uses the *Google Fact Check API* for verification of news.
- 🌍 Full-stack application with *React.js frontend* and *Node.js backend*.
- 🔒 Secure API Key management with .env file
- 💻 User-friendly interface with live updates of fact-checked news.

## 🛠 Technologies Used
### Frontend
- *React.js*
- *CSS (App.css)*

### Backend
- *Node.js*
- **Google Fact Check API**

## 📂 Project Structure
```
Your-Repository-Name/
│-- README.md
│-- FrontEnd/
│   ├── frontend/  # Contains all frontend-related files
│   │   ├── App.js   # Main React component
│   │   ├── App.css  # Stylesheet
│-- BackEnd/
│   ├── server.js      # Backend logic handling news verification
│   ├── .env            # Stores environment variables (API keys)
│   ├── .env.example    # Template for the .env file
```

## 🔹 How to Run
### **Method 1: Run Frontend and Backend Separately**
1. **Download the repository** as a ZIP file from GitHub and extract it.
2. **Setup and run the backend:**
```sh
cd BackEnd
npm install
node server.js  # Starts the backend server
```
3. **Setup and run the frontend:**
Open a new terminal window and navigate to the `FrontEnd/frontend` folder:
```sh
cd FrontEnd/frontend
npm install
npm start  # Starts the frontend React app
```
4. **Access the application**
- The backend should be running at: `http://localhost:5000`
- The frontend should be running at: `http://localhost:3000`.

---

### **Method 2: Run Both with a Single Command**
1. **Download the repository** as a ZIP file from GitHub and extract it.
2. **Setup dependencies in the root directory:**
```sh
npm install concurrently
```
3. **Setup backend and frontend:**
```sh
cd BackEnd
npm install
```
```sh
cd FrontEnd/frontend
npm install
```
4. **Run both frontend and backend together:**
Navigate to the root directory and run:
```sh
npm start
```
5. **Access the application**
- The backend should be running at: `http://localhost:5000`
- The frontend should be running at: `http://localhost:3000`

## 👨‍💻 Contribution
If you'd like to contribute:
1. *Fork* the repository.
2. Create a new *branch* (feature-branch).
3. Make changes and *commit* them.
4. Open a *Pull Request*.

## 📝 License
This project is open-source under the *MIT License*.

---
🔗 *Maintainer:* [Anupoju Sravanthi Rani](https://github.com/Sravanthirani)
📩 *Linkdin:* [LinkedIn Profile](https://www.linkedin.com/in/sravanthiranianupoju/)
