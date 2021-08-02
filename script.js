// document.getElementById("id-counter").innerText = 5;

let count = 0;
let countEl = document.getElementById('id-counter');

function increment() {
    count = count + 1;
    countEl.innerText = count;

}