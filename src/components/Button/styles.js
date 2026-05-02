import styled from "styled-components";

export const Button = styled.button`
padding: 12px 20px;
border-radius: 30px;
border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
font-size: 16px;
background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
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