const users = [
  { usuario: "Gabriel", senha: "gabriel123" },
  { usuario: "Ricardo", senha: "ricardo123" },
  { usuario: "Eduardo", senha: "123" }
];

function validarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (usuario && senha) {
    const usuarioValido = users.some(user => user.usuario === usuario && user.senha === senha);

    if (usuarioValido) {
      console.log('Dados do formulário:', {
        usuario: usuario,
        senha: senha
      });

      window.location.href = "calculadora.html"; // Redireciona para a página operacoes.html
      return true;
    } else {
      alert('Usuário ou senha inválidos!');
      return false;
    }
  } else {
    alert('Por favor, preencha todos os campos!');
    return false;
  }
}
