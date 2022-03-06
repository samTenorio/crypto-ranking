# crypto-ranking - exercício DIO-  neste exemplo o acesso aos atributos dos obejtos usa-se um arquivo .json e o acesso a API é através do 
fecth(como no exemplo do video) que contem o método "GET" e 
um headers com 'Content-Type': 'application/json',

referencia: https://github.com/willbrennan1/CoinMarketCap-Dashboard

fetch(baseUrl, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': apikey,
    }
}).then(response => response.json())
.then(obj => {
    console.log(obj.data)

    let coinsData = obj.data;

    if(coinsData.length > 0) {
        var cryptoMoeda = ""
    }
    #
    
