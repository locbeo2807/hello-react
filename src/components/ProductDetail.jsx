import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://learning.sonthanh.net.vn/api/products/${id}`);
                const data = await res.json();
                setProduct(data.data.product);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchRelatedProducts = async () => {
            try {
                const res = await fetch(`https://learning.sonthanh.net.vn/api/products?page=1`);
                const data = await res.json();
                setRelatedProducts(data.data.products.slice(0, 4)); 
            } catch (err) {
                console.error(err);
            }
        };

        fetchProduct();
        fetchRelatedProducts();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-detail-container">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="separator">&gt;</span>
                    <Link to="/shop">Shop</Link>
                    <span className="separator">&gt;</span>
                    <span className="current">{product.name}</span>
                </div>
            </div>
            <div className="product-detail">
                <div className="product-images-container">
                    <div className="thumbnail-images">
                        {product.images.map((img, index) => (
                            <img key={index} src={img} alt={`${product.name} ${index + 1}`} />
                        ))}
                    </div>
                    <div className="main-image">
                        <img src={product.preview_image} alt={product.name} />
                    </div>
                </div>
                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-price">{product.price}.000Đ</p>
                    <div className="product-rating">
                        <span className="stars">★★★★★</span> <span>5 Customer Reviews</span>
                    </div>
                    <p className="product-description">{product.description}</p>
                    <div className="product-category-brand">
                        <p><strong>Category:</strong> {product.category.name}</p>
                        <p><strong>Brand:</strong> {product.brand.name}</p>
                    </div>
                    <div className="product-actions">
                        <button className="add-to-cart" onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="related-products-container">
                <h2 className="related-products-title">Related Products</h2>
                <div className="product-grid">
                    {relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="product-card">
                            <Link to={`/product/${relatedProduct.id}`}>
                                <div className="image-container">
                                    <img className="product-image" src={relatedProduct.preview_image} alt={relatedProduct.name} />
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{relatedProduct.name}</h3>
                                    <p className="product-price">{relatedProduct.price}.000Đ</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
