class PreOrderReportingPage {
  HEADING_PAGE = "//h3[normalize-space()='Pre-Order Reporting']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/SchoolPreorder/Reporting"
  STATS_SECTION_HEADING = "//html/body/div[2]/div/div/div/div[5]/div[2]/h4"
  PreOrderData_SECTION_HEADING = "//html/body/div[2]/div/div/div/div[6]/div[2]/h4"
  MEAL_NUMBERS_SECTION = "div[id='data-meal-numbers-content'] div"
  NON_MEAL_NUMBER_SECTION = "//a[normalize-space()='Non-Meal Numbers']"
  TOTALS_SECTION = "//a[normalize-space()='Totals']"
  CLASS_SECTION = "//a[normalize-space()='Year/Class Meal Choice']"
  CLASS_DATA = "table[id='year-class-meal-choice-table'] tr td div";
  TITLE_ABSENCE = "//span[normalize-space()='Absence']"
TITLE_TOTALS = "//div[contains(text(),'Meal Take Up')]";
verifyMealNumbersData()
{
    cy.get(this.MEAL_NUMBERS_SECTION)
      .should("be.visible")
      .contains("No data available");
}
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Pre-Order Reporting");
}
verifyPreOrderReportingPageSectionHeading()
{
  cy.xpath(this.STATS_SECTION_HEADING)
  .should("be.visible")
  .contains("Pre-Order Statistics");
  cy.xpath(this.PreOrderData_SECTION_HEADING)
  .should("be.visible")
  .contains("Pre-Order Data");
}
clickNonMealNumbersSection()
{
  cy.xpath(this.NON_MEAL_NUMBER_SECTION).trigger('mouseover').click()
  cy.xpath(this.TITLE_ABSENCE)
  .should("be.visible")
}
clickTotalsSection()
{
  cy.xpath(this.TOTALS_SECTION).trigger('mouseover').click()
  cy.xpath(this.TITLE_TOTALS)
  .should("be.visible")
}
clickYearMealChoiceSection()
{
  cy.xpath(this.CLASS_SECTION).trigger('mouseover').click()
  cy.get(this.CLASS_DATA)
  .should("be.visible")
}
}
export default PreOrderReportingPage
