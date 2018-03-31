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
    alert(data[0].display_url);
    alert(data[0].id)

    console.log(data);
});