const publicaciones = document.getElementsByClassName('cardAltura');
const divMostrarTodo = document.getElementById('divMostrarTodo');

function filtrarPublicaciones() {
    const btnBusqueda = document.getElementById('btnBusqueda').value.toLowerCase();

    for (const publicacion of publicaciones) {
        const titulo = publicacion.getElementsByClassName('card-title')[0].innerText.toLowerCase();
        const contenido = publicacion.getElementsByClassName('card-text')[0].innerText.toLowerCase();

        if (btnBusqueda === '') {
            publicacion.style.display = 'none';
        } else if (titulo.includes(btnBusqueda) || contenido.includes(btnBusqueda)) {
            publicacion.style.display = 'block';
        } else {
            publicacion.style.display = 'none';
        }
    }
    divMostrarTodo.style.display = 'block';
}

function mostrarTodo() {
    for (const publicacion of publicaciones) {
      publicacion.style.display = 'block'; 
      divMostrarTodo.style.display = 'none';
    }
  }