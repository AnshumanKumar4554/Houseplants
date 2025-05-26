import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing">
    <div className="bg-cover bg-center h-screen text-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url(/path/to/image)' }}>
      <h1 className="text-4xl text-white font-bold">Welcome to PlantShop</h1>
      <p className="text-white mt-4">Your go-to place for houseplants!</p>
      <Link to="/products">
        <button className="bg-green-500 px-6 py-3 mt-6 text-white rounded-lg">Get Started</button>
      </Link>
    </div>
  </div>
);

export default LandingPage;
