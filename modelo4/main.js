var div = document.getElementById('.listas')

function enviar(){
    var valor = document.getElementById("textinput").value;
    div.innerHTML=valor;
}