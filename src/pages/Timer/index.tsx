import React from 'react';
import {observer} from 'mobx-react-lite';
import {Timers} from './logic';
import {Button} from 'antd';

const App = () => {
    return (
        <>
            <div>Timer</div>
            <Button onClick={() => Timers.setTime()}>增加</Button>
            <Button onClick={() => Timers.resetTime()}>重置</Button>

            <div>{Timers.time}</div>
        </>
    );
};

export default observer(App);
