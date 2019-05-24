

// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function (a) {
	var a="e";
		if((a.length==1)&&((a=='a')||(a=='A')||(a=='e')||(a=='E')||(a=='o')||(a=='O')||(a=='u')||(a=='U')||(a=='i')||(a=="I")))
			console.log("true")
	    else
	    	console.log("false")
	};
	isVowel()


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (l) {
	var l="s";
	if((l.length==1)&&(97<=l<=122))
		console.log("true")
	else
		console.log("false")
};
isLowerCaseLetter()


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (s) {
	var c=0;
	if(s>=0)
	{
	for(var i=0;i<=s;i++)
	{

		c=c+i;
	}
	
		console.log(c);

	}
	else
		console.log("input must be 0 or positive")

	
	
};
sumUpTo(10)


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a,b) 
{
	var s=0;
	if((typeof a=="number")&&(typeof b=="number")){
		if(a<b){
			for(var i=a;i<=b;i++)
				s=s+i;

			console.log(Math.abs(s))}
		else{
			
		for(var i=a;i>=b;i--)
				s=s+i;
		
			console.log(Math.abs(s))}
		}
		
	else
		console.log("invalid input")

	
	
	
};
sumAToB(10,20)
sumAToB(20,10)


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (v) {
	var v="bindusrii";
	if(typeof v==="string")
	{
	var n=v.split("");
	var c=0;
	
	for(var i=0;i<=n.length;i++)
	{
		if(n[i]=='a'||n[i]=='A'||n[i]=='e'||n[i]=='E'||n[i]=='i'||n[i]=='I'||n[i]=='o'||n[i]=='O'||n[i]=='u'||n[i]=='U')
			c=c+1;
	}
		console.log(c)
	}
	else
		console.log("input must be string")	

	
};
countVowels()
//
// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function (a) 
{
	
	var b=a.split("")
	var c=b.reverse().join("")
	console.log(c)
};
reverseString("bindu")


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (b)
 {
 	var i;
 	var c=0;
 	if((b>1)&&(typeof b=="number")){
 		for(i=1;i<=b;i++)
 		{
 			if(b%i==0)
 			{
 				c=c+1
 			}
 		}
 			if(c==2)
 				console.log("true")
 			else
 				console.log("false")
 		}
 		else
 			console.log("false")
 	
};
isPrime(6)


// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function (r) {
	
	var s=0
	if(typeof r=="number")
	{
		
		
		for(var i=1;i<=r;i++)

		{
			var c=0;
			for(var j=1;j<=i;j++){
			if(i%j==0)
			{
			
				c=c+1;
			}
		}
	
		if(c==2)
			s=s+i;}
	
	console.log(s)}
	else
		console.log("input should be a number")

	
};
sumPrimesUpTo(100)


// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (a) {
	var s=0;
	var b=2;
	var c;
	var count=0;
	if(a>=0){
		while(1){
			c=0;
		for(var i=1;i<=b;i++)
		{ 
			if(b%i==0)
			{
				c=c+1;
			}}
			if(c==2){
				s=s+b;
				count++;
			}
		
		if(count==a)
			break;
		b++;
	}
		console.log(s)
	}
	else
		console.log("input must be a positive number")
};
sumOfFirstNPrimes(10)


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
var removeNonLetters = function (a)
 {
 	var b=a.replace(/[^A-Za-z]/g,"");
 	console.log(b)
};
removeNonLetters("A man, a plan, a canal, Panama")



// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function (a) {
	var i;
	var b=a.split("")
    var c=b.reverse().join("")
    if(a==c)
    	console.log("palindrome")
    else
    	console.log("not  palindrome")
};
isPalindrome("mom")
	
	