 const para = document.querySelector("#result > p");


 let txt = "";

 const printToResult = (key) => {
     console.log(key)
     console.log(para)
     if (txt == 0) {
         txt = "";
         txt += key;
         para.innerHTML = txt;

     } else {
         txt += key;
         para.innerHTML = txt;
         console.log(txt)
     }
 }
 const showResult = () => {
     if (typeof eval(txt)) {
         let final = eval(txt);
         txt = final;
         para.innerHTML = final;

     } else {
         para.innerHTML = "ERROR";

     }
 }
 const clearResult = () => {
     txt = "0";
     para.innerHTML = txt;
 }