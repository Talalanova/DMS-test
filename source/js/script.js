const modal = document.getElementById('modal');
const orderButton = document.querySelectorAll('.order-button');
const overlay = document.querySelector('.modal__overlay')
const equipmentButton = document.querySelectorAll('.equipment-list__button');

const showModal = () => {
    modal.style.visibility = "visible";
}

const closeModal = () => {
    modal.style.visibility = "hidden";
    modal.classList.remove('modal-active');
}

orderButton.forEach(button => {
    button.addEventListener('click', () => {
        showModal();
        modal.classList.add('modal-active');
    })
})

overlay.addEventListener('click', () => {
    closeModal();
})

equipmentButton.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.classList.toggle('equipment-item--open');        
        button.lastChild.classList.toggle('rotate-svg');
    })
})
