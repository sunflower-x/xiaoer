
import {makeAutoObservable} from 'mobx';

class Calculator {
    constructor() {
        makeAutoObservable(this);
    }
    count = 0;

    add() {
        this.count += 1;
    }
    minus() {
        this.count -= 1;
    }
}
const calculatorStore = new Calculator();

export {calculatorStore}
