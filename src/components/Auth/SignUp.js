import { useRef, useState } from 'react';
import classes from './SignUp.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logAction } from '../../store/log-slice';

const AuthForm = () => {
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const nameInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [nameInput, setNameInput] = useState('');

  //const login = useSelector((state) => state.log.isLogin);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    if (enteredPassword > 9) {
      setPasswordValid(true);
    } else setPasswordValid(false);

    setIsLoading(true);
    console.log(enteredEmail);
    console.log(enteredPassword);
    console.log(enteredConfirmPassword);
    console.log(passwordValid);

    if (enteredPassword !== enteredConfirmPassword) {
      alert('not match password');
      history.push('/SignUpPage');
    } else if (passwordValid === false) {
      alert('password not safe');
      history.push('/SignUpPage');
    }
    setIsLoading(false);
  };
  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };

  const loginHandler = () => {
    dispatch(logAction.toggle());
    const users = dispatch(logAction.addUser(nameInput));
    console.log(users);

    fetch(
      'https://medecinestore-aca65-default-rtdb.firebaseio.com/users.json',
      {
        method: 'POST',
        body: JSON.stringify({
          username: users,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };
  return (
    <section className={classes.auth}>
      <h1>SignUp</h1>
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
        <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            ref={confirmPasswordInputRef}
          />
        </div>

        <div className={classes.actions}>
          {!isLoading && (
            <Link to="/BuyView">
              <button onClick={loginHandler}>Create Account</button>
            </Link>
          )}
          {isLoading && (
            <p>
              <LoadingSpinner />
            </p>
          )}
          <button type="button" className={classes.toggle}>
            <Link to="/LoginPage">{'Login with existing account'}</Link>
          </button>
          <button type="button" className={classes.toggle}>
            <Link to="/">{'Still Watching'}</Link>
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
