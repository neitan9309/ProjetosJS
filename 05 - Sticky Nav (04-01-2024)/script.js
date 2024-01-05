const navElement = document.querySelector('nav');//Seleção do elemento <nav>.
const navbarLinks = navElement.querySelectorAll('a');//Seleção dos elementos <a> dentro do elemento anterior.

const navPosition = navElement.getBoundingClientRect().top;//Para ser sincero não entendi a adição dessa linha no script, a constante não é resgatada e aparentemente nada acontece caso eu a remova.

window.addEventListener('scroll', () => {//Evento que responde ao "scroll" da página.
    const scrollPosition = window.scrollY;//Variável que obtem a posição de scroll atual.
    navElement.style.top = scrollPosition + 'px';//Atualização da posição do elemento associado ao nosso menu. Cria um efeito de navegação fixa.

    navbarLinks.forEach(link => {//Para cada link de navegação <a> realizaremos as seguintes ações:
        const sectionElement = document.querySelector(link.hash);//Obtenção do elemento de cada seção correspondente usando o atributo "#" por meio do atributo "hash".
        const offset = 50;//Garante que a ativação da classe "active" ocorra um pouco antes da seção ser alcançada, garantindo uma transição mais suave.

        if(scrollPosition + offset > sectionElement.offsetTop && scrollPosition + offset < sectionElement.offsetTop + sectionElement.offsetHeight) {
        //No trecho acima, o código abre uma verificação para saber se a posição do "scroll" atual + o "offset" alcançou o início da seção ("offsetTop"). Em seguida, verificamos se os dados de "scroll" e "offset" são menores que o final desta mesma seção.
            link.classList.add('active');//Caso as condições sejam verdadeiras, adiciona-se a classe "active" no link correspondente (<a>). A classe active destaca nosso elemento.
        } else {
            link.classList.remove('active');//Remoção da classe claso ela não esteja mais ativa. Evita que mais de um link esteja "ativo" por vez. 
        }
    });
});