const buttonsE1 = document.querySelectorAll('button')
const inputFielE1 = document.getElementById('result')
for(let i = 0; i < buttonsE1.length; i++){
    buttonsE1[i].addEventListener('click', () => {
        const buttonValue = buttonsE1[i].textContent;
        if(buttonValue === 'c'){
            clearResult()
        }else if(buttonValue === '='){
            calculateResult()
        }else{
            appendValue(buttonValue)
        }
    })
}

function clearResult(){
    inputFielE1.value = ''
}

function calculateResult(){
    inputFielE1.value = eval(inputFielE1.value)
}

function appendValue(buttonValue){
    inputFielE1.value += buttonValue
}