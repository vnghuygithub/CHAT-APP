import React, { useState } from 'react';
import { Image, Modal, Space, Typography } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import './styles.less';

interface CustomPreviewMaskProps {
  src: string;
  onDelete: () => void;
  title: string;
}
const Index = (props: CustomPreviewMaskProps) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const {Text} = Typography;
  const { src, onDelete,title } = props;
  const showPreview = () => {
    setPreviewVisible(true);
  };

  const hidePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <>
      <Space className="icon-action-wrapper">
        <Space direction="horizontal" size={15} className="icon-action">
          <EyeOutlined onClick={showPreview} style={{ cursor: 'pointer' }} />
          <DeleteOutlined onClick={onDelete} style={{ cursor: 'pointer' }} />
        </Space>
      </Space>
      <img className="image-src" src={src} alt="image" />
      <Modal
        className="modal-preview-image"
        open={previewVisible}
        footer={null}
        onCancel={hidePreview}
        closable={false}>
        <img src={src} alt="image" />
        <Text>{title}</Text>
      </Modal>
    </>
  );
};
export default Index;
