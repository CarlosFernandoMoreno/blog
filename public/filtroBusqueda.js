const publicaciones = document.getElementsByClassName('cardAltura')
const divMostrarTodo = document.getElementById('divMostrarTodo')

function filtrarPublicaciones() {
  const btnBusqueda = document.getElementById('btnBusqueda').value.toLowerCase();

  for (const publicacion of publicaciones) {
    const titulo = publicacion.getElementsByClassName('card-title')[0].innerText.toLowerCase();
    const contenido = publicacion.getElementsByClassName('card-text')[0].innerText.toLowerCase();

    if (btnBusqueda === '') {
      publicacion.style.display = 'none'
    } else if (titulo.includes(btnBusqueda) || contenido.includes(btnBusqueda)) {
      publicacion.style.display = 'block'
    } else {
      publicacion.style.display = 'none'
    }
  }
  divMostrarTodo.style.display = 'block'
}

function mostrarTodo() {
  for (const publicacion of publicaciones) {
    publicacion.style.display = 'block'
    divMostrarTodo.style.display = 'none'
  }
}

function btnMostrarMas(event) {
  const btnMostrar = event.target
  const btnExpandido = btnMostrar.getAttribute('aria-expanded')
  btnMostrar.textContent = btnExpandido === 'true' ? 'Mostrar Menos' : 'Mostrar Mas'
}

document.addEventListener('DOMContentLoaded', () => {
  const alertBorrado = document.querySelectorAll('.alertBorrado')

  alertBorrado.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
      event.preventDefault()
      Swal.fire({
        title: 'Eliminar publicacion?',
        text: 'No podras revertirlo!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, borralo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            showConfirmButton: false,
            title: 'La publicacion fue forrada'

          })
          setTimeout(function () {
            window.location.href = elemento.getAttribute('href')
          }, 2000)
        }
      })
    })
  })
})
