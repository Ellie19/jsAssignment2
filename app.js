//chapter 21-25

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("Please enter your first name", "Elma");
var lastName = prompt("Please enter your last name", "Rizwan");
var fullName = firstName + lastName;
window.alert("Good Morning " + fullName);

//2.Write a program to take user input about his favorite mobile phone model. Find and display the length of user input in your browser.

var favMobile = prompt("What's your favorite mobile phone model?", "Iphone");
var l = favMobile.length;
document.write("My favorite phone is: " + favMobile + "<br>" + "Length of String: " + l);

//3.Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var s = prompt("Please enter a string", "Rizwan");
var n = s.indexOf("n");
document.write("String : " + s + "<br> INDEX OF 'n': " + n);

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

var s = prompt("Please enter a string", "Hello World");
var n = s.lastIndexOf("l");
document.write("String : " + s + "<br> LAST INDEX OF 'n': " + n);

//5.Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var s = prompt("Please enter a string", "Pakistani");
var n = s[3];
document.write("String : " + s + "<br> Character at index 3 is : " + n);

//6.Repeat Q1 using string concat() method.

var firstName = prompt("Please enter your first name", "Elma");
var lastName = prompt("Please enter your last name", "Rizwan");
var fullName = firstName.concat(lastName);
window.alert("Good Morning " + fullName);

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = prompt("Please enter city name", "Hyderabad");
var res = city.replace("Hyder", "Islam");
document.write("City : " + city + "<br> After replacement :" + res);

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.


var message = prompt("Enter Message", "Ali and Sami are best friends.They play cricket and football together");
message = message.split("and").join(" & ");
document.write(message);

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var s = "472";
var n = parseInt(s);
var t1 = typeof(s);
var t2 = typeof(n);
document.write("Value : " + s + "<br> Type: " + t1 + "<br> Value: " + n + "<br> Type: " + t2);

//10.Write a program that takes user input. Convert and show the input in capital letters.

var message = prompt("Enter String ", "peaNuts");
var message2 = message.toUpperCase();
document.write("User Input: " + message + "<br>  UpperCase: " + message2);


//11.Write a program that takes user input. Convert and show the input in title case.

var message = prompt("Enter String ", "javascript");
var m1 = message.slice(0, 1);
m1 = m1.toUpperCase();
var m2 = message.slice(1);
m2 = m2.toLowerCase();

var Message = m1.concat(m2);
document.write("User Input: " + message + " <br> Title Case: " + Message);


//12.Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var num = 33.78;
var s = num.toString();
var s = s.replace(".", "");
document.write("Number: " + num + "<br> Result: " + s);

//13.Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.

var userName = prompt("Enter User Name", "Elm@");
if (userName == "")
    promt("This place can't be empty plz enter");
for (var i = 0; i < userName.length; i++) {
    if (userName[i] == "!" || userName[i] == "." || userName[i] == "$" || userName[i] == "@")
        prompt("ENTER A VALID USERNAME!");
}

//14.You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var s = prompt("Welcome to elma bakery! /n What do you want to order sir/ma'am? ", "apple Pie");
s = s.toLocaleLowerCase();
var t = 0;
for (var i = 0; i < a.length; i++) {
    if (s == a[i]) {
        alert(s + " is available at index " + i + " in our bakery ");
        t = 1;
    }
}
if (t == 0)
    alert("We are sorry. " + s + " is not available in our bakery.");



//15.Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.


var p = prompt("Enter Password: ");
if (p.length < 6)
    var p = prompt("password must at least 6 characters long ");

if (0 <= p[0] && p[0] <= 9)
    var p = prompt("password should not start with a number ")

var t = 0;
for (var i = 0; i < p.length; i++) {
    if (("a" <= p[i] && p[i] <= "z") || ("A" <= p[i] && p[i] <= "Z") || ("0" <= p[i] && p[i] <= "9")) {
        t = 1;
    }
}
if (t === 0)
    document.write(" It should contain alphabets and numbers only");
if (t === 1)
    document.write("VALID PASSWORD");

//16.Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var uni = prompt("ENTER STRING: ");
var uni = uni.split("");
for (var i = 0; i < uni.length; i++)
    document.write(uni[i] + "<br>");

//17. Write a program to display the last character of a user input.

var a = prompt("ENTER A STRING: ");
a = a.split("");
a = a.reverse();
var b = a[0];
document.write(b);

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var a = prompt("ENTER STRING", "the quick brown fox jumps over the lazy dog");
var b = a.split("the");
document.write(b.length - 1);

//CHAPTER 26-30

//1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number


var n = prompt("ENTER A POSITIVE INTEGER: ");
var a = Math.round(n);
var b = Math.ceil(n);
var c = Math.floor(a);
document.write("NUMBER: " + n + "<br> ROUND OFF VALUE: " + a + "<br> FLOOR VALUE: " + c + "<br> CEIL VALUE: " + b);


//2.Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

