const axios = require("axios")
// chave de acesso
const appid = "f2929b467a7db325d6bb1ebf92812799"

// Cidade
const q = "São Paulo"

// Unidade de medida
const unidade = "metrics"

// Idioma
const idioma = "pt-BR"

// Quantos resultados nós vamos querer 
const cont = "10"

// URL
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${unidade}&appid=${appid}&lang=${idioma}&cnt=${cont}`;

axios.get(url).then((res)=>{
    console.log(res)
    return res.data
})
.then((res)=>{
    // Mostrar quantos registros vieram
    console.log(res.cnt)
    return res
})
.then((res)=>{
    // Mostrar a lista de previsões
    console.log("dados",res)
    return res["list"]
})
.then((res)=>{
    // Para cada elemento da lista extrair informações
    for(let previsao of res){
        console.log(`
        
            ${new Date(+previsao.dt * 1000).toLocaleString()},
            24 ${'Min: ' + previsao.main.temp_min}\u00B0C,
            25 ${'Max: ' + previsao.main.temp_max}\u00B0C,
            26 ${'Hum: ' + previsao.main.humidity}%,
            27 ${previsao.weather[0].description}

        `)  
    }
})