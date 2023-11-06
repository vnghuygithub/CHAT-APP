import React, { useState } from 'react';
import Banner from '@/assets/common/banner.png';
import './style.less';
import {
  Button,
  Space,
  Steps,
  message,
  Typography,
  Form,
  Row,
  Col,
} from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import RoomInfo from './components/room-info';
import CustomerInfo from './components/customer-info';
import UpdateSuccessfull from './components/update-successfull';
import MyForm from '@/components/core/form';
import { ReactComponent as SvgSuccessful } from '@/assets/common/ic_successfull.svg';

const index = () => {
  const { Title, Text } = Typography;
  const [current, setCurrent] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async () => {
    await form?.validateFields();
    const data = await form?.getFieldsValue();
    console.log(data);
    return data;
  };
  const onValuesChange = () => {
    form.validateFields().then(valid => {
      setIsFormValid(valid);
    });
  };
  const onUpdateHandler = async () => {
    // const formData = await onFinish();
    // if (formData) {
    //   next();
    // }
    next();
  };
  const steps = [
    {
      title: 'Thông tin đặt phòng',
      content: (
        <div className="page-content">
          <Title level={5} className="page-title">
            Thông tin đặt phòng
          </Title>
          <RoomInfo />
        </div>
      ),
    },
    {
      title: 'Thông tin khách hàng',
      content: (
        <div className="page-content">
          <Title level={5} className="page-title">
            <ArrowLeftOutlined onClick={() => prev()} /> Thông tin khách hàng
          </Title>
          <MyForm<any>
            onFinish={onFinish}
            form={form}
            layout="vertical"
            onValuesChange={onValuesChange}>
            <CustomerInfo />
          </MyForm>
        </div>
      ),
    },
    {
      title: 'Cập nhật thành công',
      content: (
        <div className="page-content">
          <UpdateSuccessfull />
        </div>
      ),
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    marginTop: 16,
  };
  return (
    <React.Fragment>
      <div className="banner-wrapper">
        <img className="banner-image" src={Banner} alt="banner" />
        <div className="banner-content">
          {current !== steps.length - 1 ? (
            <>
              <h5 className="banner-title">Check-in Online</h5>
              <div className="banner-devider"></div>
              <Steps progressDot current={current}>
                {steps.map(item => (
                  <Steps.Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </>
          ) : (
            <Space
              direction="vertical"
              align="center"
              className="banner-content-success">
              <SvgSuccessful height={80} width={80} />
              <Text className="banner-content-txt">
                Cập nhật thông tin thành công
              </Text>
              <Text className="banner-content-info">
                Hotline: 0243 573 0200
              </Text>
              <div className="banner-devider"></div>
            </Space>
          )}
        </div>
      </div>
      <div style={contentStyle}>{steps[current].content}</div>
      {current !== steps.length - 1 && (
        <div className="footer">
          <div className="footer-content-continue">
            {current < steps.length - 2 && (
              <Button
                className="footer-btn-continue"
                type="primary"
                onClick={() => next()}>
                Tiếp tục <ArrowRightOutlined />
              </Button>
            )}
          </div>
          <Row gutter={24} className="footer-content" >
            {current === steps.length - 2 && (
              <Col sm={24} md={12} lg={12}>
                <p className="footer-content-note" style={{ height: 32, display: 'flex', alignItems: 'center' }} >
                  <ExclamationCircleOutlined style={{ marginRight: 10 }} />
                  Quý khách vui lòng khai báo đủ thông tin số người cùng phòng!
                </p>
              </Col>
            )}
            <Col
              sm={24}
              md={12}
              lg={12}
              style={{ margin: 'auto', width: '100%' }}>
              <div className="back-update-btn">
                {current > 0 && (
                  <Button
                    className="footer-content-button"
                    onClick={() => prev()}>
                    <ArrowLeftOutlined /> Quay lại
                  </Button>
                )}

                {current === steps.length - 2 && (
                  <Button
                    className="footer-content-button"
                    htmlType="submit"
                    type="primary"
                    onClick={() => onUpdateHandler()}
                    // disabled={!isFormValid}
                  >
                    Cập nhật
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </div>
      )}
    </React.Fragment>
  );
};

export default index;
