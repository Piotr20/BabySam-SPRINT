const img1 = document.querySelector('.content>img:nth-child(1)');
const img2 = document.querySelector('.content>img:nth-child(2)');

img2.addEventListener('click', function () {
     img2.setAttribute('id', 'big');
     img1.removeAttribute('id', 'big');
})
img1.addEventListener('click', function () {
     img1.setAttribute('id', 'big');
     img2.removeAttribute('id', 'big');
})

const i = document.querySelector('nav>i');
const inp = document.querySelector('nav>input');


i.addEventListener('mouseover', function () {

     window.setTimeout(function () {
          inp.style.width = '0vw';
     }, 3000);
     inp.style.width = '17vw';
})

inp.addEventListener('focus', function () {
     inp.style.width = '17vw';
})

inp.addEventListener('blur', function () {
     inp.style.width = '0vw';
})

const s1 = document.querySelector(".recomendation>i:nth-of-type(1)");
const s2 = document.querySelector(".recomendation>i:nth-of-type(3)");
const s3 = document.querySelector(".recomendation>i:nth-of-type(5)");
const s4 = document.querySelector(".recomendation>i:nth-of-type(7)");
const s5 = document.querySelector(".recomendation>i:nth-of-type(9)");

s1.addEventListener('mouseover', function () {
     s1.style.color = 'darkorange';
     s1.addEventListener('mouseout', function () {
          s1.style.color = 'transparent';
     })
})
s2.addEventListener('mouseover', function () {
     s2.style.color = 'darkorange';
     s1.style.color = 'darkorange';
     s2.addEventListener('mouseout', function () {
          s2.style.color = 'transparent';
          s1.style.color = 'transparent';
     })
})
s3.addEventListener('mouseover', function () {
     s3.style.color = 'darkorange';
     s2.style.color = 'darkorange';
     s1.style.color = 'darkorange';
     s3.addEventListener('mouseout', function () {
          s3.style.color = 'transparent';
          s2.style.color = 'transparent';
          s1.style.color = 'transparent';

     })
})
s4.addEventListener('mouseover', function () {
     s3.style.color = 'darkorange';
     s2.style.color = 'darkorange';
     s1.style.color = 'darkorange';
     s4.style.color = 'darkorange';
     s4.addEventListener('mouseout', function () {
          s3.style.color = 'transparent';
          s2.style.color = 'transparent';
          s1.style.color = 'transparent';
          s4.style.color = 'transparent';
     })
})
s5.addEventListener('mouseover', function () {
     s3.style.color = 'darkorange';
     s2.style.color = 'darkorange';
     s1.style.color = 'darkorange';
     s4.style.color = 'darkorange';
     s5.style.color = 'darkorange';
     s5.addEventListener('mouseout', function () {
          s3.style.color = 'transparent';
          s2.style.color = 'transparent';
          s1.style.color = 'transparent';
          s4.style.color = 'transparent';
          s5.style.color = 'transparent';
     })
})
const a = document.querySelector('.recomendation>a');
const div = document.querySelector('.content>div:nth-of-type(3)');
const p = document.querySelector('.content>div:nth-of-type(3)>p');
a.addEventListener('mouseover', function () {
     div.setAttribute('class', 'info');
     p.style.color = '#FA7268';
})
a.addEventListener('mouseout', function () {
     div.removeAttribute('class', 'info');
     p.style.color = 'transparent';
})