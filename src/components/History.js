import React from 'react';
import './History.css'; 

function History() {
  // Example array of order details
  const orders = [
    { id: 1, date: '2024-12-15', description: 'Plastic - 50 kg', totalOrders: 5 },
    { id: 2, date: '2024-12-14', description: 'Organic - 30 kg', totalOrders: 3 },
    { id: 3, date: '2024-12-13', description: 'Organic- 20 kg', totalOrders: 4 },
    // Add more orders as needed
  ];

  return (
    <div className="order-history">
      <h2>Farmer Order History</h2>
      <div className="card-container">
        {orders.map(order => (
          <div className="order-card" key={order.id}>
            <p><strong>Order Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {order.description}</p>
            <p><strong>Number of Orders:</strong> {order.totalOrders}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
