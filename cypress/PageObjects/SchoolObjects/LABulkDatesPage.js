class LABulkDatesPage {
MODULE_DATES_HEADING = "//div[@id='customiseModal']//div[@role='document']//div//div//h3[@id='customiseModalLabel']"
MODULE_REMOVE_DATES_HEADING = "//div[@id='customiseRemoveDateModal']//div[@role='document']//div//div//h3[@id='customiseModalLabel']"
START_DATE_VALIDATION = "#DateValidation"
REMOVE_DATE_VALIDATION = "#RemovableDateValidation"
BTN_CREATE_DATES = "#btnSavelimAvailability"
BTN_CANCEL = "//button[@id='btnCloseSavelimAvailability']"
BTN_REMOVE_DATES_CANCEL = "#btnRemoveCloseSavelimAvailability"
BTN_REMOVE_DATES = "#btnRemovelimAvailability"
verifyRemoveDatesModuleHeading()
{
    cy.xpath(this.MODULE_REMOVE_DATES_HEADING)
      .should("be.visible")
      .contains("Bulk Remove Dates");
}
verifyBulkDatesModuleHeading()
{
    cy.xpath(this.MODULE_DATES_HEADING)
      .should("be.visible")
      .contains("Bulk Create Dates");
}
verifyStartDateValidation()
{
    cy.get(this.START_DATE_VALIDATION)
      .should("be.visible")
      .contains("Start Date and End Date are required.");
}
verifyStartRemoveDateValidation()
{
    cy.get(this.REMOVE_DATE_VALIDATION)
      .should("be.visible")
      .contains("Start Date and End Date are required.");
}
clickCreateDatesButton()
{
  cy.get(this.BTN_CREATE_DATES).click()
}
clickRemoveDatesButton()
{
  cy.get(this.BTN_REMOVE_DATES).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
clickCancelButtonOnRemoveDatesModule()
{
  cy.get(this.BTN_REMOVE_DATES_CANCEL).click()
}
}
export default LABulkDatesPage
