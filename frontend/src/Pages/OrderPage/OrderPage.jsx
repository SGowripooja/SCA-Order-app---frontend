
// import { useState } from 'react';
// import './OrderPage.css';

// const OrderPage = () => {
//     const [shopname, setShopName] = useState('');
//     const [date, setDate] = useState('');
//     const [products, setProducts] = useState([{ product: '', quantity: 1 }]);

//     const handleNameChange = (e) => {
//         setShopName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setDate(e.target.value);
//     };

//     const handleProductChange = (e, index) => {
//         const updatedProducts = [...products];
//         updatedProducts[index].product = e.target.value;
//         setProducts(updatedProducts);
//     };

//     const handleQuantityChange = (e, index) => {
//         const updatedProducts = [...products];
//         updatedProducts[index].quantity = parseInt(e.target.value);
//         setProducts(updatedProducts);
//     };

//     const handleAddProduct = () => {
//         setProducts([...products, { product: '', quantity: 1 }]);
//     };

//     const handleRemoveProduct = (index) => {
//         const updatedProducts = [...products];
//         updatedProducts.splice(index, 1);
//         setProducts(updatedProducts);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/orders/submit-order', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ shopname, date, products })
//             });
//             if (response.ok) {
//                 console.log('Order submitted successfully!');
//                 // Optionally, reset the form fields after submission
//                 setShopName('');
//                 setDate('');
//                 setProducts([{ product: '', quantity: 1 }]);
//             } else {
//                 console.error('Failed to submit order');
//             }
//         } catch (error) {
//             console.error('An error occurred:', error);
//         }
//     };

//     return (
//         <div>
//             <h2 className='title'>Place Order</h2>
//             <form onSubmit={handleSubmit} className='order-container'>
//                 <div>Staff name: Mr.Pradeep</div>
//                 <div>
//                     <label htmlFor="name">Shop-Name:</label>
//                     <input type="text" id="name" value={shopname} onChange={handleNameChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Date:</label>
//                     <input type="date" id="date" value={date} onChange={handleEmailChange} />
//                 </div>
//                 {products.map((product, index) => (
//                     <div key={index} className="product-container">
//                         <label>Select Product:</label>
//                         <select value={product.product} onChange={(e) => handleProductChange(e, index)}>
//                             <option value="">Select a product</option>
//                             <option value="GRB-50ml Pouch">GRB-50ml Pouch</option>
//                             <option value="GRB-100ml Pouch">GRB-100ml Pouch</option>
//                             <option value="GRB-100ml Jar">GRB-100ml Jar</option>
//                         </select>
//                         <label>Quantity:</label>
//                         <input type="number" value={product.quantity} onChange={(e) => handleQuantityChange(e, index)} />
//                         <div className="button-group">
//                             {index === products.length - 1 && (
//                                 <button type="button" onClick={handleAddProduct}>Add Product</button>
//                             )}
//                             {index > 0 && (
//                                 <button type="button" onClick={() => handleRemoveProduct(index)}>Remove</button>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//                 <button type="submit">Submit Order</button>
//             </form>
//         </div>
//     );
// };

// export default OrderPage;


// import  { useState } from 'react';
// import './OrderPage.css';
// import SubmittedOrders from '../../components/submittedorders/submittedorders';

// const OrderPage = () => {
//     const [shopname, setShopName] = useState('');
//     const [date, setDate] = useState('');
//     const [products, setProducts] = useState([{ product: '', quantity: 1 }]);
//     const [submitted, setSubmitted] = useState(false);
//     const [showOrders, setShowOrders] = useState(false);

//     const handleNameChange = (e) => {
//         setShopName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setDate(e.target.value);
//     };

//     const handleProductChange = (e, index) => {
//         const updatedProducts = [...products];
//         updatedProducts[index].product = e.target.value;
//         setProducts(updatedProducts);
//     };

//     const handleQuantityChange = (e, index) => {
//         const updatedProducts = [...products];
//         updatedProducts[index].quantity = parseInt(e.target.value);
//         setProducts(updatedProducts);
//     };

//     const handleAddProduct = () => {
//         setProducts([...products, { product: '', quantity: 1 }]);
//     };

//     const handleRemoveProduct = (index) => {
//         const updatedProducts = [...products];
//         updatedProducts.splice(index, 1);
//         setProducts(updatedProducts);
//     };

   

//     const toggleShowOrders = () => {
//         setShowOrders(!showOrders);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/orders/submit-order', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ shopname, date, products })
//             });
//             if (response.ok) {
//                 console.log('Order submitted successfully!');
//                 setShopName('');
//                 setDate('');
//                 setProducts([{ product: '', quantity: 1 }]);
//                 setSubmitted(true);
//             } else {
//                 console.error('Failed to submit order');
//             }
//         } catch (error) {
//             console.error('An error occurred:', error);
//         }
        
