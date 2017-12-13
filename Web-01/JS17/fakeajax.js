import { setTimeout } from "timers";

class fakeajax {
    constructor(state) {
        this.setReadyState(0);
    }

    setReadyState(state) {
        this.state = state;

        if (this.onreadyStateChanged) this.onreadyStateChanged()

    }

    send() {
        this.setReadyState(1);
    }

    open() {
        this.setReadyState(2)//发送中
        setTimeout(() => {
            this.setReadyState(3) //接受中，但暂无数据

            setTimeout(() => {
                this.status = 200
                this.response = "Simba"
                this.setReadyState(4)//完成   
            }, 200)

        }, 100)
    }

}