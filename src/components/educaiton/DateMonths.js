import { Button, Card, List } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import sendAsync from '../../message-control/renderer'; 
import {fetchDatesAction, setMonthsAction} from '../../actions/educationAction'
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import { SoundOutlined } from '@ant-design/icons';
function DateMonths(props) {

  const dispatch = useDispatch();  

	const educationState = useSelector(state => state.educationState);
	const dates = educationState.dates;
	const months = educationState.months;
    return (        
        <Card title={<div>Heeyina'o </div>} >
          <List
    itemLayout="horizontal"
    dataSource={props.type == 'dates' ? dates.data : months.data}
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 4,
    }}
    renderItem={data => (
      <List.Item>
        <List.Item.Meta
          avatar={   
            <Button key="list-loadmore-edit" style={{borderRadius: '50%', width: 40, height: 40}}><SoundOutlined /></Button>
          }
          title={<a href="https://ant.design">{data.kafinoonoo}</a>}
          description={<div>{data.amharic} <div className="clearfix"></div>{data.english}</div>}
          
          />
      </List.Item>
    )}
  />
             
        </Card>
    )
}

export default DateMonths
