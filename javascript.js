var subBut = document.getElementById("button");
var nomeBurgerField = document.getElementById("name");
var listaIngredienti = document.querySelectorAll(".ingredient [type = 'checkbox']");
var priceField = document.getElementById("price")

/*in questo caso è possibile lavorare con delle variabili esterne perchè stiamo lavorando su una funzione legata ad un evento,e non una statica che fa solo una cosa*/

subBut.addEventListener("click", function(){
    var prezzo = 50
    
    
for (var i = 0; i < listaIngredienti.length; i++){
    var ingrediente = listaIngredienti[i]
    prezzo =addToSum(prezzo, ingrediente)
}
    if(!nomeBurgerField.value){
        alert("Inserisci il nome del panino")
    }

    priceField.innerText = prezzo;
})

function addToSum(prezzoTotale, elementoHtml){
    if(elementoHtml.checked) {
        prezzoTotale += parseInt(elementoHtml.value)
    }

    return prezzoTotale
}