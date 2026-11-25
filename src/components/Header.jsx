import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Header() {
  const { carrinho } = useContext(CartContext);

  return (
    <header className="bg-dark text-white py-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h1 className="h4 mb-0">E-commerce</h1>
          <nav className="d-flex gap-2 gap-md-3 flex-wrap mt-2 mt-md-0">
            <Link to="/" className="text-white text-decoration-none">Catalogo</Link>
            <Link to="/carrinho" className="text-white text-decoration-none">Carrinho ({carrinho.length})</Link>
            <Link to="/pedidos" className="text-white text-decoration-none">Pedidos</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
