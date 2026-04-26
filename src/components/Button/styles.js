import styled from "styled-components";

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