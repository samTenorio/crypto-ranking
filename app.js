var baseUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
var apikey = "e1026657-301b-4947-9e98-e8982a94dbeb"


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

    //iserir separador decimal
    function thousands_separators(num)
    {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
    }

    //iniciando um laço forEach
    coinsData.forEach(coin => {

        cryptoMoeda += "<tr>"
        cryptoMoeda += `<td> ${coin.cmc_rank} </td>`;
        cryptoMoeda += `<td> ${coin.name} </td>`;
        cryptoMoeda += `<td> ${coin.symbol} </td>`;
        cryptoMoeda += `<td> <img src="coin.jpg" class= "align-self-left mr-3" alt="coin" width ="30" height="30"> </td>`;
        cryptoMoeda += `<td> $${thousands_separators(Math.round(coin.quote.USD.price))} </td>`;
        cryptoMoeda += `<td> $${thousands_separators(Math.round(coin.quote.USD.market_cap))} </td>`;
        cryptoMoeda += `<td> ${Math.round(coin.quote.USD.percent_change_30d)} % </td>`;
        cryptoMoeda += `<td> ${coin.last_updated} </td>`;
    });

    document.getElementById("data").innerHTML = cryptoMoeda;

}).catch((error) => {
    console.log(error)
})
