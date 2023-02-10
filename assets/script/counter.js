//Inserisco una costante attribuendole il valore di default del contatore
let n = document.getElementById("contatore").textContent;
//Definisco brevemente lo stile del numero
document.getElementById("contatore").style.fontSize="100px";

//Inserisco aumento, decremento e reset in un event delegation
class Bottoni{
    constructor(elem){
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
        //this.onClick si collega a this riferendosi cosi all'oggetto bottoni
        //altrimenti si riferirebbe all'oggetto elem
    }
    piu() {
      n++;
      contatore.textContent = n;
    }

    reset() {
      n=0;
      contatore.textContent = n;
    }

    meno() {
      n--;
      contatore.textContent=n;
    }
    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
}

new Bottoni(bottoni);
