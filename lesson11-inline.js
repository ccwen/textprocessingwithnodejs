var fs=require("fs");
var lines=fs.readFileSync("lesson11-inline.txt","utf8")
					.split(/\r?\n/);

var group=0;
var out=lines.map(function(line){
	return line.replace(/~(\d+)~/g,function(m,m1){
		if (m1==="1") group++;
		return '<note n="'+group+"-"+m1+'"/>';
	})
});

//console.log(out)
fs.writeFileSync("lesson11-inlineout.txt",out.join("\n"),"utf8")