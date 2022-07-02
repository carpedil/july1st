import { useState } from 'react';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Dropdown, Layout, Menu,Avatar } from 'antd';
const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item>超级管理员</Menu.Item>
        <Menu.Item danger>退出登录</Menu.Item>
    </Menu>
);

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: '0 16px',
            }}
        >
            {
                collapsed ? <MenuUnfoldOutlined onClick={() => {
                    setCollapsed(!collapsed)
                }} /> : <MenuFoldOutlined onClick={() => {
                    setCollapsed(!collapsed)
                }} />
            }
            <div style={{ float: 'right' ,verticalAlign:'middle',lineHeight: '50px'}}>
                欢迎Admin &nbsp;
                <Dropdown overlay={menu} >
                    <Avatar src="https://joeschmoe.io/api/v1/random" style={{border:'1px solid gray'}}/>
                </Dropdown>
            </div>
        </Header>
    )
}
