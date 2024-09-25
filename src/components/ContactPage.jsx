import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureSection from '../components/FeatureSection'; // Nhập FeatureSection

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div>
            {/* Header với hình nền */}
            <div className="relative h-64 flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src='https://www.furniro.shop/_next/image?url=%2Fsmall-hero-teaser.png&w=1920&q=75'
                        alt="Background"
                        className="w-full h-full object-cover filter blur-sm" 
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div> 
                </div>
                <div className="relative z-10 text-center text-black">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <nav className="mt-2">
                        <Link to="/" className="hover:underline font-bold">Home</Link>
                        <span className="mx-2">&gt;</span> 
                        <span>Contact</span>
                    </nav>

                </div>
            </div>

            {/* Nội dung liên hệ */}
            <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl">
                    For More Information About Our Products & Services, Please Feel Free To Drop Us An Email.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl w-full">
                    {/* Thông tin liên hệ */}
                    <div className="space-y-8">
                        <ContactInfo icon="🏠" title="Address" details="236 5th SE Avenue, New York NY10000, United States" />
                        <ContactInfo icon="📞" title="Phone" details="Mobile: (+84) 546-6789\nHotline: (+84) 456-6789" />
                        <ContactInfo icon="⏰" title="Working Time" details="Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00" />
                    </div>

                    {/* Form liên hệ */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InputField label="Your name" name="name" value={formData.name} handleChange={handleChange} required />
                        <InputField label="Email address" name="email" value={formData.email} handleChange={handleChange} required />
                        <InputField label="Subject" name="subject" value={formData.subject} handleChange={handleChange} placeholder="This is an optional" />
                        <TextAreaField label="Message" name="message" value={formData.message} handleChange={handleChange} placeholder="Hi! I'd like to ask about" required />
                        <button type="submit" className="w-full py-2 px-4 rounded-md shadow-sm text-white bg-yellow-700 hover:bg-yellow-800">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Thêm FeatureSection tại đây */}
            <FeatureSection />
        </div>
    );
};


const ContactInfo = ({ icon, title, details }) => (
    <div className="flex items-start">
        <div className="mr-4 text-yellow-700 text-2xl">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{details}</p>
        </div>
    </div>
);


const InputField = ({ label, name, value, handleChange, required = false, placeholder = '' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
            placeholder={placeholder}
            className="block w-full mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
        />
    </div>
);


const TextAreaField = ({ label, name, value, handleChange, required = false, placeholder = '' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
            placeholder={placeholder}
            rows="4"
            className="block w-full mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
        />
    </div>
);

export default Contact;
