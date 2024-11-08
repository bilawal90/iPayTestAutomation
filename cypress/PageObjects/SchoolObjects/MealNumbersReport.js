class MealNumbersReport {
  HEADING_PAGE = "//h3[normalize-space()='Pre-order Meal Numbers Report']";
  HEADING_REPORT = "//div[contains(text(),'Pre-order Meal Numbers')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PreorderMealNumbersReport?fundID=6480"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/PreorderMealNumbersReport?Parameters="
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
LINK_DASHBOARD = "//b[normalize-space()='Click here to check it out?']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Pre-order Meal Numbers Report");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Pre-order Meal Numbers");
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
clickPreOrderDashboardLink()
{
  cy.xpath(this.LINK_DASHBOARD).click()
}
}
export default MealNumbersReport;
