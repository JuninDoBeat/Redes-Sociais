const url = `https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json`



async function visualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const PessoasMundo = ((dados.total_pessoas_mundo)/1e9).toFixed(2)
    const PessoasConectadass = ((dados.total_pessoas_conectadas)/1e9).toFixed(2)
    const Horas = parseInt(dados.tempo_medio)
    const Minutos = Math.round((dados.tempo_medio - Horas)*100).toFixed(2)
    const Porcentagem =((PessoasConectadass/PessoasMundo)*100).toFixed(2)
    



    const paragrafo = document.createElement(`p`);
    paragrafo.classList.add(`graficos-container__texto`);
    paragrafo.innerHTML = `Você sabia que o mundo tem 
    <span>${PessoasMundo}  Bilhões </span> de pessoas e que aproximadamente 
    <span> ${PessoasConectadass} Bilhões </span>  de pessoas estão conectadas em 
    alguma rede social e passam em média 
    <span>${Horas}</span> horas e <span> ${Minutos} </span> minutos conectadas
    <br> Isto é impressionante pois cerca de <span> ${Porcentagem} % </span> de pessoas no mundo ultilizão alguma rede social.`

const container = document.getElementById(`graficos-container`);
container.appendChild(paragrafo);


}

visualizarInformacoesGlobais()