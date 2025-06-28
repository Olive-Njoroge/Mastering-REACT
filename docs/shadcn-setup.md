# 🧱 Setting Up shadcn/ui with Vite

**Shadcn** is a component library built on top of Tailwind CSS that provides accessible, beautiful, and customizable UI components for modern React applications.

> **Note:** Tailwind CSS must be configured properly **before** setting up shadcn/ui.

This guide walks you through integrating [shadcn/ui](https://ui.shadcn.com) with a React project using **Vite**.

---

## ✅ Step-by-Step Installation

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


This allows you to use absolute imports like @/components/Button.


Step 2: Update vite.config.js    (Please check the documentation)

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




Step 3: Initialize shadcn/ui 

pnpm dlx shadcn@latest init



Step 4: Add Components 

Visit the shadcn/ui Components page, choose the components you need, and follow the installation instructions.

e.g adding a button component:

pnpm dlx shadcn@latest add button
