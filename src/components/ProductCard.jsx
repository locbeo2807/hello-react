import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faBalanceScale, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './style.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCompare = () => {
        navigate('/comparison', { state: { productId: product.id } });
    };

    return (
        <div className="product-card">
            <div className="image-container">
                <img className="product-image" src={product.preview_image} alt={product.name} />
                <div className="overlay">
                    <Link to={`/product/${product.id}`} className="overlay-button">View Details</Link>
                    <button className="overlay-button" onClick={() => addToCart(product)}>Add to Cart</button>
                    <div className="button-group">
                        <button className="action-button" onClick={handleCompare} aria-label="Compare">
                            <FontAwesomeIcon icon={faBalanceScale} /> Compare
                        </button>
                        <button className="action-button" aria-label="Share">
                            <FontAwesomeIcon icon={faShareAlt} /> Share
                        </button>
                        <button className="action-button" aria-label="Like">
                            <FontAwesomeIcon icon={faHeart} /> Like
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">{product.price}.000đ</span>
            </div>
        </div>
    );
};

export default ProductCard;
