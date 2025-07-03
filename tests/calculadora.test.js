const { calcularAdicao, calcularSubtracao, calcularMultiplicacao, calcularDivisao } = require('../calcular');

test('Deve calcular a soma corretamente', () => {
    document.body.innerHTML = `
        <input id="valor1" value="10">
        <input id="valor2" value="5">
        <div id="resultado"></div>
    `;
    calcularAdicao();
    expect(document.getElementById('resultado').textContent).toBe('Resultado: 15');
});

test('Deve calcular a subtração corretamente', () => {
    document.body.innerHTML = `
        <input id="valor1" value="10">
        <input id="valor2" value="5">
        <div id="resultado"></div>
    `;
    calcularSubtracao();
    expect(document.getElementById('resultado').textContent).toBe('Resultado: 5');
});

test('Deve calcular a multiplicação corretamente', () => {
    document.body.innerHTML = `
        <input id="valor1" value="10">
        <input id="valor2" value="5">
        <div id="resultado"></div>
    `;
    calcularMultiplicacao();
    expect(document.getElementById('resultado').textContent).toBe('Resultado: 50');
});

test('Deve calcular a divisão corretamente', () => {
    document.body.innerHTML = `
        <input id="valor1" value="10">
        <input id="valor2" value="5">
        <div id="resultado"></div>
    `;
    calcularDivisao();
    expect(document.getElementById('resultado').textContent).toBe('Resultado: 2');
});