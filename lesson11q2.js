var randomtext=function() {
	var count=Math.round(Math.random()*10)+2;
	var out="";
	for (var i=0;i<count;i++) {
		var code=Math.round(Math.random()*20000);
		out+=String.fromCharCode(code+0x4e00);
	}
	return out;
}

for (var i=1;i<5;i++) {
	var out=[],s="";
	var count=Math.round(Math.random()*100)+10;
	for (var j=1;j<count;j++) {
		s+=(randomtext()+"~"+j+"~"+randomtext()+"。");
		if (s.length % 8==0) s+="\n";
	}
	out.push(s);
	for (var j=1;j<count;j++) {
		out.push("~"+j+"~"+randomtext());
	}

	require("fs").writeFileSync("lesson11-"+i+".txt",out.join("\n"),"utf8");
}

