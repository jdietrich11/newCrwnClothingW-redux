import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-conainer'>
      {cartItems.map(({ id, imageUrl, name, quantity, price }) => (
        <div className='cart-item' key={id}>
          <img src={imageUrl} alt={name} />
          <div className='name'>{name}</div>
          <div className='quantity'>{quantity}</div>
          <div className='price'>{price}</div>
          <div className='remove'>x</div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
