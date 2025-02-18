
let numero = 10;
function adicionarnaTabela() {
    const nome = document.getElementById('nomeMusicas').value;
    const autor = document.getElementById('nomeAutor').value;
  
    const tabela = document.getElementById('tbody');
  
    const novaLinha = document.createElement('tr');
    const novoNumero = document.createElement('th');
    const novoNome = document.createElement('td');
    const novoAutor = document.createElement('td');
  
    numero++;
    novoNumero.innerHTML = numero;
    novoNome.innerText = nome;
    novoAutor.innerText = autor;
  
    novaLinha.appendChild(novoNumero);
    novaLinha.appendChild(novoAutor);
    novaLinha.appendChild(novoNome);
  
    tabela.appendChild(novaLinha);
  }
  function ordenar() {
    var values = [].slice.call(document.querySelectorAll('#mtable tbody .autor')).map(function(el) {
      return '<tr>' + el.innerHTML + '</tr>';  
    });
    values = values.sort();
    document.querySelector('#mtable tbody').innerHTML = values.join('');
  }
  