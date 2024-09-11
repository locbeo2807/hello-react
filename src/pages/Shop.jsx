import React, { useState, useEffect, useCallback } from 'react';
import FeatureSection from '../components/FeatureSection';
import ProductCard from '../components/ProductCard';

export default function Shop() {
    const [originalListData, setOriginalListData] = useState([]); // Store original data
    const [listData, setListData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per page
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState('default');

    // Filter states
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); // Updated state to handle min and max values

    // State to store brand and category data
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]); // New state for categories

    // Fetch the data from the API
    const getListData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://learning.sonthanh.net.vn/api/products?page=1&size=15`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setOriginalListData(data.data.products); // Save original data
            setTotalItems(data.data.products.length); // Update total items based on fetched data
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch the brand data from the API
    const getBrandsData = useCallback(async () => {
        try {
            const res = await fetch('https://learning.sonthanh.net.vn/api/brands');
            if (!res.ok) {
                throw new Error('Failed to fetch brand data');
            }
            const data = await res.json();
            setBrands(data.data); // Save the brands data
        } catch (err) {
            console.error('Error fetching brands:', err);
        }
    }, []);

    // Fetch product categories from the API
    const getCategoriesData = useCallback(async () => {
        try {
            const res = await fetch('https://learning.sonthanh.net.vn/api/product-categories');
            if (!res.ok) {
                throw new Error('Failed to fetch category data');
            }
            const data = await res.json();
            setCategories(data.data); // Save the categories data
        } catch (err) {
            console.error('Error fetching categories:', err);
        }
    }, []);

    // Apply filters to the fetched data
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

        // Calculate start and end indices for slicing
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Slice filtered data based on current page and items per page
        setListData(filteredData.slice(startIndex, endIndex));
        setTotalItems(filteredData.length); // Update total items based on filtered data
    }, [brand, priceRange, originalListData, currentPage, itemsPerPage]);

    // Fetch data on component mount
    useEffect(() => {
        getListData();
        getBrandsData();
        getCategoriesData(); // Fetch categories data
    }, [getListData, getBrandsData, getCategoriesData]);

    // Apply filters when filter criteria or pagination changes
    useEffect(() => {
        applyFilters();
    }, [applyFilters, currentPage, itemsPerPage]);

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage > 0 ? newItemsPerPage : 4);
        setCurrentPage(1); // Reset to first page
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
            {/* Background Image with Overlay */}
            <div className="relative z-0">
                <img
                    src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLt64fXtuzoOrK200L5f07UlrXncZVkzFiAyshUAvmiN3kSlBYDbGpssV~-Fv4H-EV~ZGdfy55UZgz1IkGrBNsZxpAPlQK2GAKtsh4zoX~wwyIqiFFAU2UEDIdJ5nbZ47QaIatQj5lMt0JHBJ4EPhUjFxlrJ2-DsizyQegnnvFKZyh5grgy5FWuYMArXw7SmMKt-U~~TuuYYXaRVnjW~QT5reUwQw8KkSY2tgdhFDI~3Sj2l9GfAYc2cuVVXXvbdzDri1Ix6tLlxyNiYP0cB1GnReY0kNke6sORtaRAbI-bV6MMt9G8xmFRrP99uTfYacEVfwAG0OA0Ujeb7E~YZvQ__"
                    alt="Background"
                    className="w-full h-56 object-cover blur-sm"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white">Shop</h1>
                    <nav className="text-gray-200 mt-2">
                        <a href="/" className="text-black font-bold">Home</a>
                        <span className="text-black mx-2">&gt;</span> {/* Black > symbol */}
                        <span className="text-black font-light">Shop</span>
                    </nav>

                </div>
            </div>

            {/* Compact Toolbar */}
            <div className="relative z-10 p-2 mb-5">
                <div className="bg-orange-200 p-2 border border-gray-300 rounded-lg shadow-md flex flex-wrap items-center justify-between space-x-2">
                    {/* Filter Buttons */}
                    <div className="flex space-x-1 items-center">
                        <button className="text-gray-600 text-sm px-2 py-1 hover:text-gray-800 transition">Filter</button>
                        <button className="text-gray-600 text-sm px-2 py-1 hover:text-gray-800 transition">Grid</button>
                        <button className="text-gray-600 text-sm px-2 py-1 hover:text-gray-800 transition">List</button>
                    </div>

                    {/* Display Count */}
                    <div className="text-gray-500 text-xs flex-grow text-center">
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            <span>Showing {itemsPerPage * (currentPage - 1) + 1}-{Math.min(itemsPerPage * currentPage, totalItems)} of {totalItems} results</span>
                        )}
                    </div>

                    {/* Filter Controls */}
                    <div className="flex items-center space-x-1">
                        {/* Brand Filter */}
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

                        {/* Price Range Filter with Slider */}
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

                        {/* Items Per Page */}
                        <label className="text-xs">Show</label>
                        <input
                            type="number"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            className="w-10 text-center border border-gray-300 rounded text-xs p-1"
                            min="1"
                        />

                        {/* Sort Option */}
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

            {/* Product Grid */}
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

            {/* Pagination */}
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

            {/* Feature Section */}
            <FeatureSection />
        </div>
    );
}
