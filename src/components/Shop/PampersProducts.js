import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logAction } from '../../store/log-slice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PampersProducts = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const [filteredArray, setFilteredArray] = useState([]);
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://medecinestore-aca65-default-rtdb.firebaseio.com/products/pampers.json'
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
      <h2>Buy Some products From Pampers</h2>

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

export default PampersProducts;

// const DUMMY_PRODUCTS = [
//   {
//     id: 'p1',
//     price: 25,
//     title: 'Pampers',
//     image:
//       'https://images.ctfassets.net/9wtva4vhlgxb/1BN1cotlV0UebGSXqey7sA/40a2115d0c24dd1a80e76f919df7e9fb/Cruisers_280x195.png?fm=webp',
//     //https://images.ctfassets.net/9wtva4vhlgxb/6YtvpEaId3DpVqvArfKDo9/77bc2e810831c4c77b294f8ba0711a04/swaddlers_280x195.png?fm=webp
//   },
//   {
//     id: 'p2',
//     price: 10,
//     title: 'Pampers Dry',
//     image:
//       'https://images.ctfassets.net/9wtva4vhlgxb/1BN1cotlV0UebGSXqey7sA/40a2115d0c24dd1a80e76f919df7e9fb/Cruisers_280x195.png?fm=webp',
//   },
//   {
//     id: 'p3',
//     price: 25,
//     title: 'Pampers',
//     image:
//       'https://images.ctfassets.net/9wtva4vhlgxb/1BN1cotlV0UebGSXqey7sA/40a2115d0c24dd1a80e76f919df7e9fb/Cruisers_280x195.png?fm=webp',
//   },
//   {
//     id: 'p4',
//     price: 25,
//     title: 'Pampers OverNights',
//     image:
//       'https://images.ctfassets.net/9wtva4vhlgxb/6LrP3P8XkaIWRYbFtCIGBg/5706fa5340b078121b238f635a7419f8/overnights_280x195.png?fm=webp',
//   },
//   {
//     id: 'p5',
//     price: 25,
//     title: 'Pampers Pure',
//     image:
//       'https://images.ctfassets.net/9wtva4vhlgxb/3D2vSDnInBBOCBIlRvHsv5/9d8c76759369db85630ad1f92cdff624/Pure_280x195.png?fm=webp',
//   },
//   {
//     id: 'p6',
//     price: 25,
//     title: 'Pampers',
//     image:
//       'https://images.ctfassets.net/9wtva4vhlgxb/3D2vSDnInBBOCBIlRvHsv5/9d8c76759369db85630ad1f92cdff624/Pure_280x195.png?fm=webp',
//     //'https://images.ctfassets.net/9wtva4vhlgxb/eXvBk6nXcZk2h0p5HlBEK/f7e5f8422761e3ac24805aaf3c88f81e/babydry_324x286.png?fm=webp',
//   },
// ];
