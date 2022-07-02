### 搭建项目脚手架
npx create-react-app july1st-news

### 路由架构
npm install react-router-dom@5   

### 引入antd组件库
```bash
cnpm i --save antd 

# App.css
@import '~antd/dist/antd.css';

# App.js
import './App.css';
```

```js
import { Button } from 'antd'

export default function Home() {
  return (
    <div>Home
      <Button type='primary' size='small'>Button</Button>
    </div>
  )
}
```