var n = prompt("ENTER A NEGATIVE FLOATING POINT: ");
var a = Math.round(n);
var b = Math.ceil(n);
var c = Math.floor(a);
document.write("NUMBER: " + n + "<br> ROUND OFF VALUE: " + a + "<br> FLOOR VALUE: " + c + "<br> CEIL VALUE: " + b);

//3.Write a program that displays the absolute value of a number.

var n = prompt("ENTER A NUMBER: ");
var a = Math.abs(n);
document.write("THE ABSOLUTE VALUE OF " + n + " IS " + a);

//4.Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

var n = Math.floor(Math.random() * 6) + 1;
document.write("RANDOM DICE VALUE : " + n);
var n = Math.floor(Math.random() * 6) + 1;
document.write("<br> RANDOM DICE VALUE : " + n);



//5.Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser


var n = Math.floor(Math.random() * 2) + 1;
if (n == 1)
    document.write("RANDOM COIN VALUE: TAILS");
else document.write("RANDOM COIN VALUE: HEADS");


//6.Write a program that shows a random number between 1 and 100 in your browser.

var n = Math.floor(Math.random() * 100) + 1;
document.write("RANDOM NUMBER BETWEEN 1 AND 100 : " + n);

//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms


var a = prompt("ENTER YOUR WEIGHT IN KILOGRAMS: ", "50kg");
var b = parseInt(a);
document.write("THE WEIGHT OF THE USER IS: " + b + " KiloGrams");

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var s = 9;
var a = +prompt("ENTER A NUMBER BETWEEN 1 TO 10", 6);
if (s === a)
    document.write("Wohoo! You're RIGHT..");
else
    document.write("Oops! TRY AGAIN");


//CHAPTER 31-34

//1. Write a program that displays current date and time in your browser.

var rightNow = new Date();
document.write(rightNow);

//2. Write a program that alerts the current month in words.For example December.


var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = d.getMonth();
document.write("Current Month: " + monthNames[n]);

//3.Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
var n = d.getDay();
document.write("Today is " + dayNames[n]);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
var n = d.getDay();
if (n == 0 || n == 6)
    document.write("It's FUN day! ");
else document.write("Boring Day Again!");

//5.Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var d = new Date();
var n = d.getDate();
if (n < 16)
    document.write("First fifteen days of the month!");
else document.write("Last days of the month");

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object

var d = new Date();
var n = d.getTime();
document.write("Current Date: " + d);
document.write("<br> Elapsed milliseconds since Jan 1,1970: " + n);
var m = n / 60000;
document.write("<br>  Elapsed minutes since Jan 1,1970: " + m);
var b = m / 525600;
document.write("<br>   Elapsed years since Jan 1,1970 :   " + b);


//7.Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.


var d = new Date();
var n = d.getHours();
if (n <= 12)
    document.write("It's AM");
else
    document.write("It's PM");

//8.Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date(new Date().getFullYear(), 11, 31);
document.write("Later Date: " + laterDate);


//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

var date1 = new Date();
var time1 = date1.getTime();
var date2 = new Date("04/24/2020 ");
var time2 = date2.getTime();
var DiffTime = time1 - time2;
var DiffInDays = Math.round(DiffTime / (1000 * 3600 * 24));
document.write("Difference in Time : " + DiffTime);
document.write("<br>" + DiffInDays + " Days Have Passed Since 1st Ramadan,2020");

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2020.

var date1 = new Date();
var time1 = date1.getTime();
var date2 = new Date("01/01/2020 ");
var time2 = date2.getTime();
var DiffTime = time1 - time2;
var diff_in_sec = DiffTime / 1000;
var diff_in_days = diff_in_sec / 86400;
document.write("ON REFERENCE DATE " + date1 + " , <br>" + diff_in_sec + " seconds had passed since beginning of 2020");
document.write("<br> AND " + diff_in_days + " Days had passed!");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var d = new Date();
document.write("Current date: " + d + "<br>");
var a = d.getHours();
a = a + 1;
d.setHours(a);
document.write("An hour after it would be " + d);

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var d = new Date();
document.write("Current date: " + d + "<br>");
var a = d.getFullYear();
a = a - 100;
d.setFullYear(a);
document.write("100 years back it was " + d);
window.alert("100 years back it was " + d);


//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var a = +prompt("ENTER YOUR AGE: ", "21");
var d = new Date();
var y = d.getFullYear();
y = y - a;
document.write("YOUR BIRTH YEARS IS : " + y);



//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.

document.write("<h1>K-Electric Bill</h1>");
var n = prompt("ENTER CUSTOMER NAME", "ELMA");
var units = +prompt("ENTER NUMBER OF UNITS", "410");
var ch = +prompt("ENTER CHARGES PER UNIT ", "16");
var late = 350;
var net = units * ch;
var d = new Date();
var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = d.getMonth();
document.write("Customer Name: " + n + "<br>");
document.write("Month: " + monthNames[m] + "<br>");
document.write("Number of units: " + units + "<br>");
document.write("Charges per unit: " + ch + "<br>");
document.write("Net Amount Payable (within Due Date) :" + net + "<br>");
document.write("Late Payment Surcharge : " + late + "<br>");
document.write("Gross Amount Payable (after Due Date): " + (net + late));


