# 🧱 Setting Up shadcn/ui with Vite

**Shadcn** is a component library built on top of Tailwind CSS that provides accessible, beautiful, and customizable UI components for modern React applications.

> **Note:** Tailwind CSS must be configured properly **before** setting up shadcn/ui.

This guide walks you through integrating [shadcn/ui](https://ui.shadcn.com) with a React project using **Vite**.

---

## ✅ Step-by-Step Installation

---

### 🔹 Step 1: Set up `jsconfig.json`

At the root of your project, create a file named `jsconfig.json` and add:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
````

This allows you to use absolute imports like `@/components/Button`.

---

### 🔹 Step 2: Update `vite.config.js`

> 📌 Please check the official documentation for the latest configuration options.

```js
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

---

### 🔹 Step 3: Initialize shadcn/ui

Run the initialization command:

```bash
pnpm dlx shadcn@latest init
```

You’ll be asked to select options like your base color and component setup.

---

### 🔹 Step 4: Add Components

Visit the [shadcn/ui Components](https://ui.shadcn.com/docs/components) page, choose the components you need, and follow the instructions to install them.

Example: To add a Button component:

```bash
pnpm dlx shadcn@latest add button
```


