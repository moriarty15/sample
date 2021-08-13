const openModalOpen = document.querySelector('.button');
openModalOpen.addEventListener('click', isOpenModal);
const modalEL = document.querySelector('.modal');
console.log(modalEL)
function isOpenModal() {
    modalEL.classList.add('is-open')
}
const closeModalOpen = document.querySelector('.button__close');
closeModalOpen.addEventListener('click', isCloseModal);
function isCloseModal() {
    modalEL.classList.remove('is-open')
}
