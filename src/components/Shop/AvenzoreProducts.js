import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logAction } from '../../store/log-slice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const AvenzoreProducts = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const [filteredArray, setFilteredArray] = useState([]);
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://medecinestore-aca65-default-rtdb.firebaseio.com/products/avenzore.json'
      );
      const data = await response.json();

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          image: data[key].image,
        });
      }
      setProducts(loadedProducts);

      console.log(loadedProducts);
    };
    fetchProducts();
  }, []);

  const logoutHandler = () => {
    dispatch(logAction.toggle());
  };

  const searchHandler = () => {
    const enteredSearch = searchInputRef.current.value;
    const filteredProducts = products.filter((obj) =>
      obj.title.toLowerCase().includes(enteredSearch.toLowerCase())
    );
    if (filteredProducts.length > 0) {
      console.log(filteredProducts);
      setSearched(true);
      setFilteredArray(filteredProducts);
    } else {
      setNotFound(true);
    }
  };

  return (
    <section className={classes.products}>
      <h2>Buy Some products From Avenzore</h2>

      <div className={classes.search}>
        <input text placeholder="type a product" ref={searchInputRef} />
        <button onClick={searchHandler}>search</button>
      </div>

      {notFound && <h2>not Found</h2>}
      {searched && (
        <ul>
          {filteredArray.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </ul>
      )}
      {!searched && (
        <ul>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </ul>
      )}

      <section className={classes.Button}>
        <Link to="/BuyView">
          <button>Go Back</button>
        </Link>
        <Link to="/">
          <button onClick={logoutHandler}>LogOut</button>
        </Link>
      </section>
    </section>
  );
};

export default AvenzoreProducts;

//const DUMMY_PRODUCTS = [
//   {
//     id: 'a1',
//     price: 25,
//     title: 'augmatex1000',
//     image: 'https://www.avenzor.net/img/uploads1/thumb_augmatex1000_6.jpg',
//   },
//   {
//     id: 'a2',
//     price: 7,
//     title: 'ciplox500',
//     image: 'https://www.avenzor.net/img/uploads1/thumb_ciplox500.jpg',
//   },
//   {
//     id: 'a3',
//     price: 9,
//     title: 'ciplox750',
//     image: 'https://www.avenzor.net/img/uploads1/thumb_ciplox750.jpg',
//   },
//   {
//     id: 'a4',
//     price: 13,
//     title: 'doubleNix',
//     image: 'https://www.avenzor.net/img/uploads1/thumb_doublenix750000.jpg',
//   },
//   {
//     id: 'a5',
//     price: 11,
//     title: 'doubleNixForte',
//     image:
//       'https://www.avenzor.net/img/uploads1/thumb_doublenix_fort1500000.jpg',
//   },
//   {
//     id: 'a6',
//     price: 5,
//     title: 'BenUron',
//     image: 'https://www.avenzor.net/img/uploads1/prod_thumb20151219144621.jpg',
//   },
//   {
//     id: 'a7',
//     price: 7,
//     title: 'celoxib100',
//     image: 'https://www.avenzor.net/img/uploads1/prod_thumb20151220102553.jpg',
//   },
//   {
//     id: 'a8',
//     price: 8,
//     title: 'celoxib200',
//     image: 'https://www.avenzor.net/img/uploads1/prod_thumb20151220102710.jpg',
//   },
//   {
//     id: 'a9',
//     price: 3,
//     title: 'diclomol',
//     image: 'https://www.avenzor.net/img/uploads1/thumb_diclomol.jpg',
//   },
// ];
