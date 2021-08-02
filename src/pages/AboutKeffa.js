import React from 'react' 
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../fragments/Logo'
import { FullScreeWrapper, VerticallyAligned } from '../styled/common' 
import { ContentWrapper, LogoWrapper } from '../styled/turito'
function AboutKeffa() {
   
    return (
        <FullScreeWrapper>
            <LogoWrapper> 
                <VerticallyAligned>
                    <Row>
                        <Col span={16} offset={1}>
                            <Logo />
                        </Col>
                        <Col flex="auto" offset={2}>
                            <Link to="/">About Me</Link>
                        </Col> 
                    </Row> 
                </VerticallyAligned>
            </LogoWrapper>
            <ContentWrapper>
                <Card>
                    
                </Card>
            </ContentWrapper>
        </FullScreeWrapper>
        )
    }
    
    export default AboutKeffa;
    