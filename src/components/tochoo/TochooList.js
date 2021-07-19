import React from 'react'
import { List, Avatar, Button, Skeleton, Card } from 'antd';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import { selectTochooAction } from '../../actions/tochooAction';
 
function TochooList() {
    const tochoo_state = useSelector(state => state.tochoo_state);
    const dispatch = useDispatch();
    const onTochooSelect = tochoo => {
      dispatch(selectTochooAction(tochoo));
    }
    return (
      <Card loading={tochoo_state.loading}>
      <List
        className="demo-loadmore-list" 
        itemLayout="horizontal" 
        dataSource={tochoo_state.tochoos}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}    
        renderItem={tochoo => (
          <List.Item>
            <Skeleton avatar title={false} loading={tochoo_state.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a onClick={()=>onTochooSelect(tochoo)}>{tochoo.name}</a>} 
              /> 
            </Skeleton>
          </List.Item>
        )}
      />
      </Card>
    ); 
}

export default TochooList;
