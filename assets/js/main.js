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

