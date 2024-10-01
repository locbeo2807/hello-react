import React, { useState } from 'react';

export default function CheckOrderPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCheckOrder = async () => {
        setLoading(true);
        setError(null);
        setOrderData(null);

        try {
            const response = await fetch(`https://learning.sonthanh.net.vn/api/orders?page=1&size=15&phone=${phoneNumber}`);
            if (!response.ok) {
                throw new Error('Failed to fetch order data');
            }
            const data = await response.json();
            setOrderData(data);
        } catch (err) {
            setError('Không tìm thấy đơn hàng với số điện thoại này.');
        } finally {
            setLoading(false);
        }
    };

    // Hàm chuyển đổi định dạng ngày
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

    return (
        <div className="flex flex-col items-center">
            {/* Toolbar */}
            <div 
                className="relative w-full h-40 bg-cover bg-center flex flex-col items-center justify-center mb-5"
                style={{ backgroundImage: "url('https://www.furniro.shop/_next/image?url=%2Fsmall-hero-teaser.png&w=1920&q=75')" }}
            >
                <h1 className="text-4xl font-bold text-black">CheckOrder</h1>
                <nav className="text-black text-sm mt-2 font-semibold">
                    <a href="/" className="hover:underline text-black">Home</a> &gt; <span>CheckOrder</span>
                </nav>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Tra Cứu Đơn Hàng</h2>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <label htmlFor="phone" className="mb-2 text-gray-700 font-medium">Nhập số điện thoại:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Nhập số điện thoại của bạn"
                    required
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <button
                    onClick={handleCheckOrder}
                    disabled={loading || !phoneNumber}
                    className={`px-4 py-2 rounded-md text-white ${loading || !phoneNumber ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {loading ? 'Đang kiểm tra...' : 'Kiểm tra đơn hàng'}
                </button>
            </div>

            {error && <div className="mt-4 text-red-500">{error}</div>}

            {orderData && (
                <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
                    <h3 className="text-xl font-semibold mb-2">Thông tin đơn hàng</h3>
                    {orderData.data.orders.length > 0 ? (
                        orderData.data.orders.map(order => (
                            <div key={order.id} className="border-t border-gray-200 py-2">
                                <p><strong>ID đơn hàng:</strong> {order.id}</p>
                                <p><strong>Tên người đặt:</strong> {order.name}</p>
                                <p><strong>Địa chỉ giao hàng:</strong> {order.address}</p>
                                <p><strong>Thời gian đặt hàng:</strong> {formatDate(order.created_at)}</p> {/* Sử dụng hàm formatDate */}
                                {order.products.map((product) => (
                                    <div key={product.id} className="mt-4">
                                        <img src={product.preview_image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-md" />
                                        <p><strong>Mô tả:</strong> {product.description}</p>
                                        <p><strong>Giá:</strong> {product.price}.000 VNĐ</p>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>Không tìm thấy đơn hàng nào với số điện thoại này.</p>
                    )}
                </div>
            )}
        </div>
    );
}
