
class StringObservable {
    sub(callable) {
        this.#observers.push(callable)
    }

    unsub(callable) {
        this.#observers = this.#observers.filter((v) => v != callable)
    }

    append(str) {
        this.set(this.#value + str)
    }

    set(str) {
        this.#value = str
        this.update()
    }

    update() {
        for (let o of this.#observers) {
            o(this.#value)
        }
    }

    value() {
        return this.#value
    }

    #value = ""
    #observers = []
}

const valueInput = new StringObservable()

function isNumber(char) {
    return "1234567890".indexOf(char) != -1
}

function isOperator(char) {
    return "+-*/".indexOf(char) != -1
}

function setupNumbers() {
    const numberElements = document.getElementsByClassName('number')

    for (let numberElement of numberElements) {
        numberElement.onclick = ({ target }) => valueInput.append(target.textContent)
    }

    window.addEventListener('keydown', ({ key }) => {
        if (isNumber(key)) valueInput.append(key);
    })
}

function setupOperators() {
    const operatorElements = document.getElementsByClassName('operator')

    for (let operatorElement of operatorElements) {
        operatorElement.onclick = ({ target }) => valueInput.append(target.value);
    }

    window.addEventListener('keydown', ({ key }) => {
        if (isOperator(key)) valueInput.append(key);
    })
}

function setupControls() {
    const solver = document.getElementById('solver')
    const deleter = document.getElementById('deleter')
    const cleanall = document.getElementById('cleanall')

    const cleanAll = () => valueInput.set('')
    const solveExp = () => { 
        let res
        try {
            res = eval(valueInput.value())
        } catch (err) {
            return
        }
        valueInput.set(res) 
    }
    const deleteLast = () => {
        let val = valueInput.value()
        valueInput.set(val.substring(0, val.length - 1))
    }

    cleanall.onclick = cleanAll
    solver.onclick = solveExp
    deleter.onclick = deleteLast

    window.addEventListener('keydown', ({ key }) => {
        if (key == 'Backspace') deleteLast()
        if (key == 'Enter') solveExp()
    })
}


function init() {

    setupNumbers()
    setupOperators()
    setupControls()

    const screen = document.getElementById('screen')

    valueInput.sub((val) => {
        screen.textContent = val
    })
}