//CHAPTER 35-38

//1. Write a function that displays current date & time in your browser.

function datetime() {
    var d = new Date();
    document.write(d);
}
datetime();

//2. Write a function that takes first & last name and then it greets the user using his full name.

var firstName = prompt("Please enter your first name", "Elma");
var lastName = prompt("Please enter your last name", "Rizwan");
var fullName = firstName.concat(lastName);

function greet(fullname) {

    window.alert("Good Morning " + fullName);
}
greet();

//3.Write a function that adds two numbers (input by user) and returns the sum of two numbers.


function sum(x, y) {
    var z = (x + y);
    return z;
}
var a = +prompt("Enter 1st Number: ", "3");
var b = +prompt("Enter 2nd Number: ", "5");
var c = sum(a, b);
document.write("SUM OF " + a + " & " + b + " is : " + c);


//4.Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser

function calculator(num1, num2, op) {
    if (op == "*")
        return (num1 * num2);
    if (op == "/")
        return (num1 / num2);
    if (op == "-")
        return (num1 - num2);
    if (op == "+")
        return (num1 + num2);
}

var a = +prompt("ENTER 1ST NUMBER: ", "7");
var b = +prompt("ENTER 2ND NUMBER: ", "4");
var c = prompt("ENTER OPERATION TO BE APPLIED:", "*");
var result = calculator(a, b, c);
document.write(a + c + b + "=" + result);


//5. Write a function that squares its argument.

var a = +prompt("ENTER A NUMBER TO BE SQUARED: ", "7");
var b = sq(a);
document.write("SQUARE OF " + a + " IS : " + b);

function sq(num) {
    return (num * num);
}


//6.Write a function that computes factorial of a number.

var a = +prompt("ENTER A NUMBER : ", "5");
var b = factorial(a);
document.write("FACTORIAL OF " + a + " IS :" + b);

function factorial(n) {
    var ans = 1;

    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

//7. Write a function that take start and end number as inputs & display counting in your browser.


var a = +prompt("ENTER 1ST NUMBER: ", "4");
var b = +prompt("ENTER 2ND NUMBER: ", "9");
counting(a, b);

function counting(a, b) {

    for (var i = a; i <= b; i++) {
        document.write(i + "<br>");
    }
}

//8. Write a nested function that computes hypotenuse of a right angle triangle.

var b = +prompt("ENTER BASE: ", "4");
var a = +prompt("ENTER PERPENDICULAR: ", "9");
var result = calculateHypotenuse(a, b);
document.write(result);

function calculateHypotenuse(x, y) {
    var perp2 = calculateSquare(x);
    var base2 = calculateSquare(y);
    var hyp2 = (perp2 + base2);
    var hyp = Math.sqrt(hyp2);
    return hyp.toFixed(2);

}

function calculateSquare(num) {
    return (num * num);
}


//9. Write a function that calculates the area of a rectangle.

var height = +prompt("ENTER HEIGHT: ", "2");

var result = area(3, height);
document.write(result);

function area(num, x) {

    return (num * x);
}


//10.Write a JavaScript function that checks whether a passed string is palindrome or not?


var word = prompt("ENTER A WORD ");
palindrome(word);

function palindrome(word) {
    var check = "";
    for (var i = word.length - 1; i >= 0; i--) {
        check += word[i];
    }
    if (word === check) {
        document.write("WORD IS PALINDROME.");

    }
}


//11.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

var s = prompt("ENTER STRING: ", "pakistan zindabad");
var s1 = titleCase(s);
document.write("STRING : " + s + "<br>");
document.write("OUTPUT : " + s1);

function titleCase(string) {
    return (string[0].toUpperCase() + string.slice(1));
}


//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.


var a = prompt("ENTER STRING", "Software Engineering is the best");
var b = longestWord(a);
document.write(b);

function longestWord(string) {
    var strSplit = string.split(" ");
    var longest = 0;
    var word = " ";
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longest) { // If strSplit[i].length is greater than the word it is compared with...
            longest = strSplit[i].length;
            word = strSplit[i]; // ...then longestWord takes this new value
        }
    }
    return word;
}



//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.


var a = prompt("ENTER STRING", "the quick brown fox jumps over the lazy dog");
var x = prompt("WORD TO BE COUNTED", "o")
occurrences(a, x);

function occurrences(string, char) {
    var b = string.split(char);
    document.write(b.length - 1);

}

//14.Create 2 functions that calculate properties of a circle, using the definitions here.area,circumference

var r = +prompt("ENTER RADIUS: ", "2");
var circumference = calcCircumference(r);
var area = calcArea(r);
document.write("RADIUS : " + r +
    "<br>THE CIRCUMFERENCE IS : " + circumference + "<br>THE RADIUS IS: " + area);

function calcCircumference(num) {
    return ((2 * 3.14 * num).toFixed(2));
}


function calcArea(num) {
    return ((3.14 * num * num).toFixed(2));
}