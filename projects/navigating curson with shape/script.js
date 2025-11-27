let div= document.querySelector("div")

window.addEventListener("mousemove",function(data){
    console.dir(div)
    div.style.top =data.clientY - (div.offsetWidth / 2)+"px"
    div.style.left =data.clientX - (div.offsetHeight / 2)+"px"
})
