var input = document.getElementById("display");

function clearDisplay() {
    input.innerText = "";
}

function addChar(character) {
    if (character) {
        if (input.innerText) {
            input.innerText += character;
        } else {
            input.innerText = character;
        }
    }
}
function deleteChar() {
    if (input.innerText) {
        input.innerText = input.innerText.split(0, input.innerText.length - 1);
    } else {
        alert("NO value Entered");
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
    for (let i = 0; i < inputString.length; i++) {
        let ch = inputString.substring(i, i + 1);
        console.log(ch);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "-" && ch != "(" && ch != ")" && ch != ".") {
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

function ln() {
    input.innerHTML = Math.log(eval(input.innerText));
}

function sqrt() {
    input.innerHTML = Math.sqrt(eval(input.innerText));
}

function sq() {
    input.innerHTML = (eval(input.innerText) * (input.innerText));
}

function exp() {
    input.innerHTML = Math.exp(eval(input.innerText));
}
function cos() {
    input.innerHTML = Math.cos(eval(input.innerText));
}
function sin() {
    input.innerHTML = Math.sin(eval(input.innerText));
}
function tan() {
    input.innerHTML = Math.tan(eval(input.innerText));
}