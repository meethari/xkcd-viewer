var currentXkcdNum = -1

window.onload = (event) => {
    image.width = 600
    setCurrentXkcdNum()
    pullXkcd()
};

function setCurrentXkcdNum() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = setCurrentXkcdNumAfterResponse
    xhttp.open("GET", "https://xkcd.now.sh/?comic=latest", true) // async call
    xhttp.send()
}

function setCurrentXkcdNumAfterResponse() {
    if (this.readyState == 4 && this.status == 200) {
        xkcdObj = JSON.parse(this.responseText)
        currentXkcdNum = xkcdObj.num
        console.log(currentXkcdNum)
    }

    else 
        currentXkcdNum = 2500 // if we don't have an upper limit, we'll make one up
}

function pullXkcd(num = 0) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = setXkcd
    if (num == 0) {
        // default case, get latest xkcd
        xhttp.open("GET", "https://xkcd.now.sh/?comic=latest", true) // async call
    } else {
        xhttp.open("GET", "https://xkcd.now.sh/?comic=" + num.toString(), true) // 
    }
    
    xhttp.send()
}


function findXkcdByNum() {
    const textboxNum = document.getElementById("textboxNum")
    const num = textboxNum.value // string
    if (isNaN(num))
        alert("Please enter a number.")

    else if (num < 1 || num > currentXkcdNum)
        alert(`Please enter a number in the range 1 - ${currentXkcdNum}`)
    else 
        pullXkcd(num)
}

function setXkcd() {

    var xkcdObj

    if (this.readyState == 4 && this.status == 200) {
        xkcdObj = JSON.parse(this.responseText)

        const textTitle = document.getElementById("textTitle")
        const textAltText = document.getElementById("textAltText")
        const image = document.getElementById("image")
        const textboxNum = document.getElementById("textboxNum")

        textAltText.innerHTML = "Alt text: " + xkcdObj.alt;
        textTitle.innerHTML = xkcdObj.title
        image.src = xkcdObj.img
        textboxNum.value = xkcdObj.num
        

    } else {
        alert("Server error")
    }

    
}


/* function pullImage = function() {
    var textboxUrl = document.getElementById("textboxUrl")
    var image = document.getElementById("image")
    var url = textboxUrl.value
    image.src =  url
    
} */