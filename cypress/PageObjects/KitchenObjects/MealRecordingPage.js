class MealRecordingPage {
  HEADING_PAGE = "//h3[normalize-space()='Meal Recording']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/MealRecording"
  URL_PAGE_MEAL_RECORDING = "https://test.ipayimpact.co.uk/Test/MealRecording/MealRecording?s"
  HEADING_PAGE_MEAL_RECORDING = "//h3[contains(text(),'Meal Recording')]";
  URL_PAGE_BY_DAY = "https://test.ipayimpact.co.uk/Test/Report/MealRecordingByDay"
  HEADING_BY_DAY = "//h3[normalize-space()='Meal Recording By Day']"
  URL_REPORT_BY_DAY = "https://test.ipayimpact.co.uk/Test/Reports/MealRecordingByDay?Parameters="
  HEADING_REPORT_BY_DAY = "//div[contains(text(),'Meal Recording By Day')]"
  BTN_SELECT = "#submit"
  VALIDATION_MEAL = "#SelectedWeek-error";
BTN_RUN_REPORT = "#btnSubmit"
BTN_BACK = "//img[@alt='Back']"
DROPDOWN_WEEK = "#SelectedWeek"
DROPDOWN_YEAR = "#SelectedYearClass"
NO_MENU_VALIDATION = "//div[@class='text-danger']"
BTN_SAVE = "(//input[@name='submitBtn'])[1]"
MESSAGE_SUCCESS = ".text-success"
clickSaveButton()
{
  cy.xpath(this.BTN_SAVE).click();
}
clickBackButton()
{
  cy.xpath(this.BTN_BACK).click();
}
verifySuccessMessage()
{
    cy.get(this.MESSAGE_SUCCESS)
      .should("be.visible")
      .contains("Successfully updated meal recordings");
}
selectYear()
{
  cy.get(this.DROPDOWN_YEAR).select(1)
}
selectWeek()
{
  cy.get(this.DROPDOWN_WEEK).select(1)
}
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
verifyPageHeadingAndURLByDay()
{
    cy.url().should("include", this.URL_PAGE_BY_DAY);
    cy.xpath(this.HEADING_BY_DAY)
      .should("be.visible")
      .contains("Meal Recording By Day");
}
verifyReportHeadingAndURLByDay()
{
    cy.url().should("include", this.URL_REPORT_BY_DAY);
    cy.xpath(this.HEADING_REPORT_BY_DAY)
      .should("be.visible")
      .contains("Meal Recording By Day");
}
verifyPageHeadingAndURLOnMealRecording()
{
    cy.url().should("include", this.URL_PAGE_MEAL_RECORDING);
    cy.xpath(this.HEADING_PAGE_MEAL_RECORDING)
      .should("be.visible")
      .contains("Meal Recording - Year/Class:");
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
