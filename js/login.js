var objPeople = [
    {
        username : "ULMA",
        password : "ulmarenewal"
    },
    {
        username : "LOGISIETE",
        password : "ulmarenewal"
    },
    {
        username : "CONSUM",
        password : "ulmarenewal"
    },
    {
        username : "HOFMANN",
        password : "ulmarenewal"
    },
    {
        username : "GRESPANIA",
        password : "ulmarenewal"
    },
    {
        username : "SALVESEN",
        password : "ulmarenewal"
    },
    {
        username : "FEGEMU",
        password : "ulmarenewal"
    },
    {
        username : "ROGE",
        password : "ulmarenewal"
    },
    {
        username : "BRALO",
        password : "ulmarenewal"
    },
    {
        username : "CONDALS",
        password : "ulmarenewal"
    },
    {
        username : "SIMON",
        password : "ulmarenewal"
    },
    {
        username : "QF+",
        password : "ulmarenewal"
    },
    {
        username : "INDUSTRIALZAPATERA",
        password : "ulmarenewal"
    },
    {
        username : "DANONE",
        password : "ulmarenewal"
    },
    {
        username : "TRACE",
        password : "ulmarenewal"
    },
    {
        username : "CAF",
        password : "ulmarenewal"
    },
    {
        username : "COFERDROZA",
        password : "ulmarenewal"
    },
    {
        username : "CATELSA",
        password : "ulmarenewal"
    },
    {
        username : "URGO",
        password : "ulmarenewal"
    },
    {
        username : "EROSKI",
        password : "ulmarenewal"
    },
    {
        username : "ORONA",
        password : "ulmarenewal"
    },
    {
        username : "UBIS",
        password : "ulmarenewal"
    },
    {
        username : "JASI",
        password : "ulmarenewal"
    },
    {
        username : "ULMAFORJA",
        password : "ulmarenewal"
    },
    {
        username : "ABC",
        password : "ulmarenewal"
    },
    {
        username : "ARTADI",
        password : "ulmarenewal"
    },
    {
        username : "ABACUS",
        password : "ulmarenewal"
    },
    {
        username : "SNCF",
        password : "ulmarenewal"
    },
    {
        username : "PERNODRICARD",
        password : "ulmarenewal"
    },
    {
        username : "WALTERMARTINEZ",
        password : "ulmarenewal"
    },
    {
        username : "SOLER&PALAU",
        password : "ulmarenewal"
    },
    {
        username : "TELLO",
        password : "ulmarenewal"
    },
    {
        username : "KRAFFT",
        password : "ulmarenewal"
    },
    {
        username : "SAMSE",
        password : "ulmarenewal"
    },
    {
        username : "PROCLINIC",
        password : "ulmarenewal"
    },
    {
        username : "LACOR",
        password : "ulmarenewal"
    },
    {
        username : "BELENUS",
        password : "ulmarenewal"
    },
    {
        username : "CEYS",
        password : "ulmarenewal"
    },
    {
        username : "VALENTINE",
        password : "ulmarenewal"
    },
    {
        username : "FINSA",
        password : "ulmarenewal"
    },
    {
        username : "GLAXO",
        password : "ulmarenewal"
    },
    {
        username : "ACMARCA",
        password : "ulmarenewal"
    },
    {
        username : "CANDELSA",
        password : "ulmarenewal"
    },
    {
        username : "VEMARE",
        password : "ulmarenewal"
    },
    {
        username : "AUXILIARCONSERVERA",
        password : "ulmarenewal"
    },
    {
        username : "KRAFFT",
        password : "ulmarenewal"
    },
    {
        username : "FELIXSOLIS",
        password : "ulmarenewal"
    },
    {
        username : "GKN",
        password : "ulmarenewal"
    },
    {
        username : "EHLIS",
        password : "ulmarenewal"
    },
    {
        username : "SPB",
        password : "ulmarenewal"
    },
    {
        username : "ZARAHOME",
        password : "ulmarenewal"
    },
    {
        username : "FORUM",
        password : "ulmarenewal"
    },
    {
        username : "LUG",
        password : "ulmarenewal"
    },
    {
        username : "SYSTEMU",
        password : "ulmarenewal"
    },
    {
        username : "JMA",
        password : "ulmarenewal"
    },
    {
        username : "CUETARA",
        password : "ulmarenewal"
    },
    {
        username : "BONDUELLE",
        password : "ulmarenewal"
    },
    {
        username : "TRW",
        password : "ulmarenewal"
    },
    {
        username : "TELIFRAIS",
        password : "ulmarenewal"
    },
    {
        username : "ELAY",
        password : "ulmarenewal"
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