import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../redux/cartSlice';

const ShoppingCartPage = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b p-2">
          <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover" />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div>
            <button onClick={() => dispatch(decrementItem(item))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(incrementItem(item))}>+</button>
          </div>
          <button className='bg-red-200 hover:courser-pointer text-red p-2 rounded' onClick={() => dispatch(removeItem(item))}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalPrice}</p>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCartPage;
