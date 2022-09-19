import {SoldDisk} from "./task4.js";

let disks = [
    new SoldDisk("HDD", 64, "SATA", 400, "25.07.2021", 4535),
    new SoldDisk("SDD", 4, "SAS", 600, "17.08.2019", 1200),
    new SoldDisk("HDD", 16, "USB", 800, "03.12.2022", 3570),
    new SoldDisk("HDD", 32, "DISPLAY", 450, "10.04.2018", 6580),
]

Math.max = (arr) => arr.reduce((prev, curr) => prev.cost > curr.cost ? prev : curr, {});
Math.min = (arr) => arr.reduce((prev, curr) => prev.cost < curr.cost ? prev : curr, {});

let max = Math.max(disks);
let min = Math.min(disks);
let sum = disks.reduce((sum, el) => sum + el.cost, 0);
let average = sum / disks.length;
let count = disks.filter(el => el.cost > average).length;
console.log("max:")
max.info()
console.log("min:")
min.info()
console.log(`sum: ${sum}\naverage: ${average}\ncount: ${count}`)