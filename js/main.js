var skills	   = $('#skills');
var page	   = $('html, body');

var animTime   = 500;

var chartLoaded = false;

$('#menu a').on('click', function(e) {
	e.preventDefault();
	page.animate({
		scrollTop: $(e.currentTarget.hash).offset().top
	}, animTime);
});

var loadCharts = function() {
	var charts = $('.line-chart');
	charts.each(function(i, chart) {
		$(chart).children().each(function(i, bar){
			$(bar).animate({
				'width': $(bar).attr('data-percent') + "%"
			}, 800);
		});
	});
};

$(window).scroll(function() {
	if($(window).scrollTop() >= (skills.offset().top-skills.height())*0.5 && !chartLoaded) {
		loadCharts();
		chartLoaded = true;
	}
});