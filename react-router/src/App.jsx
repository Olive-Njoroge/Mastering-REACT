import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Form from './pages/Form';
import Coffee from './pages/coffee';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="coffee" element={<Coffee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}