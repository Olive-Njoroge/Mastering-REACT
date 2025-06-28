# ⚙️ Project Initialization & Package Managers

---

## 🚀 Commands for Initializing a React Project with Vite

```bash
pnpm create vite@latest projectName
````

* **Select**: React
* **Choose**: JavaScript or JavaScript + SWC
  *(SWC = Speedy Web Compiler — a fast alternative to Babel)*

```bash
cd projectName
pnpm install
pnpm run dev
```

---

### 💡 One-Liner Initialization

```bash
pnpm create vite@latest projectName --template react && cd projectName && pnpm install && pnpm run dev
```

---

## 📦 Package Managers

### 🔹 pnpm (Performant Node Package Manager)

* Reuses previously downloaded dependencies using **symlinks**
* Avoids duplication, saves disk space, and speeds up installs
* Better performance and stricter dependency resolution than npm

**Commands:**

```bash
pnpm add <package>       # To install
pnpm remove <package>    # To uninstall
```

---

### 🔹 npm (Node Package Manager)

* Default package manager for Node.js
* Widely used to install and manage JavaScript dependencies

**Commands:**

```bash
npm install <package>    # To install
npm remove <package>     # To uninstall
```

---

## ⚖️ Why Use `pnpm` Over `npm`?

While both `pnpm` and `npm` can install dependencies, **pnpm** is generally better for modern workflows because it:

* Avoids duplicating dependencies
* Installs faster
* Uses less disk space
* Maintains stricter dependency isolation

✅ This makes **pnpm ideal for large-scale projects or collaborative teams**.

