import styled from "styled-components";

//Criando os estilos dos componentes

export const Title = styled.h2`
color: #fff;
font-size: 38px;
text-align: center;
font-style: normal;
font-weight: 600;
`

export const Container = styled.div`
background-color: #181f36;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
`
export const TopBackground = styled.div`
background: linear-gradient(to right, #fe7e5d, #7f3841);
height: 30vh;
width: 90vw;
max-width: 800px;
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;

img {
    max-width: 100%;
    max-height: 100%;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
max-width: 500px;
`
export const ContainerInputs = styled.div`
display: flex;
gap: 20px;
height: auto;
max-width: 500px;

`
export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 12px 20px;
outline: none;
width: 100%;
`
export const InputEmail = styled.div`
max-width: 480px;
width: 100%;
`
export const InputLabel = styled.label`
color: #fff;
font-size: 12px;
font-weight: 500;

span {
    color: #ef4f45;
    font-weight: bold;
}
`
export const Button = styled.button`
padding: 12px 20px;
border-radius: 30px;
border: none;
font-size: 16px;
background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
color: #fff;
width: fit-content;
cursor: pointer;

&:hover {
opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`
