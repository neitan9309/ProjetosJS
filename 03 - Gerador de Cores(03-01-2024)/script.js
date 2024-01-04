const newColourBtnElement = document.getElementById('new-colour-button');//Seleção e armazenamento do elemento <button> (do HTML, por id) na constante newColourBtnElement.
const currentColourElement = document.getElementById('current-colour');//Seleção e armazenamento do elemento <span> (do HTML, por id) na constante currentColourElement.
const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];//Array com os valores hexadecimais necessários para gerar uma nova cor.

function getRandomHexValue() {//Função que irá buscar um caractere aleatório na array acima.
    const randomIndexPosition = Math.floor(//Variável que irá armazenar nosso índice, seguido de uma função chamada "Math. floor", que arredonda valores para o inteiro mais próximo.
        Math.random() * hexValues.length//Função Math.random() para gerar um número pseudoaleatório, que será multiplicado pelo tamanho da array. Por fim temos uma posição no nosso conjunto, que corresponde uma caractere.
    );

    const randomHexValue = hexValues[randomIndexPosition]//Variável responsável por armazenar o resultado do cálculo, cálculo este que ocorrerá dentro do nosso conjunto "hexValues".

    return randomHexValue;//Retorno do resultado
}

function getRandomHexString(stringLength) {//Função que irá concatenar os resultados da função anterior "getRandomHexValue" a uma string. O parâmetro "stringLength" corresponde ao comprimento desejado da sequência.
    let hexString = '';//Variável que irá armazenar a caractere.
    for (let i = 0; i < stringLength; i++) {//Loop que se repetirá enquanto "i" for menor que "stringLength", dado que fornecemos posteriormente.
        hexString += getRandomHexValue();//Chamada da função anterior e concatenação dos resultados na string "hexString".
    }

    return hexString//Retorno do resultado
}

newColourBtnElement.addEventListener('click', () => {//Criação de uma resposta ao evento 'click' no botão de nova cor.
    const randomHexString = '#' + getRandomHexString(6);//Variável que irá armazenar a sequência de caracteres resultado da função "getRandomHexString" anterior, também fornecemos a quantidade de caracteres que precisamos para o código (6).

    document.body.style.setProperty(//Acesso a tag <body> do documento e a chamada para uma mudança nas propriedades de estilo dessa mesma tag.
        'background-color',//Propriedade que queremos modificar.
        randomHexString//A sequência de caracteres + "#" que corresponde a um código hexadecimal. A nova cor do nosso backgorund.
    );

    currentColourElement.textContent = randomHexString;//Por fim, a atualização do elemento de texto que indica qual o código hexadecimal correspondente a cor do nosso background.
});