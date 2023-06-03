const body = document.querySelector("body")
// const img = document.querySelector("img")
var icon = document.getElementById("icon")

icon.onclick = () => {
    body.classList.toggle("dark")
    // console.log(body.classList)
    if(body.classList.contains("dark")){
        icon.src = "moon.svg"
    }
    else {
        icon.src = "sun.svg"
    }
}
