import React, { useEffect, useState } from 'react'
import sendAsync from '../message-control/renderer'; 
import {EDUCATION_IMGS} from '../assets/imgs/educations'
import { Row, Col, Avatar, Image, Tabs, Card } from 'antd';
import { CircleButton, ContentWrapper, LogoWrapper, TuritoDetailWrapper } from '../styled/turito'  
import Logo from '../fragments/Logo';
import { Link } from 'react-router-dom';
import { FullScreeWrapper, VerticallyAligned } from '../styled/common';
import "../assets/css/generals.css"
import Meta from 'antd/lib/card/Meta';
const {TabPane} = Tabs;

const samples = [
    {
        kafinoonoo: "Gaashoo",
        amharic: "asdfa", 
        english: ""
    }
]
function Generals() {
    
    const [generals, setGenerals] = useState([]);
    const [selectedGeneralId, setSelectedGeneralId] = useState(null);
    const [generalItems, setGeneralItems] = useState([]);
    let general_sqls = "SELECT * FROM generals";

    useEffect(() => {
        sendAsync(general_sqls).then((generals) => {
            setGenerals(generals);
            setSelectedGeneralId(generals[0].id);
            let general_items_sql = `SELECT * FROM general_items WHERE general_id = ${selectedGeneralId}`;
            sendAsync(general_items_sql).then(items => { 
                setGeneralItems(items);
            });
        });
    }, [])
   

    const onTabChange = id => { 
        setSelectedGeneralId(id);
        let general_items_sql = `SELECT * FROM general_items WHERE general_id = ${id}`; 
        sendAsync(general_items_sql).then(items => { 
            setGeneralItems(items);
        })
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
        
       <div className="card-container">
       <Tabs type="card" onChange={onTabChange}>
           {
               generals.map((general, index) => 
               <TabPane key={general.id} tab={
                   <div>
                       <Avatar shape="circle" src={<Image src={EDUCATION_IMGS[index]} />} />
                        <b>{general.kafinoonoo}</b>
                   </div>
               }>
                <Row gutter={[16, 16]}>
                    {
                        generalItems.map((item, i) => <Col span={4} key={item.id} style={{textAlign: 'center'}}>
                            <Card
                            cover={
                                <img
                                  alt="example"
                                  src={require(`../assets/imgs/general/animals/${item.english.toLowerCase()}.png`)}
                                />
                              }
                          > 
                          <Meta
                            title={item.kafinoonoo}
                            description={item.amharic + ":" + item.english}
                            />

                            </Card>
                          
                        </Col>)
                    }
                </Row>
             </TabPane>)
           } 
       </Tabs> 
       </div> 
            </ContentWrapper>
            </FullScreeWrapper>
       
        )
    }
    
    export default Generals
    