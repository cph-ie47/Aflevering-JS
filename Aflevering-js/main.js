/*let elementH1 = document.querySelector("h1");

const elementH1Fx = function(){
    alert("Goddag");
}

elementH1(0).addEventListener("click", elementH1Fx)

console.log(elementH1.innerText);*/

//let elementH1 = document.getElementById("h1-id");

//console.log(elementH1.innerHTML); 






//Opgave 25

let element1 = document.getElementById("ID1");
let element2 = document.querySelector("#ID2");
let element3 = document.getElementsByTagName("h3");
let element4 = document.querySelector("h4");
let element5 = document.getElementsByClassName("Klasse1");
let element6 = document.querySelector(".Klasse2");

console.log(element1.innerHTML);
console.log(element2.innerHTML);
console.log(element3[0].innerHTML);
console.log(element4.innerHTML);
console.log(element5[0].innerHTML);
console.log(element6.innerHTML);



//Opgave 25.2

let paragraph = document.querySelector('#tomP');

paragraph.innerText = 'Imad Elsankari';



//opgave 26
// Virker ikke sammen med opg. 28
/*
let knap = document.querySelector(".button1")

knap.addEventListener("click" function(){
    alert("Button1");
})
*/


//opgave 27 (brug toggle)

let farveKnap = document.querySelector(".farveButton")

farveKnap.addEventListener("click", function(){
    let elementx = document.querySelector(".baggrund");

  if (elementx.classList) { 
    elementx.classList.toggle("nyStil");
  } 
})

//opgave 28

//opgave 28.1

/*

const ducks1 = document.querySelectorAll('div');
ducks1.foreach(div =>{
    if(div.innerText.includes("Rap")){
        document.querySelector(".ducks").classList.add("nyrap");
    }
});

*/



//opgave 28.2

/*

let femNavne = ['Filip', 'Messi', 'Neymar', 'Ronaldinho', 'Dembele']; 

femNavne.forEach(femNavneFunction); 
function femNavneFunction(femNavne,index) {
    document.querySelector("#tomdiv").innerHTML += Mit navn er ${femNavne.toUpperCase()} og min plads er ${index} + "<br>"; 
    console.log(femNavne);
};

*/




//opgave 29


let input1 = document.querySelector("#input-1");
   let input2 = document.querySelector("#input-2");
   let select = document.querySelector("#operation")
   
   let resultat = document.querySelector("#resultat"); 
   
   console.log(resultat)
   
   
   let button1 = document.querySelector("#button-1")
   
   button1.addEventListener("click", function(){
   
   let værdi1 = Number(input1.value);
   let værdi2 = Number(input2.value);
   
     switch (select.value) {
         case "+":
   
            resultat.innerHTML = værdi1+ værdi2;
             
             break;
          case "-":
   
          resultat.innerHTML = værdi1- værdi2;
                 
           break;
           case "*":
   
           resultat.innerHTML = værdi1* værdi2;
               
         break;
   
         case "/":
   
         resultat.innerHTML = værdi1/ værdi2;
             
       break;
     
         default:
             break;
     }
   
   })

   







//Kreativ opgave - AFLEVERING

//knap 1
let knap1 = document.querySelector(".trykher1")

knap1.addEventListener("click", function(){
    let reveal1 = document.querySelector(".trykher2");

  if (reveal1.classList) { 
    reveal1.classList.toggle("nyknap");
  } 
})


//knap 2
let knap2 = document.querySelector(".trykher2")

knap2.addEventListener("dblclick", function(){
    let reveal2 = document.querySelector(".trykher3");

  if (reveal2.classList) { 
    reveal2.classList.toggle("nyknap");
  } 
})


//Knap 3
let knap3 = document.querySelector(".trykher3")

knap3.addEventListener("mouseover", function(){
    let reveal3 = document.querySelector(".trykher4");

  if (reveal3.classList) { 
    reveal3.classList.toggle("nyknap");
  } 
})


//Knap 4
let knap4 = document.querySelector(".trykher4")

knap4.addEventListener("contextmenu", function(){
    let reveal4 = document.querySelector(".trykher5");

  if (reveal4.classList) { 
    reveal4.classList.toggle("nyknap");
  } 
})


//Knap 5
let knap5 = document.querySelector(".trykher5")

knap5.addEventListener("mouseleave", function(){
    let reveal5 = document.querySelector(".trykher6");

  if (reveal5.classList) { 
    reveal5.classList.toggle("nyknap");
  } 
})


//Knap 6
let knap6 = document.querySelector(".trykher6")

knap6.addEventListener("keypress", function(){
    let reveal6 = document.querySelector(".skrivher");

  if (reveal6.classList) { 
    reveal6.classList.toggle("nyknap");
  } 
})



//Knap 7
let knap7 = document.querySelector(".skrivher")

knap7.addEventListener("change", function(){
    alert('Hey, du kom igennem spillet med de 7 event funktioner - NOICE!')
})