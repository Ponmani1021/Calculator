let inputScreen = document.getElementById("input-value");

function display(number){
    inputScreen.value += number;
}

function calculation(){
    try{
        inputScreen.value = eval(inputScreen.value);
    }
    catch(err){
        alert("Invalid Calculation");
    }
}

function Clear(){
    inputScreen.value = "";
}

function del(){
    inputScreen.value = inputScreen.value.slice(0,-1);
}