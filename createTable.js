function createTable(disks) {
    document.write(2)
    let row = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent = "Type";
    th.textContent = "Volume";
    th.textContent = "Interface";
    th.textContent = "Speed";
    th.textContent = "Date";
    th.textContent = "Cost";

    for (let i = 0; i < disks.length; i++) {
        row = document.createElement('tr');
        for (let j = 0; j < 6; j++)
             let td = document.createElement('td')

        td.textContent = disks.type();
        td.textContent = disks.volume();
        td.textContent = disks.visual();
        td.textContent = disks.speed();
        td.textContent = disks.data();
        td.textContent = disks.cost();
        row.appendChild(td);
        table.appendChild(row);
    }
}