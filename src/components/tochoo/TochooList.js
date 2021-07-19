import React from 'react';
import { List, Avatar, Skeleton, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectTochooAction } from '../../actions/tochooAction';

function TochooList() {
    const tochooState = useSelector((state) => state.tochooState);
    const dispatch = useDispatch();
    const onTochooSelect = (tochoo) => {
        dispatch(selectTochooAction(tochoo));
    };
    return (
        <Card loading={tochooState.loading}>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={tochooState.tochoos}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 5,
                }}
                renderItem={(tochoo) => (
                    <List.Item>
                        <Skeleton
                            avatar
                            title={false}
                            loading={tochooState.loading}
                            active >
                            <List.Item.Meta 
                                title={
                                    <a onClick={() => onTochooSelect(tochoo)}>
                                        {tochoo.name}
                                    </a>
                                }
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Card>
    );
}

export default TochooList;
