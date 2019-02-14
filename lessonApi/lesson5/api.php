<?php  
$curl = curl_init();
$url = "https://jobs.github.com/positions.json?description=python&location=jerusalem";

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);


$result = curl_exec($curl );





echo ($url);

curl_close($curl);