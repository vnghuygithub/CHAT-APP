import React from 'react';
import videoBanner from '@/assets/video/banner-video.mp4';
import './styles.less';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import SelectHotels from '../components/selects/SelectHotel';
import MyForm from '@/components/core/form';
import { useLocale } from '@/locales';
import { useNavigate } from 'react-router-dom';
const index = () => {
  const { Title, Text } = Typography;
  const { t } = useLocale();
  const navigate = useNavigate();
  const onFinish = () => {
    navigate('/checkinInfo');
  }
  return (
    <div className="wrapper">
      <video autoPlay muted loop className="banner-video">
        <source src={videoBanner} />
      </video>
      <div className="banner-content">
        <Space direction="vertical" align="center">
          <Title level={5} className="banner-title">
            Nhập thông tin
          </Title>
          <Text className="banner-txt-note">
            Vui lòng chọn khách sạn và nhập mã đặt phòng để sang bước tiếp theo.
          </Text>
          <div className="banner-devider"></div>
          <Card className="card-wrapper">
            <Row gutter={24}>
              <Col span={9} xs={24} sm={9} md={9} lg={9}>
                <SelectHotels />
              </Col>
              <Col span={9} xs={24} sm={9} md={9} lg={9}>
                <MyForm.Item
                  innerProps={{
                    placeholder: 'VD: R220804.0005',
                  }}
                  rules={[
                    { required: true, message: 'Vui lòng nhập mã đặt phòng' },
                  ]}
                  label={'Mã đặt phòng'}
                  name="name"
                  type="input"
                />
              </Col>
              <Col span={6} xs={24} sm={6} md={6} lg={6} style={{ display: 'flex', alignItems: 'center',justifyContent:'flex-end' }}>
                <Button onClick={onFinish} type="primary" className='banner-confirm'>XÁC NHẬN</Button>
              </Col>
            </Row>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default index;
