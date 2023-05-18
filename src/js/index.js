const camposForm = document.querySelectorAll(".campo");
const botaoEnviar = document.querySelector(".botao");

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    camposForm.forEach((campo) => {
        if (!campo.value){
            campo.classList.add("campoVazio");
            campo.nextElementSibling.style.display = "block";
        }else {
            campo.classList.add("campoConfirm");
            campo.nextElementSibling.style.display = "none";
        }
    })
})