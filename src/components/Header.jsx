import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="p-4 bg-green-500 text-white ">
      <div className='flex justify-between max-w-7xl mx-auto'>

      <Link to="/products">Home</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </header>
  );
};

export default Header;
