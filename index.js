let p1 = 0;
let p2 = 0;
let max = 1;
let dropdown = document.querySelector('#dropDown');
for(let i = 0; i != 10; i++) {
    let option = document.createElement('option');
    option.innerText = `${i + 1}`;
    dropdown.append(option);
}

dropdown.addEventListener('input', (e) => {
    max = dropdown.value;
});

const score1 = document.querySelector('.p1');
const score2 = document.querySelector('.p2');
const score = document.querySelector('.scorecard');

score1.addEventListener('click', () => {
    if(p1 < max && p2 < max) {
        p1++;
        score.innerText = `${p1} to ${p2}`;
    }
})

score2.addEventListener('click', () => {
    if(p2 < max && p1 < max) {
        p2++;
        score.innerText = `${p1} to ${p2}`;
    }
})

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    p1 = 0;
    p2 = 0;
    score.innerText = `${p1} to ${p2}`;
})