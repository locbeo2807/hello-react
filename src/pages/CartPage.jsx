import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartPage.css';
import FeatureSection from '../components/FeatureSection'; 

const CartPage = () => {
    const { cartItems, getCartTotal, removeFromCart, updateCartQuantity } = useContext(CartContext);
    const navigate = useNavigate(); 

    const handleCheckout = () => {
        navigate('/checkout'); 
    };

    return (
        <>
            <div className="cart-page">
                {/* Header Section */}
                <div className="cart-header">
                    <img
                        src="https://www.furniro.shop/_next/image?url=%2Fsmall-hero-teaser.png&w=1920&q=75"
                        alt="Cart Background"
                        className="cart-bg-image"
                    />
                    <div className="cart-overlay"></div>
                    <div className="cart-title-container">
                        <h1 className="cart-title">Cart</h1>
                        <nav className="breadcrumb">
                            <Link to="/">Home</Link> &gt; <span>Cart</span>
                        </nav>
                    </div>
                </div>

                {/* Cart Content */}
                <div className="cart-content">
                    <div className="cart-items">
                        <div className="cart-header-row">
                            <div>Product</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Subtotal</div>
                        </div>
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div className="cart-item-row" key={index}>
                                    <div className="cart-item-info">
                                        <img src={item.preview_image} alt={item.name} />
                                        <span>{item.name}</span>
                                    </div>
                                    <div>{item.price}.000Đ</div>
                                    <div>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div>{item.price * item.quantity}.000Đ</div>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>

                    <div className="cart-summary">
                        <h2>Cart Totals</h2>
                        <div className="cart-summary-item">
                            <span>Subtotal</span>
                            <span>{getCartTotal()}.000Đ</span>
                        </div>
                        <div className="cart-summary-item total">
                            <span>Total</span>
                            <span>{getCartTotal()}.000Đ</span>
                        </div>
                        <button className="checkout-button" onClick={handleCheckout}>Check Out</button>
                    </div>
                </div>

            </div>
            <FeatureSection />
        </>
    );
};

export default CartPage;
