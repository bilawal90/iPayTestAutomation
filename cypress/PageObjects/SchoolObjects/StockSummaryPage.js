class StockSummaryPage {
  HEADING_PAGE = "//div[contains(text(),'Stock Summary')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Reports/StockSummary?Parameters=6767"
BTN_BACK = "//img[@alt='Back']"
  verifyReportHeadingAndURL()
  {
      cy.url().should("eq", this.URL_PAGE);
      cy.xpath(this.HEADING_PAGE)
        .should("be.visible")
        .contains("Stock Summary");
  }
clickBackButton()
{
  cy.xpath(this.BTN_BACK).click()
}
}
export default StockSummaryPage
