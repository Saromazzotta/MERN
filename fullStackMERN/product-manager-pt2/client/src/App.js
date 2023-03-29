import { Routes, Route } from 'react-router';
import './App.css';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProductForm />} path="/api/products" />
        <Route element={<AllProducts />} path="/api/products" />
        <Route element={<OneProduct />} path="/api/products/:id" />
      </Routes>
    </div>
  );
}

export default App;
