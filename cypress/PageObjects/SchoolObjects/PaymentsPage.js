class PaymentsPage {
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/Payments?fundID=6761"
TRIP_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/Payments?fundID"
LA_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/Payments?fundID=6765"
HEADING_PAGE = "//h3[normalize-space()='Fund Test Automation Milk']"
HEADING_PAYMENTS = "//h3[normalize-space()='Payments']"
LINK_ALL = "//a[@id='data-all']"
LINK_INCOMINGS = "//a[@id='data-incomings']"
LINK_OUTGOINGS = "//a[@id='data-outgoings']"
TEXT_ON_PAGINATION = "#fundPaymentsTable_info"
clickAllLinkMilk()
{
  cy.xpath(this.LINK_ALL).click()
  cy.get(this.TEXT_ON_PAGINATION)
  .should("be.visible")
  .contains("Showing 0 to 0 of 0 entries")
}
clickIncomingLinkMilk()
{
  cy.xpath(this.LINK_INCOMINGS).click()
  cy.get(this.TEXT_ON_PAGINATION)
  .should("be.visible")
  .contains("Showing 0 to 0 of 0 entries")
}
clickOutgoingLinkMilk()
{
  cy.xpath(this.LINK_OUTGOINGS).click()
  cy.get(this.TEXT_ON_PAGINATION)
  .should("be.visible")
  .contains("Showing 0 to 0 of 0 entries")
}
clickAllLinkTrip()
{
  cy.xpath(this.LINK_ALL).click()
  cy.get(this.TEXT_ON_PAGINATION)
  .should("be.visible")
  .contains("Showing")
}
clickIncomingLinkTrip()
{
  cy.xpath(this.LINK_INCOMINGS).click()
  cy.get(this.TEXT_ON_PAGINATION)
  .should("be.visible")
  .contains("Showing")
}
clickOutgoingLinkTrip()
{
  cy.xpath(this.LINK_OUTGOINGS).click()
  cy.get(this.TEXT_ON_PAGINATION)
  .should("be.visible")
  .contains("Showing")
}
verifyPageHeadingAndURL()
{
  cy.url().should("eq", this.URL_PAGE)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Fund Test Automation Milk")
}
verifyTripPageHeadingAndURL()
{
  cy.url().should("include", this.TRIP_URL_PAGE)
  cy.xpath(this.HEADING_PAYMENTS)
    .should("be.visible")
    .contains("Payments")
}
verifyLAPageHeadingAndURL()
{
  cy.url().should("eq", this.LA_URL_PAGE)
  cy.xpath(this.HEADING_PAYMENTS)
    .should("be.visible")
    .contains("Payments")
}
verifyPaymentsHeading()
{
  cy.xpath(this.HEADING_PAYMENTS)
    .should("be.visible")
    .contains("Payments")
}
}
export default PaymentsPage