//     };

//     return (
//         <div>
           
//                 <div>
//                     <h2 className='title'>Place Order</h2>
//                     <form onSubmit={handleSubmit} className='order-container'>
//                         <div>Staff name: Mr.Pradeep</div>
//                         <div>
//                             <label htmlFor="name">Shop-Name:</label>
//                             <input type="text" id="name" value={shopname} onChange={handleNameChange} />
//                         </div>
//                         <div>
//                             <label htmlFor="email">Date:</label>
//                             <input type="date" id="date" value={date} onChange={handleEmailChange} />
//                         </div>
//                         {products.map((product, index) => (
//                             <div key={index} className="product-container">
//                                 <label>Select Product:</label>
//                                 <select value={product.product} onChange={(e) => handleProductChange(e, index)}>
//                                     <option value="">Select a product</option>
//                                     <option value="GRB-50ml Pouch">GRB-50ml Pouch</option>
//                                     <option value="GRB-100ml Pouch">GRB-100ml Pouch</option>
//                                     <option value="GRB-100ml Jar">GRB-100ml Jar</option>
//                                 </select>
//                                 <label>Quantity:</label>
//                                 <input type="number" value={product.quantity} onChange={(e) => handleQuantityChange(e, index)} />
//                                 <div className="button-group">
//                                     {index === products.length - 1 && (
//                                         <button type="button" onClick={handleAddProduct}>Add Product</button>
//                                     )}
//                                     {index > 0 && (
//                                         <button type="button" onClick={() => handleRemoveProduct(index)}>Remove</button>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                         <button type="submit">Submit Order</button>
//                     </form>
                   
//                 <div className="center">
//                     <button className="orders" onClick={toggleShowOrders}>Show Orders</button>
//                     {showOrders && <SubmittedOrders />} {/* Render SubmittedOrders if showOrders is true */}
//                 </div>
           
//                 </div>
            
//         </div>
//     );
// };

// export default OrderPage;


import { useState } from 'react';
import './OrderPage.css';
import SubmittedOrders from '../../components/submittedorders/submittedorders';

const OrderPage = () => {
    const [shopname, setShopName] = useState('');
    const [date, setDate] = useState('');
    const [products, setProducts] = useState([{ product: '', quantity: 1 }]);
    const [submitted, setSubmitted] = useState(false);
    const [showOrders, setShowOrders] = useState(false);

    const handleNameChange = (e) => {
        setShopName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setDate(e.target.value);
    };

    const handleProductChange = (e, index) => {
        const updatedProducts = [...products];
        updatedProducts[index].product = e.target.value;
        setProducts(updatedProducts);
    };

    const handleQuantityChange = (e, index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity = parseInt(e.target.value);
        setProducts(updatedProducts);
    };

    const handleAddProduct = () => {
        setProducts([...products, { product: '', quantity: 1 }]);
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    const toggleShowOrders = () => {
        setShowOrders(!showOrders);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/orders/submit-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ shopname, date, products })
            });
            if (response.ok) {
                console.log('Order submitted successfully!');
                setShopName('');
                setDate('');
                setProducts([{ product: '', quantity: 1 }]);
                setSubmitted(true);
            } else {
                console.error('Failed to submit order');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <div>
                <h2 className='title'>Place Order</h2>
                <form onSubmit={handleSubmit} className='order-container'>
                    <div>Staff name: Mr.Pradeep</div>
                    <div>
                        <label htmlFor="name">Shop-Name:</label>
                        <input type="text" id="name" value={shopname} onChange={handleNameChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Date:</label>
                        <input type="date" id="date" value={date} onChange={handleEmailChange} />
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="product-container">
                            <label>Select Product:</label>
                            <select value={product.product} onChange={(e) => handleProductChange(e, index)}>
                                <option value="">Select a product</option>
                                <option value="GRB-50ml Pouch">GRB-50ml Pouch</option>
                                <option value="GRB-100ml Pouch">GRB-100ml Pouch</option>
                                <option value="GRB-100ml Jar">GRB-100ml Jar</option>
                            </select>
                            <label>Quantity:</label>
                            <input type="number" value={product.quantity} onChange={(e) => handleQuantityChange(e, index)} />
                            <div className="button-group">
                                {index === products.length - 1 && (
                                    <button type="button" onClick={handleAddProduct}>Add Product</button>
                                )}
                                {index > 0 && (
                                    <button type="button" onClick={() => handleRemoveProduct(index)}>Remove</button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button type="submit">Submit Order</button>
                </form>
                <div className="center">
                    <button className="orders" onClick={toggleShowOrders}>Show Orders</button>
                    {showOrders && <SubmittedOrders />} {/* Render SubmittedOrders if showOrders is true */}
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
