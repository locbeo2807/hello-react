import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Furniro.</h2>
            <address className="not-italic mt-4 text-gray-600">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </address>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Links</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Help</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Payment Options</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Privacy Policies</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Newsletter</h2>
            <form className="mt-4">
              <div className="flex items-center border-b border-gray-300 py-2">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="flex-shrink-0 bg-black hover:bg-gray-800 text-sm text-white py-1 px-2 rounded"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="text-gray-600 flex justify-between">
          <span className="block">© 2023 Furniro. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
