<?php
/**
 * Created by PhpStorm.
 * User: shrut
 * Date: 03-Apr-18
 * Time: 12:40 PM
 */


require_once('TwitterAPIExchange.php');
$hash_tag = $_POST['param'];
echo "hash tag mila response main",$hash_tag;
$settings = array(
    'oauth_access_token' => "978403297307525125-P0JGDGW8kIQGim9jAPLo3jSKpTqFE8z",
    'oauth_access_token_secret' => "kStGABKsD5qPuAcspdy4tlm2xRIzhLY3Zkbrovl0VppqB",
    'consumer_key' => "RWJVq4QaNza8zSp3IHofMrfQn",
    'consumer_secret' => "hGbdMGnFrl9rMEmLxV3awb9FquQNluhQ9Uf4YOMEgiECErL4qu"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q='.$hash_tag;
echo 'get field',$getfield;
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
try {
    $response = $twitter->setGetfield($getfield)
        ->buildOauth($url, $requestMethod)
        ->performRequest();
} catch (Exception $e)
{
    print $e->getMessage();
}

var_dump(json_decode($response));
?>