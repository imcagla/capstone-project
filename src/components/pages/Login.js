import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../../reduxStore/user';
import { Input } from '../../styledComponents/SearchStyle';
import { Button, MainContainer } from '../../styledComponents/BaseStyleComponents';
import { InputContainer, LoginContainer, LoginMainContainer } from '../../styledComponents/LoginStyle';


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { theme, user } = useSelector(state => state)


  useEffect(() => {
    if (user.userLogin) {
      (navigate("/profile"))
    }
  }, [user, navigate])


  return <MainContainer>
    <LoginMainContainer>
      <LoginContainer theme={theme}>
      <InputContainer>
        <Input theme={theme} type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
        <Input theme={theme} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />

        <Button
          theme={theme}
          onClick={() => {
            dispatch(validateUser(userName, password))
          }}>
          LOGIN
        </Button>
      </InputContainer>  
    </LoginContainer>
    </LoginMainContainer>
    

  </MainContainer>

}

export default Login;
