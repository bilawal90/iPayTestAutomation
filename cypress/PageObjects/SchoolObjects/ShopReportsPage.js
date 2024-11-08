class ShopReportsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/Reports?fundID"
PAGE_HEADING = "//h3[normalize-space()='Reports']"
LINK_BALANCES = "//a[normalize-space()='Balances']"
LINK_FUND_EXPENDITURE = "//a[normalize-space()='Fund Expenditure']"
LINK_PAYMENTS_BETWEEN_DATES = "//a[normalize-space()='Payments Between Dates']"
LINK_ACCOUNT_PURCHASES = "//a[normalize-space()='Account Purchases']"
LINK_STOCK_SUMMARY = "//a[normalize-space()='Stock Summary']"
LINK_STOCK_PURCHASES = "//a[normalize-space()='Stock Purchases']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Reports");
}
clickAccountPurchasesLink()
{
  cy.xpath(this.LINK_ACCOUNT_PURCHASES).click()
}
clickBalancesLink()
{
  cy.xpath(this.LINK_BALANCES).click()
}
clickFundExpenditureLink()
{
  cy.xpath(this.LINK_FUND_EXPENDITURE).click()
}
clickPaymentBetweenDatesLink()
{
  cy.xpath(this.LINK_PAYMENTS_BETWEEN_DATES).click()
}
clickStockSummaryLink()
{
  cy.xpath(this.LINK_STOCK_SUMMARY).click()
}
clickStockPurchasesLink()
{
  cy.xpath(this.LINK_STOCK_PURCHASES).click()
}
}
export default ShopReportsPage
