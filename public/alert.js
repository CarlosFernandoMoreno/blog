import Swal from 'sweetalert2';

const formSolicitudes = document.getElementById("formSolicitudes");

formSolicitudes.addEventListener('submit', () => {
    if(formSolicitudes.checkValidity()){
        Swal.fire({
            icon: 'success',
            title: 'La publicacion fue recibida con exito',
            showConfirmButton: false,
            timer: 2500
          })
    }
})
