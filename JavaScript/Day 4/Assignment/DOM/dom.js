let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")


button.addEventListener('click', () => {

    let li = document.createElement("li")
    let inputText = input.value

    li.textContent = inputText

   
    let deletebutton = document.createElement("button")
    deletebutton.textContent = "Delete"

    deletebutton.addEventListener('click',()=>{
        li.remove()
    })

    let doneButton = document.createElement("button")
    doneButton.textContent = "Done"

    doneButton.addEventListener('click',()=>{
        li.style.textDecoration ="line-through"
    
    })

    li.append(deletebutton)
    li.append(doneButton)
     ul.append(li)


   
    
})