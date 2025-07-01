
const shareIcon = document.querySelector('.pic3');
const socialIcons = document.querySelector('.social-icons');

shareIcon.addEventListener('click', () => {
  socialIcons.classList.toggle('show');
});