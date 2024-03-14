import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '@/store';
import { Button } from 'antd';
const App = (props:any) => {
    const {calculatorStore} = useStores();
    
    console.log(props,'props');
    
    return (
        <>
        <Button onClick={() => calculatorStore.add()}>增加</Button>
        <Button onClick={() => calculatorStore.minus()}>减少</Button>
            <div>{calculatorStore.count}</div>
        </>
    );
};

export default observer(App);
