//parte 1//

function criarElemento(pokemon, link){
    const container = document.getElementById('container');
    const name = document.createElement('p');
    const url = document.createElement('span');
  
    name.textContent = pokemon;
    url.textContent = link;
  
    container.appendChild(name);
    container.appendChild(url);
  }
  
  fetch('http://localhost:5050/score')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição'); 
      }
      return response.json();
    })
    .then(data => {
      const pokemonList = data
      pokemonList.forEach(pokemon => {
        criarElemento(pokemon.name, pokemon.url)
      });
    })
    .catch(error => {
      console.log(error);
    });
    
    //parte 2//
    
    let pontuacao = {
      name: nome_da_pessoa,
      pontos: variavel_da_ponutacao
    }
  
    fetch('http://localhost:5050/score', {
      method: "POST",
      body: JSON.stringify(pontuacao),
      headers: {"Content-type":"application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
  