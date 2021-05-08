async function getGas() {
    const result = await axios({
        method: 'get',
        url: 'https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=e6ffa92a7cbbd44412f4362de111c9333acfa4a967fa1e6aa9fdfec62b1c',
    });


    let gweiFastest = result.data.fastest / 10;
    let gweiFast = result.data.fast / 10;
    let gweiStandard = result.data.average / 10;
    let fastestTxTime = result.data.fastestWait;
    let fastTxTime = result.data.fastWait;
    let standardTxTime = result.data.avgWait;


    $('.defi-append').append(`<div class="fastest-gas">
    <div class="fastest-area">
        <div class="fastest-gas-number-title">
            <span class="fastest-tit">FASTEST</span>
        </div>
        <div class="fastest-gas-number">
            <span class="fastest-num">${gweiFastest}</span>
        </div>
        <div class="fastest-est-time">
            <span class="fastest-time">Est. Tx Time(mins): ${fastestTxTime}</span>
        </div>
    </div>
    </div>
    <div class="fast-gas">
    <div class="fast-area">
        <div class="fast-gas-number-title">
            <span class="fast-tit">FAST</span>
        </div>
        <div class="fast-gas-number">
            <span class="fast-num">${gweiFast}</span>
        </div>
        <div class="fast-est-time">
            <span class="fast-time">Est. Tx Time(mins): ${fastTxTime}</span>
        </div>
    </div>
    </div>
    <div class="standard-gas">
    <div class="standard-area">
        <div class="standard-gas-number-title">
            <span class="standard-tit">STANDARD</span>
        </div>
        <div class="standard-gas-number">
            <span class="standard-num">${gweiStandard}</span>
        </div>
        <div class="standard-est-time">
            <span class="standard-time">Est. Tx Time(mins): ${standardTxTime}</span>
        </div>
    </div>
    </div>
`);

}
getGas();

async function trendingGecko() {
    const result = await axios({
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/search/trending',
    });
    
    for(let i=0; i<result.data.coins.length; i++) {
        let geckoID = i+1;
        let geckoName = result.data.coins[i].item.name;
        let geckoSymbol = result.data.coins[i].item.symbol;
        let geckoCap = result.data.coins[i].item.market_cap_rank;

        $('.trending-wrapper').append(`<div class="trending-coins-gecko">
        <div class="gecko-trend-id">
            <span class="gecko-span-id">${geckoID}</span>
        </div>
        <div class="gecko-trend-name">
            <span class="gecko-span-name">${geckoName}</span>
        </div>
        <div class="gecko-trend-symbol">
            <span class="gecko-span-symbol">${geckoSymbol}</span>
        </div>
        <div class="gecko-trend-market-cap">
            <span class="gecko-span-market-cap">${geckoCap}</span>
        </div>
    </div>
    <div class="trending-line"></div>`);
    }
}
trendingGecko();

