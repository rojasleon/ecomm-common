import React from 'react';

export const Close: React.FC<{ size: number }> = ({ size = 6 }) => (
  <svg
    className={`h-${size} w-${size} text-black hover:text-gray-700 cursor-pointer`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
