const disk = {};
disk.type = "SSD";
disk.volume = 500;
disk.interface = "SATA"
disk.speed = 600

disk.info = function () {
    console.log(`type: ${disk.type}\nvolume: ${disk.volume}\ninterface: ${disk.interface}\nspeed: ${disk.speed}`)
}

disk.info();