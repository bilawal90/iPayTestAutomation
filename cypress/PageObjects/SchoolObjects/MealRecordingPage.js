class MealRecordingPage {
  HEADING_PAGE = "//h3[normalize-space()='Meal Recording']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/MealRecording"
  URL_REPORT_PAGE = "https://test.ipayimpact.co.uk/Test/Report/MealRecordingByDay"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/MealRecordingByDay?Parameters="
  HEADING_REPORT = "//div[contains(text(),'Meal Recording By Day')]"
  HEADING_REPORT_PAGE = "//h3[normalize-space()='Meal Recording By Day']";
  BTN_SELECT = "#submit"
  VALIDATION_MEAL = "#SelectedWeek-error";
BTN_RUN_REPORT = "#btnSubmit"
BTN_BACK = "//img[@alt='Back']"
  verifyMealValidationAppearing()
{
    cy.get(this.VALIDATION_MEAL)
      .should("be.visible")
      .contains("The Week field is required.");
}
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Meal Recording");
}
verifyReportPageHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT_PAGE);
    cy.xpath(this.HEADING_REPORT_PAGE)
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
clickSelectButton()
{
  cy.get(this.BTN_SELECT).click();
}
clickRunReportButton()
{
  cy.get(this.BTN_RUN_REPORT).click();
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK).click();
}
}
export default MealRecordingPage
