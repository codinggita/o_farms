import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './CartState';
import Button from './Button'; // Assuming you have a Button component

const Cart = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  const handleDecreaseQuantity = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };

  const handleRemoveItem = () => {
    // Optionally, you can dispatch an action to remove the item from the cart completely
    // dispatch(cartActions.removeItemFromCart(item.id));
  };

  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <div>
        <Button onClick={handleIncreaseQuantity}>+</Button>
        <Button onClick={handleDecreaseQuantity}>-</Button>
        <Button onClick={handleRemoveItem}>Remove</Button>
      </div>
    </div>
  );
};

export default Cart;


