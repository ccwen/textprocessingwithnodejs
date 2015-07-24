var miss1=0,miss2=0;
for (var i=1;i<100;i++){
	max=Math.floor(Math.random()*1000);

	if (Math.random()<0.01 && i<99) {
		miss1++;
	}

	for (var j=1;j<max;j++) {
		if (Math.random()<0.001 && j<max-1) {
			miss2++
			continue;
		}
		else console.log(i+"."+j);
	}
}
console.log("miss1",miss1,"miss2",miss2)