import React from "react";
export default function Button({buttonType ,children}){
  function getButtonStyle() {
    switch (buttonType) {
      case 'primary':
        return 'bg-blue-500 text-white hover:bg-blue-700';
      case 'error':
        return 'bg-red-500 text-white hover:bg-red-700';
      case 'warning':
        return 'bg-yellow-500 text-black hover:bg-yellow-700';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-700';
    }
  }

  const buttonClass = `py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${getButtonStyle()}`;

  return (
    <div>
      <button
        className={buttonClass}
        type="button"
      >
        {children}
      </button>
    </div>
  );
}
