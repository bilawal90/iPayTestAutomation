class AccountsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/SchoolAccounts/SchoolAccountList"
PAGE_URL_CREATE_ACCOUNT = "https://test.ipayimpact.co.uk/Test/SchoolAccounts/CreateAccount"
PAGE_HEADING = "//h3[normalize-space()='Accounts']"
PAGE_HEADING_CREATE_ACCOUNT = "//h3[normalize-space()='Create Account']"
SUB_HEADING = "//div[normalize-space()='Select Accounts']"
BTN_SEARCH = "#submit"
TEXTBOX_YEAR = "//input[@placeholder='Select Year/Class']"
VALUE_YEAR = "//li[contains(text(),'N/A - N/A')]"
ACCOUNTS_RECORD = "//td[normalize-space()='Test, AccountAuto1']"
SEARCH_RESULT = "//td[@valign='top']"
PAGE_BREADCRUMB = "a[href='/Test/Fund/FundAccountsList?FundID=6763']"
DROPDOWN_YEAR = "#year-class-chooser"
TEXTBOX_SEARCH = "//input[@placeholder='Search...']"
BTN_CREATE_ACCOUNT = "//a[normalize-space()='Create Account']"
BTN_SAVE_ACCOUNTS = "#btnSubmit"
VALIDATION_FORENAME = "#Initials-error"
VALIDATION_SURNAME = "#Surname-error"
VALIDATION_DOB = "#BirthDate-error"
VALIDATION_YEAR = "#YearClass-error"
VALIDATION_ACCOUNT_TYPE = "#AccountTypeID-error"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
selectYearDropdownValues() {
  //cy.get(this.DROPDOWN_FUND_TYPE).click();
  cy.get(this.DROPDOWN_YEAR).select('yearclass').should('have.value', 'yearclass')
  cy.get(this.DROPDOWN_YEAR).select('Class').should('have.value', 'class')
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Accounts");
}
verifyValidationMessages()
{
  cy.get(this.VALIDATION_FORENAME).contains("The Forename field is required.");
  cy.get(this.VALIDATION_SURNAME).contains("The Surname field is required.");
  cy.get(this.VALIDATION_DOB).contains("The Date of Birth field is required.");
  cy.get(this.VALIDATION_YEAR).contains("The Year and Class field is required.");
  cy.get(this.VALIDATION_ACCOUNT_TYPE).contains("The Account Type field is required.");
}
verifyCreateAccountPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL_CREATE_ACCOUNT);
    cy.xpath(this.PAGE_HEADING_CREATE_ACCOUNT).contains("Create Account");
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
clickSaveAccountButton()
{
  cy.get(this.BTN_SAVE_ACCOUNTS).click()
}
clickCreateAccountButton()
{
  cy.xpath(this.BTN_CREATE_ACCOUNT).click()
}
clickPageBreadcrumb()
{
  cy.get(this.PAGE_BREADCRUMB).click()
}
clickSearchButton()
{
  cy.get(this.BTN_SEARCH).click()
}
clickYearTextBox()
{
  cy.xpath(this.TEXTBOX_YEAR).click()
}
clickYearValue()
{
  cy.wait(150)
  cy.xpath(this.VALUE_YEAR).click()
}
ValidateRecordAppearing()
{
cy.wait(150)
 cy.xpath(this.ACCOUNTS_RECORD).contains("Test, AccountAuto1");
}
ValidateSearchWorking()
{
  cy.xpath(this.TEXTBOX_SEARCH).type("abc")
  cy.xpath(this.SEARCH_RESULT).contains("No data available in table");
  cy.xpath(this.TEXTBOX_SEARCH).clear()
}
}
export default AccountsPage
