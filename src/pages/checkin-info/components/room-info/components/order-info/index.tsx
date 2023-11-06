import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import React from 'react';
const { Title, Text } = Typography;
import './styles.less';
const index = () => {
  return (
    <Card>
      <Space direction="vertical" className="card-content">
        <Title level={5} className="card-title">
          Thông tin đơn đặt phòng
        </Title>
        <Space direction="horizontal">
          <Title level={5} className="card-info">
            {' '}
            NGUYEN VAN A, Delux
          </Title>
          <Divider className="card-info-divider" type="vertical" />
          <Title level={5} className="card-info">
            Mandala Phú Yên
          </Title>
        </Space>
        <Divider />
        <Row gutter={24}>
          <Col span={12}>
            <Space direction="vertical">
              <Text className='card-label'>Ngày đến</Text>
              <Text className='card-value'>01/08/2022</Text>
              <Text className='card-label'>Số đêm</Text>
              <Text className='card-value'>4 đêm</Text>
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical">
              <Text className='card-label'>Ngày đi</Text>
              <Text className='card-value'>05/08/2022</Text>
              <Text className='card-label'>Số người ở</Text>
              <Text className='card-value'>3 Adults, 1 Child</Text>
            </Space>
          </Col>
          <Col span={24} style={{marginTop: 16}}>
            <Text className='card-checkin'>
                Giờ check-in dự kiến 14:00 ngày 01/08/2022
            </Text>
          </Col>
        </Row>
      </Space>
    </Card>
  );
};

export default index;
