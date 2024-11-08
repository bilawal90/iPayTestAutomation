class MealRecordingByWeekReport {
  HEADING_PAGE = "//h3[normalize-space()='Meal Recording By Week']";
  HEADING_REPORT = "//div[contains(text(),'Meal Recording By Week')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/MealRecordingByWeek"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/"
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Meal Recording By Week");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Meal Recording By Week");
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
}
export default MealRecordingByWeekReport;
