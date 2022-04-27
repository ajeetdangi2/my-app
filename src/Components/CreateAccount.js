import React, { useEffect, useContext, useState } from 'react';
import { Link} from 'react-router-dom';
function CreateAccount() {
  const [phoneNumber, setPhonenumber] = useState('');
  const [pwd, setPwd] = useState('');
  const [cpwd, setCpwd] = useState('');
  const [Pwdmessage, setPwdmessage] = useState('');
  const [pwdSendMessage, setPwdSendMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [counter, setCounter] = useState(0);
  const filled = pwd.length === 6 && phoneNumber.length === 10;

  const verifyNumber = async (e) => {
    e.preventDefault();
    const payload = { phone: phoneNumber, pwd };
    // eslint-disable-next-line no-undef
    await fetch(`${myConfig.url}/api/users/verify`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then((res) => res.json()).then((data) => {
      if (data.msg === 'Enter Valid pwd') {
        setPwdmessage('Enter Valid pwd');
      } else if (data.msg === 'User Already exits') {
        setErrorMessage('User Already exist');
      } 
    });
  };
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="login-box">
      <h2 style={{ color: '#535461' }}>Create New Account</h2>
      <div className="shadow-sm p-3 rounded">
        <form onSubmit={verifyNumber}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Phone Number
            </label>

            <div className="input-group flex-nowrap mb-1">
              <span className={!errorMessage ? 'input-group-text' : 'input-group-text-error'} id="addon-wrapping">
                +91
              </span>
              <input
                type="tel"
                className={!errorMessage ? 'form-control' : 'form-control-error'}
                id="validationCustomUsername"
                maxLength="10"
                pattern="\d{10}"
                required
                name="Phone"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={phoneNumber}
                onChange={(e) => {
                  setPhonenumber(e.target.value);
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
              type="tel"
              className={!Pwdmessage ? 'form-control-pwd' : 'form-control-pwd-error'}
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              maxLength="12"
              required
              name="pwd"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}

            />
            {/* eslint-disable-next-line no-nested-ternary */}
          
          </div>
          <div className="mt-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Confirm Password
            </label>

            <br />
            <input
              type="tel"
              className={!Pwdmessage ? 'form-control-pwd' : 'form-control-pwd-error'}
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              maxLength="12"
              required
              name="cpwd"
              value={cpwd}
              onChange={(e) => {
                setCpwd(e.target.value);
              }}

            />
            {/* eslint-disable-next-line no-nested-ternary */}
          
          </div>
          <div style={{ height: '48px' }}>
            {Pwdmessage && <p className="error">{Pwdmessage}</p>}
            <div className="col-12 text-center">
              {pwdSendMessage && <p className="send-pwd">{pwdSendMessage}</p> }
            </div>
          </div>
          <button className={`btn btn-verify ${filled ? ' btn-signin' : ''}`} type="submit">Sign Up</button>
        </form>
        <div className="text-center">
          <p style={{ color: '#949494', marginTop: '16px', marginBottom: '2px' }}>
            Already have an Account?
          </p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
