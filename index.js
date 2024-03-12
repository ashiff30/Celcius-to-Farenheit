function convert(){
let celValue = Number(document.getElementById("input").value);
let farValue = (celValue*1.8)+32;
let result = document.getElementById("result");
result.innerHTML = farValue + " f";
 }