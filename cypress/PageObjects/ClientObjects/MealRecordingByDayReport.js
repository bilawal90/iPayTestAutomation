class MealRecordingByDayReport {
  HEADING_PAGE = "//h3[normalize-space()='Meal Recording By Day']";
  HEADING_REPORT = "//div[contains(text(),'Meal Recording By Day')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/MealRecordingByDay"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/"
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Meal Recording By Day");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Meal Recording By Day");
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
export default MealRecordingByDayReport;
