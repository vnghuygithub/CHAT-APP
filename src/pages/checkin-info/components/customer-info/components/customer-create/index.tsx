import SelectTypePaper from '@/pages/components/selects/SelectPaper';
import {
  ArrowRightOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Typography,
  Image,
} from 'antd';
import React, { useState } from 'react';
import './styles.less';
import { loaiGiayToOption } from '@/const/options';
import { ReactComponent as DocumentSvg } from '@/assets/icons/ic-document.svg';
import AnhMo from '@/assets/common/anh-mo.png';
import AnhToi from '@/assets/common/anh-toi.png';
import AnhKhongSang from '@/assets/common/anh-khong-sang.png';
import KhongChupMatGocCanh from '@/assets/common/khong-chup-mat-goc-canh.png';
import WebCam from '../webcam';
import PopupGuide from '../popup-guide/index';


const index = () => {
  const { Title, Text, Link } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const initialValues = {
    customers: [
      {
        paper: '',
        pictureBefore: '', 
        pictureAfter: '', 
      },
    ],
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  

  const handleCapture = (photoUrl: any) => {
    setCapturedPhoto(photoUrl);
    // form.setFieldsValue({
    //   customers:{
    //     pictureBefore: photoUrl
    //   }
    // });
    // form &&
    //   form.setFieldsValue({
    //     AttachmentFiles: imageUrl,
    //   });
  };
  

  return (
    <>
      <Form.List name="customers" initialValue={initialValues.customers}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Card key={key} className="form-create">
                <Title level={5} className="card-title">
                  {key === 0 && `Khách hàng chính`}
                  {key > 0 && `Khách hàng ${key}`}
                </Title>
                <div className="form-row">
                  <Form.Item
                    className="form-item"
                    label={'Loại giấy tờ'}
                    {...restField}
                    name={[name, 'paper']}
                    rules={[
                      { required: true, message: 'Vui lòng chọn loại giấy tờ' },
                    ]}>
                    <Select options={loaiGiayToOption} />
                  </Form.Item>
                  <Text className="customer-form-note">
                    Nếu ảnh CCCD/CMND thì cần chụp đủ ảnh của 2 mặt giấy tờ
                  </Text>
                </div>
                <div className="form-row">
                  <Space size={10}>
                    <Form.Item
                      className="form-item"
                      label={'Chụp ảnh mặt trước'}
                      {...restField}
                      name={[name, 'pictureBefore']}
                    >
                      <WebCam
                        onCapture={handleCapture}
                        title="Chụp ảnh mặt trước CCCD/CMND"
                      />    
                    </Form.Item>
                    <Form.Item
                      className="form-item"
                      label={'Chụp ảnh mặt sau'}
                      {...restField}
                      name={[name, 'pictureAfter']}
                    >
                      <WebCam
                          onCapture={handleCapture}
                          title="Chụp ảnh mặt sau CCCD/CMND"
                        />
                    </Form.Item>
                  </Space>
                </div>
                <div className="form-row block-guide">
                  <div style={{ display: 'flex', gap: 5 }}>
                    <div
                      style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                      <DocumentSvg />
                      <Text className="guide-title" style={{fontSize: 16}}>
                        {' '}
                        Hướng dẫn chụp ảnh cho hợp lệ.
                      </Text>
                    </div>
                    <Button type="link" onClick={showModal}>
                      Xem chi tiết <ArrowRightOutlined />
                    </Button>
                  </div>
                  <Space direction="horizontal" size={20}>
                    <Space direction="vertical" align="center">
                      <img src={AnhMo} alt="Không chụp quá mờ" className='sample-img'/>
                      <Text className="guide-note-img" >
                        Không chụp <br /> quá mờ
                      </Text>
                    </Space>
                    <Space direction="vertical" align="center">
                      <img src={AnhToi} alt="Không chụp quá tối" className='sample-img'/>
                      <Text className="guide-note-img">
                        Không chụp <br /> quá tối
                      </Text>
                    </Space>
                    <Space direction="vertical" align="center">
                      <img src={AnhKhongSang} alt="Không chụp lóe sáng" className='sample-img'/>
                      <Text className="guide-note-img">
                        Không chụp <br /> lóe sáng
                      </Text>
                    </Space>
                    <Space direction="vertical" align="center">
                      <img
                        src={KhongChupMatGocCanh}
                        alt="Không chụp lóe sáng"
                        className='sample-img'
                      />
                      <Text className="guide-note-img">
                        Không chụp <br /> mất góc, cạnh
                      </Text>
                    </Space>
                  </Space>
                </div>
                {/* <MinusCircleOutlined
                  style={{ color: 'red' }}
                  className="close-button"
                  onClick={() => remove(name)}
                /> */}
              </Card>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                className="add-button"
                icon={<PlusOutlined />}>
                Thêm khách hàng
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <PopupGuide isModalVisible={isModalVisible} handleCancel={handleCancel} />
    </>
  );
};

export default index;
