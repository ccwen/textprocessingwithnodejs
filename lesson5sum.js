/* load a set of files, filename is given by a list file*/
var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);


var charperline=function(fn,idx) {
	var content=fs.readFileSync("data/"+fn,"utf8")
	var lines=content.split(/\r?\n/);
	return content.length/lines.length;
}

var cpl=lst.map(charperline);
var sum=0;
for (var i=0;i<cpl.length;i++) {
	sum+=cpl[i];
}

console.log(sum/lst.length)
