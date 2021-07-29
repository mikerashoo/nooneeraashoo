import React, { useState } from 'react'
import sendAsync from '../message-control/renderer'; 
import {EDUCATION_IMGS} from '../assets/imgs/educations'
import { Row, Col, Avatar, Image } from 'antd';
import { CircleButton, ContentWrapper, LogoWrapper, TuritoDetailWrapper } from '../styled/turito'  
import Logo from '../fragments/Logo';
import { Link } from 'react-router-dom';
import { FullScreeWrapper, VerticallyAligned } from '../styled/common';

function Generals() {
    
    const [generals, setGenerals] = useState([]);
    let general_sqls = "SELECT * FROM generals";
    sendAsync(general_sqls).then((generals) => {
        setGenerals(generals);
    });
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
        <div>
        {
            <Row gutter={[16]}>
            {
                generals.map((general, index)=> 
                <Col key={index}>
                <Avatar
                shape="circle"
                style={{
                    backgroundColor: '#f56a00',
                  }}           
                src={<Image src={EDUCATION_IMGS[index]} />}
                />
                <b>{general.kafinoonoo}</b>
                
                </Col>)
            }
            </Row>
        }
        </div>
            </ContentWrapper>
            </FullScreeWrapper>
       
        )
    }
    
    export default Generals
    