class AccountPurchasesReport {
  HEADING_PAGE = "//h3[normalize-space()='Account Purchases']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/AccountPurchases?fundID=6767"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Report/AccountPurchaseList?"
  HEADING_REPORT = "//h3[normalize-space()='Account Purchases - AccountAuto1 Test']"
  HEADING_PAGE = "//h3[normalize-space()='Account Purchases']"
BTN_RETURN = "//a[normalize-space()='Return to Account Purchases Selection']"
BTN_SET_YEAR = "#btnYearClass"
VALIDATION_YEAR = "#SelectedYearClass-error"
TEXT_FIELD_YEAR = "#SelectedYearClass"
FIELD_YEAR = "SelectedYearClass"
BTN_RUN_REPORT = "//input[@value='Run Report']"
BTN_RETURN_REPORT = "//a[normalize-space()='Return to Reports List']"
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Account Purchases - AccountAuto1 Test");
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Account Purchases");
}
ValidateYearValidation()
{
    cy.get(this.VALIDATION_YEAR)
      .should("be.visible")
      .contains("The Select Year / Class field is required.");
}
clickBackButtonOnReport()
{
  cy.xpath(this.BTN_RETURN).should("be.visible")
    cy.xpath(this.BTN_RETURN).click()
}
selectYearDropdown() {
  cy.get(this.TEXT_FIELD_YEAR).select('N/A - N/A').should('have.value', 'N/A|N/A')
}
clickRunReport()
{
  cy.xpath(this.BTN_RUN_REPORT).click()
}
clickBackButton()
{
  cy.xpath(this.BTN_RETURN).click()
}
clickReturnReportButton()
{
  cy.xpath(this.BTN_RETURN_REPORT).click()
}
clickSetYearButton()
{
  cy.get(this.BTN_SET_YEAR).click()
}
}
export default AccountPurchasesReport
