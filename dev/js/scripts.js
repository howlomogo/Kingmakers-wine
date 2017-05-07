//- Navigation
var navOpen = false;

function toggleNavigation() {
	navOpen = !navOpen;
	if(navOpen) {
		$('.hamburger').addClass('is-active');
		$('#navigation').addClass('is-active');
	}

	else {
		$('.hamburger').removeClass('is-active');
		$('#navigation').removeClass('is-active');
	}
};


//- Timeline
(function() {

  'use strict';
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();


//- Events
function changeEvent(event) {
    $(".events-showcase--container").removeClass("is-active");
    $(".events-box--pointer").removeClass("is-active");
    $(".events-box--button").removeClass("is-active");

    $("#" + event).addClass("is-active");
    $("#" + event + "--pointer").addClass("is-active");
    $("#" + event + "--btn").addClass("is-active");
}


//- Wow
var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       false,
    live:         true,
    callback:     function(box) {

    },
    scrollContainer: null,
    resetAnimation: true,
  }
);
wow.init();