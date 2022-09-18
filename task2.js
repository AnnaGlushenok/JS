function Disk(type, volume, visual, speed) {
    this._type = type;
    this._volume = volume;
    this._visual = visual;
    this._speed = speed;

    this.getType = function () {
        return this._type;
    }

    this.getVolume = function () {
        return this._volume;
    }

    this.getVisual = function () {
        return this._visual;
    }

    this.getSpeed = function () {
        return this._speed;
    }

    this.setType = function (value) {
        this._type = value;
    }

    this.setVolume = function (value) {
        this._volume = value;
    }

    this.setVisual = function (value) {
        this._visual = value;
    }

    this.setSpeed = function (value) {
        this._speed = value;
    }
}

Disk.prototype.data = "01.04.2019";
Disk.prototype.info = function () {
    console.log(`type: ${this.getType()}\nvolume: ${this.getVolume()}\ninterface: ${this.getVisual()}\nspeed: ${this.getSpeed()}\ndata: ${this.data}`)
}

const ssd = new Disk("SDD", 500, "SATA", 600);
ssd.info()
