class AutoPaymentsPage {
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/AutoPaymentsList?fundID=6761"
HEADING_PAGE = "//h3[normalize-space()='Fund Test Automation Milk']"
TRIP_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/AutoPaymentsList?fundID="
TRIP_HEADING_PAGE = "//h3[normalize-space()='Auto Payments']"
HEADING_AUTO_PAYMENTS = "//h3[normalize-space()='Auto Payments']"
LINK_AUTO_PAYMENTS = "//a[normalize-space()='Auto Payments']"
BREADCRUMB_FUNDS = "(//a[@href='/Test/Fund'])[2]"
clickBreadCrumb()
{
  cy.xpath(this.BREADCRUMB_FUNDS).click()
}
clickAutoPayments()
{
  cy.xpath(this.LINK_AUTO_PAYMENTS).click()
}
verifyPageHeadingAndURL()
{
  cy.url().should("eq", this.URL_PAGE)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Fund Test Automation Milk")
}
verifyAutoPaymentsHeading()
{
  cy.xpath(this.HEADING_AUTO_PAYMENTS)
    .should("be.visible")
    .contains("Auto Payments")
}
verifyTripAutoPaymentsHeading()
{
  cy.url().should("include", this.TRIP_URL_PAGE)
  cy.xpath(this.TRIP_HEADING_PAGE)
    .should("be.visible")
    .contains("Auto Payments")
}
}
export default AutoPaymentsPage
