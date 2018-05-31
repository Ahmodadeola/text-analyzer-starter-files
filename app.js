function countWords(){
var words = $("textarea").val();
words = words.trim().split(" ").length;
return words; 
}

function countUniqueWords(){
var words = $("textarea").val();
words = words.trim().toLowerCase().split(" ").sort();
var unique = [ ];
	for (var i = 0; i < words.length; i++){
	var last = unique.length - 1;
		if(words[i]  !== unique[last]){
			unique.push(words[i]);
		}
	}
	return unique.length;
}

function averageWordLength(){
var words = $("textarea").val();
var charLength = words.trim().split(" ");
charLength = charLength.join().split("").filter(function(x) {
return x !== ",";
});
charLength = charLength.length;
return (charLength/countWords()).toFixed(2);
}

	
$(function () {
$("body").css("background-color", "indigo");

$("form").submit(function(event) {
event.preventDefault();
$("dl").removeClass("hidden");
$("dd").eq(0).text(countWords());
$("dd").eq(1).text(countUniqueWords());
$("dd").eq(2).text(averageWordLength() + " characters");
});
});