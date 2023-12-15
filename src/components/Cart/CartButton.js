import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const totalCart = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPriceQuantity);

  const toggleCartHandler = () => {
    dispatch(uiAction.toggle());

    console.log(totalPrice);
  };
  return (
    <button className={classes.Button} onClick={toggleCartHandler}>
      <span className={classes.badge}>total cart {totalCart}</span>
      <span className={classes.badge}>total price {totalPrice} $</span>
    </button>
  );
};

export default CartButton;
