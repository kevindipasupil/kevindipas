$(window).load( function() {
	var $content = $('#content');
	// initialize
	$content.masonry({
	  columnWidth: ='.grid-sizer',
	  itemSelector: '.item'
	});
});