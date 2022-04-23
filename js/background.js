const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//html파일에 img태그를 만들어줌

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);