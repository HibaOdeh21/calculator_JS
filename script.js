class calculator{
    constructor(previousOperandTextElem,currentOperandTextElem){
        this.previousOperandTextElem=previousOperandTextElem
        this.currentOperandTextElem=currentOperandTextElem
        this.clear()
    }

    clear(){
      this.currentOperand = ''
      this.previousOperand=''
      this.operation=undefined
    }

    delete(){

    }

    appendNumber(number){

    }
    chooseOperatin(operation){

    }
    compute(){

    }
    updateDisplay(){

    }



}






const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElem = document.querySelector('[data-previous-opperand]')
const currentOperandTextElem = document.querySelector('[data-current-opperand]')


