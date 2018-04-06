$(document).on('click', '.dropdown-menu li a', function() {
				var value=$(this).html();
				console.log(value);
				var twitter_obj = [
						{"name": "Football", "twitter_tag": "@GeorgiaTechFB", "insta_tag": "georgiatechfb"},
						{"name": "Golf", "twitter_tag": "@GT_GOLF", "insta_tag": "georgiatechgolf"},
						{"name": "Basketball", "twitter_tag": "", "insta_tag": ""},
						{"name": "Softball", "twitter_tag": "@GaTechSoftball", "insta_tag": "georgiatechsoftball"},
						{"name": "Tennis", "twitter_tag": "", "insta_tag": ""},
						{"name": "Baseball", "twitter_tag": "@GTBaseball", "insta_tag": "gt_baseball"},
						{"name": "Track and Field", "twitter_tag": "@GT_trackNfield", "insta_tag": "georgiatechtrackandfield"},
						{"name": "India Club", "twitter_tag": "@GTIndiaClub", "insta_tag": "icgt"},
						{"name": "China Club", "twitter_tag": "@gatechCSA", "insta_tag": "csa_gatech"},
						{"name": "Korea Club", "twitter_tag": "", "insta_tag": ""},
						{"name": "French Club", "twitter_tag": "", "insta_tag": ""}
				];
				var twitter_hashtag;
				//var insta_hashtag;
				for (var i = 0; i < twitter_obj.length; i++){
					if (twitter_obj[i].name == value){
						twitter_hashtag=twitter_obj[i].twitter_tag;
						//insta_hashtag=twitter_obj[i].insta_tag;
					}
				}
				var twitter_responseVar;
				twitter_send = {'param': twitter_hashtag}
				//insta_send = {'param': insta_hashtag}
				twitter_responseVar = $.parseJSON($.ajax({
					url: 'http://127.0.0.1:5000/twitter/',
					data: JSON.stringify(twitter_send, null, '\t'),
					type: 'POST',
					contentType: 'application/json;charset=UTF-8',
					async: false,
					success: function(data) {
						console.log(data);
                        var response = JSON.stringify(data);
						$('#myModal').modal('show');
                        $('#myModal').on('shown.bs.modal', function() {

                        $('#myModal').find('.modal-body').append(response);
                        });
					}
				}).responseText);

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