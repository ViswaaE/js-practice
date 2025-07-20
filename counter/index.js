let increasebtn = document.getElementById('increase')
let decreasebtn = document.getElementById('decrease')
let resetbtn = document.getElementById('reset')
let Countbtn = document.getElementById('Count')
let count = 0;

increasebtn.onclick = function () {
    count++;
    Countbtn.textContent = count;
}
decreasebtn.onclick = function () {
    count--;
    Countbtn.textContent = count;
}
resetbtn.onclick = function () {
    count = 0;
    Countbtn.textContent = count;
}