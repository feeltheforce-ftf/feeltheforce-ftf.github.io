window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }
})

document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('#ftf-video-tabs li');
	const contents = document.querySelectorAll('#ftf-video-display .video-content');
  
	tabs.forEach(tab => {
	  tab.addEventListener('click', () => {
		const targetId = tab.getAttribute('data-target');
  
		tabs.forEach(t => t.classList.remove('is-active'));
  
		contents.forEach(content => content.style.display = 'none');
  
		tab.classList.add('is-active');
		document.getElementById(targetId).style.display = '';
	  });
	});
  });
  