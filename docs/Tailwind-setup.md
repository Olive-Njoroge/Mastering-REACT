## 🎨 Tailwind CSS Installation (v4.1)

**Official Documentation:**  
[https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

---

### ✅ Installing Tailwind v4.1

---

#### 🔹 Step 1: Install Tailwind and the Vite plugin

```bash
pnpm add tailwindcss @tailwindcss/vite
````

or, if you want to add it as a **dev dependency**:

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

---

#### 🔹 Step 2: Update `vite.config.ts`

> 📌 Check the official Tailwind docs to ensure correct placement in your config.

```ts
import tailwindcss from "@tailwindcss/vite"

export default {
  plugins: [tailwindcss()]
}
```

---

#### 🔹 Step 3: Update `index.css`

Erase everything in `index.css` and replace it with:

```css
@import "tailwindcss";
```

---



