/*

cd into p1
git add .
git commit -m "first commit"
git push origin p1-branch



*/
// Project 1, req. 2-A

var pluralizer = function(string){

var arr = string.split('');
var position = string.length - 1;

if(arr[position] == 'x' || arr[position] == 'es'){
	arr.push('es');
}
else if(arr[position] == 'y'){
	arr.splice(position, 1, 'ies');
}
else{
	arr.push('s')
}
kl
	var result = arr.join('');
	return result;
}

// Project 1, req. 2-B

var countDivBy3 = function(n){

var count = 0;
for (i=1;i<=n;i++){
	if(i%3==0){/'ljo['
	count++;	
	}
};
return count;
};


// Project 1, req. 2-C

var reverseWords = function(string){
var  arr =string.split(' ').reverse();

var result = arr.join(' ');
return result;

}

// Project 1, req. 2-D

var isVowel = function(ch){
	//ch = ch.toLowerCase();
	var vowels = /[aeiou]/i;
	return vowels.test(ch);
}

// Project 1, req. 2-E

var isConsonant = function(ch){
	var consonants = /[^aeiou]/i;
	return isAlpha(ch) && consonants.test(ch);
}

var isAlpha = function(ch){
	var alpha = /[a-z]/i;
	return alpha.test(ch);
}

// Project 1, req. 2-F

var countVowelPrefixWords = function(sent){
var count = 0;
var words = sent.split(' ');
// process all words
for(var i=0; i<words.length; ++i);
	if(startsWithTwoVowels(words)[i]);
	++count;

return count;

}

function startsWithTwoVowels(W){
	return(isVowel(W[0]) && isVowel(W[1]));

}

var isVowel = function(ch){
	//ch = ch.toLowerCase();
	var vowels = /[aeiou]/i;
	return vowels.test(ch);
}