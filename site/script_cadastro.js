function cadastrar(event) {
  event.preventDefault();

  // Obter o nome do formulário
  var nomeDoUsuario = document.getElementById('nome').value;

  // Armazenar o nome no local storage
  localStorage.setItem('nomeDoUsuario', nomeDoUsuario);

  // Redirecionar para a página principal
  window.location.href = 'pagina_inicial.html';
}
