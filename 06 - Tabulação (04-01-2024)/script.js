const navElement = document.querySelector('nav');//Seleção do elemento <nav>.
const navbarLinks = navElement.querySelectorAll('a');//Seleção dos links <a> dentro do elemento anterior.
const sectionElements = document.querySelectorAll('section');//Seleção do elemento <section>.

const removeActiveLinks = () => {
    navbarLinks.forEach(link => link.parentElement.classList.remove('active'));//Função que, ao ser chamada, remove a classe "active" do elemento pai de cada link. Desativa a aparência de ativa dos elementos de navegação.
};

const hideSections = () => {
    sectionElements.forEach(section => section.classList.add('hidden'));//Função que, ao ser chamada, adiciona a classe "hidden" a todas as seções. Oculta as seções.
};

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {//Adição de um evento "click" em cada link na barra de navegação, que ao serem ativados vão:
        removeActiveLinks();//Remover todos os links ativos
        hideSections();//Ocultar todas as seções.
        link.parentElement.classList.add('active');//Adicionar a classe "active" ao elemento pai do link clicado.
        const sectionElement = document.querySelector(link.hash);//Obter a seção correspondente ao link clicado (usa-se o atributo "hash").
        sectionElement.classList.remove('hidden');//Remover a classe "hidden" da seção correspondente ao link clicado.
    });
})