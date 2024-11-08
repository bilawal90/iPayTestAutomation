class ReportsPage {
  Heading_Page = "//h3[normalize-space()='Reports']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Report/SchoolIndex";
  Return_Page_URL = "https://test.ipayimpact.co.uk/Test/Report/ReturnRedirect";
  Heading_Account_Section = "//h4[normalize-space()='Accounts & Logins']";
  Heading_Funds_Section = "//h4[normalize-space()='Funds']";
  Heading_Payments_Section = "//h4[normalize-space()='Payments']";
  Heading_PreOrder_Section = "//h4[normalize-space()='Pre-order']";
  Link_Login_Activity = "//a[normalize-space()='Login Activity']";
  Link_Unused_Logins = "//a[normalize-space()='Unused Logins']";
  Link_Accounts_Without_Registered_Parents =
    "//a[normalize-space()='Accounts without Registered Parents']";
  Link_Accounts_With_Registered_Parents =
    "//a[normalize-space()='Accounts with Registered Parents']";
  Link_AGGREGATED_FUND_DETAIL =
    "//a[normalize-space()='Aggregated Fund Detail']";
  Link_FUND_ARREARS = "//a[normalize-space()='Fund Arrears']";
  Link_FUND_ARREARS_FOR_INACTIVE_ACCOUNTS =
    "//a[normalize-space()='Fund Arrears For Inactive Accounts']";
  Link_PRE_ORDER_FUND_ARREARS_SUMMARY =
    "//a[normalize-space()='Pre-order Fund Arrears Summary']";
  Link_FUND_NOTIFICATIONS = "//a[normalize-space()='Fund Notifications']";
  Link_PRE_ORDER_MEAL_RECONCILIATION =
    "//a[normalize-space()='Pre-order Meal Reconciliation']";
  Link_MEAL_RECORDING_BY_DAY = "//a[normalize-space()='Meal Recording By Day']";
  Link_MEAL_RECORDING_BY_WEEK =
    "//a[normalize-space()='Meal Recording By Week']";
  Link_MEAL_RECORDINGS_UNATTENDED =
    "//a[normalize-space()='Meal Recordings - Unattended']";
  Link_PAYMENTS_BETWEEN_DATES =
    "//a[normalize-space()='Payments between Dates']";
  Link_PAYMENTS_BY_LEDGER = "//a[normalize-space()='Payments by Ledger']";
  Link_INTERNET_PAYMENTS_BY_BANK_ACCOUNT = "//a[normalize-space()='Internet Payments by Bank Account']";
    LINK_ACCOUNT_HISTORY = "//a[normalize-space()='Account History']"
    LINK_EXPENDITURE = "//a[normalize-space()='Funds Expenditure']"
    LINK_RECONCILIATION = "//a[normalize-space()='Fund Account Reconciliation']"
LINK_MEAL_NUMBERS = "//a[normalize-space()='Meal Numbers']"
LINK_MEAL_NUMBERS_YEARS = "//a[normalize-space()='Meal Numbers Selected Years']"
LINK_PRE_ORDER_CLASS_WEEKLY = "//a[normalize-space()='Pre-order Class Listing Weekly']"
LINK_PRE_ORDER_CLASS_DAILY = "//a[normalize-space()='Pre-order Class Listing Daily']"
LINK_DAILY_PRE_ORDER_SUMMARY = "//a[normalize-space()='Daily Pre-order Summary']"
LINK_FSM_LIST = "//a[normalize-space()='FSM List']"
  verifyHeadingsAndURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page).should("be.visible").contains("Reports");
    cy.xpath(this.Heading_Account_Section)
      .should("be.visible")
      .contains("Accounts & Logins");
    cy.xpath(this.Heading_Funds_Section).should("be.visible").contains("Funds");
    cy.xpath(this.Heading_Payments_Section)
      .should("be.visible")
      .contains("Payments");
      cy.xpath(this.Heading_Payments_Section)
      .should("be.visible")
      .contains("Payments");
      cy.xpath(this.Heading_PreOrder_Section)
      .should("be.visible")
      .contains("Pre-order");
  }
  verifyHeadingsAndURLOnReturn() {
    cy.url().should("include", this.Return_Page_URL);
    cy.xpath(this.Heading_Page).should("be.visible").contains("Reports");
    cy.xpath(this.Heading_Account_Section)
      .should("be.visible")
      .contains("Accounts & Logins");
    cy.xpath(this.Heading_Funds_Section).should("be.visible").contains("Funds");
    cy.xpath(this.Heading_Payments_Section)
      .should("be.visible")
      .contains("Payments");
  }
  clickLoginActivityLink() {
    cy.xpath(this.Link_Login_Activity).click();
  }
  clickUnusedLoginsLink() {
    cy.xpath(this.Link_Unused_Logins).click();
  }
  clickFSMListLink() {
    cy.xpath(this.LINK_FSM_LIST).click();
  }
  clickAccountsWithRegisteredParentLink() {
    cy.xpath(this.Link_Accounts_With_Registered_Parents).click();
  }
  clickAggregatedFundReportLink() {
    cy.xpath(this.Link_AGGREGATED_FUND_DETAIL).click();
  }
  clickFundArrearsReportLink() {
    cy.xpath(this.Link_FUND_ARREARS).click();
  }
  clickFundArrearsInActiveReportLink() {
    cy.xpath(this.Link_FUND_ARREARS_FOR_INACTIVE_ACCOUNTS).click();
  }
  clickPreOrderFundArrearsLink() {
    cy.xpath(this.Link_PRE_ORDER_FUND_ARREARS_SUMMARY).click();
  }
  clickFundNotificationsLink() {
    cy.xpath(this.Link_FUND_NOTIFICATIONS).click();
  }
  clickPOMealReconciliationLink() {
    cy.xpath(this.Link_PRE_ORDER_MEAL_RECONCILIATION).click();
  }
  clickMealRecordingByDayLink() {
    cy.xpath(this.Link_MEAL_RECORDING_BY_DAY).click();
  }
  clickMealRecordingByWeekLink() {
    cy.xpath(this.Link_MEAL_RECORDING_BY_WEEK).click();
  }
  clickMealRecordingUnattendedLink() {
    cy.xpath(this.Link_MEAL_RECORDINGS_UNATTENDED).click();
  }
  clickPaymentBetweenDatesLink() {
    cy.xpath(this.Link_PAYMENTS_BETWEEN_DATES).click();
  }
  clickPaymentByLedgerLink() {
    cy.xpath(this.Link_PAYMENTS_BY_LEDGER).click();
  }
  clickInternetPaymentByBankAccountLink() {
    cy.xpath(this.Link_INTERNET_PAYMENTS_BY_BANK_ACCOUNT).click();
  }
  clickAccountsWithoutRegisteredParentsLink() {
    cy.xpath(this.Link_Accounts_Without_Registered_Parents).click();
  }
  clickAccountHistoryLink() {
    cy.xpath(this.LINK_ACCOUNT_HISTORY).click();
  }
  clickFundExpenditureLink() {
    cy.xpath(this.LINK_EXPENDITURE).click();
  }
  clickAccountReconciliationLink() {
    cy.xpath(this.LINK_RECONCILIATION).click();
  }
  clickMealNumbersLink() {
    cy.xpath(this.LINK_MEAL_NUMBERS).click();
  }
  clickMealNumbersYearsLink() {
    cy.xpath(this.LINK_MEAL_NUMBERS_YEARS).click();
  }
  clickPreOrderClassWeeklyLink() {
    cy.xpath(this.LINK_PRE_ORDER_CLASS_WEEKLY).click();
  }
  clickPreOrderClassDailyLink() {
    cy.xpath(this.LINK_PRE_ORDER_CLASS_DAILY).click();
  }
  clickDailyPreOrderSummaryLink() {
    cy.xpath(this.LINK_DAILY_PRE_ORDER_SUMMARY).click();
  }
}
export default ReportsPage;
