const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loinBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loinBtn.addEventListener('click', () => {
    container.classList.remove('active');
});