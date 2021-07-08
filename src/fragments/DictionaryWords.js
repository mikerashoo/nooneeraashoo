import React from 'react'
import { useState } from 'react';
import { ClickableWord } from '../styled/dictionary';

function DictionaryWords(props) {
    const words = props.words; 
    const lang = props.lang;
    const [selectedWord, setSelectedWord] = useState(null);  
   
    return (
        <div>
            {
                words ? <ul style={{listStyle: 'none', width: '100%', margin: 0, padding: 0}}>
                {
                    words.map((word, key) => <ClickableWord key={key}>
                    {word.kafinoonoo} {lang != "kaffi" && <span style={{color: 'green'}}>
                            {lang == 'amh' ? word.amharic : word.english}
                        </span>}
                    </ClickableWord>)
                }
                </ul> 
                :
                <h1>No words</h1>
            }
             
        </div>
    )
}

export default DictionaryWords
