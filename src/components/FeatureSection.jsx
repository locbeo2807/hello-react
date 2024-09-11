import React from 'react';

const features = [
    {
        icon: '🏆',
        title: 'High Quality',
        description: 'Crafted from top materials',
    },
    {
        icon: '✔️',
        title: 'Warranty Protection',
        description: 'Over 2 years',
    },
    {
        icon: '📦',
        title: 'Free Shipping',
        description: 'Order over $150',
    },
    {
        icon: '🎧',
        title: '24/7 Support',
        description: 'Dedicated support',
    },
];

const FeatureSection = () => {
    return (
        <div className="w-full bg-[#FAF7F2] py-20">
            <div className="container mx-auto flex flex-wrap justify-around">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center p-4 max-w-xs">
                        <div className="text-4xl mb-2">{feature.icon}</div>
                        <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-600 text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
