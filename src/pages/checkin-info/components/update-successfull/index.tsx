import { Card, Col, Row, Space, Tag, Typography } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React from 'react';
import './style.less';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import OrderInfo from '../room-info/components/order-info';
const index = () => {
  const { Title, Text } = Typography;
  return (
    <Card className='update-success'>
      <Row gutter={24}>
        <Col span={12} xs={24} sm={24} md={12} lg={12}>
          <Card style={{ height: '100%' }}>
            <Space direction="vertical">
              <div className="space-row">
                <Title level={5} className="card-title">
                  Mã đặt phòng của quý khách
                </Title>
                <Text>
                  Quý khách có thể chụp lại thông tin này để sử dụng khi cần
                  thiết.
                </Text>
              </div>
              <div className="space-row">
                <Tag className="reservation-tag" color="#C7A87E">
                  <Paragraph copyable>R220804.0005</Paragraph>
                </Tag>
              </div>
              <div className="space-row">
                <p className="footer-content-note">
                  <ExclamationCircleOutlined style={{ marginRight: 10 }} />
                  Lưu ý: Quý khách cần mang theo giấy tờ tuỳ thân khi tới khách
                  sạn để nhận phòng.
                </p>
              </div>
            </Space>
          </Card>
        </Col>
        <Col span={12} xs={24} sm={24} md={12} lg={12}>
          <OrderInfo />
        </Col>
      </Row>
    </Card>
  );
};

export default index;
