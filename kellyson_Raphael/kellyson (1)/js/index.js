var CPF;

function reservarQuarto(e) {
    e.preventDefault()
    alert("Reserva Realizada!")
}
function mascara(e) {
    var value = e.target.value
    value = value.replace(/\D/g, "");
    value = value.substring(0, 11);
    var regex = /(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/;
    value = `${value.replace(regex, "$1.$2.$3-$4")}`;
    value = value.replace(/[\.-]$/, "");
    CPF.value = value
}

window.onload = () => {
    CPF = document.getElementById('cpf')

    CPF.addEventListener('input', mascara)

    const form = document.getElementById('form')
    form.addEventListener('submit', reservarQuarto)
}
