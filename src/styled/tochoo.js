import { Col } from "antd";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
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

export const TochooDetailWrapper = styled.div`
    padding: 2%; 
    background: #e7e7f3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left,#e7e7f3,#dddaf5,#e0deef);  
    background: linear-gradient(to left,#e7e7f3,#dddaf5,#e0deef);
    `