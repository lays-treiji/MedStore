import { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
import classes from './Cart.module.css';
//import CartItem from './CartItem';

const Order = () => {
  //const [cards, setCards] = useState([]);
  const [dash, setdash] = useState([]);
  //  const [cartItems,setCartItems] =useState([]);

  useEffect(() => {
    const fetchDash = async () => {
      const response = await fetch(
        'https://medecinestore-aca65-default-rtdb.firebaseio.com/dash.json'
      );
      const data = await response.json();

      const loadedCards = [];

      for (const key in data) {
        loadedCards.push({
          id: key,
          totalCart: data[key].totalCart,
          totalPrice: data[key].totalPrice,
          user: data[key].user,
        });
      }

      setdash(loadedCards);
    };
    fetchDash();
  }, []);

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     const response = await fetch(
  //       'https://medecinestore-aca65-default-rtdb.firebaseio.com/cards.json'
  //     );
  //     const data = await response.json();

  //     const loadedCards = [];

  //     for (const key in data) {
  //       loadedCards.push({
  //         id: key,
  //         cartItems: data[key].cartItems,
  //       });
  //     }

  //     setCards(loadedCards);
  //     console.log(loadedCards);
  //   };
  //   fetchCards();
  // }, []);

  return (
    <header className={classes.header}>
      {dash.length > 0 ? (
        dash.map((item) => (
          <ul>
            <uL>
              <li> user: {item.user}</li>
            </uL>
            <li> totalCart : {item.totalCart} product</li>
            <li> totalPrice : {item.totalPrice} $</li>
          </ul>
        ))
      ) : (
        <p>No data found.</p>
      )}
      {/* {cards.map((item) => (
        <ul>
          <li> id:{item.id}</li>
          <li> title : {item.cartItems.name}</li>
          <li>quantitiy: {item.quantitiy}</li>
          <li> image:{item.image}</li>
          <li>price: {item.price}</li>
          <li>total: {item.totalPrice}</li>
        </ul>
      ))} */}
    </header>
  );
};

export default Order;
