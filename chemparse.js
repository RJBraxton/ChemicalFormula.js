var a = 9;

var chemparse = function(string){
	var words = string.split(',');
	var parsed = [];
	for (var i=0;i<words.length;i++) //For each chemical and sub/superset
		{
			for (var j=0;j < words[i].length;j++) //Go through every character in the string
			{
				if (isNaN(parseInt(words[i].charAt(j))) == false) //If it's a number
				{
					if (j == words[i].length-1){ //If the number is the last one
						parsed[i] = words[i].slice(0,j) + words[i].slice(j).sub();
					}
					else {
					for(var k = j+1;k < words[i].length; k++){ //For the remaining characters
						if(words[i].charAt(k) == '+' || words[i].charAt(k) == '-')
							{
								parsed[i] = words[i].slice(0,j) + words[i].slice(j, k).sub() + words[i].slice(k).sup();
								break;
							}
							else if (k == words[i].length-1) {
								parsed[i] = words[i].slice(0,j) + words[i].slice(j).sub();
							}
					}
				}
					break;
				}
				else { //If it's not a number
					//Do nothing here. It's a non-integer.
				}


			}
		};
	$(".p").html(parsed);
};