import styled from "styled-components"

export const LoginMainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 30vw;
    background-color:${props => props.theme === "dark" ? "black" : "whitesmoke"} ;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.37);
    border-radius: 25px;
    @media only screen and (max-width: 992px) {
        width: 40vw;
        height: 50vh;
    }
    @media only screen and (max-width: 768px) {
        width: 50vw;
        height: 50vh;
    }
    @media only screen and (max-width: 576px) {
        width: 70vw;
        height: 50vh;
    }
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 60%;
    width: 80%;
`
