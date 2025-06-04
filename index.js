const display = document.getElementById("display");

function append(input){
    display.value = display.value + input ;
}

function clearinput(){
    display.value = "";
}

function calculateresult(){
    
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error"; 
    }


}