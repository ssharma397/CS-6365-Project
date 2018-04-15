$(document).on('click', '.dropdown-menu li a', function() {
				var value=$(this).html();
				console.log(value);
				getInfo(value);
});

function getInfo(value) {
	var twitter_obj = [
		{"name": "College of Computing", "twitter_tag": "@CCAdviceGT", "facebook_id": "gtcomputing", "image_id": "gt-coc"},
		{"name": "Scheller College of Business", "twitter_tag": "@georgiatechbsch", "facebook_id": "SchellerCollege"},
		{"name": "College of Design", "twitter_tag": "", "facebook_id": "DESIGNatGT"},
		{"name": "College of Engineering", "twitter_tag": "@GaTechEngineers", "facebook_id": "GTengineering"},
		{"name": "Ivan Allen College of Liberal Arts", "twitter_tag": "@IvanAllenGT", "facebook_id": "gtliberalarts"},
		{"name": "College of Sciences", "twitter_tag": "@GT_Sciences", "facebook_id": "GTSciences"},
		
		{"name": "India Club", "twitter_tag": "@GTIndiaClub", "facebook_id": "GTIndiaClub", "image_id": "gt-india"},
		{"name": "SAA", "twitter_tag": "@GTSAA", "facebook_id": "gtsaa", "image_id": "gt-saa"},
		{"name": "SGA", "twitter_tag": "@gatechsga", "facebook_id": "GTgradSGA", "image_id": "gt-sga"},
		
		{"name": "Career Fair", "twitter_tag": "@GTCareerFair", "facebook_id": "GeorgiaTechCareerFair", "image_id": "gt-career"},
		
		{"name": "Football", "twitter_tag": "@GeorgiaTechFB", "facebook_id": "GTFootball", "image_id": "gt-football"},
		{"name": "Basketball", "twitter_tag": "@GTMBB", "facebook_id": "gtmensbasketball", "image_id": "gt-basketball"},
		{"name": "Softball", "twitter_tag": "@GaTechSoftball", "facebook_id": "", "image_id": "gt-softball"},
		{"name": "Tennis", "twitter_tag": "@GT_WTEN", "facebook_id": "gtmenstennis"},	//image is left
		{"name": "Baseball", "twitter_tag": "@GTBaseball", "facebook_id": "", "image_id": "gt-baseball"},
		{"name": "Golf", "twitter_tag": "@GT_GOLF", "facebook_id": "GeorgiaTechGolf", "image_id": "gt-golf"},
		{"name": "Track and Field", "twitter_tag": "@GT_trackNfield", "facebook_id": "georgiatechtrack", "image_id": "gt-track"},
		
		{"name": "Student Center", "twitter_tag": "@gtstudentcenter", "facebook_id": "GTStuCen", "image_id": "gt-sc"},
		{"name": "Clough Undergraduate Learning Center", "twitter_tag": "@GTClough", "facebook_id": "", "image_id": "gt"},
		{"name": "Campus Recreation Center", "twitter_tag": "@CRCatGT", "facebook_id": "crcatgt", "image_id": "gt"},
		{"name": "Stamps Health Service", "twitter_tag": "@stampshealth", "facebook_id": "", "image_id": "gt-health"},

		{"name": "Tech Square Starbucks", "twitter_tag": "", "facebook_id": "", "image_id": "gt-starbucks"},
		{"name": "Georgia Institute of Technology", "twitter_tag": "@GeorgiaTech", "facebook_id": "georgiatech", "image_id": "gt"},
		{"name": "Tech Square", "twitter_tag": "@TechSqATL", "facebook_id": "", "image_id": "gt-techsquare"},
	];

	var twitter_hashtag;
	var facebook_id;
	var image_id;
	//var insta_hashtag;
	for (var i = 0; i < twitter_obj.length; i++){
		if (twitter_obj[i].name == value){
			twitter_hashtag=twitter_obj[i].twitter_tag;
			facebook_id=twitter_obj[i].facebook_id;
			image_id = twitter_obj[i].image_id;
			//insta_hashtag=twitter_obj[i].insta_tag;
		}
	}
	var twitter_responseVar;
	twitter_send = {'param': twitter_hashtag};
	facebook_send={'param': facebook_id};
	//insta_send = {'param': insta_hashtag}
	if(twitter_hashtag != "") {
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
							var res = data[i].split("+")
							$tweets.append('<div class="row"> \
												<div class="col-md-2 text-right"> \
													<img src="static/img/' + image_id + '.jpg" style="margin: 0 auto;width:48px;height:48px;border-radius:50%;" > \
												</div> \
												<div class ="col-md-10 style="word-wrap: break-word;" " > \
													<p><b>' + res[0] + '</b><i>' + res[1] + '</i></p>  \
												</div> \
											</div><br>')
						});
						$('#twitter').html($tweets);
						$('p').linkify();
						$('#twitter').linkify({
							target: "_blank"
						});
					} else {
						$('#twitter p:first').text('Response error');
					}
				});
			}
		});
	}
	if(facebook_id != "") {
		facebook_response=$.ajax({
			url: 'http://127.0.0.1:5000/fb/',
			data: JSON.stringify(facebook_send, null, '\t'),
			type: 'POST',
			contentType: 'application/json;charset=UTF-8',
			async: false,
			success: function (response) {
				//console.log(response);
				var d=response.data;
				//$('#myModal').find('.modal-body').append(response);
				if (typeof response.errors === 'undefined' || response.errors.length < 1) {
					var $posts=$('<div class="row"> </div>');
					var d=response.data;
					for(var x=0;x<d.length;x++){
						//console.log(d[x]);
						if(d[x].message != undefined)
							$posts.append('	<div class="row"> \
												<div class="col-md-2 text-right">\
													<img src="static/img/fb.png" style="margin: 0 auto;width:48px;height:48px;border-radius:50%;" > \
												</div>\
												<div class ="col-md-10 style="word-wrap: break-word;" " >\
													<p><i>' + d[x].message + '</i></p> \
												</div>\
											</div><br>')
					}
					$('#fb').html($posts);
					$('p').linkify();
					$('#fb').linkify({
						target: "_blank"
					});
				} else {
					$('#fb p:first').text('Response error');
				}
			}
		});
	}
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
}