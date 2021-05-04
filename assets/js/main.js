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
let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 40.730610, lng: -73.935242 },
          zoom: 14,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
        });

      }