const findEstados = () => {
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(json => {

      let estados = ''

      json.forEach(estado => estados += `<option value = ${estado.sigla}>${estado.nome}</option>`);
      uf.innerHTML = estados
    })
}

findEstados()



const findCep = () => {

  let cep_ = cep.value
  console.log(cep_)

  fetch(`https://viacep.com.br/ws/${cep_}/json/`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        prencherCampos(json)
        

    })
}



const prencherCampos = (json) => {


  logradouro.value = json.logradouro
  numero.focus()
  bairro.value = json.bairro
  complemento.value = json.complemento
  uf.value= json.uf
  localidade.value = json. localidade
  
 
}
 


findCep()