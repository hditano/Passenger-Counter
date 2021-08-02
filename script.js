// document.getElementById("id-counter").innerText = 5;

let count = 0;
let countEl = document.getElementById('id-counter');
let saveEl = document.getElementById('save-el');


function increment() {
    count = count + 1;
    countEl.innerText = count;

}

function save() {
    let totalCount = count + ' -';
    saveEl.innerText += totalCount;
    console.log(count);
}
