var display = document.getElementById("display");
function getvalue(a) {

    display.value += a; 
}
function calculateval() {
    var a = eval(display.value); 

    display.value = a;
}
function clearAll() {
    display.value = "";
}