import React, { useState } from "react";
import "./index.css";
import './App.css';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import { Button, Input, Layout, Menu, Modal, theme } from "antd";
import MyForm from "./components/MyForm";
import MyModalWindow from "./components/MyModalWindow";
import TableHouse from "./components/TableHouse";
const { Header, Content, Footer, Sider } = Layout;
const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav link ${index + 1}`
}));


const App = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout hasSider>
            <Sider className="App-sider"
                breakpoint="lg"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" style={{ color: "#fefe22" }}>
                    Тупо текст, который я зачем то сюда написал
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header className="App-header">

                    <MyModalWindow title="Создать новый дом">
                        <MyForm/>
                    </MyModalWindow>

                </Header>
                <Content className="App-content">
                    <div className="App-divTable">
                        <TableHouse />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: "center"
                    }}
                >
                    ©2023
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
