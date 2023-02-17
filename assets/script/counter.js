let counter = 0;

let applicazione = document.createElement("div");
applicazione.className = "applicazione";
document.body.appendChild(applicazione);

let contatore = document.createElement("div");
contatore.innerHTML = counter;
contatore.className = "contatore";
applicazione.appendChild(contatore);

let bottoni = document.createElement("div");
bottoni.className = "bottoni";
applicazione.appendChild(bottoni);

let piu = document.createElement("button");
piu.innerHTML = "+";
piu.setAttribute("data-action", "piu");
bottoni.appendChild(piu);;

let reset = document.createElement("button");
reset.innerHTML = "Reset";
reset.setAttribute("data-action", "reset");
bottoni.appendChild(reset);

let meno = document.createElement("button");
meno.innerHTML = "-";
meno.setAttribute("data-action", "meno");
bottoni.appendChild(meno);

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
    
    if(counter === 20){
    alert("Ci stai prendendo gusto?")
    } else if(counter === -20){
    alert("Ci stai prendendo gusto?")
    }
    
  }
}); 

let istruzioni = document.createElement("div");
istruzioni.className = "istruzioni";
istruzioni.innerHTML = "Premi i pulsanti più e meno per aumentare o diminuire il valore del contatore <br> Premi il pulsante reset per far tornare il contatore a zero";
document.body.appendChild(istruzioni);
