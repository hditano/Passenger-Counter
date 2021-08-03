// document.getElementById("id-counter").innerText = 5;

let count = 0;
let countEl = document.getElementById('id-counter');
let saveEl = document.getElementById('save-el');


function increment() {
    count = count + 1;
    countEl.textContent = count;

}

function save() {
    let totalCount = count + ' - ';
    saveEl.textContent += totalCount;
    count = 0;
    countEl.textContent = count;
}
