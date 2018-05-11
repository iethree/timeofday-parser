//time of day parser

exports.parse = function(timeString){
	
	var h=-99, m=0;
	
	//remove all spaces
	timeString =timeString.replace(/\s/g,'');
	
	
	if(timeString.match(/[.:-]/ig)){//if it has a hour-minute separator character
		
		//digits before the symbols
		h = timeString.match(/\d+(?=[.:-_;,])/gi)[0];
		
		//digits after the symbols
		m = timeString.match(/(?<=[.:-_;,])\d+/gi)[0];
	}
	else if(timeString.match(/\d{4}/ig)){//4digit time
		
		h = timeString.match(/\d{2}/ig)[0];
		
		m = timeString.match(/\d{2}/ig)[1];
	}
	else if(timeString.match(/\d{3}/ig)){//3digit
		
		h = timeString.match(/\d/ig)[0];
		
		m = timeString.match(/\d/ig)[1]+timeString.match(/\d/ig)[2]+'';
	}
	else if(timeString.match(/\d/ig)){//1 or 2 digits
		
		h = timeString.match(/\d+/ig)[0];
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

function test(){
	//test code
	testvals = ["9", "9am", "9p", "926", "0926", "2126", "9:26pm", "9.26 am", "9,26", "926pm", "9.26 pm", "0926am", "926p", "9,26", "9260", "26:90", "26pm"];

	for (var cnt=0; cnt<testvals.length; cnt++){

		console.log(testvals[cnt]+" : "+JSON.stringify(exports.parse(testvals[cnt])));
	}
}

test();

