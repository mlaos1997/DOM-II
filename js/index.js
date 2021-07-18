const nav = document.querySelector('.nav');
const containerHome = document.querySelector('.home');
const images = document.querySelectorAll('img');
const allH2tags = document.querySelectorAll('H2');

// Your code goes here
// 1. On mouseover, H2 tags will turn red then reset 
Array.from(allH2tags).forEach(tag => {
    tag.addEventListener('mouseover', function (e) {
        e.target.style.color = "red";

        setTimeout(function () {
            e.target.style.color = '';
        }, 400);
    }, false);
})

// 1. change text color on keydown event
document.addEventListener('keydown', logKey);

function logKey(e) {
    document.body.style.color = "orange";

    setTimeout(function () {
        document.body.style.color = "";
    }, 400);
}

// 2. prevent default behaviour, log 'nav has been clicked';
nav.addEventListener('click', e => {
    e.preventDefault();
    console.log('Nav has been clicked');
});

// 3. stop propogation, log to console
document.addEventListener('click', e => {
    e.stopPropagation();
    console.log('an item in document has been clicked');
});

// 4. Change background color on hover
containerHome.addEventListener('mouseenter', () => {
    containerHome.style.backgroundColor = 'yellow'
});

// 5. Container style returns to normal on mouseleave
containerHome.addEventListener('mouseleave', () => {
    containerHome.style.backgroundColor = 'white';
});

// 6. On click .fun-bus image will dissapear
const funBusImage = images[0];
funBusImage.classList.add('fun-bus-image');
funBusImage.addEventListener('dblclick', e => {
    funBusImage.remove();
})

// 7. Window resizing
window.addEventListener('resize', () => {
    console.log('resizing!')
});

// 8. Log scroll event
window.addEventListener('wheel', () => {
    console.log('Scrolling');
});

// 9. When site finishes loading log to console
window.addEventListener('load', () => {
    console.log('Site has loaded');
});

// 10. log key code in alert
window.addEventListener('keydown', e => {
    alert(`${e.code}`)
});