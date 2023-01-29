//var resul = "";
  //  for (let valor of iterar){
    //    if ((valor == "e") || (valor =="E")){
      //      resul += "enter";
        //}
//        else if((valor == "i") || (valor =="I")){
  //          resul += "imes";
    //    }
      //  else if((valor == "a") || (valor =="A")){
        //    resul += "ai";
//        }
  //      else if((valor == "o") || (valor =="O")){
    //        resul += "ober";
      //  }
        //else if((valor == "u") || (valor =="U")){
          //  resul += "ufat";
//        }
  //      else{
    //        resul += valor;
      //  }
//    return resul;
  //  }
function encriptar(){
    var parrafo = document.getElementById("texto2").value.toLowerCase();
    var cifrado = parrafo.replace(/a/igm,"ai");
    var cifrado = cifrado.replace(/e/igm,"enter");
    var cifrado = cifrado.replace(/i/igm,"imes");
    var cifrado = cifrado.replace(/o/igm,"ober");
    var cifrado = cifrado.replace(/u/igm,"ufat");

    document.getElementById("muniecos").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    
}

function desencriptar(){
  var parrafo = document.getElementById("texto2").value.toLowerCase();
  var cifrado = parrafo.replace(/ai/igm,"a");
  var cifrado = cifrado.replace(/enter/igm,"e");
  var cifrado = cifrado.replace(/imes/igm,"i");
  var cifrado = cifrado.replace(/ober/igm,"o");
  var cifrado = cifrado.replace(/ufat/igm,"u");

  document.getElementById("muniecos").style.display = "none";
  document.getElementById("text1").style.display = "none";
  document.getElementById("text2").innerHTML = cifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

  
}

function copiar(){
  var contenido = document.querySelector("#text2");
  contenido.select();
  document.execCommand("cut");
  alert("¿se copió!")
}
