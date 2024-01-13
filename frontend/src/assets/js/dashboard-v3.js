
    // world map
	 	

$(function(){
    
  "use strict";


  $('#world-map').vectorMap({

    backgroundColor: 'transparent',
    borderColor: '#818181',
   borderOpacity: 0.25,
   regionStyle : {
     initial : {
       fill : '#4e4e4e'
     }
   },
 
   onRegionClick: function(event, code){
       code = code.toLowerCase();
       if(countries.indexOf(code) == -1)
           code = 'us';
       window.location = 'http://www.microstrategy.com/' + code;
   },
   series: {
       regions: [{
           values: {
               IN:'#b659ff',
               US:'#2ccc72',
               RU:'#5a52db',
               AU:'#f09c15'
           }
       }]
   }

});

})
