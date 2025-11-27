let form= document.querySelector("form")
let inp= document.querySelectorAll("input")
let main= document.querySelector("#main")
form.addEventListener("submit",function(dt){
    dt.preventDefault()
    
    let card=document.createElement("div")
    card.classList.add("card")

    let profile=document.createElement("div")
    profile.classList.add("profile")
    
    let h2= document.createElement("h2")
    h2.textContent= `name:${inp[0].value}`
    let h3= document.createElement("h3")
    h3.textContent=`age:${inp[1].value}`

    let p= document.createElement("p")
    p.textContent= `details:${inp[2].value}`
    card.appendChild(profile)
    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(p) 
    document.body.appendChild(card)
    
    inp.forEach(function (inp){
        if(inp.type === "text")
            inp.value=""
    })
})
