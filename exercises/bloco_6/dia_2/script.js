window.onload = function() {
    let selectFather = document.getElementById('states');

    function statesCreation () {
        let stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']    
        for (let i = 0; i < stateOptions.length; i += 1) {
            let state = document.createElement('option');
            state.textContent = stateOptions[i]
            selectFather.appendChild(state);
        }
    }
    statesCreation();
}
let valueData = document.getElementById('data').value;
let inputData = document.getElementById('data');
function date() {
    console.log(valueData);
    let day = 0;
    let month = 0;
    let year = 0;
    for (let i = 0; i < valueData.length; i += 1) {
        if ((i == 0) || (i == 1) ) {
            day += valueData[i];
        }   
            else if ((valueData[i] == 2) || (valueData[i] == 3)) {
                month += valueData[i];
            }
                else {
                    year += valueData[i];
                }
    }

    if ((day <= '00') || (day >= '32')) {
        alert('Data inválida! Por favor, preencha a data com valores entre 1 e 31.')
    }
    if ((month <= 00) || (month > 12)) {
        alert('Mês inválido! Por favor, preencha os mês com valores válidos entre 01 e 12.')
    }
    if (year <= 0) {
        alert('O ano é inválido! Por favor preencha um ano acima de 0.');
    }
}
inputData.addEventListener('focusout', date)
