const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require('./utils/Logger')

class InputValidationResponsePage extends BasePage {

    constructor(driver) {
        super(driver);

        //input validation response page elements
        this.inputValidationResponsePageTitle = By.xpath("//h1");
        this.inputValidationReportTitle = By.xpath("//h2[1]");
        this.validationReport = By.xpath("//ul/li[@id='valid-input']");
        this.submissionTitle = By.xpath("//h2[2]");
        this.firstNameReport = By.xpath("//ul/li[@id='firstname']");
        this.lastNameReport = By.xpath("//ul/li[@id='surname']");
        this.ageReport = By.xpath("//ul/li[@id='age']");
        this.countryReport = By.xpath("//ul/li[@id='country']");
        this.notesReport = By.xpath("//ul/li[@id='notes']");
        this.returnToInputFormLink = By.xpath("//p/a[@id='backtoform']");
    }

    //input validation response page title getter
    async getInputValidationResponsePageTitle(){
        const pageTitle = await this.driver.findElement(this.inputValidationResponsePageTitle);
        return await pageTitle.getText();
    }
    //input validation response page report title getter
    async getInputValidationReportTitle(){
        const reportTitle = await this.driver.findElement(this.inputValidationReportTitle);
        return await reportTitle.getText();
    }

    //user input validation report getters
    async getFirstNameInputValidationReport(){
        const firstNameReport = await this.driver.findElement(this.firstNameReport);
        const text = await firstNameReport.getText();
        const finalText = text || "No text found";
        Logger.info("User first name report:", finalText);
        return finalText;
    }
    async getLastNameInputValidationReport(){
        const lastNameReport = await this.driver.findElement(this.lastNameReport);
        const text = await lastNameReport.getText();
        const finalText = text || "No text found";
        Logger.info("User last name report:", finalText);
        return finalText;
    }
    async getAgeInputValidationReport(){
        const ageReport = await this.driver.findElement(this.ageReport);
        const text = await ageReport.getText();
        const finalText = text || "No text found";
        Logger.info("User age report:", finalText);
        return finalText;

    }
    async getCountryInputValidationReport(){
        const countryReport = await this.driver.findElement(this.countryReport);
        const text = await countryReport.getText();
        const finalText = text || "No text found";
        Logger.info("User country report:", finalText);
        return finalText;
    }
    async getNotesInputValidationReport(){
        const notesReport = await this.driver.findElement(this.notesReport);
        const text = await notesReport.getText();
        const finalText = text || "No text found";
        Logger.info("User notes report:", finalText);
        return finalText;
    }


    //input validation response submission section title getter
    async getInputValidationSubmissionTitle(){
        const submissionTitle = await this.driver.findElement(this.submissionTitle);
        return await submissionTitle.getText();
    }

    //input validation response page page web element assert method
    async isInputValidationResponsePageWebElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async verifyInputValidationResponseWebElementsDisplayed() {
        const elementsToCheck = [
            this.inputValidationResponsePageTitle,
            this.inputValidationReportTitle,
            this.validationReport,
            this.submissionTitle,
            this.firstNameReport,
            this.lastNameReport,
            this.ageReport,
            this.countryReport,
            this.notesReport,
            this.returnToInputFormLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isInputValidationResponsePageWebElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }


}

module.exports = {InputValidationResponsePage};