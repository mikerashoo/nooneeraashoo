import { Col } from "antd";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const LogoWrapper = styled.div`
    position: relative;
    height: 5%;
    width: 100%; 
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `

export const ContentWrapper = styled.div`
    position: relative;  
    width: 100%;   
    height: 95%;
    background-color: whitesmoke; 
`
export const ConversationDateWeekWrapper = styled.div`
    position: absolute;
    top: 2%;
    bottom: 22%;
    left: 2%; 
    right: 2%; 
    display : flex;
`
export const NumberLetterWrapper = styled.div`
    position: absolute;  
    padding: 2% 3%;
    background-color: red;
    left: 2%; 
    right: 2%;  
    bottom: 2%;
    top: 82%;
`

export const WordsWrapper = styled(Col)`
    background-color: ${props => props.theme.basic};
    height: 100%;
    flex: 1;
`

export const ClickableWord = styled.li`
    position: relative;
    border: solid 1px white;  
    flex: 1;  
    padding: 10px;
    box-shadow: -2px 2px 2px rgba(38,38,38,0.2);  
    width: 100%;
    background-color: whitesmoke;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-out;
        border: 1px solid #cccccc;
        background-color: white;
        color: green; 
    }
    ${props =>
    props.selected &&
    css`  
        border-right: 10px solid green;
        background-color: white;
        color: green; 
    `}
`

export const SoundWrapper = styled.span`
    font-size: 2em; 
    cursor: pointer; 
    &:hover {
        transition: all 0.2s ease-out;  
        color: green; 
        font-size: 2.5em;
    }
`