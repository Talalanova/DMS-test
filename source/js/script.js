const modal = document.getElementById('modal');
const orderButton = document.querySelectorAll('.order-button');
const wrap = document.getElementById('wrap');

const showModal = () => {
    modal.style.visibility = "visible";
}

const closeModal = () => {
    modal.style.visibility = "hidden";
}

orderButton.forEach(button => {
    button.addEventListener('click', () => {
        showModal();
    })
})




