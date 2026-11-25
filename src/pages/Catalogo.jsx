import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Catalogo() {
  const { produtos, addCarrinho } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Catalogo</h2>
      <div className="row">
        {produtos.map(p => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.nome}</h5>
                <p className="card-text mt-auto">R$ {p.preco.toFixed(2)}</p>
                <button className="btn btn-primary w-100" onClick={() => addCarrinho(p)}>
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
