// modal function
function openModal(modalId){
    const modal = document.querySelector(modalId);
    modal.classList.add('show');
}

const modalCloseBtn = document.querySelectorAll(".modal .modal__btn > .btn-close");

modalCloseBtn.forEach((e, index)=>{
    e.addEventListener("click", ()=>{
        const parentModal = e.parentNode.parentNode.parentNode;
        parentModal.classList.remove('show');
    });
});