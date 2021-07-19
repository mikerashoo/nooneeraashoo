import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ClickableWord } from '../styled/dictionary';
import { Empty } from 'antd';
import { setSelectWordAction } from '../actions/wordsActions';
import { useDispatch } from 'react-redux';

function DictionaryWords(props) {

    const words_state = useSelector(state => state.words) 
    const lang = words_state.selectedLanguage; 
    const words = words_state.words;
    const dispatch = useDispatch();
   const onWordSelect = (word) => {
    dispatch(setSelectWordAction(word));
   }
    return (
        <div>
            {
                words.length ? <ul style={{listStyle: 'none', width: '100%', margin: 0, padding: 5}}>
                {
                    words.map((word, key) => <ClickableWord key={key} selected={words_state.selectedWord == word} onClick={() => onWordSelect(word) }>
                    {word.kafinoonoo} {lang != "kaffi" && <span style={{color: 'green', marginLeft: 20}}>
                            {lang == 'amh' ? word.amharic : word.english}
                        </span>} <span style={{float: 'right', fontSize: '.8em'}}>{word.type}</span>
                    </ClickableWord>)
            }
                </ul> 
                :
                <div style={{paddingTop: '50%'}}>
                    <Empty description={<div>
                        Qaaweeti mihoo aala <div className="clearfix"/>
                        የተፈለገው ቃል አልተገኘም <div className="clearfix"/>
                        No words available <div className="clearfix"/>
                    
                    </div>}/>
                </div>
            }
             
        </div>
    )
}

export default DictionaryWords
