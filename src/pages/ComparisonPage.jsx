import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ComparisonPage.css';
import FeatureSection from '../components/FeatureSection'; 
import Footer from '../components/Footer'; 

const ComparisonPage = () => {
    const location = useLocation();
    const { productId } = location.state || {};

    

    return (
        <div className="comparison-page">
            {/* Header Section */}
            <div className="comparison-header">
                <img
                    src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLt64fXtuzoOrK200L5f07UlrXncZVkzFiAyshUAvmiN3kSlBYDbGpssV~-Fv4H-EV~ZGdfy55UZgz1IkGrBNsZxpAPlQK2GAKtsh4zoX~wwyIqiFFAU2UEDIdJ5nbZ47QaIatQj5lMt0JHBJ4EPhUjFxlrJ2-DsizyQegnnvFKZyh5grgy5FWuYMArXw7SmMKt-U~~TuuYYXaRVnjW~QT5reUwQw8KkSY2tgdhFDI~3Sj2l9GfAYc2cuVVXXvbdzDri1Ix6tLlxyNiYP0cB1GnReY0kNke6sORtaRAbI-bV6MMt9G8xmFRrP99uTfYacEVfwAG0OA0Ujeb7E~YZvQ__"
                    alt="Comparison Background"
                    className="comparison-bg-image"
                />
                <div className="comparison-overlay"></div>
                <div className="comparison-title-container">
                    <h1 className="comparison-title">Product Comparison</h1>
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> &gt; <span>Comparison</span>
                    </nav>
                </div>
            </div>

            {/* Comparison Content */}
            <div className="comparison-content">
                <div className="comparison-options">
                    <Link to="/products" className="btn">Go to Product Page for More Products</Link>
                    <button className="btn add-product">Add A Product</button>
                </div>

                <div className="comparison-table">
                    <div className="comparison-header-row">
                        <div>General</div>
                        <div>Product 1</div>
                        <div>Product 2</div>
                    </div>

                    {/* Comparison details */}
                    <div className="comparison-row">
                        <div>Sales Package</div>
                        <div>1 Sectional Sofa</div>
                        <div>1 Three Seater, 2 Single Seater</div>
                    </div>
                </div>
            </div>

            <FeatureSection />

            <Footer />
        </div>
    );
};

export default ComparisonPage;
