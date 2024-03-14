import { makeAutoObservable } from "mobx";

class Timer{
    constructor(){
        makeAutoObservable(this)
    }
    time=0
    setTime(){
        this.time+=1
    }
    resetTime(){
        this.time=0
    }
}

const Timers=new Timer()

export {Timers}