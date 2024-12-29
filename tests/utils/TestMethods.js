const fs = require('fs');
const path = require('path');
const { MainPage } = require('../../pages/MainPage');
const {InputValidationResponsePage} = require('../../pages/InputValidationResponsePage');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');


class TestMethods{

    constructor(driver) {this.driver = driver;}

    //main page valid input form test method
    async validDataInputTest(){
        const mainPage = new MainPage(this.driver);
        const inputValidationResponsePage = new InputValidationResponsePage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Valid User Input Data");
        //assert the user got on the correct page
        await testMethods.isInputValidationResponsePageTitleMatchExpectations();
        //input validation response page web assert
        await inputValidationResponsePage.verifyInputValidationResponseWebElementsDisplayed();
        //log the displayed data
        await testMethods.logInputValidationResponseReport();
        //capture the final test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Input Data Validation Response Test");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //no singular input test methods

    //invalid input form submission test method - no first name
    async invalidDataInputNoFirstNameTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //don't input first name
        await mainPage.inputNoUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - No First Name");
    }
    //invalid input form submission test method - no last name
    async invalidDataInputNoLastNameTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //don't input last name
        await mainPage.inputNoUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - No Last Name");
    }
    //invalid input form submission test method - no user age
    async invalidDataInputNoAgeTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //don't input age
        await mainPage.inputNoUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - No User Age");
    }

    // too short singular input test methods

    //invalid input form submission test method - too short first name (2 chars)
    async invalidDataInputTooShortFirstNameTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input too short first name
        await mainPage.inputTooShortUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //wait until the error message is located and visible
        const errorMessage = await mainPage.getFirstNameInputErrorMessage();
        //assert the expected error message gets displayed
        assert.strictEqual(errorMessage, "Firstname provided is too short", "The error message doesn't match expectations");
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Too Short First Name");
    }
    //invalid input form submission test method - too short last name (10 chars)
    async invalidDataInputTooShortLastNameTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input too short last name
        await mainPage.inputTooShortUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //wait until the error message is located and visible
        const errorMessage = await mainPage.getLastNameInputErrorMessage();
        //assert the expected error message gets displayed
        assert.strictEqual(errorMessage, "Surname provided is too short", "The error message doesn't match expectations");
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Too Short Last Name");
    }

    //too long singular input test methods

    //invalid input form submission test method - too long first name (90 chars)
    async invalidDataInputTooLongFirstNameTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input too long first name
        await mainPage.inputTooLongUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //wait until the error message is located and visible
        const errorMessage = await mainPage.getFirstNameInputErrorMessage();
        //assert the expected error message gets displayed
        assert.strictEqual(errorMessage, "Firstname provided is too long", "The error message doesn't match expectations");
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Too Long First Name");
    }
    //invalid input form submission test method - too long last name (80 chars)
    async invalidDataInputTooLongLastNameTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input too long last name
        await mainPage.inputTooLongUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //wait until the error message is located and visible
        const errorMessage = await mainPage.getLastNameInputErrorMessage();
        //assert the expected error message gets displayed
        assert.strictEqual(errorMessage, "Surname provided is too long", "The error message doesn't match expectations");
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Too Long Last Name");
    }

    //invalid singular input test methods (mismatched input formats)

    //invalid input form submission test method - invalid first name (number instead of string)
    async invalidDataInputInvalidFirstNameTest(){
        const mainPage = new MainPage(this.driver);
        const inputValidationResponsePage = new InputValidationResponsePage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input invalid first name
        await mainPage.inputInvalidUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Invalid First Name (number instead of string)");
        //assert the user got on the correct page
        await testMethods.isInputValidationResponsePageTitleMatchExpectations();
        //input validation response page web assert
        await inputValidationResponsePage.verifyInputValidationResponseWebElementsDisplayed();
        //log the displayed data
        await testMethods.logInputValidationResponseReport();
        //capture the final test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Validation Response Test - Invalid First Name (number instead of string)");
    }
    //invalid input form submission test method - invalid last name (number instead of string)
    async invalidDataInputInvalidLastNameTest(){
        const mainPage = new MainPage(this.driver);
        const inputValidationResponsePage = new InputValidationResponsePage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input invalid last name
        await mainPage.inputInvalidUserLastName();
        //input valid age
        await mainPage.inputValidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Invalid Last Name (number instead of string)");
        //assert the user got on the correct page
        await testMethods.isInputValidationResponsePageTitleMatchExpectations();
        //input validation response page web assert
        await inputValidationResponsePage.verifyInputValidationResponseWebElementsDisplayed();
        //log the displayed data
        await testMethods.logInputValidationResponseReport();
        //capture the final test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Validation Response Test - Invalid Last Name (number instead of string)");
    }
    //invalid input form submission test method - invalid user age (string instead of number)
    async invalidDataInputInvalidAgeTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input invalid age
        await mainPage.inputInvalidUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Invalid User Age (string instead of number)");
    }
    //invalid input form submission test method - too young user age (17)
    async invalidDataInputTooYoungAgeTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input too young age
        await mainPage.inputTooYoungUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Too Young User Age");
    }
    //invalid input form submission test method - too old user age (81)
    async invalidDataInputTooOldAgeTest(){
        const mainPage = new MainPage(this.driver);
        const testMethods = new TestMethods(this.driver);
        //main page web element assert
        await mainPage.verifyMainPageWebElementsDisplayed();
        //main page text element assert
        await testMethods.isMainPageTextMatchExpectations()
        //input valid first name
        await mainPage.inputValidUserFirstName();
        //input valid last name
        await mainPage.inputValidUserLastName();
        //input too old age
        await mainPage.inputTooOldUserAge();
        //click country dropdown menu
        await mainPage.clickCountryDropdownMenu();
        //select 'United States' option
        await mainPage.selectUSOption();
        //input valid note
        await mainPage.inputValidUserNote();
        //click 'Submit' button
        await mainPage.clickSubmitButton()
        //screenshot valid user data input
        await TestMethods.captureScreenshot(this.driver, "Invalid User Input Data Test - Too Old User Age");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //input validation response report logger
    async logInputValidationResponseReport(){
        const inputValidationResponseReportPage = new InputValidationResponsePage(this.driver);
        console.log("Input validation response report: " + "\n");
        await inputValidationResponseReportPage.getFirstNameInputValidationReport();
        await inputValidationResponseReportPage.getLastNameInputValidationReport();
        await inputValidationResponseReportPage.getAgeInputValidationReport();
        await inputValidationResponseReportPage.getCountryInputValidationReport();
        await inputValidationResponseReportPage.getNotesInputValidationReport();
        console.log("\n")
    }

    //main page text element assert test method
    async isMainPageTextMatchExpectations() {
        const mainPage = new MainPage(this.driver);
        const inputFormTitle = await mainPage.getInputFormTitle();
        const inputFormDescription = await mainPage.getInputFormDescription();
        //assert input form title matches expectations
        assert.strictEqual(inputFormTitle, "The Input Form", "Input form title doesn't match expectations");
        //assert input form description matches expectations
        assert.strictEqual(inputFormDescription, "The information will be submitted to the server if it passes client side validation.", "Input form description doesn't match expectations");
    }

    //input validation response page text assert test method
    async isInputValidationResponsePageTitleMatchExpectations() {
        const inputValidationResponsePage = new InputValidationResponsePage(this.driver);
        const pageTitle = await inputValidationResponsePage.getInputValidationResponsePageTitle();
        const reportTitle = await inputValidationResponsePage.getInputValidationReportTitle();
        const submissionTitle = await inputValidationResponsePage.getInputValidationSubmissionTitle();
        //assert input validation response page title matches expectations
        assert.strictEqual(pageTitle, "Input Validation Response", "The input validation response page title doesn't match expectations");
        //assert input validation response page validation report title matches expectations
        assert.strictEqual(reportTitle, "Validation Report", "The input validation response page validation report title doesn't match expectations");
        //assert input validation response page submission section title matches expectations
        assert.strictEqual(submissionTitle, "You submitted", "The input validation response page submission section title doesn't match expectations");

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //logger method
    static log(label, value) {
        console.log(`${label}: ${value}`);
    }

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, { recursive: true });
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }
}

module.exports = TestMethods;