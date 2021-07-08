import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../fragments/Logo'
import { FullScreeWrapper, VerticallyAligned } from '../styled/common'
import { LogoWrapper, ContentWrapper, SponsorWrapper, MenuIconWrapper, MenuItem } from '../styled/home'
import { Row, Col, Card } from 'antd'
import { menus } from '../constants/main-menus'
import '../assets/css/home.css'

function Home() {
    return (
        <FullScreeWrapper>
            <LogoWrapper>
                <VerticallyAligned>
                 <Row id="logo_area_wrapper">
                     <Col span={12}>
                        <Logo />
                     </Col>
                     <Col offset={6} span={6}>
                        <Link to="/">About</Link>
                     </Col>
                </Row>
                </VerticallyAligned>
            </LogoWrapper>
            <ContentWrapper>
                <Row type="flex" gutter={[16, 16]} id="content_area_wrapper"> 
                    {
                        menus.map((menu, k) => 
                        <Col span={6} key={k}>  
                            <Link to={menu.link}>
                            <MenuItem to="/">
                            <h1>
                            <MenuIconWrapper>
                            {menu.icon}
                            </MenuIconWrapper>
                            </h1>
                            <h2>
                            {menu.name}
                            </h2>
                            <h3>
                            {menu.amharic} | {menu.english}
                            </h3>
                        </MenuItem> 
                        </Link>
                    </Col>
                    )
                    }
                </Row>
            </ContentWrapper>
            <SponsorWrapper>
                <VerticallyAligned>
                <h1 style={{textAlign: 'center', color: 'golden'}}>Werkama Tech </h1>
                </VerticallyAligned>
            </SponsorWrapper>
        </FullScreeWrapper>
    )
}

export default Home
