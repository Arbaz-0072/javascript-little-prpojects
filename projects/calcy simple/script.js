let runningtotal
let buffer = "0"
let priviousOperator

const screen = document.querySelector(".screen")

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    screen.innerText = buffer
}

function handleSymbol(symbol) {
    switch (symbol) {
        case "c":
            buffer = 0
            runningtotal = 0
            break

        case "=":
            if (priviousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer))
            priviousOperator = null
            buffer = runningtotal
            runningtotal = 0
            break

        case "←":
            if (buffer.length === 1) {
                buffer = "0"
            } else {
                buffer = buffer.substring(0,buffer.length-1)
            }

        case "+":
        case "-":
        case "/":
            handleMath(symbol)
            break
    }
}

function handleMath(symbol) {
    if (buffer === "0") {
        return
    }
    const intbuffer = parseInt(buffer)

    if (runningtotal === 0) {
        runningtotal = intbuffer
    } else {
        flushOperation(intbuffer)
    }
    priviousOperator = symbol
    buffer = 0
}

function flushOperation(intbuffer) {
    if (priviousOperator === "+") {
        runningtotal += intbuffer
    }
    else if (priviousOperator === "-") {
        runningtotal -= intbuffer
    }
    else if (priviousOperator === "*") {
        runningtotal *= intbuffer
    }
    else if (priviousOperator === "/") {
        runningtotal /= intbuffer
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString
    } else {
        buffer += numberString
    }
}

function init() {
    document.querySelector(".calc-button").addEventListener("click", function (event) {
        buttonClick(event.target.innerText)
    })
}

init()