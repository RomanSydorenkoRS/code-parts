function get_timer(string) {
	var date_new = string;
	var date_t = new Date(date_new);
	var date = new Date();	
	var timer = date_t - date;		
	if(date_t > date) {		
		var day = parseInt(timer/(60*60*1000*24));		
		if(day < 10) {			
			day = "0" + day;		
		}		
		day = day.toString();		
		var hour = parseInt(timer/(60*60*1000))%24;		
		if(hour < 10) {			
			hour = "0" + hour;		
		}		
		hour = hour.toString();		
		var min = parseInt(timer/(1000*60))%60;		
		if(min < 10) {			
			min = "0" + min;		
		}		
		min = min.toString();		
		var sec = parseInt(timer/1000)%60;		
		if(sec < 10) {			
			sec = "0" + sec;		
		}		
		sec = sec.toString(); 		
		timethis = day + " : " + hour + " : " + min + " : " + sec;		
		$(".result-day").text(day);		
		$(".result-hour").text(hour);		
		$(".result-minute").text(min);		
		$(".result-second").text(sec);	
	}	
	else {		
		$(".result-day").text("0");		
		$(".result-hour").text("0");		
		$(".result-minute").text("0");		
		$(".result-second").text("0");	
	}	 
}
function getfrominputs(){	
	string = '08/02/2018 17:24';; 	
	get_timer(string);	
	setInterval(function(){get_timer(string);},1000);
}
getfrominputs();