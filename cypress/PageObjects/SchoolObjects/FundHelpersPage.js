class FundHelpersPage {
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundHelpers?fundID=6763"
URL_PAGE_HELPER = "https://test.ipayimpact.co.uk/Test/Fund/FundHelperDetails?helperID=0&fundID=6763"
HEADING_PAGE = "//h3[normalize-space()='Helpers']"
HELPER_HEADING_PAGE = "//h3[contains(text(),'Adding Helper')]"
BTN_ADD_NEW_HELPER = "//a[normalize-space()='Add New Helper']"
VALIDATION_HELPER_NAME = "#Name-error"
BTN_SAVE_HELPER = "//input[@id='btnSubmit']"
BTN_RETURN_FUND = "//a[normalize-space()='Return to Fund']"
verifyHelperNameValidationMessage()
{
  cy.get(this.VALIDATION_HELPER_NAME)
  .should("be.visible")
  .contains("The Helper Name field is required.")
}
clickReturnToFundButton()
{
  cy.xpath(this.BTN_RETURN_FUND).click()
}
clickSaveHelperButton()
{
  cy.xpath(this.BTN_SAVE_HELPER).click()
}
clickAddNewHelperButton()
{
  cy.xpath(this.BTN_ADD_NEW_HELPER).click()
}
verifyPageHeadingAndURL()
{
  cy.url().should("eq", this.URL_PAGE)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Helpers")
}
verifyHelperPageHeadingAndURL()
{
  cy.url().should("eq", this.URL_PAGE_HELPER)
  cy.xpath(this.HELPER_HEADING_PAGE)
    .should("be.visible")
    .contains("Adding Helper - Trip Fund Test Automation Selected Accounts Paid")
}
}
export default FundHelpersPage
