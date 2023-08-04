var input = document.getElementById("display");

function clearDisplay() {
    input.innerText = "";
}

function addChar(character) {
    if (character) {
        input.innerText += character;
    }
    else {
        input.innerText = character;
    }
}

function deleteChar() {
    if (input.innerText) {
        input.innerText = input.innerText.split(0, input.innerText.length - 1);
    } else {
        alert("Empty");
    }
}

function ChangeSign() {
    if (input.innerText.substring(0, 1) == "-") {
        input.innerText += input.innerText.substring(1, input.innerText.length);
    } else {
        input.innerText = "-" + input.innerText;
    }
}


function validExpression() {
    try {
        eval(input.innerText);
        return true;
    } catch (error) {
        input.innerText = "Error";
        return false;
    }
}
function checkExpression() {
    let inputString = input.innerText;
    for(let i =0 ; i<inputString.length; i++){
        let ch = inputString.substring(i, i + 1);
        
        if(ch<"0" || ch>"9"){
            if(ch!="/" && ch!="*" && ch != "-" && ch != "(" && ch != ")" && ch != "."){
                alert("Invalid Characters in the Expression");
                return false;
            }
        }
    } 
    return true;
}
function compute() {
    try {
        input.innerText = eval(input.innerText);
    } catch (error) {
        alert("Invalid Expression")
        input.innerText = "Error"
    }
}

function ln(){
    input.innerText = Math.log(eval(input.innerText));
}