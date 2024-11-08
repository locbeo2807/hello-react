import React, { useState, useEffect, useCallback } from 'react';
import FeatureSection from '../components/FeatureSection';
import ProductCard from '../components/ProductCard';

export default function Shop() {
    const [originalListData, setOriginalListData] = useState([]); 
    const [listData, setListData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4); 
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState('default');
    
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); 
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState('');

    const getListData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://learning.sonthanh.net.vn/api/products?page=1&size=15`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setOriginalListData(data.data.products); 
            setTotalItems(data.data.products.length); 
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const getBrandsData = useCallback(async () => {
        try {
            const res = await fetch('https://learning.sonthanh.net.vn/api/brands');
            if (!res.ok) {
                throw new Error('Failed to fetch brand data');
            }
            const data = await res.json();
            setBrands(data.data); 
        } catch (err) {
            console.error('Error fetching brands:', err);
        }
    }, []);

    const getCategoriesData = useCallback(async () => {
        try {
            const res = await fetch('https://learning.sonthanh.net.vn/api/product-categories');
            if (!res.ok) {
                throw new Error('Failed to fetch category data');
            }
            const data = await res.json();
            setCategories(data.data); 
        } catch (err) {
            console.error('Error fetching categories:', err);
        }
    }, []);

    const applyFilters = useCallback(() => {
        let filteredData = originalListData;

        if (brand) {
            filteredData = filteredData.filter(product => product.brand_id === parseInt(brand, 10));
        }

        if (priceRange) {
            filteredData = filteredData.filter(product =>
                product.price >= priceRange.min && product.price <= priceRange.max
            );
        }

        if (selectedCategory) {
            filteredData = filteredData.filter(product => product.category_id === parseInt(selectedCategory, 10));
        }

        if (sortOption === 'priceAsc') {
            filteredData = filteredData.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceDesc') {
            filteredData = filteredData.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'newest') {
            filteredData = filteredData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        setListData(filteredData.slice(startIndex, endIndex));
        setTotalItems(filteredData.length); 
    }, [brand, priceRange, selectedCategory, sortOption, originalListData, currentPage, itemsPerPage]);

    useEffect(() => {
        getListData();
        getBrandsData();
        getCategoriesData(); 
    }, [getListData, getBrandsData, getCategoriesData]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters, currentPage, itemsPerPage, selectedCategory, sortOption]);

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage > 0 ? newItemsPerPage : 4);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handlePriceRangeChange = (e, type) => {
        const value = parseInt(e.target.value, 10);
        setPriceRange((prev) => ({
            ...prev,
            [type]: value,
        }));
    };

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="relative min-h-screen bg-gray-100">
            <div className="relative z-0">
                <img
                    src="/img/hinh.jpg"
                    alt="hinh"
                    className="w-full h-56 object-cover blur-sm"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white">Shop</h1>
                    <nav className="text-gray-200 mt-2">
                        <a href="/" className="text-black font-bold">Home</a>
                        <span className="text-black mx-2">&gt;</span> 
                        <span className="text-black font-light">Shop</span>
                    </nav>
                </div>
            </div>

            <div className="relative z-10 p-2 mb-5">
                <div className="bg-orange-200 p-2 border border-gray-300 rounded-lg shadow-md flex flex-wrap items-center justify-between space-x-2">
                    <div className="flex space-x-1 items-center">
                        <button className="text-gray-600 text-sm px-2 py-1 hover:text-gray-800 transition">Filter</button>
                        <button className="text-gray-600 text-sm px-2 py-1 hover:text-gray-800 transition">Grid</button>
                        <button className="text-gray-600 text-sm px-2 py-1 hover:text-gray-800 transition">List</button>
                    </div>

                    <div className="text-gray-500 text-xs flex-grow text-center">
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            <span>Showing {itemsPerPage * (currentPage - 1) + 1}-{Math.min(itemsPerPage * currentPage, totalItems)} of {totalItems} results</span>
                        )}
                    </div>

                    <div className="flex items-center space-x-1">
                        <label className="text-xs">Brand</label>
                        <select
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            className="border border-gray-300 rounded text-xs p-1"
                        >
                            <option value="">All Brands</option>
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>

                        <label className="text-xs">Category</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border border-gray-300 rounded text-xs p-1"
                        >
                            <option value="">All Categories</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        <label className="text-xs">Price</label>
                        <div className="flex items-center space-x-1">
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={priceRange.min}
                                onChange={(e) => handlePriceRangeChange(e, 'min')}
                                className="w-12"
                            />
                            <span className="text-xs">{priceRange.min}</span>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={priceRange.max}
                                onChange={(e) => handlePriceRangeChange(e, 'max')}
                                className="w-12"
                            />
                            <span className="text-xs">{priceRange.max}</span>
                        </div>

                        <label className="text-xs">Show</label>
                        <input
                            type="number"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            className="w-10 text-center border border-gray-300 rounded text-xs p-1"
                            min="1"
                        />

                        <label className="text-xs">Sort</label>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="border border-gray-300 rounded text-xs p-1"
                        >
                            <option value="default">Default</option>
                            <option value="priceAsc">Low to High</option>
                            <option value="priceDesc">High to Low</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {error ? (
                        <div className="col-span-full text-center text-red-500">{error}</div>
                    ) : loading ? (
                        <div className="col-span-full text-center">Loading...</div>
                    ) : (
                        listData.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </div>

            <div className="flex justify-center mt-10 mb-10 space-x-2">
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 ${currentPage === page ? 'bg-gray-500 text-white' : ''}`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                    Next
                </button>
            </div>

            <FeatureSection />
        </div>
    );
}
