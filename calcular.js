// Função para realizar a soma
function calcularAdicao() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').textContent = "Resultado: Valores inválidos";
        return;
    }

    const resultado = valor1 + valor2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

// Função para limpar os dados
function limpar() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').textContent = 'Resultado: 0';
}

// Função para realizar a subtração
function calcularSubtracao() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').textContent = "Resultado: Valores inválidos";
        return;
    }

    const resultado = valor1 - valor2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

// Função para realizar a multiplicação
function calcularMultiplicacao() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').textContent = "Resultado: Valores inválidos";
        return;
    }

    const resultado = valor1 * valor2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

// Função para realizar a divisão
function calcularDivisao() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').textContent = "Resultado: Valores inválidos";
        return;
    }

    if (valor2 === 0) {
        document.getElementById('resultado').textContent = "Resultado: Divisão por zero não permitida";
        return;
    }

    const resultado = valor1 / valor2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

// Função genérica para chamar a operação correta com base na página
function calcular(operacao) {
    switch (operacao) {
        case 'adicao':
            calcularAdicao();
            break;
        case 'subtracao':
            calcularSubtracao();
            break;
        case 'multiplicacao':
            calcularMultiplicacao();
            break;
        case 'divisao':
            calcularDivisao();
            break;
        default:
            document.getElementById('resultado').textContent = "Resultado: Operação inválida";
    }
}

// Exporta as funções para serem usadas nos testes
module.exports = {
    calcularAdicao,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
};

