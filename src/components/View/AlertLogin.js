import classes from './AlertLogin.module.css';

import { Link } from 'react-router-dom';

const AlertLogin = (props) => {
  return (
    <header className={classes.header}>
      <h1>To Order Please Login !</h1>

      <div className={classes.footer}>
        <button>
          <Link to="/">Keep Watching</Link>
        </button>
        <button>
          <Link to="/LoginPage">Login</Link>
        </button>
      </div>
    </header>
  );
};
export default AlertLogin;
