$(document).on('click', '.dropdown-menu li a', function() {
				var value=$(this).text();
				console.log(value);
                $('#myModal').modal('show');
				getInfo(value);
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
				var twitter_obj =[{"name": "College of Computing", "twitter_tag": "@CCAdviceGT", "facebook_id": "gtcomputing"},
						{"name": "Scheller College of Business", "twitter_tag": "@georgiatechbsch", "facebook_id": "SchellerCollege"},
						{"name": "College of Design", "twitter_tag": "", "facebook_id": "DESIGNatGT"},
						{"name": "College of Engineering", "twitter_tag": "@GaTechEngineers", "facebook_id": "GTengineering"},
						{"name": "Ivan Allen College of Liberal Arts", "twitter_tag": "@IvanAllenGT", "facebook_id": "gtliberalarts"},
						{"name": "College of Sciences", "twitter_tag": "@GT_Sciences", "facebook_id": "GTSciences"},

						{"name": "India Club", "twitter_tag": "@GTIndiaClub", "facebook_id": "GTIndiaClub"},
						{"name": "SAA", "twitter_tag": "@GTSAA", "facebook_id": "gtsaa"},
						{"name": "SGA", "twitter_tag": "@gatechsga", "facebook_id": "GTgradSGA"},

						{"name": "Career Fair", "twitter_tag": "@GTCareerFair", "facebook_id": "GeorgiaTechCareerFair"},

						{"name": "Football", "twitter_tag": "@GeorgiaTechFB", "facebook_id": "GTFootball"},
						{"name": "Basketball", "twitter_tag": "@GTMBB", "facebook_id": "gtmensbasketball"},
						{"name": "Softball", "twitter_tag": "@GaTechSoftball", "facebook_id": ""},
						{"name": "Tennis", "twitter_tag": "@GT_WTEN", "facebook_id": "gtmenstennis"},
						{"name": "Baseball", "twitter_tag": "@GTBaseball", "facebook_id": ""},
						{"name": "Golf", "twitter_tag": "@GT_GOLF", "facebook_id": "GeorgiaTechGolf"},
						{"name": "Track and Field", "twitter_tag": "@GT_trackNfield", "facebook_id": "georgiatechtrack"},

						{"name": "Student Center", "twitter_tag": "@gtstudentcenter", "facebook_id": "GTStuCen"},
						{"name": "Clough Undergraduate Learning Center", "twitter_tag": "@GTClough", "facebook_id": ""},
						{"name": "Campus Recreation Center", "twitter_tag": "@CRCatGT", "facebook_id": "crcatgt"},
						{"name": "Stamps Health Services", "twitter_tag": "@stampshealth", "facebook_id": ""},

						{"name": "Tech Square Starbucks", "twitter_tag": "", "facebook_id": ""},
						{"name": "Georgia Institute of Technology", "twitter_tag": "@GeorgiaTech", "facebook_id": "georgiatech"},
						{"name": "Tech Square", "twitter_tag": "@TechSqATL", "facebook_id": ""},
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

               


                facebook_response=$.ajax({
                    url: 'http://127.0.0.1:5000/fb/',
                    data: JSON.stringify(facebook_send, null, '\t'),
                    type: 'POST',
                    contentType: 'application/json;charset=UTF-8',
                    async: false,
                    success: function (response) {
                    var d=response.data;

                    // $('#myModal').modal('show');
                    //     $('#myModal').on('shown.bs.modal', function () {
                            //$('#myModal').find('.modal-body').append(response);
                            if (typeof response.errors === 'undefined' || response.errors.length < 1) {
                                var $posts=$('<div class="row"> </div>');
                                var d=response.data;
                                for(var x=0;x<d.length;x++)
                                 {

                                 $posts.append('<div class="row"> <div class="col-md-2 text-right"><img src="static/img/fb.png" style="margin: 0 auto;width:48px;height:48px;border-radius:50%;" > </div><div class ="col-md-10 style="word-wrap: break-word;" " ><p>' + d[x].message + '</p> </div> </div>')

                                 };

                                $('#fb').html($posts);
                                $('p').linkify();
                                $('#fb').linkify({
                                    target: "_blank"
                                });


                            } else {
                                $('#fb p:first').text('Response error');
                            }
                       // });


}
                    

                });


}