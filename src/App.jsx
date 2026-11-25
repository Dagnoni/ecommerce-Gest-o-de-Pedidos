import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Catalogo from './pages/Catalogo';
import Carrinho from './pages/Carrinho';
import Pedidos from './pages/Pedidos';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/pedidos" element={<Pedidos />} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  );
}
