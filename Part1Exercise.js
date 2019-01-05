//https://github.com/ChrisHuie/JavaScriptMiniBootcamp/tree/master/1-foundations-of-programming

function number1Answer(){
  console.log('\nQuestion 1: \n Enter the following expressions into your console.')
  let x = 1+2
  let y = 3*5
  let a = 5/4-13
  let b = 5000*234
  let c = 1073/57+200
  console.log(x + ", "+y + ", "+a + ", "+b + ", "+c) 
  
}

function number2Answer(){
console.log('\nQuestion 2: \n Why are the values produced by the following two expressions different? What are they?')
let x =  3 + 2 * 4 - 1
let y = (3 + 2) * (4 - 1)
console.log(x + ", "+y)
}

function number3Answer(){
  console.log('\nQuestion 3: \n Calculate how old you are in minutes using the console.')

  let minutes = 60
  let hours = 24
  let days = 365
  let age = 31
  let answer = minutes * hours * days * age
return answer
}

function number4Answer(){
  console.log("\nQuestion 4: \n What is the percentage of people in the class with brown hair? Use the console to find out.")
  //Calculate percentage of brown hair to population and isolate it based on the number of people in the room.
  console.log('25 percent of the world is brunette.  Enter the amount of people in your room and get the result.')
  /*
  Can't pull input correctly T_T
  let population = require('readline')
  */
  let population = 30
  let brownHair = population * 0.25
  console.log('There are '+brownHair+' brown haired people in your room if ther are '+population+' there.')
}

function number5Answer(){
  console.log('\nQuestion 5: \nTry the following expressions in the console:')
  let x = 6%2
  let y = 42%10
  let a = 5%2
  let b = 6%3
  let c = 7%4
  let d = 100%12
  console.log(x + ", " + y + ", " + a + ", " + b + ", " + c + ", " + d) 
  console.log('What is the significance of the result? How does the % (modulus) operator work?')
}

function number6Answer(){
  console.log('\nQuestion 6: \nTry the following:')
  let a = 3%2
  let b = 4%2
  let c = 5%2
  let d = 6%2
  console.log(a + ", " + b + ", " + c + ", " + d)
  console.log('What do the results tell you about the first operand to the modulus operator?')
}

function string1Answer(){
  console.log('\nQuestion 1: \nWrite a string that represents your full name.')

  let firstName = 'Chris'
  let lastName = 'Stephen'
  console.log('My name is '+firstName+' '+lastName+'.')
}

function string2Answer(){
  console.log('\nQuestion 2:\nWrite a string that represents your favorite food')
  let arrayType = ['an Apple', 'a Banana', 'some Chocolate']
  let arrayTopping = ['Peanut Butter', 'Cinnamin', 'Fruit']
  let type = arrayType[Math.floor(Math.random()*arrayType.length)]
  let topping = arrayTopping[Math.floor(Math.random()*arrayTopping.length)]
  console.log(topping+ ' on top of '+type)
}

function string3Answer(){
  console.log('\nQuestion3: \nUse the + operator to combine (known as concatenation) two or more strings, e.g.:')
  let firstName = 'Chris '
  let lastName = 'Stephen.'
  let openingStatement = 'My name is '

  console.log(openingStatement+firstName+lastName)
}

function string4Answer(){
  console.log("\nQuestion 4:\nWhere are all the quotes?\n'hmm something is not right'\n'Do other ' * 'operators work with string concatenation?")
}

number1Answer()
number2Answer()
number3Answer()
number4Answer()
number5Answer()
number6Answer()
string1Answer()
string2Answer()
string3Answer()
string4Answer()