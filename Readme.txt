Javascript learn:

node.js: to execute the javascript file or also Deno.js 
visual code or jetbrains fleet
upload your code on git hub 
console.table([]) 
// check meaning of deprecated // prefix and postfix js mdn  ++a or a++ 
let x = 3;
const y = x++;
Ans: x is 4; y is 3

let x2 = 3n;
const y2 = x2++;

Ans: x2 is 4n; y2 is 3n




let x = 3;
const y = ++x;

Ans: x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;

Ans: x2 is 4n; y2 is 4n



prefer not to use var in js2 becuse of functional scope and block scope
when declare but not get value ; this is undefined in js 
"use strict" : to get the code of js in new version
pretterier for the code readability
Primitive datatype:
null : standalone value 
symbol is a dataype whose value is unique
Non Primitive datatype: 
object 
typeof (undefined) => ans is undefined
typeof (null) => ans is object 
Conversion of one datatype to another : i.e, in number ; let no = Number(score);
"33" =>33
"33abc" => NaN
true => 1
false=> 0 
in boolean 
1=> true
0=> false
"name" => true
"" => false

1.Operations

power in js : (2 ** 3) 
if string is first then conversion acc to string: ("1"+2+2) => 122
if last then first conv give ans  (1+2+ "2") => 32 
console.log(+true); => 1
console.log(+""); => 0

2. Comparisons

 return true bcz js convert it 
(null > 0) => false  
(null >=0) => true
the reason is that an equality check == and comparison >< >=<= work differently 
Comparison convert null to a number; treating it as 0 
so, (null >=0) => true
In js ("2" > 1) =>
(undefined == 0) => false


=== strict check also check the dataType


3. dataType
primitive(on basis of acess)(call by value) (it is dynamic type) 	
String ,Number , Boolean , null , undefined , Symbol (for unique ), BigInt
nonprimitive (call by  reference) 
array, object , function 

// statical type or dynamic type 

const  id = Symbol ("123")
const oId = Symbol ("123)
id === oId => false
for BigInt apply n in last of a no => const a = 9090n;
  
4. Memory

stack( copy ) ie primitive 
heap (reference) ie non-primitive 

5. String

let animal = new String("lion");
Key value pair => animal[3] => n
console.log(`hello ${name}`)
The substring() method swaps its two arguments if indexStart is greater than indexEnd,
 meaning that a string is still returned.
 The slice() method returns an empty string if this is the case.

If either or both of the arguments are negative or NaN, the substring() method treats 
them as if they were 0.


6. Number

no.toString();
.toPrecision(1); => means to precise  to the extent of digits 
.toFixed(); => after decimal the value exists
.LocaleString('en-In)

7 Maths

.abs()
Math.floor((Math.random()*10)+1) => no between 1 to 10 
Math.floor (Math.random()*(max-min +1) + min ) => no between min and max 

8 Date
const dat = new Date();
dat.
dat.toString();
 const time = Date.now();

 9 Array 
 mix dataType
 make shallow copy 
 to insert data in arr : arr.push( 45) and for come out use arr.pop()
 arr.unshift(2) and arr.shift() push and pop from the front
 arr.join () => convert arr into string
 slice not manipualte original arr
 splice manipualte original arr
 arr push another make it an object 
 arr.concat() => take the individual ele
 spread operator: => work as concat
 let ans = [...arr1 , ...arr2]
 if one array is in another array then make it 
 onearray.flat(Infinity)
 Array.isArray("Neha") => check
 Array.from("Neha") => make an array
 Array,of(no1,no2,no3)