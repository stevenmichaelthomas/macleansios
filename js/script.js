/* Author: 

*/



$('document').ready(function(){

	$('#YIP-start').click(function(e){
		e.preventDefault();
		$('div#container').hide();
		$('div#outerwrapper').css('visibility', 'visible');
	});
	
	
	$(".fancybox").fancybox({
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
  $('.accordion > dt > a').live('click', function() {
  	var something = $(this);
    allPanels.slideUp('fast');
    $('.accordion > dt > a').removeClass('open');
    if ($(this).parent().next().css('display') === 'none'){
    	$(this).parent().next().slideDown('fast', function(){
    		$('body').animate({scrollTop : something.offset().top}, 'fast');
    	});
    	$(this).addClass('open');	
    	
    	return false;
	} else {
		$(this).parent().next().slideUp('fast');
		$(this).removeClass('open');
		return false;
	}
	
  });

})(jQuery);


















