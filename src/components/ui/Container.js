import React from 'react';

const Container = ({ children, className = '', as: Component = 'div', ...rest }) => (
  <Component
    className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    {...rest}
  >
    {children}
  </Component>
);

export default Container;
