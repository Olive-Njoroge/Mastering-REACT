## 🎨 Tailwind CSS Installation (v4.1)

**Tailwind Documentation:**  
[https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)


### Installing Tailwind v4.1

#### Step 1: Install Tailwind and the Vite plugin

```bash

pnpm add tailwindcss @tailwindcss/vite

or 

# Flagging '-D' means you want it to go to dev dependencies
pnpm add -D tailwindcss @tailwindcss/vite





#### Step 2:

In vite.config.ts (check docs for correct placement):

import tailwindcss from '@tailwindcss/vite'

export default {

  plugins: [tailwindcss()]

}


#### Step 3:

In index.css, erase everything and add:

@import "tailwindcss";