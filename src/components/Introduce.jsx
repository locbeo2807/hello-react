import React from "react";

const Introduce = () => {
    return (
        <div className="p-4 container">
            <h2 className="text-2xl font-bold mb-4 text-center">Browse The Range</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg">
                    <img className="w-full h-full object-cover" src="https://www.mydomaine.com/thmb/tdIu8L5U-wanWYIf_Y54P71r9mQ=/1080x0/filters:no_upscale():strip_icc()/BritDotDesign-8b46e062cea0449698fee377349d26c7.jpg" alt="Image 1" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img className="w-full h-full object-cover" src="https://hips.hearstapps.com/hmg-prod/images/edc080123reddkaihoi-009-645aba4daf6e1.jpg?crop=0.691xw:1.00xh;0.159xw,0&resize=1200:*" alt="Image 2" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img className="w-full h-full object-cover" src="https://www.mydomaine.com/thmb/16GYhcYjnXOJn0fPRSF7gTcQdlw=/1050x0/filters:no_upscale():strip_icc()/bedroom-styles-4-mStarr-design-da22d95badf94214b778030359689909.png" alt="Image 3" />
                </div>
            </div>
        </div>
    );
}

export default Introduce;
