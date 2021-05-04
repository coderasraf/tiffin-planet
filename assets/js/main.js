jQuery(document).ready(function(){
	$('.planing-inner-carousel').owlCarousel({
		items:4,
		loop:true,
		autoplay:true,
		dots:false,
		margin:30,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	})
	$('.reviews-inner-carousel').owlCarousel({
		items:4,
		loop:true,
		dots:false,
		autoplay:true,
		margin:30,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:false,
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }

	})
})


const addon = document.querySelector('#addon');
const items = document.querySelectorAll('#addon > li');
const rates = document.querySelectorAll('.rate-plus');
const minus = document.querySelectorAll('#minus');
const plus = document.querySelectorAll('#plus');

plus.forEach((increase)=>{
	let count = 0;
	increase.onclick = (e)=>{
		const maxValue = e.target.parentElement.children[2].value = ++count;
	}
})
minus.forEach((min)=>{
	let count = 0;
	min.onclick = (e)=>{
		const minValue = e.target.parentElement.children[2].value = count--;
		if(minValue <= 1){
			const minValue = e.target.parentElement.children[2].value = 1;
		}
	}
})

// Javascript map api
      function initMap() {
		var options ={
			center: { lat: 42.3601, lng: -71.0589 },
			zoom: 8
		}
        var map = new google.maps.Map(document.getElementById("map"), options);

		// Adding marker after clicking location
		google.maps.event.addListener(map, 'click', (event)=>{
			addMarker({coords:event.latLng})
		})

		// Array of markers
		var markers = [
			{
				coords:{lat:42.4668, lng: -70.9495},
				iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
				content: `<h2>Boston Shopping Mall</h2>`
			},
			{
				coords:{lat: 42.3601, lng: -71.0589},
				iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
				content: `<h2>Boston Resturent</h2>`
			},
			{
				coords:{lat: 25.761681, lng: -80.191788},
				iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
				content: `<h2>Relax Resturent, Miami</h2>`
			}
		]

		// loop through all markers
		for(var i= 0; i < markers.length; i++){
			addMarker(markers[i])
		}
		
		// Add marker function
		function addMarker(props){
			var marker = new google.maps.Marker({
				position:props.coords,
				map: map,
			})

			// Check for cusotm icon
			if(props.iconImage){
				marker.setIcon(props.iconImage)
			}

			// Check location content
			if(props.content){
				var infoWindow = new google.maps.InfoWindow({
					content: props.content
				})
				
				marker.addListener("click", () => {
					infoWindow.open(map, marker)
				});
			}
			
		}

    }