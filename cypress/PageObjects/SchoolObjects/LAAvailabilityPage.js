class LAAvailabilityPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/LimitedAvailabilityPrices?fundID=6765"
ADD_PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/AddFundPriceBand?fundID=6765"
PAGE_HEADING = "//h3[normalize-space()='Availability/Prices - LA Test Automation Fund']"
ADD_PAGE_HEADING = "//h3[normalize-space()='Add Availability/Price - LA Test Automation Fund']"
TEXT_RECORD = "//td[normalize-space()='There are currently no price bands to display.']"
BTN_ADD_AVAILABILITY = "//a[normalize-space()='Add Availability/Price']"
BTN_SAVE = "#btnSubmit"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
VALIDATION_PRICE_BAND = "#PriceBandID-error"
VALIDATION_COST = "#Cost-error"
BTN_DETAILS = "a[href='/Test/Fund/LimitedAvailabilityDetail?fundID=6765']"
verifyValidationAppearing()
{
    cy.get(this.VALIDATION_PRICE_BAND)
      .should("be.visible")
      .contains("The Price Band field is required.");
      cy.get(this.VALIDATION_COST)
      .should("be.visible")
      .contains("The Cost field is required.");
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Availability/Prices - LA Test Automation Fund");
      //cy.xpath(this.TEXT_RECORD)
      //.should("be.visible")
      //.contains("There are currently no price bands to display.");
}
verifyAddPageHeadingAndURL()
{
    cy.url().should("include", this.ADD_PAGE_URL);
    cy.xpath(this.ADD_PAGE_HEADING)
      .should("be.visible")
      .contains("Add Availability/Price - LA Test Automation Fund");
}
clickAddAvailabilityButton()
{
  cy.xpath(this.BTN_ADD_AVAILABILITY).click()
}
clickDetailsButton()
{
  cy.get(this.BTN_DETAILS).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
clickSaveButton()
{
  cy.get(this.BTN_SAVE).click()
}
}
export default LAAvailabilityPage
