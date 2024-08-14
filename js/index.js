/** Algoritmo
 * Primeiro iremos capturar os campos numéricos 
 * validar se o campo B é maior que A
 * Caso for, submeter 
 * Caso não, exibir uma mensagem de erro.
 * 
*/

const campA = document.getElementById('primary-camp');
const campB = document.getElementById('secondary-camp');
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageSucess = document.getElementById('sucess');
    const messageError= document.getElementById('error');
    if(Number(campB.value) > Number(campA.value)){
        messageSucess.textContent = 'O formulário é válido! Campo B é maior que Campo A.';
        messageSucess.style.display = 'block';
        messageError.style.display = 'none'; 
    }else{
        messageError.textContent = 'O campo B precisa ser maior que o campo A';
        messageError.style.display = 'block';
        messageSucess.style.display = 'none'; 
    }
})


