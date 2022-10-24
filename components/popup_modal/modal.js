const modal = document.querySelector(".modal");

document.querySelector(".openModal-btn").addEventListener("click", openModal);

document.querySelector(".closeModal-btn").addEventListener("click", closeModal);

function openModal() {
  modal.classList.remove("modal-closed");
}

function closeModal() {
  modal.classList.add("modal-closed");
}
