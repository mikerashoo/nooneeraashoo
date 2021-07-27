import React from 'react'
import { Col, Row, Button, Card, Typography, Tag, Alert } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../fragments/Logo'
import { FullScreeWrapper, VerticallyAligned } from '../styled/common'
import { CircleButton, ContentWrapper, LogoWrapper, TuritoDetailWrapper } from '../styled/turito'  
import {TOURISM_IMGS} from '../assets/imgs/tourisms'
import { useState } from 'react'
import {shaahiyoos} from '../assets/files/shaahiyoo'
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons'
function Shaahiyoo() {
     
    const shaahiyoo_count = shaahiyoos.length; 
    const [shaahiyooIndex, setShaahiyooIndex] = useState(0);
    const onChangeShaahiyoo = is_next => {
        if(is_next){             
            if(shaahiyooIndex == shaahiyoo_count - 1){
                setShaahiyooIndex(0)
            }
            else{
                setShaahiyooIndex(shaahiyooIndex + 1)
            }
        }
        else {
            if(shaahiyooIndex == 0){
                setShaahiyooIndex(shaahiyoo_count - 1)
            }
            else{
                setShaahiyooIndex(shaahiyooIndex - 1)
            }
        }
        
    }
    
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
                <Row style={{height: '100%'}}>
                    <Col span={2}>
                        <VerticallyAligned> 
                            <CircleButton  onClick={() => onChangeShaahiyoo(false)}> <DoubleLeftOutlined /> </CircleButton>
                        </VerticallyAligned>
                    </Col>
                    <Col span={18} offset={1}>
                        <VerticallyAligned style={{textAlign: 'center'}}>                     
                            <Typography.Text italic style={{fontSize: '3em'}}>
                               " {shaahiyoos[shaahiyooIndex].kafinoonoo } "
                            </Typography.Text>
                        </VerticallyAligned>
                    </Col>
                    <Col span={2} offset={1}>
                        <VerticallyAligned>
                            <CircleButton onClick={() => onChangeShaahiyoo(true)}> <DoubleRightOutlined /> </CircleButton>                    
                        </VerticallyAligned>
                    </Col>
                </Row>
            </ContentWrapper>
        </FullScreeWrapper>
        )
    }
    
    export default Shaahiyoo;
    