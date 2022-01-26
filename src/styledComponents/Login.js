import styled from "styled-components"


const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    width: 30vw;
    margin: 100px;
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

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 60%;
    width: 80%;
`

// const Input = styled.input`
//     background: rgba(255, 255, 255, 0.15);
//     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//     border-radius: 2rem;
//     width: 80%;
//     height: 3rem;
//     padding: 1rem;
//     border: none;
//     outline: none;
//     color: #3c354e;
//     font-size: 1rem;
//     font-weight: bold;
//     &:focus {
//     display: inline-block;
//     box-shadow: 0 0 0 0.2rem #b9abe0;
//     backdrop-filter: blur(12rem);
//     border-radius: 2rem;
//     }
//     &::placeholder {
//     color: #b9abe099;
//     font-weight: 100;
//     font-size: 1rem;
//     }
// `

export { InputContainer, LoginContainer }