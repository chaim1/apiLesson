// $( "#showWeather" ).click(function() {
    // var city = $('#city').find(":selected").text();
    // $.ajax({
    // url: "https://jobs.github.com/positions.json?description=python&location=new+york",
    // dataType: 'json',
    // headers: {
    //     'Access-Control-Allow-Origin': 'localhost',
    //     'Access-Control-Expose-Headers': 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval'
        
    // }
    // }).done(function (d) {
        // if (typeof d === 'string')
        //     d = JSON.parse(d);
            // console.log(d);
            
            // $( "#weather" ).html( JSON.stringify(d) );            
            // });
// });



var city = 'new+york';

$.ajax({
    url: "api.php",
    data: 'value='+city,
    method: 'GET'
}).done(function (d) {
    // if (typeof d === 'string')
        // d = JSON.parse(d);
    console.log(d);
});