import styled from "styled-components";
import {Button, Card} from 'antd'
export const LogoWrapper = styled.div`
    position: relative;
    height: 10%;
    width: 100%; 
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `
export const ContentWrapper = styled.div`
    position: relative; 
    height: 90%;
    width: 100%;  
    padding: 5%;
    background-color: ${props => props.theme.basic};
`  

export const TuritoDetailWrapper = styled(Card)` 
box-shadow: 14px 9px 5px -2px rgba(202,174,174,0.53);
-webkit-box-shadow: 14px 9px 5px -2px rgba(202,174,174,0.53);
-moz-box-shadow: 14px 9px 5px -2px rgba(202,174,174,0.53);
`
export const CircleButton = styled(Button)`
    height: 80px;
    width: 80px;
    border-radius: 40px;
`
