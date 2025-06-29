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
