/*查跳號*/

var fs=require("fs");
var missnum=fs.readFileSync("missnum.txt","utf8").split(/\r?\n/);

var last=0;

for (var i=0;i<missnum.length;i++) {
	var n=parseInt(missnum[i]);
	if (n-last>1) {
		console.log("miss num",last+1);
	}
	last=n;
}