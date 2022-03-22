  function calculate(){
    var km,age,costokm,prezzototale,sconto20,sconto40,risultato;
    km = document.getElementById("km").value;
    age = document.getElementById("age").value;
    prezzototale=km*0.21;
    sconto20=prezzototale*0.8;
    sconto40=prezzototale*0.6;
    if (age <18) {risultato=prezzototale-sconto20}
    else if (age>65) {risultato=prezzototale-sconto40}
    else {risultato=prezzototale}
    risultato=risultato.toFixed(2);  
    document.getElementById("Calcolo").value = risultato;
} 

