
// var Array = [{key:'facbook',value:"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FB&interval=5min&apikey=P41L883Z5C2MQDPG"},{key:'Amazon',value:"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&apikey=P41L883Z5C2MQDPG"},{key:'Amazon',value:"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=P41L883Z5C2MQDPG"},{key:'Netplix',value:"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NFLX&interval=5min&apikey=P41L883Z5C2MQDPG"},{key:'Google',value:"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOG&interval=5min&apikey=P41L883Z5C2MQDPG"}]
// // console.log(Array[0]);

    $.ajax({
        url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FB&interval=5min&apikey=P41L883Z5C2MQDPG",
        method: 'GET'
    }).done(function (d) {

            let arr = [];
            for(let prop in d['Time Series (5min)']) {
                
                arr.push(d['Time Series (5min)'][prop]);
            }

            console.log(arr[arr.length - 1]['4. close']);
            console.log(arr[arr.length - 2]['4. close']);

    });

    $.ajax({
        url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&apikey=P41L883Z5C2MQDPG",
        method: 'GET'
    }).done(function (d) {

            let arr = [];
            for(let prop in d['Time Series (5min)']) {
                d['Time Series (5min)'][prop].time = new Date(prop);
                
                arr.push(d['Time Series (5min)'][prop]);
            }

            console.log(arr[arr.length - 1]['4. close']);
            console.log(arr[arr.length - 2]['4. close']);

    });
    $.ajax({
        url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=P41L883Z5C2MQDPG",
        method: 'GET'
    }).done(function (d) {

            let arr = [];
            for(let prop in d['Time Series (5min)']) {
                d['Time Series (5min)'][prop].time = new Date(prop);
                
                arr.push(d['Time Series (5min)'][prop]);
            }

            console.log(arr[arr.length - 1]['4. close']);
            console.log(arr[arr.length - 2]['4. close']);

    });
    $.ajax({
        url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NFLX&interval=5min&apikey=P41L883Z5C2MQDPG",
        method: 'GET'
    }).done(function (d) {

            let arr = [];
            for(let prop in d['Time Series (5min)']) {
                d['Time Series (5min)'][prop].time = new Date(prop);
                
                arr.push(d['Time Series (5min)'][prop]);
            }

            console.log(arr[arr.length - 1]['4. close']);
            console.log(arr[arr.length - 2]['4. close']);

    });
    $.ajax({
        url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOG&interval=5min&apikey=P41L883Z5C2MQDPG",
        method: 'GET'
    }).done(function (d) {

            let arr = [];
            for(let prop in d['Time Series (5min)']) {
                d['Time Series (5min)'][prop].time = new Date(prop);
                
                arr.push(d['Time Series (5min)'][prop]);
            }

            console.log(arr[arr.length - 1]['4. close']);
            console.log(arr[arr.length - 2]['4. close']);

    });



