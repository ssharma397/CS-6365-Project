var obj = [
  {"name": "Football", "tag": "@GeorgiaTechFB"},
  {"name": "Golf", "tag": "@GT_GOLF"}
];

$(document).on('click', '.dropdown-menu li a', function() {
            var value=$(this).html();

alert(value);
var hash_tag;
for (var i = 0; i < obj.length; i++){
  // look for the entry with a matching `code` value
  if (obj[i].name == value){
     // we found it
    // obj[i].name is the matched result
    hash_tag=obj[i].tag;
    alert(hash_tag);
  }
}
});



