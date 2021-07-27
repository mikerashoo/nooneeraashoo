import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom';
import Logo from '../fragments/Logo'; 
import { FullScreeWrapper } from '../styled/common';
import { ContentWrapper, ConversationDateWeekWrapper, LogoWrapper, NumberLetterWrapper } from '../styled/education'; 
import {Communication, DateMonths, AlphabetNumber} from '../components/educaiton'
import "../assets/css/education.css"; 
import sendAsync from '../message-control/renderer'; 
import { useDispatch } from 'react-redux';
import { setCommunicationCategoriesAction, setCommunicationsAction, setDatesAction, setMonthsAction } from '../actions/educationAction';


function Education() {  
    
    const dispatch = useDispatch(); 

    useEffect(() => {
        const dateMonthAbortController = new AbortController;
		if(!dateMonthAbortController.signal.aborted){
			// dispatch(fetchDatesAction());
			let date_sql = `SELECT * FROM dates`;  
			let months_sql = `SELECT * FROM months`;  
			let categories_sql = `SELECT * FROM communication_categories`;  
           
                sendAsync(categories_sql).then((categories) => {
                    dispatch(setCommunicationCategoriesAction(categories)); 
                    let commns_sql = `SELECT * FROM communications WHERE category_id = ${categories[0].id}`;
                    sendAsync(commns_sql).then((communications) => {
                        dispatch(setCommunicationsAction(communications));
                        sendAsync(months_sql).then((months) => {
                            dispatch(setMonthsAction(months));
                            sendAsync(date_sql).then((result) => {
                                dispatch(setDatesAction(result));
                            });
                        });
                    
                    });
                });
		}
		return () => {
			dateMonthAbortController.abort();
		}
    }, [dispatch]);
 
    return (
        <FullScreeWrapper>
        <LogoWrapper> 
        <Row>
        <Col span={11} offset={1}>
        <Logo />
        </Col>
        <Col span={6} offset={6}>
            <Link to="/">About</Link>
        </Col>
        </Row> 
        </LogoWrapper>
        
        <ContentWrapper>  
            <ConversationDateWeekWrapper>
                <Row gutter={[16]} style={{width: '100%'}} >
                    <Col span={16} style={{height: '100%'}}> 
                            <Communication  /> 
                    </Col>
                    <Col span={4}>
                    <DateMonths type="dates" />

                    </Col>
                    <Col span={4}>
                            <DateMonths type="months" />
                            
                    </Col>
                </Row> 
                </ConversationDateWeekWrapper>
         <NumberLetterWrapper>?</NumberLetterWrapper>
          
        </ContentWrapper>        
        </FullScreeWrapper>
        )
    }
    
    export default Education
    