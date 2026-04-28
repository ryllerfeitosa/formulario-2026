'use strict'

//Função para preencher os dados do formulário com retornos dos dados da API
const preencherFormulario = async function(){
    const cep       = document.getElementById('cep').value
    //await para aguardar o retorno dos dados da API
    const dadosCep  = await getDadosCep(cep)
    //Retornando os valores da API
    document.getElementById('endereco').value   = dadosCep.logradouro
    document.getElementById('bairro').value     = dadosCep.bairro
    document.getElementById('estado').value     = dadosCep.estado
    document.getElementById('cidade').value     = dadosCep.localidade
}

//Função para solicitar os dados da API
const getDadosCep = async function(cep){
    //EndPoint da API
    const url = `https://viacep.com.br/ws/${cep}/json/`
    /*Solicitação de dados da API, passa por vários servidores, portanto, 
    é necessário usar o await , como é uma fução síncrona é necessário 
    utilizar async na função principal, o fetch é uma requisição referente
    ao parâmetro url*/
    const response = await fetch(url)
    //Resposta da solicitação de dados
    const data     = await response.json()
    return data
}

document.getElementById('cep')
        //O evento irá ocorrer somente quando sair do foco, não colocamos parênteses pois não estamos chamando a função
        .addEventListener('focusout', preencherFormulario)