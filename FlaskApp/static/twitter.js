$(document).on('click', '.dropdown-menu li a', function() {
				var value=$(this).text();
				console.log(value);
				$('#myModal').modal('show');
				getInfo(value);
});

$(document).on('click', '.dropdown-menu1 li a', function() {
				var value=$(this).text();
				console.log(value);
				//$('#myModal1').modal('show');
				switch(value) {
					case "Scheller College of Business" :	trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/026fpr8","geo":"","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%2Fm%2F026fpr8&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
															document.write("\n\n\n\n");
															trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"college of computing gatech","geo":"","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=college%20of%20computing%20gatech&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
												break;
					case "College of Computing" : trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"college of computing gatech","geo":"","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=college%20of%20computing%20gatech&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
												break;
					case "College of Design" : trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/026dgm4","geo":"","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%2Fm%2F026dgm4&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
												break;
					case "College of Engineering" : trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/026fwfw","geo":"","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%2Fm%2F026fwfw&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
												break;
					case "Ivan Allen College of Liberal Arts" : trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/026fpv0","geo":"","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%2Fm%2F026fpv0&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
												break;
					case "College of Sciences" : trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/026fwkn","geo":"","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%2Fm%2F026fwkn&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
												break;
				}
});

$(function(){
	$.ajax({
		url: 'http://127.0.0.1:5000/twitter/place/',
		type: 'GET',
		datatype: 'JSON',
		success: function(response) {
		console.log(response)
		},
		error: function(errors) {
		console.log(errors)
		}
	});
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
	for (var i = 0; i < twitter_obj.length; i++){
		if (twitter_obj[i].name == value){
			twitter_hashtag=twitter_obj[i].twitter_tag;
			facebook_id=twitter_obj[i].facebook_id;
			image_id = twitter_obj[i].image_id;
		}
	}
	var twitter_responseVar;
	twitter_send = {'param': twitter_hashtag};
	facebook_send={'param': facebook_id};
	if(twitter_hashtag != "") {
		twitter_responseVar = $.ajax({
			url: 'http://127.0.0.1:5000/twitter/',
			data: JSON.stringify(twitter_send, null, '\t'),
			type: 'POST',
			contentType: 'application/json;charset=UTF-8',
			async: false,
			success: function (data) {
				$('#myModal').modal('show');
				$('#myModal').on('shown.bs.modal', function () {
					if (typeof data.errors === 'undefined' || data.errors.length < 1) {
						var $tweets = $('<div class="row"><p style="text-align: center;"><font size="5" face="comic sans ms"><b>' + value + '</b></font></p></div>');
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
				var d=response.data;
				if (typeof response.errors === 'undefined' || response.errors.length < 1) {
					var $posts = $('<div class="row"><p style="text-align: center;"><font size="5"><b>' + value + '</b></font></p></div>');
					var d=response.data;
					for(var x=0;x<d.length;x++){
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
}