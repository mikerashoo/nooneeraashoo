import { FieldBinaryOutlined, FontColorsOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Card, Col, Row, Tabs } from 'antd'
import React from 'react'
import {Letters, Numbers} from '../../assets/files/letternumber'
import { LetterNumber } from '../../styled/education'

function AlphabetNumber() {
    const {TabPane} = Tabs;
    return (
        <Card style={{padding: 0}}>
        <Tabs defaultActiveKey="number" tabPosition="left">
        <TabPane tab={<> <FontColorsOutlined /> Miheena'o </>} key="number">
        <Row>
        {
            Letters.map((letter) => 
            <Col key={letter.kafinoonoo} flex="auto">
            <LetterNumber>
            
            <span class='superscript'>{letter.amharic}</span>
            
            <h1> {letter.kafinoonoo} </h1>  
            <span class='subscript'>{letter.english}</span> 
            
            </LetterNumber>
            
            </Col>
            )
        }
        </Row>
        </TabPane>
        <TabPane tab={<><FieldBinaryOutlined /> Haadena'o </>} key="letter">
        <Row>
        {
            Numbers.map((letter) => 
            <Col key={letter.kafinoonoo} flex="auto">
            <LetterNumber>
            
            <span class='superscript'>{letter.kafinoonoo}</span>
            
            <h1> {letter.number} </h1>  
            <span class='subscript'>{letter.amharic}</span> 
            
            </LetterNumber>
            
            </Col>
            )
        }
        </Row>
        </TabPane>
        </Tabs>
        
        </Card>
        )
    }
    
    export default AlphabetNumber
    