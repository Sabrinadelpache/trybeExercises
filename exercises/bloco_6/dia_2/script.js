let dataInicio = document.getElementById('data').value;
let chama = document.getElementById('data')

function data () {
    for (let index = 0; index < dataInicio; index += 1) {
        let diaMes = dataInicio[index] + dataInicio[index + 1];
        console.log(diaMes);
    }
    
}
chama.addEventListener('mouseout', data)
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

let inputData = document.getElementById('data');
function date() {
    let valueData = inputData.value;
    let day = '';
    let month = '';
    let year = '';
    for (let i = 0; i < valueData.length; i += 1) {
        if ((i == 0) || (i == 1) ) {
            day += valueData[i];
        }   
            else if ((i == 2) || ( i == 3)) {
                month += valueData[i];
            }
                else {
                    year += valueData[i];
                }
    }

    if ((day <= '00') || (day > '31')) {
        alert('Data inválida! Por favor, preencha a data com valores entre 01 e 31.')
    }
    if ((month <= '00') || (month > '12')) {
        alert('Mês inválido! Por favor, preencha os mês com valores válidos entre 01 e 12.')
    }
    if (year <= 0) {
        alert('O ano é inválido! Por favor preencha um ano acima de 0.');
    }
}
inputData.addEventListener('focusout', date)
