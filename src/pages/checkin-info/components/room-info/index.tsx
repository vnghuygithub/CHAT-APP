import React from 'react'
import OrderInfo from './components/order-info';
import RoomRate from './components/room-rate';
import Note from './components/note';
import { Col, Row } from 'antd';
import './styles.less';
const index = () => {
  return (
    <Row gutter={24}>
        <Col span ={14} xs={24} sm={14} md={14} lg={14}>
            <OrderInfo/>
            <Note/>
        </Col>
        <Col span={10} xs={24} sm={10} md={10} lg={10} className='last-item'>
            <RoomRate/>
        </Col>
    </Row>
  )
}

export default index