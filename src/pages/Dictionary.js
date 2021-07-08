import { Col, Input, Row, Select } from 'antd';
import React, {useState} from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { letters } from '../constants/alphabets';
import Logo from '../fragments/Logo';
import sendAsync from '../message-control/renderer';
import { FullScreeWrapper, VerticallyAligned } from '../styled/common';
import { AlphabetLink, ContentWrapper, LogoWrapper, WordsWrapper } from '../styled/dictionary';
import '../assets/css/dictionary.css';
import DictionaryWords from '../fragments/DictionaryWords';
function Dictionary() {
    const [statement, setStatement] = useState('SELECT * FROM words');
    const [words, setWords] = useState([]);
    const [error, setError] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('kaffi');
    const [selectedLetter, setSelectedLetter] = useState(null);

    const fetchAllWords = (sql) => {
        console.log(sql);
        sendAsync(sql).then((result) => onWordsFetch(result));
    }
    
    const onWordsFetch = (result) => {
        let words = JSON.stringify(result, null, 2);
        
        if(words){
            setWords(result);
        }
    }
    useEffect(() => {        
        fetchAllWords(statement); 
    }, [statement]);

    const onLanguageSelect = lang => {
        setSelectedLanguage(lang);
    }

    console.log('selected letter', selectedLetter);
    
    const {Option} = Select;
    const selectBefore = (
        <Select defaultValue={selectedLanguage} className="select-before" onChange={onLanguageSelect}>
        <Option value="kaffi">Kaffi</Option>
        <Option value="amh">አማ</Option>
        <Option value="eng">Eng</Option>
        </Select>
        ); 
        return (
            <FullScreeWrapper>
            <LogoWrapper> 
            <Row>
            <Col flex="none">
            <Logo />
            </Col>
            <Col flex="auto">
            <div id="alphabets_wrapper_ul">
            {
                letters.map(letter => 
                    <AlphabetLink key={letter} selected={selectedLetter == letter} onClick={() => setSelectedLetter(letter)}> {letter}</AlphabetLink>
                    )
                }
                </div>
                </Col>
                </Row> 
                </LogoWrapper>
                
                <ContentWrapper>
                <Row style={{height: '100%'}}>
                <WordsWrapper span={6}>
                <div style={{ padding: 16 }}>
                <Input.Search addonBefore={selectBefore} enterButton/>
                </div>
                    <DictionaryWords words={words} lang={selectedLanguage}/>
                </WordsWrapper>
                
                <Col flex="auto">
                Tempor consequat labore laborum occaecat laborum non.
                </Col>
                </Row>
                
                </ContentWrapper>
                
                </FullScreeWrapper>
                )
            }
            
            export default Dictionary
