const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if(value === "C"){
            display.value = "";
        }

        else if(value === "="){

            try{
                display.value = eval(display.value);
            }
            catch{
                display.value = "Error";
            }

        }

        else if(value === "⌫"){
            display.value =
            display.value.slice(0,-1);
        }

        else{
            display.value += value;
        }

    });

});

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if(
        "0123456789+-*/.%".includes(key)
    ){
        display.value += key;
    }

    if(key === "Enter"){

        try{
            display.value =
            eval(display.value);
        }
        catch{
            display.value = "Error";
        }

    }

    if(key === "Backspace"){
        display.value =
        display.value.slice(0,-1);
    }

    if(key === "Escape"){
        display.value = "";
    }

});