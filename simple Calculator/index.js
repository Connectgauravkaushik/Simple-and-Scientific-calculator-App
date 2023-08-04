let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerText); // This event.target property returns the HTML element that triggered an event.
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "X":
                if (display.innerText) {
                    display.innerText = display.innerText.substring(0, display.innerText.length - 1); // we can use slice as well instead substring
                } else {
                    alert("No Value is there to delete");
                }
                break;
            case "=":
                if (display.innerText == "") {
                    alert("No value Entered ");
                } else {
                    try {
                        display.innerText = eval(display.innerText);
                    }
                    catch (error) {
                        display.innerText = "Expression invalid ";
                    }
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})