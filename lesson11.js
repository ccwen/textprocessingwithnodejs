var fs=require("fs");
var lines=fs.readFileSync("lesson11.txt","utf8").split(/\r?\n/);
//console.log(lines.length);
var group=0;
var out=lines.map(function(line){
	if (line==="1") group++;
	return group+"-"+line;
});

//console.log(out)
fs.writeFileSync("lesson11out.txt",out.join("\n"),"utf8")