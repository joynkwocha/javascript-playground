const body = document.querySelector('body');
const darkMode = document.getElementById('dark_mode');
const lightMode = document.getElementById('light_mode');

//for local storage
let preferredColor;
window.addEventListener('DOMContentLoaded', () => {
    let preferredColor = localStorage.getItem('preferredColorTheme');
    if (preferredColor) {
        body.classList.add(preferredColor);
    };
});


function toggleBtn(callback) {
    darkMode.classList.toggle('hidden');
    lightMode.classList.toggle('hidden');
    callback();
}


function modeSwitch() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        preferredColor = 'dark-mode';
        localStorage.setItem("preferredColorTheme", preferredColor)
    } else {
        preferredColor = 'light-mode';
        localStorage.setItem("preferredColorTheme", preferredColor)
    }
};


lightMode.addEventListener("click", () => toggleBtn(modeSwitch));
darkMode.addEventListener("click", () => toggleBtn(modeSwitch));

const images = ['city.jpg', 'city1.jpg', 'city2.jpg', 'city3.jpg'];
const navBar = document.querySelector('.nav_bar');
let currentIndex = 0;

function changeNavImage() {
    const currentImage = images[currentIndex];
    navBar.style.backgroundImage = `url("images/${currentImage}")`;
    currentIndex++;
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    };
}

setInterval(changeNavImage, 2000);

const parent = document.getElementById('container');
const loadSign = document.getElementById('rotate');
let pageNumber = 0;

async function fetchImages() {
    const moreImg = await fetch(`https://picsum.photos/v2/list?page=${pageNumber++}&limit=10`);
    const newData = await moreImg.json();
    const imageElements = [];

    newData.forEach((newImgData) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image_container');

        const newImgTag = document.createElement('img');
        newImgTag.classList.add('child');
        newImgTag.src = newImgData.download_url;

        const imageOverlay = document.createElement('div');
        imageOverlay.classList.add('overlay');

        const overlayContent = document.createElement('div');
        overlayContent.classList.add('overlay-content');
        overlayContent.innerHTML = `
          <span class="overlay-author"> Author : ${newImgData.author}</span>`

        imageOverlay.appendChild(overlayContent);

        imageContainer.appendChild(newImgTag);
        imageContainer.appendChild(imageOverlay);
        parent.appendChild(imageContainer);
        imageElements.push(imageContainer);
    });

    parent.append(...imageElements);

    loadSign.style.display = "none";
};


fetchImages().then(() => {
    loadSign.style.display = "block";
})

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const visibleHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;

    if (scrollPosition + visibleHeight >= totalHeight) {
        fetchImages().then(() => {
            loadSign.style.display = "block";
        })
    };
});