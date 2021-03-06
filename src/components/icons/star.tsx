import React from 'react';

interface Props {
  size: number;
  onClick: () => void | Promise<void>;
  index: number;
  n: number;
}

export const Star: React.FC<Props> = ({ size = 6, onClick, index, n }) => (
  <svg
    onClick={onClick}
    className={`h-${size} w-${size} fill-current cursor-pointer ${
      index <= n ? 'text-gray-400' : 'text-yellow-400'
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);
