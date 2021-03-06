/*藏文分句*/
  /*
     清 tag 及換行
			Tibetan Unicode
  */

var fs=require("fs");
//github.com/karmapa17/derge_kangyur/
var content=fs.readFileSync("../derge_kangyur/076/d352_001.xml","utf8");
var linebreak=/[\u0f0d\u0f0e\u0f0f ]+/g;
var syllable=/[\u0f0b\u0f0c]+/g;

var onelinepuretext=function(content) {
	return content.replace(/<.+?>/g,"").replace(/\r?\n/g,"");
}
var destructive_split=function(str){
	return str.split(linebreak);
}

var nondestructive_split=function(str){
	return str.replace(linebreak,function(m){
		return m+"~~";
	}).split("~~");
}

var tosyllable=function(str) {
	return str.replace(linebreak,"\u0f0b").split(syllable);
}

var oneline=onelinepuretext(content);

var sentences1=nondestructive_split(oneline);
var sentences2=destructive_split(oneline);
var syllables=tosyllable(oneline);

//console.log(sentences1.length);
//console.log(sentences2.length);
//console.log(syllables.length);

var out=sentences1.sort(function(a,b){return a.length-b.length}).map(function(a){return [a.length,a]});

console.log(out.join("\n"))
//practice , sort by sentence length

//find unique syllable and frequency