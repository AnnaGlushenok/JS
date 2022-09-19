import {Disk} from "./task3.js";

export class SoldDisk extends Disk {
    constructor(type, volume, visual, speed, data, cost) {
        super(type, volume, visual, speed);
        this._type = type;
        this._speed = speed;
        this._data = data;
        this._cost = cost;
    }

    get data() {
        return this._data;
    }

    get cost() {
        return this._cost;
    }

    info() {
        super.info()
        console.log(`data: ${this.data}\ncost: ${this.cost}`)
    }
}

const soldDisk = new SoldDisk("HDD", 45, "ATA", 400, "19.07.2021", 4535)
console.log("\nSold disk:")
soldDisk.info()