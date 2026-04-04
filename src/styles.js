import styled from "styled-components";

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
gap: 15px;
margin-bottom: -60px; //obs.: solução que encontrei para aproximar um pouco dos outros inputs
`
export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 12px 20px;
outline: none;
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

`
