// Q1 
var num1 = 3
var num2 = 5
var result = num1 + num2 
document.write("sum of 3 and 5 is \n" + result) 

// Q2 
//  Subtraction
var num1 = 3 
var num2 = 5
var result = num1-num2 
document.write("<br/> Subtraction of 3 and 5 is \n" + result)
//  Mutiplication
var num1 = 3
var num2 = 5
var result = num1*num2
document.write("<br/> Multiplication of 3 and 5 is \n" + result)
// Division
var num1 = 3
var num2 = 5
var result = num1/num2
document.write("<br/> Division of 3 and 5 is \n" + result)
// Modulus
var num1 = 3
var num2 = 5
var result = num1%num2
document.write("<br/> Modulus of 3 and 5 is \n" + result)
// Q3
var num1 = 5
document.write(" <br/> <br/>Value after variable declaration is : " + num1)
document.write(" <br/>Initial value is : " + num1)
++num1;
document.write("<br/> Value after increment is : " + num1)
var num2 = num1 + 7
document.write(" <br/> Value after addition is : " + num2)
--num2;
document.write(" <br/> Value after decrement is : " + num2)
document.write("<br/> The remainder is : " +num2%3 ) 
// Q4
var ticketPrice = 600
var totalTicket = 5
var currency = "PKR"
var priceOf5Ticket = ticketPrice*totalTicket + currency
document.write("<br/> <br/>Total cost to buy 5 tickets to a movie is \n" + priceOf5Ticket )
// Q5

document.write("<br/> <br/>Table of 4")
var num1 = 4
var num2 = 1 
var num3 = 2 
var num4 = 3 
var num5 = 4 
var num6 = 5 
var num7 = 6 
var num8 = 7 
var num9 = 8 
var num10 = 9 
var num11 = 10
var result = num1 * num2
document.write(" <br/> 4x1=" +result)
var result = num1 * num3
document.write("<br/> 4x2=" + result)
var result = num1 * num4
document.write("<br/> 4x3=" + result)
var result = num1 * num5
document.write("<br/> 4x4=" + result)
var result = num1 * num6
document.write("<br/> 4x5=" + result)
var result = num1 * num7
document.write("<br/> 4x6=" + result)
var result = num1 * num8
document.write("<br/> 4x7=" + result)
var result = num1 * num9
document.write("<br/> 4x8=" + result)
var result = num1 * num10
document.write("<br/> 4x9=" + result)
var result = num1 * num11
document.write("<br/> 4x10=" + result)
// Q6
var C = 30
var F = 9/5 * C + 32
document.write("<br/> <br/> 30°C is " + F + " °F")
var F = 86
var C = F - 32 * 5/9
document.write("<br/>  86°F is " + C + "°C")

// Q7
document.write("<br/> <br/>Shopping Cart")
var item1 = 850
var item2 = 1150
var quatity1 = 4
var quatity2 = 6
var shipping = 499
var cost = item1*quatity1 + item2*quatity2 + shipping
document.write("<br/><br/> Price of item 1 is  " + item1)
document.write("<br/> Quantity of item 1 is  " + quatity1)
document.write("<br/> Price of item 2 is  " + item2)
document.write("<br/> Quantity of item 2 is " + quatity2)
document.write("<br/> Shipping charges is " + shipping)
document.write("<br/> Total cost of your order is " + cost)

// Q8
document.write("<br/> <br/>Marks Sheet")

var obtainedMarks = 514
var totalMarks = 550 

document.write("<br/><br/>Total marks: " + totalMarks )
document.write("<br/>Marks Obtained: " + obtainedMarks)
document.write("<br/>Percentage: " + obtainedMarks/totalMarks*100 + "%")

// Q9
document.write(" <br/> <br/>Currency in PKR")
document.write("<br/><br/> Currency in PKR<br/><br/><br/> Total currency in PKR:" + 289*25 )

// Q10
var num1 = 6
document.write("<br/> <br/> Arithmetic Operations: <br/>" + (num1 + 5 ) + "<br/>" + 11*10 + "<br/>"+ 110/2 )

// Q11
document.write(" <br/><br/>Age Calculator")
var currentYear=2024
var birthYear= 2005
document.write("<br/><br/> Current Year :" + currentYear)
document.write("<br/>Birth Year : " + birthYear)
document.write("<br/>Your age is " + (currentYear-birthYear))

// Q12
document.write("<br/> <br/>The Geometrizer")

var radius = 30
var circum = 2*3.142*radius
var area = 3.142*radius*radius
document.write("<br/><br/> The Radius of a circle: " + radius)
document.write("<br/> The Circumference is: " + circum)
document.write("<br/> The Area is: " + area)

// Q13
document.write("<br/> <br/>The Lifetime Supply Calculator")
var favouriteSnack = "Lays"
var currentAge = 18
var maximumAge = 80
var amountOfSnack = 3
var need = (maximumAge - currentAge)*amountOfSnack
document.write("<br/><br/>Favourite Snack: \n" +favouriteSnack)
document.write("<br/> Current age:" +currentAge)
document.write("<br/>Estimated Maximum Age:" +maximumAge)
document.write("<br/>Amount of snacks per day: "+amountOfSnack)

document.write("<br/> You will need " + need + " to last you until the ripe old age of " + maximumAge)






 