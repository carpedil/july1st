import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import NotFound from './noauth/NotFound'
import PermsList from './perms/PermsList'
import RolesList from './Roles/RolesList'
import SideBar from './sidebar/SideBar'
import TopHeader from './topheader/TopHeader'
import UsersList from './users/UsersList'

export default function NewsSandBox() {
    return (
        <div>
            <SideBar></SideBar>
            <TopHeader></TopHeader>
            <Switch>
                <Route path='/home' component={Home} exact/>
                <Route path='/users/list' component={UsersList} exact/>
                <Route path='/roles/list' component={RolesList} exact/>
                <Route path='/perms/list' component={PermsList} exact/>

                {/* 精确匹配 */}
                <Redirect from='/' to='/home' exact></Redirect>
                <Route path='*' component={NotFound}/>
            </Switch>
        </div>

    )
}
