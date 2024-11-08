class AccountHistoryPage {
  HEADING_PAGE = "//h3[normalize-space()='Account History']";
  HEADING_TRIP_HISTORY_PAGE = "//h3[normalize-space()='Account History Listing']";
  PAGE_URL = "https://test.ipayimpact.co.uk/Test/Accounts/ChoiceHistory?";
  TRIP_HISTORY_PAGE_URL = "https://test.ipayimpact.co.uk/Test/Accounts/History?FundID";
BTN_TRANSACTION_HISTORY = "(//a[contains(text(),'Transaction History')])[2]"
TEXT_NO_HISTORY = "//p[contains(text(),'There is no history for this account and fund in t')]"
TEXT_SEARCH_RESULT = "(//td[contains(text(),'Pre-order School Meals')])[1]"
START_DATE_FIELD = "#StartDatePicker"
BTN_SEARCH = "//input[@value='Search']"
BTN_RETURN_TO_FUND = "//a[normalize-space()='Return to the Fund List']"
setStartDate()
{
  cy.get(this.START_DATE_FIELD).clear();
  cy.get(this.START_DATE_FIELD).type("01/01/2024");
}
clickReturnToFundListButton()
{
  cy.xpath(this.BTN_RETURN_TO_FUND).click()
}
verifySearchResult()
{
  cy.xpath(this.TEXT_SEARCH_RESULT).should("contain", "Pre-order School Meals");
}
verifyTextOnNoHistory()
{
  cy.xpath(this.TEXT_NO_HISTORY).should("contain", "There is no history for this account and fund in the specified date range.");
}
clickSearchButton()
{
  cy.xpath(this.BTN_SEARCH).click();
}
clickTransactionHistoryButton()
{
  cy.xpath(this.BTN_TRANSACTION_HISTORY).click();
}
  verifyHeadingAndURL() {
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .and("contain", "Account History");
  }
  verifyHeadingAndURLOnTripHistory() {
    cy.url().should("include", this.TRIP_HISTORY_PAGE_URL);
    cy.xpath(this.HEADING_TRIP_HISTORY_PAGE)
      .should("be.visible")
      .and("contain", "Account History Listing");
  }
}
export default AccountHistoryPage;
