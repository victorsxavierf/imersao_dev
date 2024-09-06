function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Loga a seção encontrada no console para verificar se está correta
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada elemento 'dado' no array 'dados'
    for (let dado of dados) {
      // Constrói o HTML para cada item da pesquisa, formatando os dados do objeto 'dado'
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba mais sobre.</a>
        </div>
      `;
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }