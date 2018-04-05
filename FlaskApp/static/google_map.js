function initMap() {
        var GT = {lat: 33.775610, lng: -84.396307 };
		var scheller = {lat: 33.776515, lng: -84.387786 };
		var coc = {lat: 33.777631, lng: -84.397321 };
		var sc = {lat: 33.774545, lng: -84.398651 };
		var billmoore = {lat: 33.772677, lng: -84.393974 };
		var clough = {lat: 33.775134, lng: -84.396426 };
		var starbucksTS = {lat: 33.776814, lng: -84.388399 };

		var tooltip1 = 'Georgia Institute of Technology'
		var tooltip2 = 'Scheller College of Business'
		var tooltip3 = 'College of Computing'
		var tooltip4 = 'Student Center'
		var tooltip5 = 'Bill Moore Success Center'
		var tooltip6 = 'Clough Undergraduate Learning Center'
		var tooltip7 = 'Starbucks at Tech Square'
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
          position: billmoore,
          map: map,
		  title: tooltip5
        });
		var marker6 = new google.maps.Marker({
          position: clough,
          map: map,
		  title: tooltip6
        });
		var marker7 = new google.maps.Marker({
          position: starbucksTS,
          map: map,
		  title: tooltip7
        });

        marker1.addListener('click', function() {
          $("#myModal").modal();
        });
		marker2.addListener('click', function() {
          $("#myModal").modal();
        });
		marker3.addListener('click', function() {
          $("#myModal").modal();
        });
		marker4.addListener('click', function() {
          $("#myModal").modal();
        });
		marker5.addListener('click', function() {
          $("#myModal").modal();
        });
		marker6.addListener('click', function() {
          $("#myModal").modal();
        });
		marker7.addListener('click', function() {
          $("#myModal").modal();
        });
      }

