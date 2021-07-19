import React from 'react'
import { Col, Row, Button, Card, Typography, Tag, Alert } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../fragments/Logo'
import { FullScreeWrapper, VerticallyAligned } from '../styled/common'
import { CircleButton, ContentWrapper, LogoWrapper, TuritoDetailWrapper } from '../styled/turito'  
import {TOURISM_IMGS} from '../assets/imgs/tourisms'
import { useState } from 'react'
import {turitos} from '../assets/files/turito'
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons'
function Shaahiyoo() {
    
    const img_counts = TOURISM_IMGS.length;
    const turito_counts = turitos.length;
    const [imgIndex, setimgIndex] = useState(0);
    const [turitoIndex, setTuritoIndex] = useState(0);
    const onChangeTurito = is_next => {
        if(is_next){
            if(imgIndex == img_counts - 1){
                setimgIndex(0);
            }
            else {
                setimgIndex(imgIndex + 1);
            }
            
            if(turitoIndex == turito_counts - 1){
                setTuritoIndex(0)
            }
            else{
                setTuritoIndex(turitoIndex + 1)
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
                            <CircleButton> <DoubleLeftOutlined /> </CircleButton>
                        </VerticallyAligned>
                    </Col>
                    <Col span={18} offset={1}>
                        <VerticallyAligned>                     
                            <TuritoDetailWrapper> 
                                <Row gutter={[16, 16]}>
                                    <Col span={6}>
                                        <img src={TOURISM_IMGS[imgIndex]} style={{height: '150px', width: '100%'}}/>
                                    </Col>
                                    <Col span={18}>
                                        <VerticallyAligned>
                                            <Typography.Title>Turi turi....</Typography.Title>
                                            <Typography.Paragraph italic style={{fontSize: '1.4em'}}>
                                            {turitos[turitoIndex].question }
                                            </Typography.Paragraph>
                                            <Alert message={turitos[turitoIndex].answer } type="info" style={{width: 'max-content'}}/>                                
                                        </VerticallyAligned>
                                    </Col>
                                </Row>
                            </TuritoDetailWrapper>
                        </VerticallyAligned>
                    </Col>
                    <Col span={2} offset={1}>
                        <VerticallyAligned>
                            <CircleButton onClick={() => onChangeTurito(true)}> <DoubleRightOutlined /> </CircleButton>                    
                        </VerticallyAligned>
                    </Col>
                </Row>
            </ContentWrapper>
        </FullScreeWrapper>
        )
    }
    
    export default Shaahiyoo;
    