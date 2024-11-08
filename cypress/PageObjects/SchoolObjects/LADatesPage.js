class LADatesPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/LimitedAvailabilityDates?fundID=6765"
PAGE_HEADING = "//h3[normalize-space()='Dates - LA Test Automation Fund']"
TEXT_RECORD = "//td[normalize-space()='There are currently no dates selected.']"
BTN_ADD_ROW = "#addRow"
BTN_DELETE = "//a[normalize-space()='Delete']"
BTN_SAVE = "#btnSubmit"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Dates - LA Test Automation Fund");
}
verifyTextOnRecordGrid()
{
    cy.xpath(this.TEXT_RECORD)
      .should("be.visible")
      .contains("There are currently no dates selected.");
}
verifyNoTextOnRecordGrid()
{
    cy.xpath(this.TEXT_RECORD)
      .should("not.exist")
}
clickAddRowButton()
{
  cy.get(this.BTN_ADD_ROW).click()
}
clickDeleteButton()
{
  cy.xpath(this.BTN_DELETE).click()
}
clickSaveButton()
{
  cy.get(this.BTN_SAVE).click()
}
}
export default LADatesPage
