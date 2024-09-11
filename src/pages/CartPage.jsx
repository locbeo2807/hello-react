import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartPage.css';
import FeatureSection from '../components/FeatureSection'; // Import FeatureSection

const CartPage = () => {
    const { cartItems, getCartTotal, removeFromCart, updateCartQuantity } = useContext(CartContext);
    const navigate = useNavigate(); // Use navigate hook

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };

    return (
        <>
            <div className="cart-page">
                {/* Header Section */}
                <div className="cart-header">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLt64fXtuzoOrK200L5f07UlrXncZVkzFiAyshUAvmiN3kSlBYDbGpssV~-Fv4H-EV~ZGdfy55UZgz1IkGrBNsZxpAPlQK2GAKtsh4zoX~wwyIqiFFAU2UEDIdJ5nbZ47QaIatQj5lMt0JHBJ4EPhUjFxlrJ2-DsizyQegnnvFKZyh5grgy5FWuYMArXw7SmMKt-U~~TuuYYXaRVnjW~QT5reUwQw8KkSY2tgdhFDI~3Sj2l9GfAYc2cuVVXXvbdzDri1Ix6tLlxyNiYP0cB1GnReY0kNke6sORtaRAbI-bV6MMt9G8xmFRrP99uTfYacEVfwAG0OA0Ujeb7E~YZvQ__"
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

                {/* Feature Section Above Footer */}
            </div>
            <FeatureSection />
        </>
    );
};

export default CartPage;
