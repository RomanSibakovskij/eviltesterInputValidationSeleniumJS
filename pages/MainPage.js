const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator');
const Logger = require('./utils/Logger')

class MainPage extends BasePage {

    constructor(driver) {
        super(driver);
        this.testDataGenerator = new TestDataGenerator(driver);

        //main page elements
        this.inputFormTitle = By.xpath("//h2");
        this.inputFormDescription = By.xpath("//div[@class='page-body']/p");
        this.firstNameInputField = By.xpath("//input[@id='firstname']");
        this.lastNameInputField  = By.xpath("//input[@id='surname']");
        this.ageInputField = By.xpath("//input[@id='age']");
        this.countryDropdownMenu = By.xpath("//select[@id='country']");
        this.usCountryOption = By.xpath("//option[@value='United States of America']");
        this.notesInputField = By.xpath("//textarea[@id='notes']");
        this.submitButton = By.xpath("//input[@type='submit']");

        //error elements
        this.firstNameErrorMessage = By.xpath("//label[@class='errormessage'][1]");
        this.lastNameErrorMessage = By.xpath("//label[@class='errormessage'][2]");

    }

    //valid first name input method
    async inputValidUserFirstName(){
        const {firstName} = this.testDataGenerator.getRandomName();
        const firstNameInputField = await this.driver.findElement(this.firstNameInputField);
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }

    //valid last name input method
    async inputValidUserLastName(){
        const {lastName} = this.testDataGenerator.getRandomName();
        const lastNameInputField = await this.driver.findElement(this.lastNameInputField);
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }

    //valid age input method
    async inputValidUserAge(){
        const ageInputField = await this.driver.findElement(this.ageInputField);
        const validAge= this.testDataGenerator.getRandomAge();
        Logger.info("Valid user age: ", validAge);
        ageInputField.sendKeys(validAge);
    }

    //valid note input method
    async inputValidUserNote(){
        const notesInputField = await this.driver.findElement(this.notesInputField);
        const validNote= this.testDataGenerator.getRandomNote();
        Logger.info("Valid user note(s): ", validNote);
        notesInputField.sendKeys(validNote);
    }


    //invalid input data methods

    //no singular input
    //no first name input
    async inputNoUserFirstName(){
        const firstNameInputField = await this.driver.findElement(this.firstNameInputField);
        const noFirstName = "";
        Logger.info("No user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    //no last name input
    async inputNoUserLastName(){
        const lastNameInputField = await this.driver.findElement(this.lastNameInputField);
        const noLastName = "";
        Logger.info("No user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    //no age
    async inputNoUserAge(){
        const ageInputField = await this.driver.findElement(this.ageInputField);
        const noAge= "";
        Logger.info("No user age: ", noAge);
        ageInputField.sendKeys(noAge);
    }

    //too short singular input
    //too short first name (2 chars)
    async inputTooShortUserFirstName(){
        const firstNameInputField = await this.driver.findElement(this.firstNameInputField);
        const tooShortFirstName = "Tk";
        Logger.info("Too short user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    //too short last name (10 chars)
    async inputTooShortUserLastName(){
        const lastNameInputField = await this.driver.findElement(this.lastNameInputField);
        const tooShortLastName = "Dffdsddesr";
        Logger.info("Too short user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }

    //too long singular input
    //too long first name (90 chars)
    async inputTooLongUserFirstName(){
        const firstNameInputField = await this.driver.findElement(this.firstNameInputField);
        const tooLongFirstName = "Dffdsddesrxasadsadssfdhghgsdfdsasgfujyyryytiukjkjnvcsasqweweteyttsdsdsfsdfdgdfdfdsdsdyudfi";
        Logger.info("Too short user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    //too long last name (80 chars)
    async inputTooLongUserLastName(){
        const lastNameInputField = await this.driver.findElement(this.lastNameInputField);
        const tooLongLastName = "Dffdsddesrxasadsadssfdhghgsdfdsasgfujyyryytiukjkjnvcsasqweweteyttsdsdsfsdfdgdfdf";
        Logger.info("Too long user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }

    //invalid singular input
    //invalid first name (numbers instead of string)
    async inputInvalidUserFirstName(){
        const firstNameInputField = await this.driver.findElement(this.firstNameInputField);
        const invalidFirstName = "2132453475689";
        Logger.info("Invalid user first name: ", invalidFirstName);
        await firstNameInputField.sendKeys(invalidFirstName);
    }
    //invalid last name (numbers instead of string)
    async inputInvalidUserLastName(){
        const lastNameInputField = await this.driver.findElement(this.lastNameInputField);
        const invalidLastName = "123458769453231";
        Logger.info("Invalid user last name: ", invalidLastName);
        await lastNameInputField.sendKeys(invalidLastName);
    }
    //invalid age input (strings instead of numbers)
    async inputInvalidUserAge(){
        const ageInputField = await this.driver.findElement(this.ageInputField);
        const invalidAge= "ef";
        Logger.info("Invalid user age: ", invalidAge);
        ageInputField.sendKeys(invalidAge);
    }
    //invalid (too young) age input (17)
    async inputTooYoungUserAge(){
        const ageInputField = await this.driver.findElement(this.ageInputField);
        const tooYoungAge= 17;
        Logger.info("Too young user age: ", tooYoungAge);
        ageInputField.sendKeys(tooYoungAge);
    }
    //invalid (too old) age input (81)
    async inputTooOldUserAge(){
        const ageInputField = await this.driver.findElement(this.ageInputField);
        const tooOldAge= 81;
        Logger.info("Too old user age: ", tooOldAge);
        ageInputField.sendKeys(tooOldAge);
    }

    //input form title getter
    async getInputFormTitle(){
        const inputFormTitle = await this.driver.findElement(this.inputFormTitle);
        return await inputFormTitle.getText();
    }

    //click country dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this.countryDropdownMenu);
        await countryDropdownMenu.click();
    }
    //Select 'United States option method
    async selectUSOption(){
        const usOption = await this.driver.findElement(this.usCountryOption);
        await usOption.click();
    }

    //click 'Submit' button method
    async clickSubmitButton(){
        const submitButton = await this.driver.findElement(this.submitButton);
        await submitButton.click();
    }

    //input form description getter
    async getInputFormDescription(){
        const inputFormDescription = await this.driver.findElement(this.inputFormDescription);
        return await inputFormDescription.getText();
    }

    //error message getters
    async getFirstNameInputErrorMessage(){
        const inputErrorMessage = await this.driver.findElement(this.firstNameErrorMessage);
        return await inputErrorMessage.getText();
    }
    async getLastNameInputErrorMessage(){
        const inputErrorMessage = await this.driver.findElement(this.lastNameErrorMessage);
        return await inputErrorMessage.getText();
    }


    //main page web element assert method
    async isMainPageWebElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //main page web element assert function
    async verifyMainPageWebElementsDisplayed() {
        const elementsToCheck = [
            this.inputFormTitle,
            this.inputFormDescription,
            this.firstNameInputField,
            this.lastNameInputField,
            this.ageInputField,
            this.countryDropdownMenu,
            this.notesInputField,
            this.submitButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isMainPageWebElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }
}

module.exports = {MainPage};