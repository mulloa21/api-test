function guardar() {

    let nombre_ = document.getElementById('nombre').value
    let creditos_ = document.getElementById('creditos').value

    let data = { nombre:nombre_, creditos:creditos_ }

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(data) 
        };

        fetch('/materia', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    })
}

function guardar_materia() {
    guardar()
        .then( (response) => {
            alert('Registro exitoso.')
            listar_materias();
        } )
        .catch( (error) => {
            alert('Error al ingresar.')
        } )
}

function actualizar_materia() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre_actualizar').value;
    const creditos = document.getElementById('creditos_actualizar').value;

    let data = { nombre, creditos };

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        };

        fetch(`/materia/${id}`, request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
            listar_materias();
    })
    .then(response => alert('Materia actualizada exitosamente.'))
    .catch(error => alert('Error al actualizar lamateria.'));
    
}



function eliminar_materia() {
    const id = document.getElementById('id_eliminar').value;
    console.log('Valor del ID:', id);
    if (!id) {
        alert('Por favor, ingresa un ID válido');
        return;
    }

    
    fetch(`/materia/${id}`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token')}
    })
    .then(response => {
        if (response.ok) {
            alert(`Materia con ID ${id} eliminado exitosamente`);
            listar_materias();
        } else {
            return response.json().then(data => {
                alert(`Error al eliminar materia: ${data.message}`);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al eliminar la materia');
    });


}


function listar_materias() {
    fetch('/materia', {
        headers: { Authorization: localStorage.getItem('token')}
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Error al obtener materias: ' + data.error);
                return;
            }
            
            const materias = data.body;
            const tbody = document.getElementById('lista-materias');
            tbody.innerHTML = ''; 
            
            materias.forEach(materia => {
                const row = tbody.insertRow();
                row.insertCell(0).textContent = materia._id;
                row.insertCell(1).textContent = materia.nombre;
                row.insertCell(2).textContent = materia.creditos;
                row.insertCell(3).textContent = new Date(materia.fecha_registro).toLocaleString();
                row.insertCell(4).textContent = new Date(materia.fecha_actualizacion).toLocaleString();
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al obtener la lista de materias');
        });
}

document.addEventListener('DOMContentLoaded', listar_materias);