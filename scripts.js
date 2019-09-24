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