let p1 = 0;
let p2 = 0;
let max = 0;
let dropdown = document.querySelector('#dropDown');
for(let i = 0; i != 10; i++) {
    let option = document.createElement('option');
    option.innerText = `${i + 1}`;
    dropdown.append(option);
}