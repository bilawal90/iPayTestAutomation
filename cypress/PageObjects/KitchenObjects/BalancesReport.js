class BalancesReport {
  HEADING_PAGE = "//h3[normalize-space()='Fund Balances']";
  HEADING_REPORT = "//div[contains(text(),'Fund Balances & UFSM/FSM Status')]";
  SHOP_HEADING_REPORT = "//div[contains(text(),'Shop Fund Balances')]";
  SHOP_URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/ShopFundBalance"
  PreOrder_Report_HEADING = "//div[contains(text(),'Fund Balances & UFSM/FSM Status')]";
  PreOrder_Report_URL = "https://test.ipayimpact.co.uk/Test/Reports/FundBalances?Parameters="
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundBalances?fundID=6761"
  SHOP_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/ShopFundBalances?fundID=6767"
SHOP_HEADING_PAGE = "//h3[normalize-space()='Shop Fund Balance']"
PreOrder_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundBalances?fundID="
PreOrder_HEADING_PAGE = "//h3[normalize-space()='Fund Balances']"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/FundBalances"
  TRIP_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundBalances?fundID=6763"
  TRIP_URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/FundBalances"
  LA_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundBalances?fundID=6765"
  TRIP_HEADING_PAGE = "//h3[normalize-space()='Fund Balances']"
  TRIP_HEADING_REPORT = "//div[contains(text(),'Fund Balances & UFSM/FSM Status')]"
BTN_RETURN = "//a[normalize-space()='Return to Reports List']"
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
  REPORT_BALANCES = "//a[normalize-space()='Balances']"
  CHECKBOX_INCLUDE_INACTIVE = "//input[@id='IncludeInactiveAccounts']"
  verifyTripPageHeadingAndURL()
  {
      cy.url().should("eq", this.TRIP_URL_PAGE);
      cy.xpath(this.TRIP_HEADING_PAGE)
        .should("be.visible")
        .contains("Fund Balances");
  }
  verifyShopPageHeadingAndURL()
  {
      cy.url().should("eq", this.SHOP_URL_PAGE);
      cy.xpath(this.SHOP_HEADING_PAGE)
        .should("be.visible")
        .contains("Shop Fund Balance");
  }
  verifyPreOrderMealHeadingAndURL()
  {
      cy.url().should("include", this.PreOrder_URL_PAGE);
      cy.xpath(this.PreOrder_HEADING_PAGE)
        .should("be.visible")
        .contains("Fund Balances");
  }
  verifyTripReportHeadingAndURL()
  {
      cy.url().should("include", this.TRIP_URL_REPORT);
      cy.xpath(this.TRIP_HEADING_REPORT)
        .should("be.visible")
        .contains("Fund Balances & UFSM/FSM Status");
  }
  verifyLAPageHeadingAndURL()
{
    cy.url().should("eq", this.LA_URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Balances");
}
  clickBalancesReport()
  {
    cy.xpath(this.REPORT_BALANCES).trigger('mouseover').click()
  }
  clickInactiveAccounts()
  {
    cy.xpath(this.CHECKBOX_INCLUDE_INACTIVE).trigger('mouseover').click()
  }
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Balances");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Fund Balances & UFSM/FSM Status");
}
verifyShopReportHeadingAndURL()
{
    cy.url().should("include", this.SHOP_URL_REPORT);
    cy.xpath(this.SHOP_HEADING_REPORT)
      .should("be.visible")
      .contains("Shop Fund Balances");
}
verifyPreOrderReportHeadingAndURL()
{
    cy.url().should("include", this.PreOrder_Report_URL);
    cy.xpath(this.PreOrder_Report_HEADING)
      .should("be.visible")
      .contains("Fund Balances & UFSM/FSM Status");
}
clickReturnToReportListBtn()
{
  cy.xpath(this.BTN_RETURN).should("be.visible")
    cy.xpath(this.BTN_RETURN).click()
}
clickRunReport()
{
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).click()
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).trigger('mouseover').click()
}
}
export default BalancesReport
