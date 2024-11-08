class FundManagementPage {
BTN_ADD_NEW_CARD = "//a[normalize-space()='Add a new Credit/Debit']"
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundManagement?fundID=6761"
LA_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundManagement?fundID=6765"
SHOP_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundManagement?fundID=6767"
PreOrder_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundManagement?fundID="
TRIP_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundManagement?fundID=6763"
TRIP_HEADING_PAGE = "//h3[normalize-space()='Fund Management']"
HEADING_PAGE = "//h3[normalize-space()='Fund Test Automation Milk']"
SHOP_HEADING_PAGE = "//h3[normalize-space()='Shop Test Automation Fund']"
  PreOrder_HEADING_PAGE = "//h3[normalize-space()='Fund Management']"
clickAddNewCard()
{
  cy.xpath(this.BTN_ADD_NEW_CARD).should("be.visible")
    cy.xpath(this.BTN_ADD_NEW_CARD).click()
}
verifyPageHeadingAndURL()
{
  cy.url().should("include", this.URL_PAGE)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Fund Test Automation Milk")
}
verifyLAPageHeadingAndURL()
{
  cy.url().should("include", this.LA_URL_PAGE)
  cy.xpath(this.TRIP_HEADING_PAGE)
    .should("be.visible")
    .contains("Fund Management")
}
verifyShopPageHeadingAndURL()
{
  cy.url().should("include", this.SHOP_URL_PAGE)
  cy.xpath(this.SHOP_HEADING_PAGE)
    .should("be.visible")
    .contains("Shop Test Automation Fund")
}
verifyTripPageHeadingAndURL()
{
  cy.url().should("include", this.TRIP_URL_PAGE)
  cy.xpath(this.TRIP_HEADING_PAGE)
    .should("be.visible")
    .contains("Fund Management")
}
verifyPreOrderHeadingAndURL()
{
  cy.url().should("include", this.PreOrder_URL_PAGE)
  cy.xpath(this.PreOrder_HEADING_PAGE)
    .should("be.visible")
    .contains("Fund Management")
}
}
export default FundManagementPage
