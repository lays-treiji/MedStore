import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import Alert from './pages/Alert';
import SignUpPage from './pages/SignUpPage';
import BuyAvenzore from './pages/BuyAvenzore';
import BuyNestle from './pages/BuyNestle';
import BuyPampers from './pages/BuyPampers';
import WatchAvenzore from './pages/WatchAvenzore';
import WatchPampers from './pages/WatchPampers';
import WatchNestle from './pages/WatchNestle';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
//import adminPage from './pages/adminPage';

import Cart from './components/Cart/Cart';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Layout from './components/UI/Layout';
import Order from './components/Cart/Order';

// import { useEffect } from 'react';

function App() {
  // const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const login = useSelector((state) => state.log.isLogin);

  return (
    <Fragment>
      <Layout>
        {showCart && <Cart />}
        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/MainPage" />
            </Route>
            <Route path="/MainPage" exact={true}>
              <MainPage />
            </Route>
            <Route path="/adminPage">
              <Order />
            </Route>
            <Route path="/LoginPage">
              <LoginPage />
            </Route>
            <Route path="/SignUpPage">
              <SignUpPage />
            </Route>
            <Route path="/adminPage">
              <adminPage />
            </Route>
            <Route path="/WatchAvenzore">
              <WatchAvenzore />
            </Route>
            <Route path="/BuyAvenzore">{login && <BuyAvenzore />}</Route>
            <Route path="/WatchPampers">
              <WatchPampers />
            </Route>
            <Route path="/BuyPampers">{login && <BuyPampers />}</Route>
            <Route path="/WatchNestle">
              <WatchNestle />
            </Route>
            <Route path="/BuyNestle">{login && <BuyNestle />}</Route>
            <Route path="/Alert">
              <Alert />
            </Route>
            <Route path="/BuyView">{login && <ShopPage />}</Route>
            <Route path="/CartPage">{login && <CartPage />}</Route>
          </Switch>
        </Router>
      </Layout>
    </Fragment>
  );
}

export default App;
