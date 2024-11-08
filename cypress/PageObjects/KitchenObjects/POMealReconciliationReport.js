class POMealReconciliationReport {
  HEADING_PAGE = "//h3[normalize-space()='Pre-order Meal Reconciliation']";
  HEADING_REPORT = "//div[contains(text(),'Pre-order Meal Reconciliation')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PreOrderMealReconciliation"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/PreOrderMealReconciliation?Parameters=44401%257c638495136000000000%257c638495136000000000"
  VALIDATION_ESTABLISHMENT = "//span[@id='SchoolID-error']"
  BTN_RUN_REPORT = "//input[@name='Submit']";
DROPDOWN_ESTABLISHMENT = "#SchoolID"
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Pre-order Meal Reconciliation");
}
verifyReportHeadingAndURL()
{
    //cy.url().contains(this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Pre-order Meal Reconciliation");
}
verifyValidationAppearing()
{
    cy.xpath(this.VALIDATION_ESTABLISHMENT)
      .should("be.visible")
      .contains("The Establishment field is required.");
}
selectEstablishment()
{
  cy.get(this.DROPDOWN_ESTABLISHMENT).select('SAAuto1 *REMOVE*')
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).click()
}
clickRunReport()
{
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).click()
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).click()
}
clickReturnToReportListButton()
{
  cy.xpath(this.BTN_RETURN_TO_REPORT).should("be.visible")
    cy.xpath(this.BTN_RETURN_TO_REPORT).click()
}
}
export default POMealReconciliationReport;
