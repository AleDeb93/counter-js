function createElement(tagName, classNames, innerHTML, dataAction) {
    const element = document.createElement(tagName);
    if (classNames) {
      element.className = classNames;
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    if (dataAction) {
      element.setAttribute("data-action", dataAction);
    }
    return element;
  }
  
  let counter = 0;
  
  const applicazione = createElement("div", "applicazione");
  document.body.appendChild(applicazione);
  
  const contatore = createElement("div", "contatore");
  applicazione.appendChild(contatore);

  const bottoni = createElement("div", "bottoni");
  applicazione.appendChild(bottoni);
  
  const piu = createElement("button", null, "+", "piu");
  const reset = createElement("button", null, "Reset", "reset");
  const meno = createElement("button", null, "-", "meno");
  /*
  Predispongo un array per l'inserimento dei bottoni nel div perchè, nel caso in futuro
  dovessi aggiungere qualcosa mi basterebbe concatenare il nuovo array al vecchio e con
  il ciclo for questi sarebbero aggiunti automaticamente in visualizzazione nel browser
  */
 let bottoniArray = [piu, reset, meno];
 for (let i = 0; i < bottoniArray.length; i++) {
    bottoni.appendChild(bottoniArray[i]);
 }
  
  applicazione.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      let action = event.target.getAttribute("data-action");
      switch (action) {
        case "piu":
          counter++;
          break;
        case "meno":
          counter--;
          break;
        case "reset":
          counter = 0;
          break;
      }
      contatore.innerHTML = counter;

      if(counter === 20 || counter === -20){
        alert("Ci stai prendendo gusto non è vero??");
      }
      if(counter === 40 || counter === -40){
        alert("Fermati!! Stai distruggendo il tuo povero mouse!");
      }
    }
  });
  contatore.innerHTML = counter;
  
  const istruzioni = createElement("div", "istruzioni", "Premi i pulsanti piu e meno per aumentare o diminuire il valore del contatore <br> Premi il pulsante Reset per far tornare il contatore a 0");
  document.body.appendChild(istruzioni);
