import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logAction } from '../../store/log-slice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const NestleProducts = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const [filteredArray, setFilteredArray] = useState([]);
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://medecinestore-aca65-default-rtdb.firebaseio.com/products/nestle.json'
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
      <h2>Buy Some products From Nestle</h2>

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

export default NestleProducts;

//const DUMMY_PRODUCTS = [
//   {
//     id: 'n1',
//     price: 15,
//     title: 'Cerelac with Ragi & Apple',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl8QubaOyYZb0MPSTPTNOLwfHEYQBftv2kg&usqp=CAU',
//   },
//   {
//     id: 'n2',
//     price: 15,
//     title: 'Cerelac with Rice',
//     image:
//       ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmdsmdu3SY08Yrg-2fCWTJSpV4gGS3-m5mw&usqp=CAU',
//   },
//   {
//     id: 'n3',
//     price: 15,
//     title: 'Cerelac with Rice & Milk',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNinOVCLTo3b4lZQrOIy62UFcioe4liOVdiQ&usqp=CAU',
//   },
//   {
//     id: 'n4',
//     price: 20,
//     title: 'Cerelac with Banana',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk8gicRIA8SGMkE_kLC_Ie_RYp1CpcV_kvg&usqp=CAU',
//   },
//   {
//     id: 'n5',
//     price: 15,
//     title: 'Cerelac with Raci & Apple',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl8QubaOyYZb0MPSTPTNOLwfHEYQBftv2kg&usqp=CAU',
//   },
//   {
//     id: 'n6',
//     price: 15,
//     title: 'Cerelac with Rice & Milk',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNinOVCLTo3b4lZQrOIy62UFcioe4liOVdiQ&usqp=CAU',
//   },
// ];
