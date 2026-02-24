
const btn = document.getElementById('showMessage');

const box = document.getElementById('messageBox');

const messages = [
'Oie, Mundo!',
'Boas vindas torcedores',
'Corinthians está na semi',
'Iremos ser campeões de novo',
'Vai Curintia!'
];

let current = 0;

btn.addEventListener('click', () => {

box.classList.add('show');

box.textContent = messages[current];

current = (current + 1) % messages.length;
});

