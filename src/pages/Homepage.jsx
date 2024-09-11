import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faExchangeAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import './card.css';
import { CartContext } from "../context/CartContext";
import RoomInspiration from "../components/RoomInspiration";

export default function Homepage() {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate(); 
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://learning.sonthanh.net.vn/api/products?page=1&size=15');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.data.products);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleBuyNow = () => {
        navigate('/cua-hang'); 
    };

    const handleShowMore = () => {
        setVisibleProducts(products.length); 
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            {/* Main Banner Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="relative h-screen">
                    <img className="absolute inset-0 w-full h-full object-cover" 
                         src="https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJHR1hSFbPjMK-RUP~wxkppuhD1GK1TML-UUL8jviqRJa9C-FM79zi0VKvlZUGcE0zhIDNZcVwXxMogx-yVp47GMHWZdPkhDPWFYOYlKS6sQafjwTNboyH2i2YCyumgX1znxDOna82ZMcEmWaLnBBZjvbeWWimFFvOfrgGwrTCiCmoe~eor0y5myAdnQsl9I8FEPdo0RfvgV2HdJGKaOOaoHUdlbiynavgPoGjHgegGzuRPcNOpT7loaoB-IV-jHizvlpTURzAfQQIgYPxqCqD~X1P2bgxlymlKf-5LwYzj6qAKYFOdki6v~lY553ndjwY-fzeWwhS2bK-oOPHyt2w__" 
                         alt="New Collection" 
                         loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-10"></div> 
                    <div className="relative z-10 flex items-center justify-end h-full px-8">
                        <div className="bg-white p-8 rounded-md shadow-md max-w-md">
                            <h2 className="text-sm font-light text-gray-500">New Arrival</h2>
                            <h1 className="text-4xl tracking-tight font-extrabold text-yellow-700 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Discover Our</span>{' '}
                                <span className="block xl:inline">New Collection</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                                <button
                                    onClick={handleBuyNow}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-700 hover:bg-yellow-800 md:py-4 md:text-lg md:px-10"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-center">
                        <h2 className="text-base text-yellow-700 font-semibold tracking-wide uppercase">About Us</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Welcome to Furniro
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We offer a variety of modern furniture and accessories. Discover our collection of stylish and comfortable products that will make your home stand out.
                        </p>
                    </div>
                </div>
            </div>

            {/* Browse The Range Section */}
            <div className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-center">
                        <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase">Browse The Range</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Discover our furniture collections
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center">
                                <img className="rounded-lg shadow-lg w-full h-64 object-cover" src="https://luxcasastore.com/uploads/images/2021/09/1632682934-single_product11-1614129187multiproduct50ghesofatiepkhachsangtrong.jpg" alt="Sofa" />
                                <h3 className="mt-4 text-lg font-medium text-gray-900">Sofa</h3>
                                <button
                                    onClick={handleBuyNow}
                                    className="mt-4 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800"
                                >
                                    Buy Now
                                </button>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="rounded-lg shadow-lg w-full h-64 object-cover" src="https://noithattoz.com/wp-content/uploads/2023/10/ban-lam-viec-ikea-1m2-BIK1206.jpg" alt="Bàn làm việc" />
                                <h3 className="mt-4 text-lg font-medium text-gray-900">Bàn làm việc</h3>
                                <button
                                    onClick={handleBuyNow}
                                    className="mt-4 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800"
                                >
                                    Buy Now
                                </button>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="rounded-lg shadow-lg w-full h-64 object-cover" src="https://foyr.com/learn/wp-content/uploads/2021/09/master-bedroom-essentials.png" alt="Bedroom" />
                                <h3 className="mt-4 text-lg font-medium text-gray-900">Giường ngủ</h3>
                                <button
                                    onClick={handleBuyNow}
                                    className="mt-4 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Products Section */}
            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our Products
                        </h2>
                    </div>
                    <div className="mt-10">
                        <div className="product-grid-new">
                            {products.slice(0, visibleProducts).map((product, index) => (
                                <div key={index} className="product-card-new">
                                    <div className="image-container-new">
                                        <img className="product-image-new" src={product.preview_image} alt={product.name} />
                                        <div className="overlay">
                                            <Link to={`/product/${product.id}`} className="overlay-button">View Details</Link>
                                            <button className="overlay-button" onClick={() => addToCart(product)}>Add to Cart</button>
                                            <div className="button-group-new">
                                                <button className="action-button-new">
                                                    <FontAwesomeIcon icon={faShareAlt} /> Share
                                                </button>
                                                <button className="action-button-new">
                                                    <FontAwesomeIcon icon={faExchangeAlt} /> Compare
                                                </button>
                                                <button className="action-button-new">
                                                    <FontAwesomeIcon icon={faHeart} /> Like
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-info-new">
                                        <h3 className="product-name-new">{product.name}</h3>
                                        <p className="product-price-new">{product.price}.000Đ</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {visibleProducts < products.length && (
                            <div className="show-more-new">
                                <button className="show-more-button-new" onClick={handleShowMore}>Show More</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Room Inspiration Section */}
            <RoomInspiration />

            {/* Share Your Setup Section */}
            <div className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Share your setup with <span className="text-yellow-700">#FuniroFurniture</span>
                        </h2>
                    </div>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative img-1 ">
                            <img src="https://neohouse.vn/wp-content/uploads/2017/07/thiet-ke-noi-that-biet-thu-hien-dai-anh-bia.jpg" alt="Room Setup 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="relative img-1 ">
                            <img src="https://media.istockphoto.com/id/1354262369/vi/anh/mock-up-khung-%C3%A1p-ph%C3%ADch-trong-n%E1%BB%81n-n%E1%BB%99i-th%E1%BA%A5t-hi%E1%BB%87n-%C4%91%E1%BA%A1i-ph%C3%B2ng-kh%C3%A1ch-phong-c%C3%A1ch-scandinavia-render-3d.jpg?s=612x612&w=0&k=20&c=6wVb4gdbmmiJkawQajsGDqy_2KpWCw2mejhbGu8zDiA=" alt="Room Setup 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="relative img-1">
                            <img src="https://tknt.vn/images/2016/01/29/2-1.jpg" alt="Room Setup 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="relative img-1">
                            <img src="https://i.pinimg.com/originals/c2/14/c9/c214c919d31ea727d71b4a8c9fe732c4.jpg" alt="Room Setup 4" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="relative img-1">
                            <img src="https://www.ikea.com/ext/ingkadam/m/304502089236b8ee/original/PH199037.jpg" alt="Room Setup 5" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="relative img-1">
                            <img src="https://www.marthastewart.com/thmb/lxfu2-95SWCS0jwciHs1mkbsGUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-living-rooms-wb-1-bc45b0dc70e541f0ba40364ae6bd8421.jpg" alt="Room Setup 6" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
