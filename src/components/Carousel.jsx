import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            src: "https://feeldecor.com.vn/wp-content/uploads/2019/12/thiet-ke-thi-cong-noi-that-phong-khach_feeldecor-12-anhbia.jpg",
            alt: "Image 1"
        },
        {
            src: "https://jangin.vn/wp-content/uploads/2024/05/banner-winston-mobile.jpg",
            alt: "Image 2"
        },
        {
            src: "https://noithatnguyetanh.vn/wp-content/uploads/2015/10/danh-sach-cong-ty-thiet-ke-noi-that-uy-tin.jpg",
            alt: "Image 3"
        }
    ];

    const showSlide = (index) => {
        setCurrentIndex((index + images.length) % images.length);
    };

    return (
        <div id="indicators-carousel" className="relative w-full">
            <div className="relative h-56 md:h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img src={image.src} className="block w-full h-full object-cover" alt={image.alt} />
                        <button className="absolute bottom-5 left-5 bg-blue-500 text-white py-2 px-4 rounded">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        aria-current={currentIndex === index ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => showSlide(index)}
                    ></button>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => showSlide(currentIndex - 1)}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => showSlide(currentIndex + 1)}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
