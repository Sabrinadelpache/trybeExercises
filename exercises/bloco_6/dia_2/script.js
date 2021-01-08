window.onload = function () {
    let selectFather = document.getElementById('states');

    function statesCreation() {
        let stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']
        for (let i = 0; i < stateOptions.length; i += 1) {
            /* Usar o disabled????*/
            let state = document.createElement('option');
            state.textContent = stateOptions[i]
            selectFather.appendChild(state);
        }
    }
    statesCreation();
}
let datePicker = document.getElementById('datepicker');
var picker = new Pikaday ({
    field : document.getElementById('datepicker'),
    firstDay : 1,
    minDate : new Date(0000, 0, 1),
    maxDate : new Date(2021, 0, 7),
    yearRange : [0000,2021]
})

const validation = new JustValidate('#validationForm', {
    rules : {
        number: {
            maxLength: 11,
            required: true
        },
        textCity: {
            maxLength: 28,
            required: true
        },
        checkbox: {
            required: true
        },
        text1: {
            maxLength: 1000,
            required : true
        },
        text2: {
            maxLength: 500,
            required: true
        }
    }
});