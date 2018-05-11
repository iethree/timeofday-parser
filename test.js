//test script

var tp = require('./timeofday-parser.js');

function test(){
	//test code
	testvals = ["9", "9am", "9p", "926", "0926", "2126", "9:26pm", "9.26 am", "9,26", "926pm", "9.26 pm", "0926am", "926p", "9,26", "9260",  "it is currently 9:56 p.m.", "26:90", "26pm"];

	for (var cnt=0; cnt<testvals.length; cnt++){

		console.log(testvals[cnt]+" : "+JSON.stringify(tp.parse(testvals[cnt])));
	}
}

test();