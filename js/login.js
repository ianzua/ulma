var objPeople = [
    {
        username : "irati",
        password : "1234"
    },
    {
        username : "jon",
        password : "zubaizu"
    }
]

function getInfo(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 0 ; i< objPeople.length ; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password){
            console.log (username + "is logged in!!")
            window.location.href = './es.html';
            return
        }
    }
    window.alert('la contraseña o el usuario son incorrectos')
    location.reload()
}