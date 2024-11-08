class LADetailsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/LimitedAvailabilityDetail?fundID=6765"
PAGE_HEADING = "//h3[normalize-space()='Schedule and Prices']"
BTN_DATES = "//a[normalize-space()='Dates']"
BTN_TIMES = "//a[normalize-space()='Times']"
BTN_AVAILABILITY_PRICES = "//a[normalize-space()='Availability/Prices']"
BTN_BULK_EDITOR = "//button[@id='bulkMenuButton']"
BTN_QUICK_ENTRY = "//a[normalize-space()='Quick Entry']"
LINK_CREATE_DATES = "//a[normalize-space()='Create Dates']"
LINK_REMOVE_DATES = "//a[normalize-space()='Remove Dates']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Schedule and Prices");
}
clickDatesButton()
{
  cy.xpath(this.BTN_DATES).click()
}
clickTimesButton()
{
  cy.xpath(this.BTN_TIMES).click();
}
clickAvailabilityButton()
{
  cy.xpath(this.BTN_AVAILABILITY_PRICES).click();
}
clickBulkEditorButton()
{
  cy.xpath(this.BTN_BULK_EDITOR).click();
}
clickCreateDatesLink()
{
  cy.xpath(this.LINK_CREATE_DATES).click();
}
clickRemoveDatesLink()
{
  cy.xpath(this.LINK_REMOVE_DATES).click();
}
clickQuickEntryButton()
{
  cy.xpath(this.BTN_QUICK_ENTRY).click();
}
}
export default LADetailsPage
