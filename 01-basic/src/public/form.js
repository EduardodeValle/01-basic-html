document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;

        form.reset();

        alert(`Gracias por sus comentarios ${nombre}, te contactaremos a ${correo} en caso de ser necesario.`);
    });
});
