// Commands for initializing

pnpm create vite@latest projectName

# Select: React

# Choose: JavaScript or JavaScript + SWC (SWC = Speedy Web Compiler — a fast alternative to Babel)

cd projectName

pnpm install

pnpm run dev

// OR... initialize the entire project in a single line:

pnpm create vite@latest projectName --template react && cd projectName && pnpm install && pnpm run dev


pnpm(Performant Node Package Manager)  
Reuses previously downloaded dependencies using symlinks, avoiding duplication and saving disk space.  
To install: `pnpm add <package>`  
To remove: `pnpm remove <package>`

npm (Node Package Manager)  
The default Node.js package manager used to install, manage, and share JavaScript packages.  
To install: `npm install <package>`  
To remove: `npm remove <package>`


Both 'pnpm' and 'npm' can install dependencies, but 'pnpm' is better for most modern workflows because it avoids duplication, installs faster, uses less disk space, and maintains stricter dependency isolation — making it ideal for large-scale or team-based projects.
