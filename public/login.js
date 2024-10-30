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
                    resolve(data.json());
                    console.log(data.json());
                    localStorage.setItem('token', data.json().token);
                })
                .catch((error) => reject(`[error]: ${error}`));
        })
}
