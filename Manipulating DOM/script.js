const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const par = document.createElement("p");
par.style.color = "red";
par.textContent = "Hey, I'm red";
container.appendChild(par);


const subHeading = document.createElement("h3");
subHeading.style.color = "blue";
subHeading.textContent = "I'm a blue h3";
container.appendChild(subHeading);

const subContent = document.createElement("div");
subContent.style.cssText= "border: 2px solid black; background: pink;";

const subContentHeading = document.createElement("h1");
subContentHeading.textContent= "I'm a div";
subContent.appendChild(subContentHeading)

const subContentPar = document.createElement("p");
subContentPar.textContent= "ME TOO";
subContent.appendChild(subContentPar);


container.appendChild(subContent)

