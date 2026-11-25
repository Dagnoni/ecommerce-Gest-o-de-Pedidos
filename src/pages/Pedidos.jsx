import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Pedidos() {
  const { pedidos } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pedidos</h2>

      {pedidos.length === 0 ? (
        <div className="alert alert-info">Nenhum pedido realizado</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Pedido</th>
                <th>Cliente</th>
                <th>Data</th>
                <th>Itens</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.cliente}</td>
                  <td>{p.data}</td>
                  <td>{p.itens}</td>
                  <td>R$ {p.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
