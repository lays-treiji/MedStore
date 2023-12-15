import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, image, quantitiy, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
        image,
        quantitiy,
      })
    );
    console.log(title);
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>${price.toFixed(2)}</div>
        <img src={image} alt={title} />
      </header>

      <div className={classes.actions}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </li>
  );
};

export default ProductItem;
