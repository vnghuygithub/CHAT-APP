import React, { Suspense } from 'react';
import { Breadcrumb, Layout, Menu, Spin, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { LocaleFormatter } from '@/locales';
import { Outlet } from 'react-router-dom';
import Header from './header';
import './style.less';
const { Content, Sider } = Layout;
const index = () => {
  return (
    <>
    <Header/>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="layout-page-content"
            style={{ overflowY: 'auto' }}>
            <Suspense fallback={null}>
              <Spin
                spinning={false}
                className="app-loading-wrapper"
                tip={<LocaleFormatter id="gloabal.tips.loading" />}></Spin>
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default index;
