import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const CommonLayout = () => {
  const location = useLocation();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname.toLowerCase()]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="/verification">
            <Link to={"/verification"}>Verification</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to={"/users"}>Users</Link>
          </Menu.Item>
          <Menu.Item key="/products">
            <Link to={"/products"}>Products</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "16px 50px" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default CommonLayout;
