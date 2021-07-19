import { Row, Col } from 'antd'
import React from 'react'
import Logo from '../fragments/Logo'
import {TochooDetail, TochooList} from '../components/tocho\o'
import { FullScreeWrapper, VerticallyAligned } from '../styled/common'
import { LogoWrapper, ContentWrapper } from '../styled/tochoo'
import { useDispatch } from 'react-redux'
import {fetchTochoosAction} from '../actions/tochooAction'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Tochoo() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTochoosAction())
    }, [dispatch])
    return (
        <FullScreeWrapper>
        <LogoWrapper> 
        <VerticallyAligned>
        <Row>
        <Col span={16} offset={1}>
        <Logo />
        </Col>
        <Col flex="auto" offset={2}>
                <Link to="/">About</Link>
            </Col>
            </Row> 
            </VerticallyAligned>
            </LogoWrapper>
            <ContentWrapper>
                <Row style={{overflowY: 'auto', height: '100%'}}>
                    <Col span={7}>
                        <TochooList />
                    </Col>
                    <Col span={16} offset={1}>
                        <TochooDetail />
                    </Col>
                </Row>
            </ContentWrapper>
            </FullScreeWrapper>
    )
}

export default Tochoo
