import React from 'react'
import { Col, Row, Button, Card, Typography, Tag, Alert, Popover } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../fragments/Logo'
import { FullScreeWrapper, VerticallyAligned } from '../styled/common'
import { CircleButton, ContentWrapper, LogoWrapper, TuritoDetailWrapper } from '../styled/turito'  
import {TOURISM_IMGS} from '../assets/imgs/tourisms'
import { useState } from 'react'
import {turitos} from '../assets/files/turito'
import {CheckOutlined, DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons'
function Turito() {
    
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
        else{
            if(imgIndex == 0){
                setimgIndex(img_counts - 1);
            }
            else {
                setimgIndex(imgIndex - 1);
            }
            
            if(turitoIndex == 0){
                setTuritoIndex(turito_counts - 1)
            }
            else{
                setTuritoIndex(turitoIndex - 1)
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
                            <Link to="/">About</Link>
                        </Col>
                    </Row> 
                </VerticallyAligned>
            </LogoWrapper>
            <ContentWrapper>
                <Row style={{height: '100%'}}>
                    <Col span={2}>
                        <VerticallyAligned> 
                            <CircleButton onClick={() => onChangeTurito(false)}> <DoubleLeftOutlined /> </CircleButton>
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
                                            <Typography.Title level={3}>Turi turi....</Typography.Title>
                                            <Typography.Paragraph italic style={{fontSize: '2em'}}>
                                            {turitos[turitoIndex].question }
                                            </Typography.Paragraph>
                                            <Popover content={<Typography.Text style={{color: 'green'}} > <CheckOutlined /> {turitos[turitoIndex].answer } </Typography.Text>}>
                                                <Button>Wochoo Beegi</Button>
                                            </Popover>                             
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
    
    export default Turito
    