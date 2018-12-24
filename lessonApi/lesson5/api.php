<?php  

$curl = curl_init();
$url = "https://jobs.github.com/positions.json?description=python&location=new+york";

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);


$result = curl_exec($curl );





echo ($result);

curl_close($curl);