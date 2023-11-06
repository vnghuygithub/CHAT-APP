import { Header } from 'antd/lib/layout/layout';
import React, { useEffect, useRef, useState } from 'react';
import './style.less';
import Logo from '@/assets/logo/Union.svg';
import { Typography, Space, Button, Divider } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Link } = Typography;
const index = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollRef = useRef<any>(null);

  useEffect(() => {
    // Hàm xử lý sự kiện scroll
    const handleScroll = () => {
      console.log('aa', window.scrollY);
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Thêm sự kiện scroll khi component mount
    handleScrollRef.current = handleScroll;
    window.addEventListener('scroll', handleScrollRef.current);

    // Xóa sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScrollRef.current);
    };
  }, []);
  return (
    <Header className={isScrolled ? 'header scrolled' : 'header'}>
      <Space direction="horizontal" className="header-content">
        <img
          onClick={() => navigate('/')}
          src={Logo}
          alt=""
          style={{ width: 145, zIndex: 1, cursor: 'pointer' }}
        />
        <div className="menu">
          <Link href="#">Về chúng tôi</Link>
          <Link href="#">Liên hệ</Link>
        </div>
      </Space>
      {!drawerVisible ? (
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="bar-menu-button"
        />
      ) : (
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={onClose}
          className="bar-menu-button"
        />
      )}
      <div className={`navbar ${drawerVisible ? 'active' : ''}`}>
        <Link href="#">Về chúng tôi</Link>
        <Divider />
        <Link href="#">Liên hệ</Link>
      </div>
    </Header>
  );
};

export default index;