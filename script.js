//selecting buttton,popupbox,popupoverley
var addbutton=document.getElementById("add-popup-button")
var popupoverley=document.querySelector(".popup-overley")
var popupbox=document.querySelector(".popup-box")
addbutton.addEventListener("click",function(){
popupoverley.style.display="block"
popupbox.style.display="block"
})
//select cancel button
var cancel=document.getElementById("cancel-story")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverley.style.display="none"
    popupbox.style.display="none"
})
// selecting container,add-story,story-input,author-input,
var container=document.querySelector(".container")
var addstory=document.getElementById("add-story")
var storyinput=document.getElementById("story-input")
var authorinput=document.getElementById("author-input")
var storydes=document.getElementById("story-des")
addstory.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${storyinput.value}</h2>  
    <h5>${authorinput.value}</h5>
            <p>${storydes.value}</p>
            <button onclick="deletestory(event)">Delete</button>`

            container.append(div)
             popupoverley.style.display="none"
             popupbox.style.display="none"
})
function deletestory(event){
event.target.parentElement.remove()
}