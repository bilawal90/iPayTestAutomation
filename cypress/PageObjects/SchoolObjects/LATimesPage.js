class LATimesPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/LimitedAvailabilityTimes?fundID=6765"
PAGE_HEADING = "//h3[normalize-space()='Times - LA Test Automation Fund']"
TEXT_RECORD = "//td[normalize-space()='There are currently no dates selected.']"
BTN_SAVE = "#btnSubmit"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Times - LA Test Automation Fund");
      cy.xpath(this.TEXT_RECORD)
      .should("be.visible")
      .contains("There are currently no dates selected.");
}
clickSaveButton()
{
  cy.get(this.BTN_SAVE).click()
}
}
export default LATimesPage
