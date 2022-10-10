export class Disk {
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