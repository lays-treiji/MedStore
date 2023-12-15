import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Cart = () => {
  const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonDisabledAfter, setButtonDisabledAfter] = useState(true);
  const [buttonpressed, setButtonPressed] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalCart = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPriceQuantity);
  const user = useSelector((state) => state.log.users);

  const orderButtonHandler = () => {
    fetch('https://medecinestore-aca65-default-rtdb.firebaseio.com/dash.json', {
      method: 'POST',
      body: JSON.stringify({
        user: user,
        totalCart: totalCart,
        totalPrice: totalPrice,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    fetch(
      'https://medecinestore-aca65-default-rtdb.firebaseio.com/cards.json',
      {
        method: 'POST',
        body: JSON.stringify({
          cartItems: cartItems,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setButtonPressed(true);
    setButtonDisabledAfter(false);
  };

  return (
    <header className={classes.header}>
      <h1>{totalCart === 0 ? 'your cart is empty' : 'Your Shopping Cart'}</h1>
      <h2>total cart {totalCart}</h2>
      <h2>total price {totalPrice}</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              image: item.image,
            }}
          />
        ))}
      </ul>
      <footer className={classes.Button}>
        <section>
          <h2>I am sure</h2>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
              setButtonDisabled(!e.target.checked);
            }}
          />
        </section>
        {buttonDisabledAfter && totalCart > 0 && (
          <button disabled={buttonDisabled} onClick={orderButtonHandler}>
            Order
          </button>
        )}

        {buttonpressed && <p> ordered successfuly!!</p>}
      </footer>
    </header>
  );
};

export default Cart;
