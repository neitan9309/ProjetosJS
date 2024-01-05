const addButtonElement = document.getElementById('counterAdd');//Chamada e armazenamento do botão de adição numa variável.
const subButtonElement = document.getElementById('counterSub');//Chamada e armazenamento do botão de subtração numa variável.
const counterDisplayElement = document.getElementById('counterDisplay');//Chamada e armazenamento da tag <h1>,correspondente ao contador, numa variável.

let total = 0;//Variável global que armazena as interações com os botões do contador.
let limit = 20;//Variável global que define o limite do contador.

const updateCounterDisplay = () => {//Constante com uma função atribuída para a atualização da contagem.
    if (total > limit) {//Condição "if" que limita o contador. Se a variável "total" for maior que a variável "limit"...
        total = limit;//Então a variável "total", responsável por definir qual o valor do contador, é redefinido para o valor limite. 
    }

    if (total < 0) {//Condição "if" que limita o contador. Se a variável "total" for menor que o valor 0...
        total = 0;//Então a variável "total", responsável por definir qual o valor do contador, é redefinido para o valor 0. 
    }

    counterDisplayElement.textContent = total;//Atualização do novo valor total do elemento correspondente à contagem (tag <h1>).
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`)//Atualização da cor do background. Para buscar cores novas a cada clique, usamos um cálculo entre o "total" e o "limit" (atualizados a cada interação), o resultado será multiplicado por "255" correspondente ao vermelho. O "64" é correspondente ao verde e o "0" ao azul.
}
//^^^^^Um bom exemplo de código agrupado^^^^^

addButtonElement.addEventListener('click', () => {//Observação do evento de 'click' no botão de adição.
    total += 1;//Chamada e adição de um algarismo na variável global "total".
    updateCounterDisplay();//Chamada para atualizar o elemento de contagem "counterDisplayElement" (e outras coisinhas).
});

subButtonElement.addEventListener('click', () => {//Observação do evento de 'click' no botão de subtração.
    total -= 1;//Chamada e subtração de um algarismo na variável global "total".
    updateCounterDisplay();//Chamada para atualizar o elemento de contagem "counterDisplayElement" (e outras coisinhas).
});

updateCounterDisplay();//Uma chamada da nossa variável principal ao abrir da página, serve para definir a cor do background.