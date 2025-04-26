# eviltesterInputValidationSeleniumJS

Simple Selenium test suite on basic input form validation. The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 
 1.Node.js

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

 //positive input test

1. //Test 001 -> valid input form data test

 //negative input tests

1.//Test 001a -> invalid input form data test - no first name

2.//Test 001b -> invalid input form data test - no last name

3.//Test 001c -> invalid input form data test - no user age

 //too short singular input tests

1.//Test 001d -> invalid input form data test - too short first name

2.//Test 001e -> invalid input form data test - too short last name

  //too long singular inputs

1. //Test 001f -> invalid input form data test - too long first name
   
3. //Test 001g -> invalid input form data test - too long last name

  //invalid singular input

 1. //Test 001h -> invalid input form data test - invalid first name (number instead of string)
 2. //Test 001i -> invalid input form data test - invalid last name (number instead of string)
 3. //Test 001j -> invalid input form data test - invalid user age (string instead of number)
 4. //Test 001k -> invalid input form data test - invalid user age - too young (17)
 5. //Test 001l -> invalid input form data test - invalid user age - too old (81)
 
