document.getElementById('loguinform'), addEventListener('submit', function (Event) {

    Event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value;
    const mensage = document.getElementById('mensagem')


    if (username === "brenogbi" && password === '18232520') {

        mensage.style.color = 'red',
        window.location.href = "pagina2.html"; // Redireciona se estiver correta
    } else {
        mensage.style.color = 'red',
            alert('senha ou usuario incorretos')


    }


})
