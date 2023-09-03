import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function FloatingImages () {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const images = [
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
    'https://rullservices.com/wp-content/uploads/2021/03/pinturas-que-cambian-de-color.jpg',
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          ref={index === images.length - 1 ? ref : undefined}
          className={`transform transition-transform duration-500 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <img src={image} alt={`Image ${index}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};


