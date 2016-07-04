"use strict"


$(document).ready(function(){

   	$(".button.waves-effect").each(function(){
   
   		var self = this;

         var downElapsedTime = 0;
         var startTime;
         var endTime;

        
   		$(self).mousedown(function(_event){

            var isWaving = $(_event.target).find('.waves-ripple')[0];

              if( isWaving == undefined){
                  startTime = new Date();
                
         			$(_event.target).append("<div class='waves-ripple'></div>");
         			var ripple = $(_event.currentTarget).find('.waves-ripple')[0];
         			$(ripple).css({"left":_event.offsetX, "top":_event.offsetY});
                  $(ripple).addClass('big');
               }

           // else{
           //    _event.preventDefault();
           // }
   		});

         //다운을 오래 하고 있을 경우 
         $(self).mouseup(function(_event){
           
            endTime = new Date();
            
            var elapsedTime = (endTime - startTime);

            var ripple = $(_event.currentTarget).find('.waves-ripple')[0];
             
            if(elapsedTime < 200){
               console.log(200 - elapsedTime);
               $(ripple).delay(200 - elapsedTime).remove();
            }

            else {
               $(ripple).remove();
            }
           
         });


         $(self).mouseout(function(_event){
            var ripple = $(_event.currentTarget).find('.waves-ripple')[0];
            $(ripple).remove();
         })




   	})
});

