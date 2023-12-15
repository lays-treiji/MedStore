import { Fragment } from 'react';
import { useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const login = useSelector((state) => state.log.isLogin);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{login ? 'Shop' : 'take a look'}</h1>
        <ul>
          <li>{login && <CartButton />}</li>
        </ul>
      </header>
      <footer className={classes.footer}>
        <h2>Powered by GLT</h2>
      </footer>
    </Fragment>
  );
};
export default MainHeader;
