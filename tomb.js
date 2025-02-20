let numeriEstratti = new Set ();
let tabellone = document.getElementById("tabellone");
 for (let i=1; i <= 76; i++ ){
    let cella = document.createElement("div")
    cella.classList.add("numero");
    cella.textContent= i;
    cella.id= "num-" + i;
    tabellone.appendChild(cella);
 }

function estraiNumero () {
    if(numeriEstratti.size >=76){
        alert("tutti i numeri sono stati estratti!");
        return;
    }
    let numero;
    do {
        numero = Math.floor(Math.random()* 76)+1;
    }  while (numeriEstratti.has(numero));
numeriEstratti.add(numero);
document.getElementById("numero-estratto").textContent = numero;
let cellaEstratta = document.getElementById("num-" + numero);
cellaEstratta.classList.add("estratto");
}