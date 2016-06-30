"use strict"


$(document).ready(function(){
   	$(".button.wave").each(function(){
   		var self = this;
   		
   		$(self).click(function(_event){

            var isWaving = $(_event.target).find('.ripper')[0];

            if( isWaving == undefined){

      			$(_event.target).append("<div class='ripper'></div>");
      			var ripper = $(_event.target).find('.ripper')[0];
      			
      			setTimeout(function(){
   			       ripper.remove();
   			   }, 6000);
               
            }
   		});
   	})
});