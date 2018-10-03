

var estudiantes = [

];

function nuevoEstudiante() {

    var NueCodEst = document.getElementById("CodEstudiantes").value;
    var NueNombEst = document.getElementById("NombreEstudiante").value;
    var NueNotaEst = document.getElementById("NotaEstudiante").value;

    estudiantes.push( {
                    "codigo": NueCodEst,
                    "nombre": NueNombEst,
                    "nota": Number(NueNotaEst)});   

}

function registrar() {
    nuevoEstudiante();
    alert("Estudiante Registrado");
    leerJSON(estudiantes)
}


function leerJSON(json) {
            var out = "<table class = table ><thead><tr><th>CODIGO</th><th>Nombre </th><th>Nota</th></tr></thead><tbody>";
            var i;
            for (i = 0; i < json.length; i++) {
                
                out += "</tr><td>" + json[i].codigo + "</td>" + "<td>" + json[i].nombre + "</td>" + "<td>" + json[i].nota+ "</td></tr>";


            }
            var out1= out+"</tbody></table>";
            document.getElementById("estudiantes").innerHTML = out1;
            console.log(out1)
        }




function calcularPromedioNotas(json) {

    
    var aux = 0.0;
    for (i = 0; i < json.length; i++) {
        aux += json[i].nota;
    }
    var promedioN=aux/json.length
    document.getElementById("promedioNotaModal").innerHTML = "<h1>"+promedioN.toFixed(2)+ "</h1>";
}




function mejorEstudiante(json) {

            var Mayor = json[0].nota; //Mayor se inicializa con el primer valor del arreglo
            var aux;
            for (i = 0; i < json.length; i++) {

                //comparamos si cada elemento del arreglo con Mayor
                if (json[i].nota > Mayor){
                    Mayor = json[i].nota; //eemplazamos Mayor por el elemento que acabamos de encontrar, si no, queda como está
                    aux = json[i].nombre+"<br>";//gurdamos el nombre en la variable aux
                }
                
            }
            console.log(aux);
            document.getElementById("mejorNotaModal").innerHTML = "<h4>" + aux + "</h4><h4>"+ Mayor+ "</h4>"
            ;
        }


function peorEstudiante(json) {


    var Menor = json[0].nota; //Menor se inicializa con el primer valor del arreglo
    var auxp;
    for (i = 0; i < json.length; i++) {

        //comparamos si cada elemento del arreglo con Menor
        if (json[i].nota < Menor){
            Menor = json[i].nota; //eemplazamos Meno por el elemento que acabamos de encontrar, si no, queda como está
            auxp = json[i].nombre+"<br>";//gurdamos el nombre en la variable auxP
        }
        
    }
    console.log(auxp);
    document.getElementById("peorNotaModal").innerHTML = "<h4>" + auxp + "</h4><h4>"+ Menor+ "</h4>"
    ;
}


function mostrarEstudiantes() {
            leerJSON(estudiantes);
        }

function mostrarPromedio() {
    calcularPromedioNotas(estudiantes);
}

function mostrarMejorNota() {
    mejorEstudiante(estudiantes);
}

function mostrarPeorNota() {
    peorEstudiante(estudiantes);
}