import React, { useEffect, useState } from 'react'
import sendAsync from '../message-control/renderer'; 
import { Col, Row, Card, Tabs, Table } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../fragments/Logo'
import { FullScreeWrapper, VerticallyAligned } from '../styled/common'
import {ContentWrapper, LogoWrapper } from '../styled/turito'   
 
const Icon = ({type, ...rest}) => {
    const icons = require(`@ant-design/icons`);
    const Component = icons[type];
    return <Component {...rest}/>
  }
const {TabPane} = Tabs;
function Shuunoo() {
    const [offices, setOffices] = useState([]);
    const [office_words, setOfficeWords] = useState([]);
    const [selectedOfficeId, setSelectedOfficeId] = useState(null);
    let office_sqls = "SELECT * FROM offices";

    useEffect(() => {
        sendAsync(office_sqls).then((offices) => {
            console.log("offices ", offices);
            setOffices(offices);
            setSelectedOfficeId(offices[0].id);
            let office_words_sql = `SELECT * FROM office_words WHERE office_id = ${offices[0].id}`;
            sendAsync(office_words_sql).then(words => {
                setOfficeWords(words)
            });
        });
    }, []);

    const wordsColumns = [
        {
            title: 'Kafinoonoo',
            dataIndex: 'kafinoonoo'
        },
        {
            title: 'አማረኛ',
            dataIndex: 'amharic'
        },{
            title: 'English',
            dataIndex: 'english'
        },
    ]

    const onTabChange = office_id => {
        setSelectedOfficeId(office_id); 
        let office_words_sql = `SELECT * FROM office_words WHERE office_id = ${office_id}`;
        sendAsync(office_words_sql).then(words => {
            setOfficeWords(words)
        });
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
                <Card>
                    <Tabs defaultActiveKey="1" tabPosition="left" onChange={onTabChange}>
                        {
                            offices.map(office => <TabPane key={office.id} tab={
                                <span>  
                                <Icon type={`${office.logo}`}/>
                                {office.kafinoonoo}
                              </span>
                            }>
                                <Card title={office.kafinoonoo}> 
                                <Table columns={wordsColumns} dataSource={office_words} rowKey="id"/>
                                </Card>

                            </TabPane>)
                        }
                    </Tabs>
                </Card>
            </ContentWrapper>
        </FullScreeWrapper>
        )
    }
    
    export default Shuunoo;
    