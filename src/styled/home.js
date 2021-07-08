import styled from "styled-components"; 
import { Card } from 'antd'
import {Link} from 'react-router-dom'
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
    height: 75%;
    width: 100%; 
    box-shadow: 0 0 10px #fff;
    transition: 0.3s; 
`

export const SponsorWrapper = styled.div`
    position: relative;
    height: 15%;
    width: 100%; 
    background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
& > * {
    align-text: center;
}
`

export const MenuItem = styled(Card)` 
    justify-content: center;
    align-items: center;
    display: block; 
  background-color: #f2f8f9;
  border-radius: 4px; 
  position: relative;
  top: 0px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #f2f8f9;
    flex: 1;
    & > *{
    text-align: center;
    align-items: center; 
    margin: 0; 
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 0 !important;
    }
  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #cccccc;
    background-color: white;
  }
 
`

export const MenuIconWrapper = styled.span`
    color: ${props => props.theme.main};
    font-size: 2em;
    margin: 0 !important;

`