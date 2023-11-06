import { Card, Divider, List, Space, Typography } from 'antd';
import React from 'react';
import CardImage from '@/assets/cards/card-image.png';
import './styles.less';
const index = () => {
  const { Title, Text } = Typography;
  const items = [
    '24 Hour Check-In',
    'Business center',
    'Hot tub',
    'Fitness center',
    'Patio',
    'Room service',
    'Vending machines',
    'Fitness center',
    'Hot tub',
    'Fitness center',
    'Patio',
    'Room service',
    'Fitness center',
    'Business center',
    'Hot tub',
    'Fitness center',
    'Patio',
    'Room service',
  ];
  return (
    <Card>
      <Space direction="vertical" className="card-content">
        <Title level={5} className="card-title">
          Thông tin hạng phòng
        </Title>
        <Space direction="horizontal">
          <img src={CardImage} alt="card image" />
          <Space direction="vertical">
            <Title level={5}>Deluxe Double</Title>
            <Space direction="horizontal">
              <Text className="text-label">Ocean View</Text>
              <Divider type="vertical" className="text-diveder" />
              <Text className="text-label">32m2</Text>
              <Divider type="vertical" className="text-diveder" />
              <Text className="text-label">1 Double Bed</Text>
            </Space>
            <Text className="text-people">1 phòng, 3 người lớn, 1 trẻ em</Text>
          </Space>
        </Space>
      </Space>
      <Divider />
      <Text className="card-text">
        Deluxe room is designed in harmony between utility and unique style. A
        fully equipped room for your stay
      </Text>
      <Divider />
      <ul className='list-tags'>
        {
          items && items.map((item,index) =>{
            return(
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </Card>
  );
};

export default index;
