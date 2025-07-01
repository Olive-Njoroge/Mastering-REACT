# ⚛️ Mastering React

Welcome to **Mastering React** — a practical and beginner-friendly guide to help you get up to speed with React and its modern ecosystem.

---

## 📁 docs/ Folder

Inside the `docs/` folder, you’ll find guides for:

- Running and initializing a React project with **Vite**
- Setting up routing with **`react-router-dom`**
- Installing and using tools like **Axios**, **Tailwind CSS**, **shadcn/ui**, and **Clerk**

---

## 📁 components/ Folder

The `components/` folder contains examples and explanations of how to:

- **Create functional components** in React
- Use **JSX** to return UI
- Pass and consume **props**

It serves as a hands-on reference for learning how React components work together to build dynamic, reusable user interfaces.

---

## 📁 react-route/ Folder

The `react-route/` folder demonstrates how to build a **multi-page application** using `react-router-dom`. It includes:

- Page components like `Home.jsx`, `Form.jsx`, and `Coffee.jsx`
- A shared `Layout.jsx` with a navigation bar and `<Outlet />` for rendering nested routes
- Routing logic defined in `App.jsx` using `useNavigate` and nested `<Routes>`

This folder showcases how to implement dynamic navigation and layout structure in a React application.

---

## 📁 clickEvents/ Folder

The `clickEvents/` folder contains simple examples focused on handling **`onClick` events**. It demonstrates:

- How to respond to user clicks with React event handlers
- Updating UI state or triggering functions through button clicks

This is a beginner-friendly sandbox for understanding event binding and UI interactivity in React.

---

## 📁 axios/ Folder

The `axios/` folder handles **HTTP communication between the frontend and backend** using Axios. It includes:

- A reusable `api.js` file that defines the `baseURL` for your API requests (e.g. `http://localhost:5000/api/people`)
- Example components (like `PeopleForm` and `PeopleList`) that **send GET, POST, PUT, and DELETE requests**
- Demonstrations of how to manage state updates after successful API calls

This folder provides a clear and practical approach to integrating external data sources into your React app using Axios.
