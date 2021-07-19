import React from 'react'
import { Card, Empty, Typography, Divider } from 'antd'
import { useSelector } from 'react-redux' 
import PlaySoundButton from './PlaySoundButton';
const {Text, Title} = Typography;
export default function WordDetail() {
    const words_state = useSelector(state => state.words);
    const word = words_state.selectedWord;
    const mySound = require("../assets/audio/sound.mp3"); 

    return (
        <Card loading={words_state.loading} title={word && <>{word.kafinoonoo} <Text code type="success">{word.type}</Text></>} extra={
            word && <span><PlaySoundButton sound={mySound}/></span>
        } style={{boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }}> 
              {
                word ? <div>
                        <div className="clearfix"/>
                    <Title level={4}>አማረኛ ፡ {word.amharic}</Title>
                    <Divider />

                    <Title level={4}>English ፡ {word.english} </Title>
                    </div> :
                    <Empty description={<div>
                        <p>Kaacheti mihoo aala</p>
                        <p>የተመረጠ ቃል የለም</p>
                        <p>No word selected</p>
                    </div>} />
                }
            
        </Card>
    )
}
