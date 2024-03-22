document.addEventListener("DOMContentLoaded", function() {
    const listaTarefas = document.getElementById("lista-tarefas");
    const botaoNovaTarefa = document.querySelector(".nova-tarefa");
  
    botaoNovaTarefa.addEventListener("click", function(event) {
      event.preventDefault();
      const novaTarefa = prompt("Introduza a Tarefa com as informações que lhe intressam:");
  
      if (novaTarefa) {
        const novaTarefaItem = document.createElement("li");
        novaTarefaItem.textContent = novaTarefa;
        listaTarefas.appendChild(novaTarefaItem);
      }
    });
  });