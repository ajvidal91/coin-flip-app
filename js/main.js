// Create a simple web application that uses the fs and http
// modules. Use http to create the server and fs to read your html
// le. Include vanilla ES6 js in a script tag at the bottom of your
// html le. Try creating a coin ip guessing game!


document.getElementById("flip").onclick=function(){
 var coin = document.getElementById("coin");
 var random = Math.floor(Math.random()*10);
 if (random > 5) {
   coin.classList.remove("tails");
   coin.classList.add("heads");
 }else {
   coin.classList.remove("heads");
   coin.classList.add("tails");
 }
}
