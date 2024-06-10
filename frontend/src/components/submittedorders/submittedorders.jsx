
import  { useState, useEffect } from 'react';
import './submittedorders.css';

const SubmittedOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/orders/submitted-orders');
            if (response.ok) {
                const data = await response.json();
                setOrders(data.orders);
            } else {
                console.error('Failed to fetch orders');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const deleteOrder = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove the order from the local state
                setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
            } else {
                console.error('Failed to delete order');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }; 

    return (
        <div className="orders-container">
            {orders.map((order, index) => (
                <div key={index} className="order-card">
                    <h3>Order {index + 1}</h3>
                    <p><strong>Shop Name:</strong> {order.shopname}</p>
                    <p><strong>Date:</strong> {order.date}</p>
                    <p><strong>Products:</strong></p>
                    <ul>
                        {order.products.map((product, idx) => (
                            <li key={idx}>
                                Product: {product.product}, Quantity: {product.quantity}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => deleteOrder(order._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default SubmittedOrders;

