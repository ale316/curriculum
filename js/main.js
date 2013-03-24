var page	   = $('html, body');

var animTime   = 500;

$('#menu a').on('click', function(e) {
	e.preventDefault();
	page.animate({
		scrollTop: $(e.currentTarget.hash).offset().top
	}, animTime);
});