var princess = {
	"tt1": [
	{
		"damage" : ["100.50","80.4", "110.8"],
		"wins" : "",
		"battles" : "",
		"hit" : ["", ""],
		"time" : [""],
		"ko" : [""],
		"deaths" : [""]
	}],
	"tt2" : [
	{
		"damage" : [],
		"wins" : "",
		"battles" : "",
		"hit" : ["", ""],
		"time" : [""],
		"ko" : [""],
		"deaths" : [""]	
    }]};

var arr= ["100.50","80.4", "110.8"]
var n   = arr.length;
var sum = 0;
while(n--)
   sum += parseFloat(arr[n]) || 0;