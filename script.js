const root    = document.querySelector(":root")
const infoBtn = document.querySelector(".info")
const quitbtn = document.querySelector(".quit")
const popup   = document.querySelector(".popup")
const sortBtn = document.querySelector(".sort")
const unsorted= document.querySelectorAll(".unsorted div")
const sorted  = document.querySelectorAll(".sorted div")
const after   = document.querySelector(".after")

infoBtn.addEventListener("click", ()=> popup.style.display = "flex")
quitbtn.addEventListener("click", ()=> popup.style.display = "none")

function generateRandomNumber() {
    return Math.floor(Math.random()*1000)
}

function generateRandomTheme() {
    return `hsl(${Math.floor(Math.random()*360)},50%,50%)`
} 

window.addEventListener("DOMContentLoaded",()=> root.style.setProperty("--main-theme",generateRandomTheme()))

const arr = []
unsorted.forEach(element => {
    const randomNum = generateRandomNumber()
    element.innerText = randomNum
    arr.push(randomNum)
})

function insertionSort(arr) {
    let i,j,key;
     
    for (i=1; i<arr.length; i++) {
        key = arr[i]
        j = i - 1;
        
        while (j>=0 && key < arr[j]) {
            arr[j+1] = arr[j]
            j-=1
        }

        arr[j+1] = key
    }
}
 

sortBtn.addEventListener("click", ()=> {

    insertionSort(arr)

    for(i=0; i<5; i++){
    sorted[i].innerText = arr[i]
    }  

    after.style.display = "block"

    sortBtn.disabled = true
})

