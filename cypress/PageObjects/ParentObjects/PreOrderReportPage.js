class PreOrderReportPage {
  HEADING_PAGE = "//h3[normalize-space()='Class Pre-order']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/ClassPreorder/Reports"
  URL_PAGE_MEAL_REPORT = "https://test.ipayimpact.co.uk/Test/ClassPreorder/DisplayReport?classCode"
  HEADING_PAGE_MEAL_REPORT = "//h3[contains(text(),'Pre-order meal report for')]";
URL_PAGE_REPORTING = "https://test.ipayimpact.co.uk/Test/SchoolPreorder/Reporting"
HEADING_REPORTING = "//h3[normalize-space()='Pre-Order Reporting']"
BTN_REPORT_NAME = "//input[@name='ByName']"
BTN_REPORT_SELECTION = "#BySelection"
VALIDATION_CLASS = "//span[@data-valmsg-for='SelectedClass']"
VALIDATION_GENERAL = "//span[normalize-space()='Please correct the errors and try again.']"
DROPDOWN_CLASS = "#SelectedClass"
TEXTFIELD_SEARCH = "input[placeholder='Search...']"
NO_SEARCH_RESULT = "//td[@class='dataTables_empty']"
FIELD_DATE = "#StartDate"
BTN_UPDATE = "#submit"
LINK_YEAR = "//a[normalize-space()='Year/Class Meal Choice']"
TEXT_NO_DATA = "(//div[@class='pt-3'])[1]"
DATA_STATS = "//div[@class='mx-auto text-primary']"
verifyStatsData()
{
  cy.xpath(this.DATA_STATS)
  .should("be.visible")
  .contains("No data available");
}
textNoData()
{
  cy.xpath(this.TEXT_NO_DATA)
  .should("be.visible")
  .contains("No data available");
}
clickYearLink()
{
  cy.xpath(this.LINK_YEAR).click();
}
clickUpdateButton()
{
  cy.get(this.BTN_UPDATE).click({force: true});
}
enterDate()
{
  cy.get(this.FIELD_DATE).clear()
  cy.get(this.FIELD_DATE).type("01/01/2024")
}
verifyNoSearchResult()
{
  cy.xpath(this.NO_SEARCH_RESULT)
  .should("be.visible")
  .contains("No matching records found");
}
enterSearchText()
{
  cy.get(this.TEXTFIELD_SEARCH).type("abc")
}
clearSearchText()
{
  cy.get(this.TEXTFIELD_SEARCH).clear()
}
selectClass()
{
  cy.get(this.DROPDOWN_CLASS).select('N/A').should('have.value', 'N/A')
}
verifyValidationMessage()
{
  cy.xpath(this.VALIDATION_CLASS)
  .should("be.visible")
  .contains("Select either Year/Class or Class.");
  cy.xpath(this.VALIDATION_GENERAL)
  .should("be.visible")
  .contains("Please correct the errors and try again.");
}
clickReportSelectionButton()
{
  cy.get(this.BTN_REPORT_SELECTION).click()
}
clickReportNameButton()
{
  cy.xpath(this.BTN_REPORT_NAME).click()
}
verifyPageHeadingAndURLOnPreOrderReporting()
{
    cy.url().should("include", this.URL_PAGE_REPORTING);
    cy.xpath(this.HEADING_REPORTING)
      .should("be.visible")
      .contains("Pre-Order Reporting");
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Class Pre-order");
}
verifyPageHeadingAndURLOnMealReport()
{
    cy.url().should("include", this.URL_PAGE_MEAL_REPORT);
    cy.xpath(this.HEADING_PAGE_MEAL_REPORT)
      .should("be.visible")
      .contains("Pre-order meal report for N/A on");
}
}
export default PreOrderReportPage
