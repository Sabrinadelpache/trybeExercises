let dataInicio = document.getElementById('data').value;
let chama = document.getElementById('data')

function data () {
    for (let index = 0; index < dataInicio; index += 1) {
        let diaMes = dataInicio[index] + dataInicio[index + 1];
        console.log(diaMes);
    }
    
}
chama.addEventListener('mouseout', data)