$(window).load( function() {
	var $content = $('#content');
	// initialize
	$content.masonry({
	  itemSelector: '.item',
	  columnWidth: '.grid-sizer',
	  gutter: '.gutter-sizer'
	});
});