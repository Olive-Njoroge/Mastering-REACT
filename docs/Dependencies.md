### 📦 Installed Dependencies

---

#### `pnpm add axios`  
Used to connect the frontend to the backend by making HTTP requests (e.g., GET, POST, PUT, DELETE).

---

#### `pnpm add react-router-dom`  
Installs the routing library used in React apps to handle page navigation **without refreshing the browser**.

---

### 🔹 Basic Usage Example

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
````

---

#### `pnpm add @heroicons/react`

Installs a set of beautiful, open-source icons commonly used in React components for UI elements (like buttons, modals, etc.).

---

```

