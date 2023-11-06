import { CloseOutlined } from '@ant-design/icons';
import { Modal, Space, Typography } from 'antd'
import React from 'react';
import AnhMo from '@/assets/common/anh-mo.png';
import AnhToi from '@/assets/common/anh-toi.png';
import AnhKhongSang from '@/assets/common/anh-khong-sang.png';
import KhongChupMatGocCanh from '@/assets/common/khong-chup-mat-goc-canh.png';
interface IPopupGuideProps{
    isModalVisible: boolean;
    handleCancel: () => void;
}
const index = (props:IPopupGuideProps) => {
    const { isModalVisible,handleCancel } = props;
    const {Text} = Typography;
  return (
    <Modal
        open={isModalVisible}
        title="Hướng dẫn chụp ảnh hợp lệ"
        onCancel={handleCancel}
        footer={null} // Set the footer to null to remove OK and Cancel buttons
        closeIcon={<CloseOutlined style={{ color: '#101828', fontSize: 20 }} />} // Custom close button
        maskClosable={false} // Disable closing the modal by clicking outside the modal content
      >
        <Space direction="vertical">
          <Text className="guide-text">
            1. Đặt giấy tờ của bạn trên một mặt phẳng tối màu.
          </Text>
          <Text className="guide-text">
            2. Vui lòng sử dụng nguồn ánh sáng tự nhiên thay vì đèn flash. Ảnh
            nên được chụp vào ban ngày.
          </Text>
          <Text className="guide-text">
            3. Chụp thẳng từ trên xuống và đảm bảo hiện thầy đủ các cạnh của
            giấy tờ trong khung đỏ trên màn hình. Lưu ý không để bóng của bạn
            che giấy tờ.
          </Text>
          <Text className="guide-text">
            4. Đảm bảo rằng bốn góc của giấy tờ hiện đầy . đủ trong ảnh và không
            bị chói sáng. Tất cả thông tin trên giấy tờ phải rõ ràng và có thể
            đọc được.
          </Text>
        </Space>
        <Space direction="horizontal" size={20}>
          <Space direction="vertical" align="center">
            <img src={AnhMo} alt="Không chụp quá mờ" />
            <Text className="guide-note-img">Không chụp quá mờ</Text>
          </Space>
          <Space direction="vertical" align="center">
            <img src={AnhToi} alt="Không chụp quá tối" />
            <Text className="guide-note-img">Không chụp quá tối</Text>
          </Space>
          <Space direction="vertical" align="center">
            <img src={AnhKhongSang} alt="Không chụp lóe sáng" />
            <Text className="guide-note-img">Không chụp lóe sáng</Text>
          </Space>
          <Space direction="vertical" align="center">
            <img src={KhongChupMatGocCanh} alt="Không chụp lóe sáng" />
            <Text className="guide-note-img">Không chụp mất góc, cạnh</Text>
          </Space>
        </Space>
      </Modal>
  )
}

export default index