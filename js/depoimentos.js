function getData() {
  let nome = document.getElementById('name').value
  let sobrenome = document.getElementById('surname').value
  let idade = document.getElementById('age').value
  let celular = document.getElementById('phone').value
  let cep = document.getElementById('cep').value
  let cidade = document.getElementById('city').value
  let uf = document.getElementById('uf').value
  let titulo = document.getElementById('title').value
  let depoimentos = document.getElementById('depoi').value

  let data = { nome, sobrenome, idade, celular, cep, cidade, uf, titulo, depoimentos}
  return data
}

const envia = (e) => {
  e.preventDefault();

  fetch('https://api.sheetmonkey.io/form/5REt3nnRGn1CQp7bz9fxGV', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getData()),
  })
  .then(response => {
    if (response.ok) {
      console.log('Dados enviados com sucesso');
    } else {
      console.error('Erro na requisição: ' + response.status);
    }
  })
  .catch(error => {
    console.error('Erro na requisição: ' + error);
  });
}

function buscarCep() {
  const cep = document.getElementById("cep").value;
  if (cep !== "") {
    const url =`https://brasilapi.com.br/api/cep/v1/"${cep}`
    const xmlhttps = new XMLHttpRequest();
    xmlhttps.open("GET", url);
    xmlhttps.send();

    // Tratamento das opções de resposta
    xmlhttps.onload = function () {
      if (xmlhttps.status === 200) {
        const endereco = JSON.parse(xmlhttps.response);
        console.log(endereco)
        document.getElementById("city").value = endereco.city;
        document.getElementById("uf").value = endereco.state;
      } else if (xmlhttps.status === 404) {
        alert("CEP Inválido!");
      } else {
        alert("Erro ao fazer a requisição");
      }
    };
  }
}
const buttonCep = document.getElementById('buttonCep');



buttonCep.addEventListener("click", function(e) {
  e.preventDefault();
  buscarCep(); 
});

document.getElementById('my-forms').addEventListener('submit', envia)
