function myFunction() {
  let x = document.getElementById("myNumber").value;
  document.getElementById("demo").innerHTML = x * (Math.PI/180);
  document.getElementById("demo-first").innerHTML = "The Radian is: ";
}
function degree(){
  let b = document.getElementById("degIn").value;
  document.getElementById("rad-to-deg").innerHTML = 
  b * (180/Math.PI);
  document.getElementById("outDeg").innerHTML = "The degree is: " ;
}
