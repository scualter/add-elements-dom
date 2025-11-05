 // Aquí tu código
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', function() {
    const elemento = prompt('Introduce un elemento para la lista:');

    if(elemento) {
        const li = document.createElement('li');
        li.textContent = elemento;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'eliminar';

        btnEliminar.addEventListener('click', function() {
            lista.removeChild(li);
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    }
});