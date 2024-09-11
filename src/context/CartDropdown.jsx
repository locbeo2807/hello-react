import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartDropdown.css'; // Import the CSS file

const CartDropdown = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    // Calculate total price
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-dropdown">
            <h3>Shopping Cart</h3>
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.preview_image} alt={item.name} />
                            <div className="item-details">
                                <span className="name">{item.name}</span>
                                <span className="quantity">{item.quantity} x {item.price}.000Đ</span>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>×</button>
                        </div>
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <div className="cart-total">
                <span>Subtotal</span>
                <span className="amount">{totalAmount}.000Đ</span>
            </div>
            <div className="cart-dropdown-footer">
                <Link to="/cart" className="btn">Cart</Link>
                <Link to="/checkout" className="btn">Checkout</Link>
                <Link to="/compare" className="btn">Comparison</Link>
            </div>
        </div>
    );
};

export default CartDropdown;
