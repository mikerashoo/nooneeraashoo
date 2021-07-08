import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/imgs/green-logo.png'
import { LogoImgStyled, LogoWrapper } from '../styled/common'

function Logo() {
    return (
        <Link to="/">
        <LogoWrapper>
           <LogoImgStyled src={LogoImg} /> 
        </LogoWrapper>
        </Link>
    )
}

export default Logo
