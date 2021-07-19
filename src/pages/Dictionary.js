import { Col, Input, Row, Select } from 'antd';
import React from 'react'
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { letters } from '../constants/alphabets';
import Logo from '../fragments/Logo'; 
import { FullScreeWrapper } from '../styled/common';
import { AlphabetLink, ContentWrapper, LogoWrapper, WordsWrapper } from '../styled/dictionary';
import '../assets/css/dictionary.css';
import DictionaryWords from '../fragments/DictionaryWords';
import {fetchWordsAction, searchWordAction, selectLetterAction, selectLanguageAction} from '../actions/wordsActions'
import WordDetail from '../fragments/WordDetail';

function Dictionary() {  
    const words_state = useSelector(state => state.words)
    const dispatch = useDispatch();
    
    const onLanguageSelect = lang => {
        dispatch(selectLanguageAction(lang)); 
    }
     
    const onLetterSelect = letter => {
        dispatch(selectLetterAction(letter)); 
    }

    useEffect(() => {     
            dispatch(fetchWordsAction()); 
    }, [dispatch]);

    const onSearch = value => { 
        dispatch(searchWordAction(value, selectedLanguage));
    }

    const {Option} = Select;
    const selectedLanguage = words_state.selectedLanguage; 
    const selectedLetter = words_state.selectedLetter;   
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
                    <AlphabetLink key={letter} selected={selectedLetter == letter} onClick={() => onLetterSelect(letter)}> {letter}</AlphabetLink>
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
                <Input.Search addonBefore={selectBefore} enterButton onSearch={onSearch}/>
                </div>
                    <DictionaryWords />
                </WordsWrapper>
                
                <Col flex="auto" style={{padding: '5%'}}>
                    <WordDetail />
                </Col>
                </Row>
                
                </ContentWrapper>
                
                </FullScreeWrapper>
                )
            }
            
            export default Dictionary
