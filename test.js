console.log("4" + 2)

var juin = new Date("2022-06-08")
var septembre = new Date("2022-09-15")

var date2 = new Date("June 1")

function afficher(form2) {
    var testin =document. form2.date.value;
    var tempDay =document. form2.tempDay.value;
    var tempNight =document. form2.tempNight.value;

    if (testin > "2022-06-08" && testin < "2022-09-15"){
        document.form2.output.value="Niveau 1 - Veille saisonnière - Verte"
        document.body.style.backgroundColor = "green"
    }
    if (tempDay > 27 && tempNight > 15){
        document.form2.output.value="Niveau 2 - Avertissement Chaleur - Jaune"
        document.body.style.backgroundColor = "yellow"
    }
    if (tempDay > 31 && tempNight > 18){
        document.form2.output.value="Niveau 3 - Alerte Canicule - Orange"
        document.body.style.backgroundColor = "orange"
    }
    if (tempDay > 36 && tempNight > 22){
        document.form2.output.value="Niveau 4 - Mobilisation générale - Rouge"
        document.body.style.backgroundColor = "red"
    }
    }