import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';
import FeatureSection from '../components/FeatureSection'

const CheckoutPage = () => {
    const { cartItems, getCartTotal } = useContext(CartContext);
    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        phone: '',
        email: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails({ ...billingDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order placed:', billingDetails);
        alert('Thank you for your order!');
    };

    return (
        <>
            <div className="checkout-page">
                {/* Header Section */}
                <div className="checkout-header">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLt64fXtuzoOrK200L5f07UlrXncZVkzFiAyshUAvmiN3kSlBYDbGpssV~-Fv4H-EV~ZGdfy55UZgz1IkGrBNsZxpAPlQK2GAKtsh4zoX~wwyIqiFFAU2UEDIdJ5nbZ47QaIatQj5lMt0JHBJ4EPhUjFxlrJ2-DsizyQegnnvFKZyh5grgy5FWuYMArXw7SmMKt-U~~TuuYYXaRVnjW~QT5reUwQw8KkSY2tgdhFDI~3Sj2l9GfAYc2cuVVXXvbdzDri1Ix6tLlxyNiYP0cB1GnReY0kNke6sORtaRAbI-bV6MMt9G8xmFRrP99uTfYacEVfwAG0OA0Ujeb7E~YZvQ__"
                        alt="Checkout Background"
                        className="checkout-bg-image"
                    />
                    <div className="checkout-overlay"></div>
                    <div className="checkout-title-container">
                        <h1 className="checkout-title">Checkout</h1>
                        <nav className="breadcrumb">
                            <Link to="/">Home</Link> &gt; <span>Checkout</span>
                        </nav>
                    </div>
                </div>

                {/* Checkout Form and Summary Section */}
                <div className="checkout-content">
                    <form className="billing-form" onSubmit={handleSubmit}>
                        <h3>Billing details</h3>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" value={billingDetails.firstName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={billingDetails.lastName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Company Name (Optional)</label>
                            <input type="text" name="companyName" value={billingDetails.companyName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Country / Region</label>
                            <input type="text" name="country" value={billingDetails.country} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Street Address</label>
                            <input type="text" name="address" value={billingDetails.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Town / City</label>
                            <input type="text" name="city" value={billingDetails.city} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Province</label>
                            <input type="text" name="province" value={billingDetails.province} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Postal Code</label>
                            <input type="text" name="postalCode" value={billingDetails.postalCode} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" name="phone" value={billingDetails.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={billingDetails.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Additional Information</label>
                            <textarea name="additionalInfo" value={billingDetails.additionalInfo} onChange={handleChange}></textarea>
                        </div>
                    </form>
                    <div className="order-summary">
                        <h3>Your Order</h3>
                        <div className="order-item">
                            <div>Product</div>
                            <div>Subtotal</div>
                        </div>
                        {cartItems.map((item, index) => (
                            <div className="order-item" key={index}>
                                <div>{item.name} x {item.quantity}</div>
                                <div>{item.price}.000Đ</div>
                            </div>
                        ))}
                        <div className="order-total">
                            <div>Total</div>
                            <div>{getCartTotal()}.000Đ</div>
                        </div>
                        <div className="payment-methods">
                            <h4>Payment Method</h4>
                            <div>
                                <input type="radio" name="paymentMethod" value="bank" required /> Direct Bank Transfer
                            </div>
                            <div>
                                <input type="radio" name="paymentMethod" value="cash" required /> Cash on Delivery
                            </div>
                        </div>
                        <button type="submit" className="place-order-button" onClick={handleSubmit}>Place Order</button>
                    </div>
                </div>
            </div>
            <FeatureSection></FeatureSection>
        </>
    );
};

export default CheckoutPage;
