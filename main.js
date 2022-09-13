let str = prompt("Введите строку");
let arr = str.split(" ");
let answer = "";
for (let i = 0; i < arr.length; i++) {
    answer += twist(arr[i]) + " ";
}

function twist(word) {
    let letters = word.split('');
    for (let i = 1; i < letters.length - 1; i++) {
        let index = Math.floor(Math.random() * (letters.length - 2) + 1);
        [letters[i], letters[index]] = [letters[index], letters[i]];
        let t;
    }
    return letters.join('');
}

document.write(`<p>Исходная строка: ${str}</p>`)
document.write(`<p>Запутанная строка: ${answer}</p>`)