function register() {
    const userData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    console.log(userData);

    return new Promise((resolve, reject) => {
            const request_options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            };

            fetch('/usuario/register', request_options)
                .then((data) => resolve(data.json()))
                .catch((error) => reject(`[error]: ${error}`));
        })
    }
