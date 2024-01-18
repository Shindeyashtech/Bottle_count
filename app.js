let countEl = document.getElementById("count-el")   // fecting from id
let saveEl = document.getElementById("save-el")

let count =0

function  increment() {

    count += 1   // this for increimenting a val 

countEl.innerText =count       //  ????
}


function save() {
    
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    // console.log(count);
    
    countEl.innerText =0       //  ????
    count=0
}

