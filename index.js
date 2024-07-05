let colors = ["#FFC1CC", "#81e6e6", "rgba(187,82,243,0.98)", "#FF6F61"];
let sections = document.querySelectorAll('.section');

let lastColor;
let lastText
sections.forEach(function(section) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    while (randomColor === lastColor) {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    }
    lastColor = randomColor;
    section.style.backgroundColor = randomColor;
});

//SCROLL
let currentSectionIndex = 0;
function handleScroll(event) {
    if (event.deltaY > 0) {
        currentSectionIndex++;
    }
    else if (event.deltaY < 0) {
        currentSectionIndex--;
    }

    currentSectionIndex = Math.max(0, Math.min(currentSectionIndex, sections.length - 1));
    window.scrollTo({
        top: sections[currentSectionIndex].offsetTop,
        behavior: 'smooth'
    });
    event.preventDefault();
}
document.addEventListener('wheel', handleScroll, { passive: false });

document.body.addEventListener('touchmove', handleScroll, { passive: false });

function scrollOnClick(event){
    currentSectionIndex++
    currentSectionIndex = Math.max(0, Math.min(currentSectionIndex, sections.length - 1));
    window.scrollTo({
        top: sections[currentSectionIndex].offsetTop,
        behavior: 'smooth'
    });
    event.preventDefault();
}

let buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
    button.addEventListener('click', scrollOnClick);
});

let buttons2 = document.querySelectorAll('.button2');

function scrollOnClick2(event){
    currentSectionIndex--
    currentSectionIndex = Math.max(0, Math.min(currentSectionIndex, sections.length - 1));
    window.scrollTo({
        top: sections[currentSectionIndex].offsetTop,
        behavior: 'smooth'
    });
    event.preventDefault();
}
buttons2.forEach(function(button) {
    button.addEventListener('click', scrollOnClick2);
});

