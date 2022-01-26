import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reduxStore/user';
import { Button } from '../styledComponents/CardContainer';
import { Input } from '../styledComponents/SearchComponents';
import { InputContainer, LoginContainer } from '../styledComponents/Login';
import { useSelector } from 'react-redux';

function Login() {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const {theme} = useSelector(state => state)
  const themeName = theme ? "light" : "dark";

  return <div className='d-flex justify-content-center'>
    <LoginContainer theme={themeName}>
      <InputContainer>
        <Input theme={themeName} type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
        <Input theme={themeName} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      
      <Button 
      className='btn btn-danger'
      theme={themeName} 
      onClick={() => dispatch(loginUser(userName, password))}>
        LOGIN
      </Button>
      </InputContainer>
    </LoginContainer>
  </div>

}

export default Login;
