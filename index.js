let homeEl = document.getElementById("home-el")
let count =0
let guestEL = document.getElementById("guest-el")
let guestCount = 0
function addOne(){
    count+=1
    homeEl.textContent = count
}

function addTwo(){
    count+=2
    homeEl.textContent = count
}

function addThree(){
    count+=3
    homeEl.textContent = count
}


function addOneG(){
    guestCount+=1
    guestEL.textContent = guestCount
}

function addTwoG(){
    guestCount+=2
    guestEL.textContent = guestCount
}

function addThreeG(){
    guestCount+=3
    guestEL.textContent = guestCount
}