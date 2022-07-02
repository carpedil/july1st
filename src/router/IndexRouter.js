import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Login from "../views/login/Login"
import NewsSandBox from "../views/newssandbox/NewsSandBox"

export default function IndexRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' render={() => [
          //  对于未授权的请求路径，重定向到/login界面,否则放行
          // 必须设置一个key，不然会有报错,此处传到是一个空对象{}
          localStorage.getItem('token')? <NewsSandBox key={{}}/>:<Redirect to="/login"/>
        ]}></Route>
      </Switch>
    </Router>
  )
}
