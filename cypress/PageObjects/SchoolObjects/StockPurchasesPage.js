class StockPurchasesPage {
  HEADING_PAGE = "//h3[normalize-space()='Stock Purchases']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/StockPurchases?fundID=6767"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/StockPurchases?Parameters="
  HEADING_REPORT = "//div[contains(text(),'Stock Purchases')]"
  BTN_RUN_REPORT = "//input[@name='Submit']"
BTN_BACK = "//img[@alt='Back']"
  verifyPageHeadingAndURL()
  {
      cy.url().should("eq", this.URL_PAGE);
      cy.xpath(this.HEADING_PAGE)
        .should("be.visible")
        .contains("Stock Purchases");
  }
  verifyReportHeadingAndURL()
  {
      cy.url().should("include", this.URL_REPORT);
      cy.xpath(this.HEADING_REPORT)
        .should("be.visible")
        .contains("Stock Purchases");
  }
  clickRunReportButton()
{
  cy.xpath(this.BTN_RUN_REPORT).click()
}
clickBackButton()
{
  cy.xpath(this.BTN_BACK).click()
}
}
export default StockPurchasesPage
