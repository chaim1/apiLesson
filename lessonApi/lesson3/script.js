// apikey = P41L883Z5C2MQDPG
// url =  https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=fb&interval=5min&apikey=
// arrayOfNames = [{symbol:'AAPL',name:'Apple'},{symbol:'MSFT',name:'Microsoft'},{symbol:'INTC',name:'Intel'},{symbol:'FB',name:'Facebook'},{symbol:'CSCO',name:'Cisco '}]

const arrayOfStocks = [{ symbol: 'AAPL', name: 'Apple' },
{ symbol: 'MSFT', name: 'Microsoft' },
{ symbol: 'INTC', name: 'Intel' },
{ symbol: 'FB', name: 'Facebook' },
{ symbol: 'CSCO', name: 'Cisco ' },
{symbol: 'QQQ', name: '	Invesco'},
{symbol: 'CZR', name: '	Caesars '}];



for (let i = 0; i < arrayOfStocks.length; i++) {
    let array = [];
    array.push(arrayOfStocks[i]['name']);
    array.push(arrayOfStocks[i]['symbol']);
    stockets(arrayOfStocks[i]['symbol'], function (arr) {
        let a = arr;
        array.push(a[0]['4. close']);
        array.push(a[1]['4. close']);
        array.push(a[0]['5. volume']);
    
        var Change = '<p class="text-danger">'+(Number(array[2])-Number(array[3]))+'> -%</p>';
        let success = (Number(array[2]) - Number(array[3])) > 0;
        if(success){
            Change = '<p class="text-success">'+(array[2]-array[3])+'^ -%</p>';
        }
        
        let temp = '<tr><th>'+array[1]+'</th><td>'+array[0]+'</td><td>'+array[2]+'</td><td>'+Change+'</td><td>'+array[4]+'</td></tr>';
        document.getElementById('tbody').innerHTML+=temp    });

}






function stockets(symbol, callback) {
    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=5min&apikey=I2CEA84LAJMTIAHE";

    $.ajax(url).done(function (d) {
        // d = JSON.parse(d);
        let arr = [];
        for (let propt in d['Time Series (5min)']) {
            d['Time Series (5min)'][propt].time = new Date(propt);
            arr.push(d['Time Series (5min)'][propt]);
        }
        callback(arr);
    });
}
