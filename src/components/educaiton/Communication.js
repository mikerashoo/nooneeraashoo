import React, { useEffect, useState } from 'react'
import { Button, Card, Skeleton, Tabs, List } from 'antd' 
import Avatar from 'antd/lib/avatar/avatar'; 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {fetchCommunicationCategoriesAction, fetchCommunicationsAction } from '../../actions/educationAction'
import {SoundOutlined} from '@ant-design/icons'
const {TabPane} = Tabs;
function Communication() {

	const educationState = useSelector(state => state.educationState); 
  const selected_category_id = educationState.selected_category_id;
	const dispatch = useDispatch();

    const onTabChange = (key) => {
      dispatch(fetchCommunicationsAction(key));
    }

    
	const categories = educationState.categories;
 
	const communications = educationState.communications;
    return (
        <Card loading={categories.loading} style={{height: '100%'}}>
        <Tabs defaultActiveKey={selected_category_id} onChange={onTabChange}>
            {categories.data.map(category => 
                    <TabPane tab={`${category.kafinoonoo} | ${category.amharic} | ${category.english}`} key={category.id}>
                          <List
                            className="demo-loadmore-list" 
                            itemLayout="horizontal" 
                            dataSource={communications.data}
                            renderItem={communication => (
                              <List.Item 
                              >
                                <Skeleton active loading={false}>
                                  <List.Item.Meta
                                    avatar={
                                      <Button key="list-loadmore-edit" style={{borderRadius: '50%', width: 40, height: 40}}><SoundOutlined /></Button>
                                    }
                                    title={<p>{communication.kafinoonoo}</p>}
                                    description={<div>{communication.amharic} <div className="clearfix"></div>{communication.english}</div>}
                                  /> 
                                </Skeleton> 
                              </List.Item>
                            )}
                          />

                  </TabPane>  
                    )
            }
       
      </Tabs>
      </Card>
    )
}

export default Communication
