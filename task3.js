class Disk {
    constructor(type, volume, visual, speed) {
        this._type = type;
        this._volume = volume;
        this._visual = visual;
        this._speed = speed;
    }

    get type() {
        return this._type;
    }

    get volume() {
        return this._volume;
    }

    get visual() {
        return this._visual;
    }

    get speed() {
        return this._speed;
    }

    set type(value) {
        this._type = value;
    }

    set volume(value) {
        this._volume = value;
    }

    set visual(value) {
        this._visual = value;
    }

    set speed(value) {
        this._speed = value;
    }

    info() {
        console.log(`type: ${this.type}\nvolume: ${this.volume}\ninterface: ${this.visual}\nspeed: ${this.speed}`)
    }
}

const disk = new Disk("SDD", 500, "SATA", 600);
console.log("Disk:")
disk.info()

class SoldDisk extends Disk {
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


let disks = [
    new SoldDisk("HDD", 64, "SATA", 400, "25.07.2021", 4535),
    new SoldDisk("SDD", 4, "SAS", 600, "17.08.2019", 1200),
    new SoldDisk("HDD", 16, "USB", 800, "03.12.2022", 3570),
    new SoldDisk("HDD", 32, "DISPLAY", 450, "10.04.2018", 6580),
]

let max = disks.reduce((prev, curr) => prev.cost > curr.cost ? prev : curr, {});
let min = disks.reduce((prev, curr) => prev.cost < curr.cost ? prev : curr, {});
let sum = disks.reduce((sum, el) => sum + el.cost, 0);
let average = sum / disks.length;
let count = disks.filter(el => el.cost > average).length;
console.log("max:")
max.info()
console.log("min:")
min.info()
console.log(`sum: ${sum}\naverage: ${average}\ncount: ${count}`)