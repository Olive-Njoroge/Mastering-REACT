# 🖱️ React Click Events

A **click event** is triggered when a user interacts with an element by clicking it.  
You can respond to this interaction by passing a **callback function** to the event handler such as `onClick`.

---

## ✅ Event Parameter

Event handlers receive an **event object** as a parameter, typically written as `e`.  
This object contains details about the event that occurred, such as:

- The element that was clicked (`e.target`)
- The mouse position
- Methods to prevent default behavior (`e.preventDefault()`)

You can use `e` to:

- Change styles dynamically
- Access or modify content (`e.target.innerText`, `e.target.style`, etc.)

---

## ✨ Common Event Handlers in React

### 🔹 `onClick`
Fires when an element is clicked.

```jsx
<button onClick={(e) => alert("Clicked!")}>Click Me</button>
````

### 🔹 `onDoubleClick`

Fires when an element is double-clicked.

```jsx
<div onDoubleClick={(e) => console.log("Double-clicked!")}>
  Double Click Here
</div>
```

---

✅ You can pass named functions or inline arrow functions as handlers:

```jsx
function handleClick(e) {
  console.log("Button clicked", e);
}

<button onClick={handleClick}>Click</button>
```

> React normalizes events to work consistently across all browsers.

onChange() - 
Sure! Here's the filled-in `.md` version with `onChange()` added:

````md
# 🖱️ React Click & Change Events

React provides several event handlers to interact with user input.  
Two of the most common are `onClick` and `onChange`.

---

## ✅ Event Parameter

Event handlers receive an **event object** as a parameter, typically written as `e`.  
This object contains details about the event that occurred, such as:

- The element that triggered the event (`e.target`)
- The current value (`e.target.value`)
- Methods to prevent default behavior (`e.preventDefault()`)

---

## ✨ Common Event Handlers in React

### 🔹 `onClick`
Fires when an element is clicked.

```jsx
<button onClick={(e) => alert("Clicked!")}>Click Me</button>
````

### 🔹 `onDoubleClick`

Fires when an element is double-clicked.

```jsx
<div onDoubleClick={(e) => console.log("Double-clicked!")}>
  Double Click Here
</div>
```

### 🔹 `onChange`

Fires when the value of an input changes — useful for form handling.

```jsx
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Your name is: {name}</p>
    </div>
  );
}
```

> Use `onChange` for inputs, selects, textareas, and other form elements to keep React state in sync with the user's input.

---

✅ You can pass named functions or inline arrow functions as handlers:

```jsx
<input onChange={(e) => console.log("Changed:", e.target.value)} />
```

> React normalizes events to behave consistently across all browsers, wrapping them in a SyntheticEvent.
