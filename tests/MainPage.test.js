const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Input Form Validation Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function() {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //positive input test
    describe('Positive Test', () => {
        //Test 001 -> valid input form data test
        test('Valid Input Form Data Test', async function () {
            await testMethods.validDataInputTest();
        });
    });

    //negative input tests
    describe('Negative Input Form Validation Tests', () => {

        describe('No Singular Input Data Validation Tests', () => {
            //no singular input
            //Test 001a -> invalid input form data test - no first name
            test('Invalid Input Form Data Test - No First Name', async function () {
                await testMethods.invalidDataInputNoFirstNameTest();
            });

            //Test 001b -> invalid input form data test - no last name (input data gets submitted)
            test('Invalid Input Form Data Test - No Last Name', async function () {
                await testMethods.invalidDataInputNoLastNameTest();
            });

            //Test 001c -> invalid input form data test - no user age
            test('Invalid Input Form Data Test - No User Age', async function () {
                await testMethods.invalidDataInputNoAgeTest();
            });

        });

        //too short singular input
        describe('Too Short Singular Input Data Validation Tests', () => {


            //Test 001d -> invalid input form data test - too short first name
            test('Invalid Input Form Data Test - Too Short First Name', async function () {
                await testMethods.invalidDataInputTooShortFirstNameTest();
            });

            //Test 001e -> invalid input form data test - too short last name
            test('Invalid Input Form Data Test - Too Short Last Name', async function () {
                await testMethods.invalidDataInputTooShortLastNameTest();
            });

        });

        //too long singular input
        describe('Too Long Input Data Validation Tests', () => {

            //Test 001f -> invalid input form data test - too long first name
            test('Invalid Input Form Data Test - Too Long First Name', async function () {
                await testMethods.invalidDataInputTooLongFirstNameTest();
            });

            //Test 001g -> invalid input form data test - too long last name
            test('Invalid Input Form Data Test - Too Long Last Name', async function () {
                await testMethods.invalidDataInputTooLongLastNameTest();
            });

        });

        //invalid singular input
        describe('Invalid Singular Input Data Validation Tests', () => {

            //Test 001h -> invalid input form data test - invalid first name (number instead of string) (input form gets submitted)
            test('Invalid Input Form Data Test - Invalid First Name', async function () {
                await testMethods.invalidDataInputInvalidFirstNameTest();
            });

            //Test 001i -> invalid input form data test - invalid last name (number instead of string) (input form gets submitted)
            test('Invalid Input Form Data Test - Invalid Last Name', async function () {
                await testMethods.invalidDataInputInvalidLastNameTest();
            });

            //Test 001j -> invalid input form data test - invalid user age (string instead of number) ('e' gets input instead of 'ef' but the test itself has passed)
            test('Invalid Input Form Data Test - Invalid User Age', async function () {
                await testMethods.invalidDataInputInvalidAgeTest();
            });

            //Test 001k -> invalid input form data test - invalid user age - too young (17)
            test('Invalid Input Form Data Test - Too Young User Age', async function () {
                await testMethods.invalidDataInputTooYoungAgeTest();
            });

            //Test 001l -> invalid input form data test - invalid user age - too old (81)
            test('Invalid Input Form Data Test - Too Old User Age', async function () {
                await testMethods.invalidDataInputTooOldAgeTest();
            });

        });

    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });
});
