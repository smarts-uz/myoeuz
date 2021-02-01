
$(document).ready(function(){
	$('#particles-js').removeClass('section-intro-page intro-home bg-dark');
	//$('#particles-js').removeCLass('intro-home bg-dark');
	$('#particles-js').addClass('section-intro no-bg');
	$('.intro-bottom').remove();
	$('.particles-js-canvas-el').remove();
	$('#particles-js > .container').remove();
})
