import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
import Register from './components/Register';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';
import ContactPage from './components/ContactPage';
import ComparisonPage from './pages/ComparisonPage';
import Blog from './pages/Blog';
import CheckOrderPage from './pages/CheckOrderPage';
function App() {
    return (
        <CartProvider>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cua-hang" element={<Shop />} />
                    <Route path="/dang-ky" element={<Register />} />
                    <Route path="/dang-nhap" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/comparison" element={<ComparisonPage />} />
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path="/check-order" element={<CheckOrderPage />} />
                </Routes>
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
