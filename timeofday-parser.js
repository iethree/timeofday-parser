//time of day parser

exports.parse = function(timeString){
	
	var h=-99, m=0;
	
	//remove all spaces
	timeString =timeString.replace(/\s/g,'');
	
	
	if(timeString.match(/[.:-_;,]/g)){//if it has a hour-minute separator character
		
		//digits before the symbols
		h = timeString.match(/\d+(?=[.:-_;,])/g)[0];
		
		//digits after the symbols
		m = timeString.match(/(?<=[.:-_;,])\d+/g)[0];
	}
	else if(timeString.match(/\d{4}/g)){//4digit time
		
		h = timeString.match(/\d{2}/g)[0];
		
		m = timeString.match(/\d{2}/g)[1];
	}
	else if(timeString.match(/\d{3}/g)){//3digit
		
		h = timeString.match(/\d/g)[0];
		
		m = timeString.match(/\d/g)[1]+timeString.match(/\d/ig)[2]+'';
	}
	else if(timeString.match(/\d/g)){//1 or 2 digits
		
		h = timeString.match(/\d+/g)[0];
	}
	
	//convert strings to number
	h = Number(h);
	m = Number(m);
	
	//handle pm, ignore am
	if(timeString.match(/p/ig))
		h+=12;	

	// return if time is range
	if(h>0 && h<23 && m>-1 && m<60)
		return({h:h, m:m});
	else
		return false;

}





