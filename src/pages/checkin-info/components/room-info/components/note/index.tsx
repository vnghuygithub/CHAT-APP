import React from 'react';
import './styles.less';
import { Card, Space, Typography } from 'antd';
const index = () => {
  const { Title, Text } = Typography;
  return (
    <Card style={{marginBottom: 25, marginTop:25}}>
      <Space direction="vertical" className="card-content">
        <Title level={5} className="card-title">
          Ghi chú
        </Title>
        <Text className="card-text">2 DOQ</Text>
        <Text className="card-text">
          700k/R/N to Apec Group. Other by guest.
        </Text>
        <Text className="card-text">Không phụ thu voucher</Text>
        <Text className="card-text">
          Cancellations received by Apec Mandala Phú Yên less than 24 hours
          prior to arrival and non - arrivals (no show) or shorten may incur a
          cancellation fee of one night accommodation unless otherwise specified
          at the time of booking.
        </Text>
        <Text className="card-text">
          * Rate: Are quoted in VND, per night, inclusive of 5% service charge,
          8% VAT.
        </Text>
        <Text className="card-text">
          * Breakfast: Rate are inclusive of daily breakfasts.
        </Text>
        <Text className="card-text">
          * Internet: Free ADSL internet in room.
        </Text>
      </Space>
    </Card>
  );
};

export default index;
