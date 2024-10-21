
const display = document.getElementById("display")

function appenedToDisplay(input){
    display.value += input;
}
function onclearDisplay(){
    display.value = ''
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}