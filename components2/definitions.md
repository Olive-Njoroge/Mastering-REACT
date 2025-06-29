# 🔁 JavaScript `.map()` Method

The `.map()` method is used to **transform arrays**.  
It **accepts a callback function** and applies it to **each element** of the array, returning a **new array** with the results.

---

### ✅ Syntax

```js
array.map((element, index, array) => {
  // return new value
});
````

* `element` – the current value being processed
* `index` *(optional)* – the index of the current element
* `array` *(optional)* – the entire array being mapped over

Use only what you need for clarity.

---

### 📌 Example 1: Squaring Numbers

```js
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(square);

function square(element) {
  return Math.pow(element, 2);
}

console.log(squares); // [1, 4, 9, 16, 25, 36]
```

---

### 📌 Example 2: Capitalizing Names

```js
const students = ["Sandy", "Patrick", "Spongebob", "Squidward"];

const studentsUpper = students.map(uppercase);

function uppercase(element) {
  return element.toUpperCase();
}

console.log(studentsUpper);
// ["SANDY", "PATRICK", "SPONGEBOB", "SQUIDWARD"]
```

---

✅ Use `.map()` when you want to **create a new array** from an existing one by applying the same logic to every item.
