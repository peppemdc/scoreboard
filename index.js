// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let countHistory = ""

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
        let countHistory = count + " - "// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
        saveEl.textContent += countHistory 
        count=0
        countEl.textContent = count
}
