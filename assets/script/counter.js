let n = document.getElementById("contatore").textContent;
document.getElementById("contatore").style.fontSize="100px";

class Bottoni{
    constructor(elem){
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
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
