# 📦 React Components — Definitions

Components are **independent** and **reusable** bits of code in React.  
They serve the same purpose as JavaScript functions but are used to build UI pieces and **return JSX** (HTML-like syntax).

---

## 🧩 What is a Component?

A component is a building block of a React application.  
It allows you to split the UI into reusable, isolated pieces that manage their own structure, styling, and behavior.

There are **two main types** of components:

---

### 1. **Functional Components**

- Written as **JavaScript functions**
- Use **React Hooks** for state and side effects
- Preferred way of writing components in modern React

```jsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
````

You can also write them as arrow functions:

```jsx
const Welcome = () => <h1>Hello, world!</h1>;
```

---

### 2. **Class Components** (older syntax)

* Based on JavaScript classes
* Use `this.state` and `this.setState()` for state
* Rarely used in new projects

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
```

---

Note: In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. 

## 🧠 JSX (JavaScript XML)

Components return **JSX**, which looks like HTML but runs inside JavaScript.
JSX allows you to describe the UI in a readable, declarative way.

---

## 🔁 Props (Short for "Properties")

Props are inputs to components.
They are passed as attributes and allow components to be **dynamic and reusable**.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Usage:

```jsx
<Welcome name="Olive" />
```

---

## 💡 Why Use Components?

* Reusability → Write once, use many times
* Isolation → Each component handles its own logic and UI
* Readability → Break down large UIs into small understandable parts
* Maintainability → Easier to manage and debug

---

✅ React encourages **component-based architecture**, which scales well for large applications.

```

---

