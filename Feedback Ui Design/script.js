const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        remoteActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML =
    `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feelback: ${selectedRating} </strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function remoteActive () {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}