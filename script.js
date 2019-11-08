// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// document.getElementById("").classList.remove("");


//need elem beacause it tells java what to look for


var imagesArray = ["imagesoferic/ko.jpg", "imagesoferic/eric.jpg", "imagesoferic/image.jpg", "imagesoferic/why.jpg", "imagesoferic/dark.png", "imagesoferic/light.jfif"];

function displayImage(){
var num = Math.floor(Math.random() * 6);
document.canvas.src = imagesArray[num];

}