document.addEventListener("DOMContentLoaded", function() {
  const listaTarefas = document.getElementById("lista-tarefas");
  const botaoNovaTarefa = document.querySelector(".nova-tarefa");

  // Carregar tarefas salvas no localStorage, se houver
  const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
  if (tarefasSalvas) {
    tarefasSalvas.forEach(function(tarefaTexto) {
      adicionarTarefa(tarefaTexto);
    });
  }

  botaoNovaTarefa.addEventListener("click", function(event) {
    event.preventDefault();
    const novaTarefa = prompt("Introduza a Tarefa com as informações que lhe interessam:");

    if (novaTarefa) {
      adicionarTarefa(novaTarefa);

      // Salvar tarefas no localStorage
      salvarTarefas();
    }
  });

  // Adicionar evento de remoção de tarefa à lista
  listaTarefas.addEventListener('click', function(event) {
    if (event.target.classList.contains('remover-tarefa')) {
      const tarefa = event.target.parentNode;
      listaTarefas.removeChild(tarefa);
      // Salvar tarefas no localStorage após remover uma
      salvarTarefas();
    }
  });

  // Função para adicionar uma nova tarefa à lista
  function adicionarTarefa(texto) {
    const novaTarefaItem = document.createElement("li");

    // Cria o botão de remoção
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("remover-tarefa");

    // Adiciona o texto da tarefa ao lado do botão de remoção
    const textoTarefa = document.createTextNode(texto);
    novaTarefaItem.appendChild(textoTarefa);
    novaTarefaItem.appendChild(botaoRemover);

    // Adiciona o item da lista de tarefas à lista
    listaTarefas.appendChild(novaTarefaItem);
  }

  // Função para salvar tarefas no localStorage
  function salvarTarefas() {
    const tarefas = [];
    const tarefasItems = document.querySelectorAll("#lista-tarefas li");
    tarefasItems.forEach(function(item) {
      tarefas.push(item.firstChild.textContent);
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }
});
