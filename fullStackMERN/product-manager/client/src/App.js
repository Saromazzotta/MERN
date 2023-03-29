import { Routes, Route } from 'react-router';
import './App.css';
import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProductForm />} path="/api/products/create" />
      </Routes>
    </div>
  );
}

export default App;
