import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';
import FeatureSection from '../components/FeatureSection';

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
        additionalInfo: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails({ ...billingDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const data = {
            name: `${billingDetails.firstName} ${billingDetails.lastName}`,
            phone: billingDetails.phone,
            address: billingDetails.address,
            gender: 'male', 
            note: billingDetails.additionalInfo,
            product_ids: cartItems.map(item => item.id),
        };
    
        try {
            const response = await fetch('https://learning.sonthanh.net.vn/api/orders/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.log('Error Response:', errorData);
                throw new Error(`Order failed: ${response.statusText}`);
            }
    
            const result = await response.json();
            console.log('Order Success:', result);
            alert('Thank you for your order!');
    
            window.location.reload();
        } catch (error) {
            console.error('Order Error:', error);
            alert('There was an issue with your order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    


    return (
        <>
            <div className="checkout-page">
                <div className="checkout-header">
                    <img
                        src="https://www.furniro.shop/_next/image?url=%2Fsmall-hero-teaser.png&w=1920&q=75"
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

                <div className="checkout-content">
                    <form className="billing-form" onSubmit={handleSubmit}>
                        <h3>Billing Details</h3>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={billingDetails.firstName}
                                onChange={handleChange}
                                required
                                pattern="[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưạ-ỹ\s]+"
                                title="Please enter a valid first name."
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={billingDetails.lastName}
                                onChange={handleChange}
                                required
                                pattern="[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưạ-ỹ\s]+"
                                title="Please enter a valid last name."
                            />
                        </div>
                        <div className="form-group">
                            <label>Company Name (Optional)</label>
                            <input
                                type="text"
                                name="companyName"
                                value={billingDetails.companyName}
                                onChange={handleChange}
                                pattern="[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưạ-ỹ\s0-9]+"
                                title="Company name can include letters, numbers, and spaces."
                            />
                        </div>
                        <div className="form-group">
                            <label>Country / Region</label>
                            <input
                                type="text"
                                name="country"
                                value={billingDetails.country}
                                onChange={handleChange}
                                required
                                pattern="[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưạ-ỹ\s]+"
                                title="Please enter a valid country name."
                            />
                        </div>
                        <div className="form-group">
                            <label>Street Address</label>
                            <input
                                type="text"
                                name="address"
                                value={billingDetails.address}
                                onChange={handleChange}
                                required
                                pattern=".{5,100}"
                                title="Please enter a valid address (5-100 characters)."
                            />
                        </div>
                        <div className="form-group">
                            <label>Town / City</label>
                            <input
                                type="text"
                                name="city"
                                value={billingDetails.city}
                                onChange={handleChange}
                                required
                                pattern="[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưạ-ỹ\s]+"
                                title="Please enter a valid city name."
                            />
                        </div>
                        <div className="form-group">
                            <label>Province</label>
                            <input
                                type="text"
                                name="province"
                                value={billingDetails.province}
                                onChange={handleChange}
                                required
                                pattern="[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưạ-ỹ\s]+"
                                title="Please enter a valid province name."
                            />
                        </div>
                        <div className="form-group">
                            <label>Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={billingDetails.postalCode}
                                onChange={handleChange}
                                required
                                pattern="\d{4,10}"
                                title="Please enter a valid postal code (4-10 digits)."
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={billingDetails.phone}
                                onChange={handleChange}
                                required
                                pattern="\d{9,15}"
                                title="Please enter a valid phone number (9-15 digits)."
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={billingDetails.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Additional Information</label>
                            <textarea
                                name="additionalInfo"
                                value={billingDetails.additionalInfo}
                                onChange={handleChange}
                                maxLength="500"
                                placeholder="Any additional notes or instructions."
                            ></textarea>
                        </div>
                        <button type="submit" className="place-order-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Place Order'}
                        </button>
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
                    </div>
                </div>
            </div>
            <FeatureSection />
        </>
    );
};

export default CheckoutPage;
