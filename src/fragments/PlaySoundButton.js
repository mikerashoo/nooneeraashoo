import React from 'react'
import { SoundOutlined } from '@ant-design/icons';
import useSound from 'use-sound'; 
import { SoundWrapper } from '../styled/dictionary'; 

function PlaySoundButton(props) {
  const [play] = useSound(props.sound);

    return (
        <SoundWrapper onClick={play}><SoundOutlined /></SoundWrapper>
    )
}

export default PlaySoundButton
