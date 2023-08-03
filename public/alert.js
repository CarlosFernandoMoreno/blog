const formSolicitudes = document.getElementById("formSolicitudes");

formSolicitudes.addEventListener('submit', (event) => {
    event.preventDefault();
    if(formSolicitudes.checkValidity()){
        Swal.fire({
            title: 'Deses enviar esta publicacion?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            denyButtonText: `No enviar`,
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire('Enviado!', '', 'success')
              setTimeout(function() {
                event.target.submit();
            }, 2500);
            } else if (result.isDenied) {
              Swal.fire('La publicacion no fue enviada', '', 'info');
            } else {
                formSolicitudes.reset()
            }
          })

    }
})
