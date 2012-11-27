/* Author: 

*/

$('document').ready(function(){
	$('#YIP-start').click(function(e){
		e.preventDefault();
		$('div#container').hide();
		$('div#outerwrapper').css('visibility', 'visible');
	});
	var contHeight = $(window).height();
	var imgHeight = $('#vert-wrapper .section .page img').height();
	
	
	$(".fancybox").fancybox({
		closeClick	: true,
		width       : 320,
		padding     : 0,
		helpers : {
    		title : {
    			type : 'outside'
    		}
    	},
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
});
(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
    allPanels.slideUp('fast');
    $('.accordion > dt > a').removeClass('open');
    if ($(this).parent().next().css('display') === 'none'){
    	$(this).parent().next().slideDown('fast');
    	$(this).addClass('open')
    	return false;
	} else {
		$(this).parent().next().slideUp('fast');
		$(this).removeClass('open');
		return false;
	}
  });

})(jQuery);


















