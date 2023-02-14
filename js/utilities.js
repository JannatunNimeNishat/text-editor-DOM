function getInputElementById(inputId){
    const input = document.getElementById(inputId);
    // const inputString = input.value;
    // const inputNumber = parseInt(inputString);
    return input;
}

function getInputValueById(elementId){
    const input = document.getElementById(elementId);
    const inputString = input.value;
    const inputNumber = parseInt(inputString);
    return inputNumber;
}

function setInputValueById(inputId,inputValue){
    const input = document.getElementById(inputId);
    input.innerText = inputValue;
    
}
