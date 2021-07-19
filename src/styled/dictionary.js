import { Col } from "antd";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const LogoWrapper = styled.div`
    position: relative;
    height: max-content;
    width: 100%; 
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `

export const AlphabetLink = styled.div`
    position: relative;
    border: solid 1px green; 
    height: 100%; 
    flex: 1;
    color: white; 
    text-align: center;
    justify-content: center;
    align-items: center;  
    &:hover {
        transition: all 0.2s ease-out;
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2); 
        border: 1px solid #cccccc;
        background-color: white;
        color: green;
        font-size: 1.4em;
    }
    ${props =>
    props.selected &&
    css` 
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2); 
        border: 1px solid #cccccc;
        background-color: white;
        color: green; 
    `}
`
export const ContentWrapper = styled.div`
    position: relative; 
    height: 95%;
    width: 100%;  
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