// .setAttribute

const square = document.createElement("div");
const body = document.querySelector("body");
const image = document.createElement("img");
body.appendChild(square);
body.appendChild(image);

// Syntax: image.setAttribute(key, value)

image.setAttribute("src", "src/images/steve-github-pic.jpg");
image.setAttribute("data-id", 4);

// have to include src/ as part of key, because it
// gets sent to the HTML that is in the ROOT of the project

// .getAttribute()

const imagePath = image.getAttribute("src");

const imageId = image.getAttribute("data-id");

console.log(imagePath);

console.log(imageId);

console.log(body);
