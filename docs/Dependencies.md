### 📦 Installed Dependencies

`pnpm add axios`  
Used to connect the frontend to the backend by making HTTP requests.


`pnpm add react-router-dom`  
Installs the routing library used in React apps to handle page navigation without refreshing the browser.

**Use Case:**
jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
