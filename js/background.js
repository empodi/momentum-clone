const imgs = [
    "01.jpg",
    "02.jpg",
    "03.jpg", 
    "04.jpg", 
    "05.jpg", 
    "06.jpg", 
    "07.jpg", 
    "08.jpg", 
    "09.jpg", 
    "10.jpg"
];

const imgForBackground = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${imgForBackground}`;
bgImage.className = "bgImage";

document.body.appendChild(bgImage);
