# 🔗 What is a Hook in React?

**Hooks** allow us to *"hook into"* React features such as **state**, **lifecycle methods**, and more from function components — without writing a class.

You must import hooks from the `react` package:

```js
import { useState, useEffect } from 'react';
```

---

## 📜 Hook Rules

React enforces **three important rules** when using Hooks:

1. ✅ **Hooks can only be called inside React function components.**  
   *Incorrect:* Calling hooks inside regular JavaScript functions won't work.

2. ✅ **Hooks can only be called at the top level of a component.**  
   *Don't* call hooks inside loops, conditions, or nested functions.

3. ❌ **Hooks cannot be conditional.**  
   Do *not* wrap hooks inside `if` statements or any conditional logic.

---

## 💡 Example

```js
function Counter() {
  const [count, setCount] = useState(0); // ✅ Hook at top level

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## 🔁 useState Hook

The **`useState` Hook** allows us to track **state** in a function component.

State generally refers to data or properties that need to be tracked in an application.

---

## ⚙️ useEffect Hook

The **`useEffect` Hook** lets you perform **side effects** in your components.

Examples of side effects include:
- Fetching data
- Directly updating the DOM
- Using timers

### 🔧 Syntax

```js
useEffect(<function>, <dependency>)
```

### 🧪 Examples

#### 1. No dependency passed

```js
useEffect(() => {
  // Runs on every render
});
```

#### 2. Empty dependency array

```js
useEffect(() => {
  // Runs only on the first render
}, []);
```

#### 3. With dependencies (props or state)

```js
useEffect(() => {
  // Runs on the first render
  // And whenever prop or state changes
}, [prop, state]);
```

---

## 🧹 Effect Cleanup

Some effects require **cleanup** to prevent memory leaks.  
This includes:
- Timeouts
- Subscriptions
- Event listeners

Cleanup is done by **returning a function** inside the `useEffect`:

### 🧭 Example: Clean up a timer

```js
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
