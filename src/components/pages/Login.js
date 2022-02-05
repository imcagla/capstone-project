import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../../reduxStore/user';
import { Input } from '../../styledComponents/SearchStyle';
import { Button, MainContainer } from '../../styledComponents/BaseStyleComponents';
import { InputContainer, LoginContainer, LoginMainContainer, ValidationMessage } from '../../styledComponents/LoginStyle';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isUserValid, setIsUserValid] = useState(true)
  const { theme, user } = useSelector(state => state)


  useEffect(() => {
    if (user.userLogin) {
      (navigate("/profile"))
    }
  }, [user, navigate])


  return <MainContainer>
    <LoginMainContainer>
      <LoginContainer theme={theme}>
        {
          !isUserValid && <ValidationMessage>Username or password is not correct!</ValidationMessage> 
        }
        <InputContainer>
          <Input theme={theme} type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
          <Input theme={theme} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />

          <Button
            theme={theme}
            onClick={(e) => {
                dispatch(validateUser(userName, password))
              if (userName !== user.username || password !== user.password) {
                e.preventDefault()
                setIsUserValid(false)
              }
            }}>
            LOGIN
          </Button>
        </InputContainer>
      </LoginContainer>
    </LoginMainContainer>


  </MainContainer>

}

export default Login;
