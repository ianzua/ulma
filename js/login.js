var objPeople = [
    {
        username : "ulma",
        password : "1234"
    },
    {
        username : "bralo",
        password : "1234"
    },
    {
        username : "catelsa",
        password : "1234"
    },
    {
        username : "tello",
        password : "1234"
    },
    {
        username : "finsa",
        password : "1234"
    },
    {
        username : "glaxo",
        password : "1234"
    },
    {
        username : "vemare",
        password : "1234"
    },
    {
        username : "felixsolis",
        password : "1234"
    },
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