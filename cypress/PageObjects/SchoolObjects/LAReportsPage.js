class LAReportsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/Reports?fundID=6765"
PAGE_HEADING = "//h3[normalize-space()='Reports']"
LINK_BALANCES = "//a[normalize-space()='Balances']"
LINK_BOOKINGS = "//a[normalize-space()='Bookings']"
LINK_BOOKINGS_DETAILS = "//a[normalize-space()='Bookings Detail']"
LINK_FUND_EXPENDITURE = "//a[normalize-space()='Fund Expenditure']"
LINK_PAYMENTS_BETWEEN_DATES = "//a[normalize-space()='Payments Between Dates']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Reports");
}
clickBalancesLink()
{
  cy.xpath(this.LINK_BALANCES).click()
}
clickBookingsLink()
{
  cy.xpath(this.LINK_BOOKINGS).click()
}
clickBookingsDetailsLink()
{
  cy.xpath(this.LINK_BOOKINGS_DETAILS).click()
}
clickFundExpenditureLink()
{
  cy.xpath(this.LINK_FUND_EXPENDITURE).click()
}
clickPaymentBetweenDatesLink()
{
  cy.xpath(this.LINK_PAYMENTS_BETWEEN_DATES).click()
}
}
export default LAReportsPage
