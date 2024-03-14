import {makeAutoObservable, runInAction} from 'mobx';
import {fetchPostOrder} from '@/api/home-order';
import {GetRequestOrderDataType, GetOrderDataType, GetResponseOrdereData} from '@/api/home-order/types/home-order';

class Global {
    constructor() {
        // makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
        makeAutoObservable(this);
    }
    count = 0;
    name = 'react';
    orderData: GetOrderDataType[] = [];
    loading = true;

    addCount = () => {
        this.count++;
    };
    setName = (data: string) => {
        this.name = data;
    };

    getPostOrder = async (params: GetRequestOrderDataType) => {
        this.loading = true;
        try {
            const res: GetResponseOrdereData = await fetchPostOrder(params);
            const {orders, result} = res.data;
            if (result === 'Fail') {
                console.log('请求结果出错');
            }
            runInAction(() => {
                this.orderData = orders;
                this.loading = false;
            });
        } catch (err) {
            console.log(err);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}

const globalStore = new Global();
export {globalStore};
