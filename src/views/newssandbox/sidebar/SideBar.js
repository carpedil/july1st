import {
    UploadOutlined, UserOutlined, VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import style from './sidebar.module.css';
const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar(props) {
    const [collapsed] = useState(false);
    const [menuList] = useState([
        {
            key: '/home',
            title: '首页',
            icon: <UserOutlined/>,
            children:[]
        },
        {
            key: '/users',
            title: '用户管理',
            icon: <UploadOutlined/>,
            children: [
                {
                    key: '/users/list',
                    title: '用户列表',
                    icon: <UploadOutlined/>,
                    children: []
                },
            ]
        },
        {
            key: '/auth',
            title: '权限管理',
            icon: <UploadOutlined/>,
            children: [
                {
                    key: '/roles/list',
                    title: '角色列表',
                    icon: <VideoCameraOutlined/>,
                    children: []
                },
                {
                    key: '/perms/list',
                    title: '权限列表',
                    icon: <VideoCameraOutlined/>,
                    children: []
                },
            ]
        },
    ])

    const renderMenus = (menuList)=>{
        return (
            menuList.map(item =>{
                if (item.children.length > 0){
                    return <SubMenu key={item.key} title={item.title} icon={item.icon}>
                        {/* 递归调用遍历 */}
                        {renderMenus(item.children)}
                        </SubMenu>
                }
                return <Menu.Item key={item.key} icon={item.icon} onClick={()=>{
                    props.history.push(item.key)
                }}>{item.title} </Menu.Item>
            })
        )
    }
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className={style.logo}>全球新闻发布管理系统</div>
            <Menu theme='dark' mode='inline' >
                {
                    renderMenus(menuList)
                }
            </Menu>
        </Sider>
    )
}

export default  withRouter(SideBar)