import React from 'react';
import {useRoutes} from 'react-router-dom';
// import Tab from '@/view/Tab';
import routes from '@/router';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '@/styles/index.less';

function App() {
    const navigate=useNavigate();
    // 通过useRoutes配置实现路由管理
    const element = useRoutes(routes);
    return (
        <div className='app'>
            {/* <Tab /> */}
            <Button onClick={() =>navigate('/calculator') }>go to Calculator</Button>
            <Button onClick={() =>navigate('/timer') }>go to timer</Button>
            <div>
                App
            </div>
            {element}
        </div>
    );
}

export default App;
