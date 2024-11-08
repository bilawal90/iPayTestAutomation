class TransactionHistoryPage {
  Heading_Page = "//h3[contains(text(),'Internet Transaction History -')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Payment";
  URL_REFUND_REQUEST = "https://test.ipayimpact.co.uk/Test/Payment/RefundRequests"
  HEADING_REFUND_REQUEST = "//h3[normalize-space()='Refund Requests']"
BTN_REFRESH_LIST = "#btnSubmit"
BTN_DETAILS = "(//a[contains(text(),'Details')])[1]"
BASKET_VALIDATION = "//span[@data-valmsg-for='PurchaseLimit']"
LINK_REFUND_REQUESTS = "//a[normalize-space()='Refund Requests']"
TEXTFIELD_STARTDATE = "#StartDate"

typeStartDate()
{cy.get(this.TEXTFIELD_STARTDATE).clear();
  cy.get(this.TEXTFIELD_STARTDATE).type("05/09/2024")
}

clickRefundRequestsLink()
{
    cy.xpath(this.LINK_REFUND_REQUESTS).click();
}
clickRefreshButton()
{
  cy.get(this.BTN_REFRESH_LIST).click();
}
clickDetailsButton()
{
  cy.xpath(this.BTN_DETAILS).click();
}
verifyHeadingAndURLRefundRequests() {
  cy.url().should("include", this.URL_REFUND_REQUEST);
  cy.xpath(this.HEADING_REFUND_REQUEST)
    .should("be.visible")
    .and("contain", "Refund Requests");
}
  verifyHeadingAndURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Internet Transaction History");
  }
}
export default TransactionHistoryPage;