async function cryptQuant() {
    const result = await axios({
        method: 'get',
        url: 'https://goweather.herokuapp.com/weather/Charlotte',
    });
    let currentDesc = result.data.description;
    let day1 = result.data.forecast[0].day;
    let day2 = result.data.forecast[1].day;
    let day3 = result.data.forecast[2].day;
    let temp1 = result.data.forecast[0].temperature;
    let temp2 = result.data.forecast[1].temperature;
    let temp3 = result.data.temperature;
    let wind1 = result.data.forecast[0].wind;
    let wind2 = result.data.forecast[1].wind;
    let wind3 = result.data.wind;

    $('#weather-bod').append(`<div class="current-weather-wrap">
    <span class="current-weather">Current Weather: ${currentDesc}</span>
</div>
<div class="forecast-wrap">
    <div class="forecast-title">
        <div class="forecast-day">
            <span class="span-day-forecast">Day</span>
        </div>
        <div class="forecast-temp">
            <span class="span-temp-forecast">Temperature</span>
        </div>
        <div class="forecast-wind">
            <span class="span-wind-forecast">Wind</span>
        </div>
    </div>
    <div class="trending-line"></div>
    <div class="forecast-title">
        <div class="forecast-day">
            <span class="span-day-forecast">${day1}</span>
        </div>
        <div class="forecast-temp">
            <span class="span-temp-forecast">${temp1}</span>
        </div>
        <div class="forecast-wind">
            <span class="span-wind-forecast">${wind1}</span>
        </div>
    </div>
    <div class="trending-line"></div>
    <div class="forecast-title">
        <div class="forecast-day">
            <span class="span-day-forecast">${day2}</span>
        </div>
        <div class="forecast-temp">
            <span class="span-temp-forecast">${temp2}</span>
        </div>
        <div class="forecast-wind">
            <span class="span-wind-forecast">${wind2}</span>
        </div>
    </div>
    <div class="trending-line"></div>
    <div class="forecast-title">
        <div class="forecast-day">
            <span class="span-day-forecast">${day3}</span>
        </div>
        <div class="forecast-temp">
            <span class="span-temp-forecast">${temp3}</span>
        </div>
        <div class="forecast-wind">
            <span class="span-wind-forecast">${wind3}</span>
        </div>
    </div>
    <div class="trending-line"></div>
</div>`);
}
cryptQuant();

async function tvlPulse() {
    const result = await axios({
        method: 'get',
        url: 'https://data-api.defipulse.com/api/v1/defipulse/api/GetProjects?api-key=e6ffa92a7cbbd44412f4362de111c9333acfa4a967fa1e6aa9fdfec62b1c',
    });
    for(let i=0;i<result.data.length;i++) {
        let tvlRank = i+1;
        let tvlName = result.data[i].name;
        let tvlChain = result.data[i].chain;
        let tvlCat = result.data[i].category;
        let tvlVal = result.data[i].value.tvl.USD.value / 1000000000;
        
        $('.tvl-append').append(`<div class="tvl-asset">
        <div class="tvl-rank">
            <div class="span-tvl-rank">${tvlRank}</div>
        </div>
        <div class="tvl-name">
            <div class="span-tvl-name">${tvlName}</div>
        </div>
        <div class="tvl-chain">
            <div class="span-tvl-chain">${tvlChain}</div>
        </div>
        <div class="tvl-category">
            <div class="span-tvl-category">${tvlCat}</div>
        </div>
        <div class="tvl-TVL">
            <div class="span-tvl-TVL">$${tvlVal}B</div>
        </div>
    </div>`);
    }
}
tvlPulse();


/*async function gasPredict() {
    const result = await axios({
        method: 'get',
        url: 'https://data-api.defipulse.com/api/v1/egs/api/predictTable.json?api-key=e6ffa92a7cbbd44412f4362de111c9333acfa4a967fa1e6aa9fdfec62b1c',
    });
}

gasPredict();*/

async function rektLiq() {
    const result = await axios({
        method: 'get',
        url: 'https://data-api.defipulse.com/api/v1/rekto/api/total-damage',
    });

    for(let i=0;i<result.data.total.length; i++) {
        let liqSymbol = result.data.total[i].symbol;
        let rektTotal = result.data.total[i].total;
        let rektBuy = result.data.total[i].buy;
        let rektSell = result.data.total[i].sell;
        let rektNet = result.data.total[i].net;

        $('.liq-total-append').append(`<div class="liq-asset">
        <div class="liq-symbol">
        <div class="span-liq-symbol">${liqSymbol}</div>
        </div>
        <div class="liq-rekt-total">
        <div class="span-rekt-total">${rektTotal}</div>
        </div>
        <div class="liq-buy-rekt">
        <div class="span-buy-rekt">${rektBuy}</div>
        </div>
        <div class="liq-sell-rekt">
        <div class="span-sell-rekt">${rektSell}</div>
        </div>
        <div class="liq-Net">
        <div class="span-liq-net">${rektNet}</div>
        </div>
        </div>`);
    }
}
rektLiq();
