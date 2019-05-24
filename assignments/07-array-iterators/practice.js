// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//
var reverse = function (a) {
	
	console.log(a.reverse())
};
reverse([1,2,3,4])

// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.
//
var flatten = function (a) {
	
	var s=a.reduce(function(c,d){
		return c+","+d;
	});
	console.log(s)
};
flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ])

// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
//
var sumOfMultiplesOf3And5 = function (n) {
	var i;
	var s=0;
	
	for(i=0;i<=n;i++)
		if((i%3==0)||(i%5==0))
			s=s+i;
		
		
		console.log(s)

};
sumOfMultiplesOf3And5(50)

// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//
var atLeastOneVowel = function (a) {
	vowels=["a","e","i","o","u","A","E","I","O","U"]
	var c=a.split("")
	
	var check=c.some(function(a){
		if(vowels.indexOf(a)!=-1)
		{
			console.log(check)
		}

	});

	
};
atLeastOneVowel("bindu")

// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//
var longestAwesomeTweet = function (a) {
	var s=a.reduce(function(s1,s2){
		c=0;
		array=[];
		if((s1.indexOf("awesome")!=-1)&&(s2.indexOf("awesome")!=-1)){
		if(s1<s2){
			s1=s2;
		}
		c++;
		if(c!=0)
		{
			return s;
		}
		else
		{
			return array;
		}
		

	}
});
	console.log(s)

};
logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ])

// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
var elementsToContent = function (a) {
	var r=[];
	
	for(var i=0;i<a.length;i++){
		var b=a[i].indexOf(">")
	    var c=a[i].lastIndexOf("<")
		if(a[i].slice(1,b)==a[i].slice(c+2,-1)){

			r.push(a[i].slice(b+1,c))
		}
	}

		console.log(r)
		
	
	
};
elementsToContent(["<p>this is a paragraph</p>","<li>list item</li>","<div>hai</div>"])

// In a previous section, we created a function called `randUpTo` that
// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
var randomArray = function (a,b) {
	var r=[];
	for(var i=0;i<a;i++){
	r.push(Math.floor(Math.random()*b))
	
	}

console.log(r)

};
randomArray(10,100)
// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
var randomElements = function (array,n) {
	var r=[];
	for(var i=0;i<n;i++){
	r.push(array[Math.floor([Math.random()]*n)])
}
console.log(r)
};
randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5)