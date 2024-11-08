class LAQuickEntryPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/LimitedAvailabilityQuickEntry?fundID=6765"
PAGE_HEADING = "//h2[normalize-space()='Quick Entry - LA Test Automation Fund']"
VALIDATION_COST = "#Cost-error"
BTN_SAVE = "#btnSubmit"
BTN_DETAILS = "//body//div//div//div//div//a[contains(text(),'Details')]"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Quick Entry - LA Test Automation Fund");
}
verifyCostValidation()
{
    cy.get(this.VALIDATION_COST)
      .should("be.visible")
      .contains("The Cost field is required.");
}
clickSaveButton()
{
  cy.get(this.BTN_SAVE).click()
}
clickDetailsButton()
{
  cy.xpath(this.BTN_DETAILS).click()
}
}
export default LAQuickEntryPage
