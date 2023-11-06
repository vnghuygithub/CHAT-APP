import { Button, Image, Modal, Space, Typography } from 'antd';
import {
  FolderAddOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import './styles.less';
import { ReactComponent as SvgTakePicture } from '@/assets/icons/ic_takepicture.svg';
import { cutImage } from './utils';
import { ReactComponent as SvgUpload } from '@/assets/icons/ic_upload.svg';
import CustomImagePreview from '../custom-image-preview';

interface WebcamProps {
  onCapture: (value: string) => void;
  title: string;
}
const WebcamCapture = (props: WebcamProps) => {
  const { Text } = Typography;
  const { onCapture, title } = props;
  const webcamRef = useRef<any>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const capturePhoto = () => {
    if (webcamRef.current) {
      const photoUrl = cutImage(webcamRef, 480, 300);
      setCapturedPhoto(photoUrl);
      onCapture(photoUrl);
      // Tắt camera sau khi đã chụp ảnh;
      toggleCamera();
      setCameraActive(!cameraActive);
    }
  };
  const [isCameraOn, setCameraOn] = useState(true);
  const [capturedPhoto, setCapturedPhoto] = useState<string>('');
  const toggleCamera = () => {
    if (isCameraOn) {
      // Tắt camera nếu đang bật
      webcamRef.current.video?.srcObject
        .getTracks()
        .forEach((track: any) => track.stop());
    } else {
      // Khởi động lại camera nếu đang tắt
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        webcamRef.current.video.srcObject = stream;
      });
    }
    setCameraOn(!isCameraOn); // Đảo ngược trạng thái camera
};
  const onClickCapture = () => {
    setCameraActive(!cameraActive);
    toggleCamera();
  };

  const handleDelete = () => {
    setCapturedPhoto('');
  };

  //huyvq

  //back-btn
  const handleModalClose = () => {
    // Xử lý khi Modal đóng lại
    setCameraActive(false);
    toggleCamera();
  };

  const handleBackBtnClick = () => {
    setCameraActive(false); // Đóng Modal khi click vào nút back-btn
  };

  //upload image 
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string>('');
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const photoUrl = URL.createObjectURL(file);
      setSelectedPhoto(photoUrl);
      setCameraActive(false); 
    }
  };
  

  return (
    <>
      <Modal open={cameraActive} footer={null} className="modal-webcam" onCancel={handleModalClose}>
        {cameraActive && (
          <>
            <div className="camera-capture">
              <div className='title'>
                <div className='back-btn'>
                  <Button
                    type="text"
                    block
                    className="back-button"
                    icon={<LeftOutlined />}
                    onClick={handleBackBtnClick}
                  >
                    {title}
                  </Button>
                </div>
                <div className='add-btn'>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                  />
                  <Button
                    type="text"
                    block
                    className="add-button"
                    icon={<FolderAddOutlined />}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Chọn từ thư mục
                  </Button>
                </div>
              </div>
              <div className="webcam-video">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  mirrored={true}
                  videoConstraints={{
                    facingMode: 'environment', // Sử dụng camera sau (back camera) trên điện thoại
                  }}
                />
              </div>
              <div className="capture-frame">
                <div className="capture-corner top-left" />
                <div className="capture-corner top-right" />
                <div className="capture-corner bottom-left" />
                <div className="capture-corner bottom-right" />
              </div>
              <button className="take-picture-btn" onClick={capturePhoto}>
                <Space direction="vertical" align="center">
                  <SvgTakePicture />
                  <Text className="take-pictrue-txt">Chụp ảnh</Text>
                </Space>
              </button>
            </div>
          </>
        )}
      </Modal>
      <Space
        direction="vertical"
        className="takepicture"
        align="center"
        style={{ padding: !capturedPhoto && !selectedPhoto ? '12px 16px' : '0' }}
      >
        {capturedPhoto ? (
          <CustomImagePreview title={title} src={capturedPhoto} onDelete={handleDelete} />
        ) : (
          <>
            {selectedPhoto ? (
              <CustomImagePreview title={title} src={selectedPhoto} onDelete={() => setSelectedPhoto('')} />
            ) : (
              <Space
                className="takepictrue-wrapper"
                align="center"
                direction="vertical"
                onClick={() => onClickCapture()}
              >
                <Text className="takepicture-txt">{title}</Text>
                <SvgUpload />
              </Space>
            )}
          </>
        )}
      </Space>
    </>
  );
};

export default WebcamCapture;
