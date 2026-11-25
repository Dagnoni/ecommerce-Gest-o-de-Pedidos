import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Carrinho() {
  const { carrinho, removeCarrinho, finalizarPedido } = useContext(CartContext);
  const [cliente, setCliente] = useState('');
  const navigate = useNavigate();

  const total = carrinho.reduce((s, i) => s + i.preco, 0);

  const handleFinalizar = () => {
    if (!cliente.trim()) {
      alert('Digite seu nome');
      return;
    }
    finalizarPedido(cliente);
    navigate('/pedidos');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrinho</h2>

      {carrinho.length === 0 ? (
        <div className="alert alert-info">Carrinho vazio</div>
      ) : (
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="table-responsive">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Produto</th>
                    <th>Preco</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carrinho.map(i => (
                    <tr key={i.id}>
                      <td>{i.nome}</td>
                      <td>R$ {i.preco.toFixed(2)}</td>
                      <td><button className="btn btn-sm btn-danger" onClick={() => removeCarrinho(i.id)}>Remover</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-4">
              <p className="h5">Total: R$ {total.toFixed(2)}</p>
              <label htmlFor="cliente" className="form-label">Nome do cliente</label>
              <input id="cliente" type="text" className="form-control mb-3" value={cliente} onChange={(e) => setCliente(e.target.value)} />
              <button className="btn btn-success w-100" onClick={handleFinalizar}>Finalizar Compra</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
