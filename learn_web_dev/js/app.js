jQuery(document).ready(function(){
	$('section.plan a').on('mouseenter', function (){
		$(this).text('Not Available');
	}).on('mouseleave', function (){
		$(this).text('Buy it');
	});

	$('section.incentive span').hide();
	$('button#interest').on('click', function(){
		$('section.incentive span').show();
	});
});