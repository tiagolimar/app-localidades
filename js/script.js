async function obterDados(url){
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
}

async function preencherRegiao(){
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes'
    
    const dados = await obterDados(url);
    const regiao = document.getElementById('regiao');
    
    for(const dado of dados){
        regiao.innerHTML += `<option>${dado.nome}</option>`;
    }
}

preencherRegiao();