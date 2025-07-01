# 🔗 Connecting Frontend to Backend with Axios

**Axios** is a promise-based HTTP client used to send and receive data between your **frontend** and **backend**.  
It works in both the browser and Node.js.

---

## 📦 Installation

```bash
npm install axios
# or
pnpm add axios
````

---

## ✅ Why Use Axios?

* Easy to use with `async/await` or `.then()`
* Automatically transforms JSON data
* Handles errors and timeouts gracefully
* Can be used to make GET, POST, PUT, DELETE requests

---

## 🌐 Axios in a React Frontend

### 🔹 Example: Fetching Data from Backend (GET)

```jsx
import axios from "axios";
import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

### 🔹 Example: Sending Data to Backend (POST)

```jsx
import axios from "axios";
import { useState } from "react";

function RegisterUser() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/register", { name })
      .then((res) => console.log("User registered", res.data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Register</button>
    </form>
  );
}
```

---

## 📁 How It Works with Backend (Express Example)

Your backend (e.g. Node.js + Express) should have matching routes like:

```js
// Express.js backend
app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Olive" }, { id: 2, name: "Njoroge" }]);
});

app.post("/api/register", (req, res) => {
  const { name } = req.body;
  // save user logic here
  res.status(201).json({ message: "User registered", name });
});
```

---

## 🚦 Note

* Ensure both frontend and backend are **running**.
* Use **CORS** middleware on your backend if your frontend runs on a different port:

```js
// Backend
import cors from "cors";
app.use(cors());
```

---

## ✅ Summary

* **Axios** makes it simple to connect React to an API or backend server.
* Use `axios.get()` to fetch data.
* Use `axios.post()` to send data.
* Always handle **errors** with `.catch()` or `try/catch`.

> Axios helps React "talk" to your server to read/write data — just like a phone call between frontend and backend.
