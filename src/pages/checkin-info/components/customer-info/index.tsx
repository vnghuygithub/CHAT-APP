import { Col, Form, Row, Spin } from 'antd';
import React, { useState } from 'react';
import OrderInfo from '../room-info/components/order-info';
import MyForm from '@/components/core/form';
import ScheduleTime from './components/schedule-time';
import CreateCustomer from './components/customer-create';
const index = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Spin spinning={loading}>
      <Row gutter={24}>
          <Col span={14} xs={24} sm={24} md={14} lg={14}>
            <CreateCustomer/>
          </Col>
          <Col span={10} xs={24} sm={24} md={10} lg={10} className='last-item'>
            <OrderInfo />
            <ScheduleTime/>
          </Col>
        </Row>
    </Spin>
  );
};

export default index;
