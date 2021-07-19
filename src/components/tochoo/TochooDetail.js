import React from 'react';
import { Card, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { TochooDetailWrapper } from '../../styled/tochoo';

const { Title, Paragraph } = Typography;

function TochooDetail() {
    const tochooState = useSelector((state) => state.tochooState);
    return (
        <TochooDetailWrapper>
            <Title level={2} style={{color: '#0f0c29', textAlign: 'center'}}>
                {tochooState.selected_tochoo &&
                    tochooState.selected_tochoo.name}
            </Title>
            <Paragraph italic style={{fontSize: '1.4em'}}>
                {tochooState.selected_tochoo &&
                    tochooState.selected_tochoo.description}
            </Paragraph>
        </TochooDetailWrapper>
    );
}

export default TochooDetail;
