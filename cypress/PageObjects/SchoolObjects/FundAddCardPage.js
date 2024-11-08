class FundAddCardPage {
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/EditCreditDebit?schoolFundCreditDebitID=0&fundID=6766"
URL_PAGE_MILK = "https://test.ipayimpact.co.uk/Test/Fund/EditCreditDebit?schoolFundCreditDebitID=0&fundID=6761"
URL_PAGE_LA = "https://test.ipayimpact.co.uk/Test/Fund/EditCreditDebit?schoolFundCreditDebitID"
HEADING_PAGE_LA = "//body/div/div/div/div/h3[1]"
URL_PAGE_TRIP = "https://test.ipayimpact.co.uk/Test/Fund/EditCreditDebit?schoolFundCreditDebitID=0&fundID=6763"
HEADING_PAGE = "//*[contains(text(), 'Add Credit / Debit')]"
HEADING_PAGE_MILK = "//*[contains(text(), 'Add Credit / Debit')]"
BTN_SAVE = "//input[@id='btnSubmit']"
ERROR_REFERENCE = "#Reference-error"
ERROR_PAYEE= "#PayeePayer-error"
ERROR_DESCRIPTION= "#Description-error"
ERROR_AMOUNT = "#Amount-error"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
verifyValidationAppearing()
{
  cy.get(this.ERROR_REFERENCE)
    .should("be.visible")
    .contains("The Reference field is required.")
    cy.get(this.ERROR_PAYEE)
    .should("be.visible")
    .contains("The Payee / Payer field is required.")
    cy.get(this.ERROR_DESCRIPTION)
    .should("be.visible")
    .contains("The Description field is required.")
    cy.get(this.ERROR_AMOUNT)
    .should("be.visible")
    .contains("The Amount field is required.")
}
clickCancelBtn()
{
  cy.xpath(this.BTN_CANCEL).should("be.visible")
    cy.xpath(this.BTN_CANCEL).click()
}
clickSaveBtn()
{
  cy.xpath(this.BTN_SAVE).should("be.visible")
    cy.xpath(this.BTN_SAVE).click()
}
verifyPageHeadingAndURL()
{
  cy.url().should("include", this.URL_PAGE)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Add Credit / Debit")
}
verifyLAPageHeadingAndURL()
{
  cy.url().should("include", this.URL_PAGE_LA)
  cy.xpath(this.HEADING_PAGE_LA)
    .should("be.visible")
    .contains("Add Credit / Debit -")
}
verifyAddCardPageHeadingAndURL()
{
  cy.url().should("include", this.URL_PAGE_MILK)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Add Credit / Debit")
}
verifyTripAddCardPageURL()
{
  cy.url().should("include", this.URL_PAGE_TRIP)
}
}
export default FundAddCardPage
