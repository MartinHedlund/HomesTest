import React, { useState } from "react";
import "./index.css";
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
    const {
        token: { colorBgContainer }
    } = theme.useToken();

    // modal back
    
    // end


    return (
        <Layout >
            <Sider
                breakpoint="lg"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{

                }}
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
                <Header
                    style={{
                        display: 'flex',
                        height: 'auto',
                        padding: 0,
                        margin: '5px 16px 0px',
                        background: colorBgContainer
                    }}
                >
                    <MyModalWindow title="Создать новый дом">
                        <MyForm/>
                    </MyModalWindow>
                    {/* <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'warp',
                    }}>
                        <p>поиграться со стилями что то не то</p>
                        <p>тут вставить кнопку которая открывает модальное окно для добавления дома в контенте</p>
                        <p>сделать таблицу с поиском и добавлением счетчика и редактирование</p>
                    </div> */}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <div
                        style={{
                            padding: 50,
                            textAlign: "center",
                            background: colorBgContainer
                        }}
                    >
                        <p>long content</p>
                        {
                            // indicates very long content
                            Array.from({ length: 100 }, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? 'more' : '...'}
                                    <br />
                                </React.Fragment>
                            ))
                        }
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
