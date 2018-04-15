function initMap() {
        var GT = {lat: 33.775610, lng: -84.396307 };
		var scheller = {lat: 33.776515, lng: -84.387786 };
		var coc = {lat: 33.777631, lng: -84.397321 };
		var sc = {lat: 33.774545, lng: -84.398651 };
		var clough = {lat: 33.775134, lng: -84.396426 };
		var crc = {lat: 33.775958, lng: -84.403992 };
		var techsquare = {lat: 33.776887, lng: -84.389098 };
		var stampshealth = {lat: 33.774978, lng: -84.403119 };

		var tooltip1 = 'Georgia Institute of Technology'
		var tooltip2 = 'Scheller College of Business'
		var tooltip3 = 'College of Computing'
		var tooltip4 = 'Student Center'
		var tooltip5 = 'Clough Undergraduate Learning Center'
		var tooltip6 = 'Campus Recreation Center'
		var tooltip7 = 'Tech Square'
		var tooltip8 = 'Stamps Health Services'
		
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: GT
        });
        var marker1 = new google.maps.Marker({
          position: GT,
          map: map,
		  title: tooltip1
        });
		var marker2 = new google.maps.Marker({
          position: scheller,
          map: map,
		  title: tooltip2
        });
		var marker3 = new google.maps.Marker({
          position: coc,
          map: map,
		  title: tooltip3
        });
		var marker4 = new google.maps.Marker({
          position: sc,
          map: map,
		  title: tooltip4
        });
		var marker5 = new google.maps.Marker({
          position: clough,
          map: map,
		  title: tooltip5
        });
		var marker6 = new google.maps.Marker({
          position: crc,
          map: map,
		  title: tooltip6
        });
		var marker7 = new google.maps.Marker({
          position: techsquare,
          map: map,
		  title: tooltip7
        });

		var marker8 = new google.maps.Marker({
          position: stampshealth,
          map: map,
		  title: tooltip8
        });

		marker1.addListener('click', function() {
			getInfo(tooltip1);
		});
		marker2.addListener('click', function() {
			getInfo(tooltip2);
		});
		marker3.addListener('click', function() {
			getInfo(tooltip3);
		});
		marker4.addListener('click', function() {
			getInfo(tooltip4);
		});
		marker5.addListener('click', function() {
			getInfo(tooltip5);
		});
		marker6.addListener('click', function() {
			getInfo(tooltip6);
		});
		marker7.addListener('click', function() {
			getInfo(tooltip7);
		});
        marker8.addListener('click', function() {
			getInfo(tooltip8);
		});

	}
