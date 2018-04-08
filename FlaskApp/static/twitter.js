$(document).on('click', '.dropdown-menu li a', function() {
				var value=$(this).html();
				console.log(value);
				var twitter_obj = [
						{"name": "Football", "twitter_tag": "@GeorgiaTechFB", "insta_tag": "georgiatechfb", "facebook_id": ""},
						{"name": "Golf", "twitter_tag": "@GT_GOLF", "insta_tag": "georgiatechgolf", "facebook_id": "GeorgiaTechGolf"},
						{"name": "Basketball", "twitter_tag": "", "insta_tag": "", "facebook_id": ""},
						{"name": "Softball", "twitter_tag": "@GaTechSoftball", "insta_tag": "georgiatechsoftball", "facebook_id": ""},
						{"name": "Tennis", "twitter_tag": "", "insta_tag": "", "facebook_id": ""},
						{"name": "Baseball", "twitter_tag": "@GTBaseball", "insta_tag": "gt_baseball", "facebook_id": ""},
						{"name": "Track and Field", "twitter_tag": "@GT_trackNfield", "insta_tag": "georgiatechtrackandfield", "facebook_id": ""},
						{"name": "India Club", "twitter_tag": "@GTIndiaClub", "insta_tag": "icgt", "facebook_id": ""},
						{"name": "China Club", "twitter_tag": "@gatechCSA", "insta_tag": "csa_gatech", "facebook_id": ""},
						{"name": "Korea Club", "twitter_tag": "", "insta_tag": "", "facebook_id": ""},
						{"name": "French Club", "twitter_tag": "", "insta_tag": "", "facebook_id": ""}
				];


				var twitter_hashtag;
				var facebook_id;
				//var insta_hashtag;
				for (var i = 0; i < twitter_obj.length; i++){
					if (twitter_obj[i].name == value){
						twitter_hashtag=twitter_obj[i].twitter_tag;
						facebook_id=twitter_obj[i].facebook_id;
						//insta_hashtag=twitter_obj[i].insta_tag;
					}
				}
				var twitter_responseVar;
				twitter_send = {'param': twitter_hashtag};
				facebook_send={'param': facebook_id};
				//insta_send = {'param': insta_hashtag}
				twitter_responseVar = $.ajax({
                    url: 'http://127.0.0.1:5000/twitter/',
                    data: JSON.stringify(twitter_send, null, '\t'),
                    type: 'POST',
                    contentType: 'application/json;charset=UTF-8',
                    async: false,
                    success: function (data) {
                        //console.log(response);
                        // console.log(response[1]);
                        // console.log(response[2]);
                        $('#myModal').modal('show');
                        $('#myModal').on('shown.bs.modal', function () {
                            //$('#myModal').find('.modal-body').append(response);
                            if (typeof data.errors === 'undefined' || data.errors.length < 1) {
                                var $tweets = $('<div class="row"> </div>');

                                $.each(data, function (i, j) {
                                    $tweets.append('<div class="row"> <div class="col-md-2 text-right"><img src="static/img/gt-golf.jpg" style="margin: 0 auto;width:48px;height:48px;border-radius:50%;" > </div><div class ="col-md-10 style="word-wrap: break-word;" " ><p>' + data[i] + '</p> </div> </div>')
                                });
                                $('.modal-body').html($tweets);
                                $('p').linkify();
                                $('.modal-body').linkify({
                                    target: "_blank"
                                });


                            } else {
                                $('.modal-body p:first').text('Response error');
                            }
                        });

                    }
                });

                facebook_response=$.ajax({
                    url: 'http://127.0.0.1:5000/fb/',
                    data: JSON.stringify(facebook_send, null, '\t'),
                    type: 'POST',
                    contentType: 'application/json;charset=UTF-8',
                    async: false,
                    success: function (data) {
                    alert('success fb');
                    console.log(data);
                    }

                });



/*$.ajax({
    url: 'http://127.0.0.1:5000/insta/',
    data: JSON.stringify(insta_send, null, '\t'),
    type: 'POST',
    contentType: 'application/json;charset=UTF-8',
    async: false,
    success: function(data) {
    }
});
//length of result object 'responseVar' is found by Object.keys(responseVar).length
var path = ("../static/" + insta_hashtag + "/" + insta_hashtag + ".json").toString();

$.getJSON(path, function(json) {
    var insta_responseVar = [];
    for(i=0;i<json.length;i++) {
        if(json[i]['edge_media_to_caption']['edges'].length > 0)
            insta_responseVar.push(json[i]['edge_media_to_caption']['edges'][0]['node']['text']);
    }
    console.log(insta_responseVar[0]);
    console.log(insta_responseVar[1]);

    //any kind of manipulation of the insta data has to be done in this section only
});*/

});