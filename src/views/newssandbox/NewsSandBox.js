import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import NotFound from './noauth/NotFound';
import PermsList from './perms/PermsList';
import RolesList from './roles/RolesList';
import SideBar from './sidebar/SideBar';
import TopHeader from './topheader/TopHeader';
import UsersList from './users/UsersList';

import './newssandbox.css';

const { Content } = Layout;


export default function NewsSandBox() {
    return (
        <Layout>
            <SideBar></SideBar>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path='/home' component={Home} exact />
                        <Route path='/users/list' component={UsersList} exact />
                        <Route path='/roles/list' component={RolesList} exact />
                        <Route path='/perms/list' component={PermsList} exact />

                        {/* 精确匹配 */}
                        <Redirect from='/' to='/home' exact></Redirect>
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}
