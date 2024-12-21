async function obterDados(url){
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
}

async function preencherRegiao(){
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
    
    const dados = await obterDados(url);
    const regiao = document.getElementById('regiao');

    for(const dado of dados){
        regiao.innerHTML += `<option value="${dado.sigla}">${dado.nome}</option>`;
    }
}

async function preencherEstado(){
    const estado  = document.getElementById('estado');
    const regiao = document.getElementById('regiao').value;
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao}/estados`
    const dados = await obterDados(url);
    
    for(const dado of dados){
        estado.innerHTML += `<option value="${dado.sigla}">${dado.nome}</option>`;
    }
}

preencherRegiao();