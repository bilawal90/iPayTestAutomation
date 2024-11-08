class MealNumbersYearsReport {
  HEADING_PAGE = "//h3[normalize-space()='Pre-order Meal Numbers by Year Report']";
  HEADING_REPORT = "//div[contains(text(),'Pre-order Meal Numbers (Selected Years)')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PreorderMealNumbersYearReport"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/PreorderMealNumbersYearReport?Parameters="
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
CHECKBOX_YEARS = "//input[@name='Years']"
LINK_DASHBOARD = "//b[normalize-space()='Click here to check it out?']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Pre-order Meal Numbers by Year Report");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Pre-order Meal Numbers (Selected Years)");
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
clickYearsCheckbox()
{
  cy.xpath(this.CHECKBOX_YEARS).should("be.visible")
    cy.xpath(this.CHECKBOX_YEARS).click()
}
clickPreOrderDashboardLink()
{
  cy.xpath(this.LINK_DASHBOARD).click()
}
}
export default MealNumbersYearsReport;
