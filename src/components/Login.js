import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reduxStore/user';


function Login() {
  const dispatch = useDispatch()


  return <div>
    <button onClick={() => dispatch(loginUser("cagla", "12345"))}>
      LOGIN
    </button>
  </div>;
}

export default Login;
