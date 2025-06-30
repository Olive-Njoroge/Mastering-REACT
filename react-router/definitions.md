# 🚦 React Router Setup & Example

## 📦 Installation Command

To install React Router in a React project:

```bash
pnpm add react-router-dom
````

---

## 📌 What is React Router?

**React Router** is a routing library for React applications that enables **client-side navigation** — allowing users to move between different views in a single-page app **without reloading the browser**.

---

## 🧪 Example: Multi-Page Routing Setup

```jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📖 Example Breakdown

* The app is wrapped in `<BrowserRouter>` to enable routing.
* `<Routes>` defines all the route paths in the app.
* `<Route>` can be **nested**. The first route renders `Layout` as a wrapper.
* Nested routes like `/blogs` and `/contact` are **relative** to the parent (`/`).
* `<Route index>` makes `Home` the **default** child route for `/`.
* `<Route path="*">` is a **catch-all** route for undefined paths — great for 404 pages.

---

## 📁 `Layout.js` File

The layout route is a **shared wrapper component**.
It includes **navigation** and renders the current page using `<Outlet>`.

```jsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
```

---

## 🔗 Notes

* Use `<Link>` instead of `<a href="">` to avoid page reloads.
* `<Outlet />` is a placeholder that renders the **matched child route** inside the layout.
