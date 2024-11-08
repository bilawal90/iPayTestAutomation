class TripReportsPage {
  Heading_Page = "//h3[normalize-space()='Trip Fund Test Automation Selected Accounts Paid']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Fund/Reports?fundID=6763";
  SUB_HEADING_PAGE = "//h3[normalize-space()='Reports']"
PAYMENTS_BETWEEN_DATES = "//a[normalize-space()='Payments Between Dates']"
BALANCE_FSM_STATUS = "//a[normalize-space()='Balances & FSM/UFSM Status']"
PAID_ACCOUNTS = "//a[normalize-space()='Paid Accounts']"
FUND_EXPENDITURE = "//a[normalize-space()='Fund Expenditure']"
TRIP_PAYMENT = "//a[normalize-space()='Payment Received']"
ALLOCATIONS = "//a[normalize-space()='Allocations']"
PARENT_PERMISSIONS = "//a[normalize-space()='Parent Permissions']"
verifyHeadingsAndURL() {
  cy.url().should("eq", this.Page_URL);
  cy.xpath(this.Heading_Page).should("be.visible").contains("Trip Fund Test Automation Selected Accounts Paid");
  cy.xpath(this.SUB_HEADING_PAGE).should("be.visible").contains("Reports");
}
clickPaymentBetweenDatesLink() {
  cy.xpath(this.PAYMENTS_BETWEEN_DATES).click();
}
clickBalancesAndFsmStatusLink() {
  cy.xpath(this.BALANCE_FSM_STATUS).click();
}
clickPaidAccountsLink() {
  cy.xpath(this.PAID_ACCOUNTS).click();
}
clickFundExpenditureLink() {
  cy.xpath(this.FUND_EXPENDITURE).click();
}
clickTripPaymentReceivedLink() {
  cy.xpath(this.TRIP_PAYMENT).click();
}
clickAllocationsLink() {
  cy.xpath(this.ALLOCATIONS).click();
}
clickParentPermissionsLink() {
  cy.xpath(this.PARENT_PERMISSIONS).click();
}
}
export default TripReportsPage;
