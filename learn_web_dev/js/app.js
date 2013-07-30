jQuery(document).ready(function(){
	/* toggle buy it and not available */
	$('section.plan a').on('mouseenter', function () {
		$(this).text('Not Available');
	}).on('mouseleave', function () {
		$(this).text('Buy it');
	});
});