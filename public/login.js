function login() {
    const loginData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    return new Promise((resolve, reject) => {
            const request_options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            };

            fetch('/auth/login', request_options)
                .then((data) => {
                data.json().then((data) => {
                    console.log(data);
                    if(data.token) {
                        localStorage.setItem('token', data.token);
                        document.location.href = "materias.html";
                    }else{
                        alert("Error al Iniciar Sesión");
                    }

                })
                })
                .catch((error) => reject(`[error]: ${error}`));
        })
}
