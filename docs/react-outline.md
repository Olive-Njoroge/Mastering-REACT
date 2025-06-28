# ⚛️ React & Ecosystem Overview

---

## 📌 What is React?

**React** is a free, open-source JavaScript library used for building fast and interactive user interfaces — especially single-page applications (SPAs).

It allows developers to build UIs using **components**, which are reusable, isolated pieces of code that describe part of the UI.

---

## ⚡ What is Vite?

**Vite** is a fast and modern frontend build tool that helps you start and develop web projects quickly.

It’s often used with frameworks like **React**, **Vue**, or **Svelte**, and is known for its **blazing-fast dev server** and **instant hot module replacement (HMR)**.

---

## 🚀 How to Initialize React

- Use Vite to scaffold a React project:
  
  ```bash
  pnpm create vite@latest project-name --template react
  cd project-name
  pnpm install
  pnpm run dev
````

---

## 🧠 JSX

* JSX stands for **JavaScript XML**.
* It allows you to write HTML-like syntax directly inside JavaScript.
* React components return JSX to describe UI structure.

---

## 🧩 Functional Components

* Functions that return JSX.
* Preferred way of writing components in modern React.

Example:

```jsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
```

---

## 📦 Props

* Short for “properties”.
* Used to pass data from one component to another (parent to child).

---

## 🔁 State & Common Hooks

* `useState()` – manages local state in a functional component.
* `useEffect()` – handles side effects (e.g., API calls).
* `useContext()` – shares state across components without prop drilling.
* `useRef()` – accesses and stores mutable values (e.g., DOM elements or timers).

---

## 🧭 Routing (React Router DOM)

* **React Router DOM setup**
* Defining **Routes** and using **Links**
* Navigating programmatically with `useNavigate`
* Reading URL parameters with `useParams`

---

## 📝 Forms & Events

* **Controlled vs Uncontrolled Inputs**
* Input handling using `onChange`
* Form submission using `onSubmit`

---

## 🌐 Axios

* Axios is a promise-based HTTP client used to make requests to a backend (GET, POST, etc.).

---

## 🎨 Tailwind CSS

* Utility-first CSS framework for rapidly building custom designs.
* Easily integrates with Vite and shadcn/ui.

---

## 🧱 shadcn/ui

* A collection of accessible and customizable components built with Tailwind CSS and Radix UI.

---

## 🔐 Clerk.com

* Authentication as a service for React apps.
* Provides sign-up, login, user management, and session handling with minimal config.

---

```

