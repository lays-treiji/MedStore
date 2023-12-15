import { useRef, useState } from 'react';
import classes from './Login.module.css';
//import LoadingSpinner from '../UI/LoadingSpinner';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logAction } from '../../store/log-slice';

const AuthForm = (props) => {
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const [passwordValid, setPasswordValid] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [userName, setUserName] = useState([]);

  //const login = useSelector((state) => state.log.isLogin);
  const dispatch = useDispatch();

  let enteredEmail;
  //let enteredName;

  const submitHandler = (event) => {
    event.preventDefault();

    enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    //enteredName = nameInputRef.current.value;

    dispatch(logAction.toggle(enteredEmail));

    if (enteredPassword.length > 5) {
      setPasswordValid(true);
    }
    if (passwordValid === false) {
      alert('password not safe');
      history.replace('/LoginPage');
    }
  };

  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };
  const loginHandler = () => {
    const fetchUser = async () => {
      const response = await fetch(
        'https://medecinestore-aca65-default-rtdb.firebaseio.com/users.json'
      );
      const data = await response.json();

      const loadedUser = [];

      for (const key in loadedUser) {
        loadedUser.push({
          id: key,
          user: data[key].user,
        });
      }
      setUserName(loadedUser);
    };
    fetchUser();
    if (userName.includes(nameInput)) {
      dispatch(logAction.toggle());
      const users = dispatch(logAction.addUser(nameInput));
      console.log(users);
    } else {
      alert('user name not exist');
    }
  };
  return (
    <section className={classes.auth}>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input
            type="name"
            id="name"
            required
            ref={nameInputRef}
            placeholder="user name"
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button onClick={loginHandler}>
            <Link to="/BuyView">Login</Link>
          </button>

          <button type="button" className={classes.toggle}>
            <Link to="/SignUpPage">{'Create new account'}</Link>
          </button>

          <button type="button" className={classes.toggle}>
            <Link to="/">{'Still Wathching?'}</Link>
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
