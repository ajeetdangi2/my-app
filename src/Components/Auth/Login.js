import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userInput, setUserInput] = useState('');
  const [Pwd, setPwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const filled = (userInput.length === 10 || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(userInput));
  const userInputType = /^\d+$/.test(userInput);
  const history = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    history('/');
    if (userInputType === true) {

    } else {
      setErrorMessage('Enter valid phone number or email');
    }
  };
  return (
    <div className="login-box">
      <h2 style={{ color: '#535461' }}>Sign In to your Account</h2>
      <div className="shadow-sm p-3 round-boarder gb-white">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone Number / Email Address
            </label>
            <div className="input-group flex-nowrap mb-1">
              <input
                className={!errorMessage ? 'form-control' : 'form-control-error'}
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                maxLength={userInputType ? 10 : 60}
                required
                name="userInput"
                aria-label="userInput"
                value={userInput}
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
              />
            </div>
            <p className="error">{errorMessage}</p>
          </div>
          <div className="mt-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Password
            </label>
            <br />
            <input
              type="password"
              className="form-control-Pwd"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              maxLength="10"
              required
              name="Pwd"
              value={Pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          <button className={`btn btn-verify ${filled ? ' btn-signin' : ''}`} type="submit">Sign In</button>
        </form>
        <div className="text-center">
          <p
            style={{ color: '#949494', marginTop: '16px', marginBottom: '2px' }}
          >
            Don&apos;t have an Account?
          </p>
          <Link to="/CreateAccount" style={{ color: '#8c52ff' }}>
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
