const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.addEventListener("click", function(e) {
   let userInput= input.value;
   
   let listItem = document.createElement("li");
   let span = document.createElement("span");
   let deleteButton = document.createElement("button");

   listItem.appendChild(span);
   listItem.appendChild(deleteButton);

   span.textContent = userInput;
   deleteButton.textContent = "Delete";

   list.appendChild(listItem);

   deleteButton.addEventListener("click", function(e){
    listItem.remove()
   })

   document.querySelector("input").focus();
   userInput = "";
});
