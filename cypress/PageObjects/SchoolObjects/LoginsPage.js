class LoginsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Login/ListLogins"
PAGE_URL_CREATE_LOGIN = "https://test.ipayimpact.co.uk/Test/Login/CreateLogin"
PAGE_HEADING = "//h3[normalize-space()='Logins']"
PAGE_HEADING_CREATE_LOGIN = "//h3[normalize-space()='Create Login']"
LOGIN_RESULT = "//td[normalize-space()='SAAuto1']"
BTN_CREATE_LOGIN = "//a[normalize-space()='Create Login']"
BTN_SAVE_LOGIN = "#btnSubmit"
VALIDATION_LOGIN_TYPE = "#LoginTypeID-error"
VALIDATION_TITLE = "#Title-error"
VALIDATION_FORENAME = "#Forename-error"
VALIDATION_SURNAME = "#Surname-error"
VALIDATION_USERNAME = "#UserID-error"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Logins");
}
verifyCreateLoginPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL_CREATE_LOGIN);
    cy.xpath(this.PAGE_HEADING_CREATE_LOGIN).contains("Create Login");
}
clickCreateLoginButton()
{
  cy.xpath(this.BTN_CREATE_LOGIN).click()
}
clickSaveLoginButton()
{
  cy.get(this.BTN_SAVE_LOGIN).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
validationCreateLoginPage()
{
  cy.get(this.VALIDATION_LOGIN_TYPE).contains("The Login Type field is required.");
  cy.get(this.VALIDATION_TITLE).contains("The Title field is required.");
  cy.get(this.VALIDATION_FORENAME).contains("The Forename field is required.");
  cy.get(this.VALIDATION_SURNAME).contains("The Surname field is required.");
  cy.get(this.VALIDATION_USERNAME).contains("The Username field is required.");
}
validateLoginsList()
{
  cy.xpath(this.LOGIN_RESULT).contains("SAAuto1");
}
}
export default LoginsPage
