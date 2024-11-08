class MealPricesPage {
  HEADING_PAGE = "(//h3[contains(text(),'Meal Prices')])[1]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Preorder/MealPrices?fundID="
  HEADING_PAGE_ADD_MEAL = "//h3[normalize-space()='Add Meal Price']";
  URL_PAGE_ADD_MEAL = "https://test.ipayimpact.co.uk/Test/Preorder/AddEditMealPrice?fundID="
VALIDATION_MEAL_PRICE = "#MealPriceTypeSelected-error"
VALIDATION_COST = "#MealPrice_Cost-error"
BTN_ADD_MEAL_PRICE = "//a[normalize-space()='Add Meal Price']"
BTN_SAVE = "#btnSubmit"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
BREADCRUMB_FUNDS = "//a[normalize-space()='Funds']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Meal Prices");
}
verifyAddMealPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE_ADD_MEAL);
    cy.xpath(this.HEADING_PAGE_ADD_MEAL)
      .should("be.visible")
      .contains("Add Meal Price");
}
clickAddMealPriceButton()
{
  cy.xpath(this.BTN_ADD_MEAL_PRICE).click()
}
verifyValidationMessage()
{
    cy.get(this.VALIDATION_MEAL_PRICE)
      .should("be.visible")
      .contains("The Meal Price Type field is required.");
      cy.get(this.VALIDATION_COST)
      .should("be.visible")
      .contains("The field Cost must be between 0.01 and 100.");
}
clickSaveButton()
{
  cy.get(this.BTN_SAVE).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
clickFundsBreadCrumb()
{
  cy.xpath(this.BREADCRUMB_FUNDS).click()
}
}
export default MealPricesPage
