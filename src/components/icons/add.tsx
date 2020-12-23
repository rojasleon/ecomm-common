import React from 'react';

export const Add: React.FC<{ size: number }> = ({ size = 6 }) => (
  <svg
    className={`h-${size} w-${size} text-black hover:text-gray-700 cursor-pointer`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);
