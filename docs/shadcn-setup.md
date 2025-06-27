# 🧱 Setting Up shadcn/ui with Vite

This guide walks you through integrating [shadcn/ui](https://ui.shadcn.com) with a React project using **Vite**.


## ✅ Step-by-Step Installation

### Step 1: Set up `jsconfig.json`

At the root of your project, create a file named `jsconfig.json` with the following content:

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

This allows you to use absolute imports like @/components/Button.


Step 2: Update vite.config.js

import path from "path"␣␣
import tailwindcss from "@tailwindcss/vite"␣␣
import react from "@vitejs/plugin-react"␣␣
import { defineConfig } from "vite"␣␣␣␣

// https://vite.dev/config/␣␣
export default defineConfig({␣␣
  plugins: [react(), tailwindcss()],␣␣
  resolve: {␣␣
    alias: {␣␣
      "@": path.resolve(__dirname, "./src"),␣␣
    },␣␣
  },␣␣
})␣␣



Step 3: Initialize shadcn/ui␣␣
pnpm dlx shadcn@latest init



Step 4: Add Components␣␣
Visit the shadcn/ui Components page, choose the components you need, and follow the installation instructions.␣␣
e.g adding a button component:␣␣
pnpm dlx shadcn@latest add button
