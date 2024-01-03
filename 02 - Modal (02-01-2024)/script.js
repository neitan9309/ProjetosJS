const abrirModalBtnElement = document.querySelector('#abrirModal');//Seleção e armazenamento do elemento <button> (do HTML, por id) na constante abrirModalBtnElement.
const elementoModal = document.querySelector('.modal');//Seleção e armazenamento da <div> de classe "modal" na constante elementoModal. Nela contemos tanto a sombra do modal, quanto o conteúdo desta.
const conteudoElementoModal = elementoModal.querySelector('.conteudo_modal');//Seleção e armazenamento da <div> de classe "conteudo_modal" na constante conteudoElementoModal, note que há um acesso da constante "elementoModal" que declaramos anteriormente.

abrirModalBtnElement.addEventListener('click', () =>{//Criação de uma "obervação de evento" que responde ao clique no elemento <button> do HTML (especificado no parâmetro 'CLICK'), armazenado na constante abrirModalBtnElement.
    elementoModal.classList.add('abrir');//Após o evento mencionado acima, outra classe é ativada na <div> de classe "modal", uma com o nome de "abrir" delcarada na linha 58 do arquivo sytle.css. Ela sobrepõe o parâmetro de display "none" original, por um display "flex". Esta nova confiruação é responsável por mostrar o conteúdo (antes ocultado) da <div> de classe "modal". Pelo fato de estarem dispostos no mesmo contâiner, tanto a sombra, quanto o conteúdo do modal são mostrados.
})

conteudoElementoModal.addEventListener('click', () =>{//Criação de outra "obervação de evento", este responde ao clique em qualquer espaço correspondente ao contâiner do modal.
    elementoModal.classList.remove('abrir');//Após o evento descrito acima, a classe responsável por desocultar o contâiner do modal, mencionada no comentário da linha 6, é desativada.
})