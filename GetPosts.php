<?php
/**
 * Created by PhpStorm.
 * User: shrut
 * Date: 03-Apr-18
 * Time: 12:09 PM
 */
Class GetTweets
{
    function getTweets($hash_tag)
    {
        $url = 'http://search.twitter.com/search.atom?q=' . urlencode($hash_tag);
        echo "<p>Connecting to <strong>$url</strong> ...</p>";
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        $xml = curl_exec($ch);
        curl_close($ch);
        $response = array();
        $posts = array();
//If you want to see the response from Twitter, uncomment this next part out:
//echo "<p>Response:</p>";
//echo "<pre>".htmlspecialchars($xml)."</pre>";

        $affected = 0;
        $twelement = new SimpleXMLElement($xml);
        foreach ($twelement->entry as $entry) {
            $text = trim($entry->title);
            $author = trim($entry->author->name);
            $time = strtotime($entry->published);
            $id = $entry->id;
            $posts[] = array('post' => $text, 'author' => $author, 'time' => $time, 'id' => $id);

        }
        $response['posts'] = $posts;
        $fp = fopen('results.json', 'w');
        fwrite($fp, json_encode($response));
        fclose($fp);
        return true;
    }
}
?>