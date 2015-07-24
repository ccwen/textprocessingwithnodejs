/*查跳號*/

var fs=require("fs");
var missnum=fs.readFileSync("missnum1.txt","utf8").split(/\r?\n/);

var lastn1=0,lastn2=0;

for (var i=0;i<missnum.length;i++) {
	var s=missnum[i].split(".");
	var n1=parseInt(s[0]), n2=parseInt(s[1]);
	if (n1-lastn1>0)	lastn2=0;

	if (n2-lastn2>1) {
		//少了第二組 () 會如何？
		console.log("miss num",lastn1+"."+(lastn2+1));
	}
	lastn2=n2;
	lastn1=n1;

}