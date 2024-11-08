class AddAccountPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/SelectAccountsList?fundID=6763"
PAGE_HEADING = "//h2[normalize-space()='Trip Fund Test Automation Selected Accounts Paid']"
SUB_HEADING = "//div[normalize-space()='Select Accounts']"
BTN_SEARCH = "#submit"
TEXTBOX_YEAR = "//input[@placeholder='Select Year/Class']"
VALUE_YEAR = "//li[contains(text(),'N/A - N/A')]"
ACCOUNTS_RECORD = "//td[normalize-space()='Test, AccountAuto1']"
TEXTBOX_SEARCH = "//input[@aria-controls='select-accountslist-table']"
SEARCH_RESULT = "//td[@valign='top']"
PAGE_BREADCRUMB = "a[href='/Test/Fund/FundAccountsList?FundID=6763']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Trip Fund Test Automation Selected Accounts Paid");
    cy.xpath(this.SUB_HEADING).contains("Select Accounts");
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
  cy.xpath(this.SEARCH_RESULT).contains("No matching records found");
  cy.xpath(this.TEXTBOX_SEARCH).clear()
}
}
export default AddAccountPage
