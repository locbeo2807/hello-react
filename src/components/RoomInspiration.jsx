import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RoomInspiration.css'; 

const RoomInspiration = () => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="bg-[#f8f5f2] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-800">50+ Beautiful rooms inspiration</h2>
                    <p className="mt-4 text-gray-600">
                        Our designer already made a lot of beautiful prototypes of rooms that inspire you.
                    </p>
                    <div className="mt-6">
                        <a href="#" className="inline-block py-3 px-6 bg-yellow-700 text-white font-medium text-lg rounded-md shadow hover:bg-yellow-800 transition duration-200">
                            Explore More
                        </a>
                    </div>
                </div>

                <div className="relative flex items-center">
                    <Slider {...settings} className="room-inspiration-carousel w-full h-full overflow-hidden rounded-lg shadow-lg">
                        <div className="relative">
                            <img src="https://neohouse.vn/wp-content/uploads/2017/07/thiet-ke-noi-that-biet-thu-hien-dai-anh-bia.jpg" alt="Room Inspiration 1" className="carousel-image object-cover" />
                            <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 py-2 px-4">
                                <span className="text-sm text-gray-500">01 — Living Room</span>
                                <h3 className="text-lg font-bold text-gray-800">Modern Villa</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://media.istockphoto.com/id/1354262369/vi/anh/mock-up-khung-%C3%A1p-ph%C3%ADch-trong-n%E1%BB%81n-n%E1%BB%99i-th%E1%BA%A5t-hi%E1%BB%87n-%C4%91%E1%BA%A1i-ph%C3%B2ng-kh%C3%A1ch-phong-c%C3%A1ch-scandinavia-render-3d.jpg?s=612x612&w=0&k=20&c=6wVb4gdbmmiJkawQajsGDqy_2KpWCw2mejhbGu8zDiA=" alt="Room Inspiration 2" className="carousel-image object-cover" />
                        </div>
                        <div className="relative">
                            <img src="https://tknt.vn/images/2016/01/29/2-1.jpg" alt="Room Inspiration 3" className="carousel-image object-cover" />
                            <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 py-2 px-4">
                                <span className="text-sm text-gray-500">03 — Bedroom</span>
                                <h3 className="text-lg font-bold text-gray-800">Cozy Space</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://i.pinimg.com/originals/c2/14/c9/c214c919d31ea727d71b4a8c9fe732c4.jpg" alt="Room Inspiration 4" className="carousel-image object-cover" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px", zIndex: "1" }}
            onClick={onClick}
        />
    );
};

// Nút Previous Arrow
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: "1" }}
            onClick={onClick}
        />
    );
};

export default RoomInspiration;
