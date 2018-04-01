function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:C:\Users\shrut\Desktop\projects\WhatsTrendingInGeorgiaTech
readTextFile("gtcomputing.json", function(text){
    var data = JSON.parse(text);
    postData(data);
   // alert(data[0].display_url);
   // alert(data[0].id)

    console.log(data);
});

function postData(input) {
    $.ajax({
        type: "POST",
        url: "twitter_search.py",
        data: { param: input },
        success: callbackFunc
    });

}

function callbackFunc(response) {
    // do something with the response
    alert('success');
    alert(response);
    console.log(response);
}