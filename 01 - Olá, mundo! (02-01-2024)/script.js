const btnElement = document.querySelector('button');//Seleção e armazenamento do elemento <button> (do HTML) na constante btnElement.
const spanElement = document.querySelector('span');//Seleção e armazenamento do elemento <span> na constante spanElement.

btnElement.addEventListener('click', () => {//Criação de uma "obervação de evento" que responde ao clique no elemento <button> do HTML (especificado no parâmetro 'CLICK'), armazenado na constante btnElement.
    const nomeUsuario = prompt('Por favor, insira seu nome')//Após o evento mencionado acima, um prompt (caixa de diálogo para entrada de dados) surge, permitindo que o usuário interaja
    spanElement.textContent = nomeUsuario + '!';//Aqui temos o momento em que a tag <span> é alterada para a entrada do usuário.
    btnElement.textContent = 'Rebobine';//"Alteração do texto presente na tag <button>."
});