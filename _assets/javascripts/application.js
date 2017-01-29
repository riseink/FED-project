//= require vendor/jquery
//= require vendor/modernizr-2.8.3.min

var app = {

    initialize: function(){
        this.initFAQ();
        
    },

    initFAQ: function () {
		$('.faq').on('click',function(){
		
		if ($(this).hasClass('selected')){
			$(this).removeClass('selected');	
			
		}
		
		else{
			$('.faq').removeClass('selected');
			$(this).addClass('selected');	
		}

		});
		
    }


    
};

$(document).ready(function(){
    app.initialize();

    $(window).on("resize", function(){
		// RESIZE
      
    });

});

