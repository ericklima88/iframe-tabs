const { ipcRenderer } = require('electron');
const axios = require('axios');
const $ = require('jquery');
// var userEmail = document.getElementById('userEmail').value
// var userPassword = document.getElementById('userSenha').value
let enviar = document.querySelector('#enviar');
let limpar = document.querySelector('#limpar');

$('#limpar').on('click', () => {
    $('#userEmail').val('');
    $('#userSenha').val('');
})

$('#enviar').on('click', () => {
    ipcRenderer.send('logar', {
        email: $('#userEmail').val(),
        password: $('#userSenha').val()
    });
});

$('#clicka').on('click', () => {
    $('#opa').hide();
    $('#pao').show();
});

$('#webview').on('click', () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            console.log(res);
            $('#main').html(`
                <table class='table text-center'>
                    <tr>
                        <th>User ID</th>
                        <th>Post ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    <tr>
                        <td>${res.data.userId}</td>
                        <td>${res.data.id}</td>
                        <td>${res.data.title}</td>
                        <td>${res.data.body}</td>
                    </tr>
                </table>
            `);
        })
        .catch((e) => console.log(e));
    
});

ipcRenderer.send('create-account', () => {});
ipcRenderer.send('create-webview', () => {});
ipcRenderer.send('logout', () => {});
ipcRenderer.send('delete-webview', () => {});