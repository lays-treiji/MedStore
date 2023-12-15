import Card from '../UI/Card';
import classes from './MainView.module.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const MainView = () => {
  return (
    <Fragment>
      <Card>
        <Link to="/WatchAvenzore">
          <div className={classes.nav}>
            <img
              src="data:image/png;base64,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"
              alt="avenzore"
            />
            <button>Avenzore</button>
          </div>
        </Link>

        <Link to="/WatchNestle">
          <div className={classes.nav}>
            <img
              src="data:image/jpeg;base64,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"
              alt="Nestle"
            />

            <button>Nestle`</button>
          </div>
        </Link>

        <Link to="/WatchPampers">
          <div className={classes.nav}>
            <img
              src="data:image/png;base64,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"
              alt="Pampers"
            />{' '}
            <button>Pampers</button>
          </div>
        </Link>
      </Card>

      <button className={classes.loginButton}>
        <Link to="/LoginPage">LogIn</Link>
      </button>
    </Fragment>
  );
};
export default MainView;