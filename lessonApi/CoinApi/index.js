





$.ajax({
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical?time_start=2017-01-01&id=1&time_start=2017-01-01&time_end=2018-01-01&interval=7d&count=12&convert=CAD",
    method: 'GET'
    }).done(function (d) {
        if (typeof d === 'string')
            d = JSON.parse(d);
            console.log(d);
            
            // $( "#weather" ).html( JSON.stringify(d) );            
});
