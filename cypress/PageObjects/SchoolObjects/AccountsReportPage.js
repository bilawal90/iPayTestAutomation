class AccountsReportPage {
  BTN_BACK_REPORT = "//img[@alt='Back']"
  Login_Activity_Heading_Page =
    "//div[contains(text(),'Login Activity Report')]";
  HEADING_PAGE_ACCOUNT_REGISTERED_LOGINS =
    "//h3[normalize-space()='Account Registered Logins']";
  URL_PAGE_ACCOUNT_REGISTERED_LOGINS =
    "https://test.ipayimpact.co.uk/Test/Report/";
  HEADING_REPORT_ACCOUNT_DETAILS = "//div[contains(text(),'Account Detail')]";
  URL_REPORT_ACCOUNT_DETAILS =
    "https://test.ipayimpact.co.uk/Test/Reports/AccountsRegisteredLogins?Parameters=";
  HEADING_PAGE_ACCOUNTS_WITHOUT_LOGINS =
    "//div[contains(text(),'Accounts Without Logins')]";
  URL_PAGE_ACCOUNTS_WITHOUT_LOGINS =
    "https://test.ipayimpact.co.uk/Test/Reports/";
  HEADING_REPORT_ACCOUNTS_WITHOUT_LOGINS =
    "//div[contains(text(),'Accounts Without Logins')]";
  URL_REPORT_ACCOUNTS_WITHOUT_LOGINS =
    "https://test.ipayimpact.co.uk/Test/Reports/AccountsWithoutLogins?Parameters=444%257c44401";
  Login_Activity_Page_URL =
    "https://test.ipayimpact.co.uk/Test/Reports/LoginActivity?Parameters=";
  HEADING_UNUSED_LOGINS_PAGE = "//h3[normalize-space()='Unused Logins Report']";
  HEADING_UNUSED_LOGINS_REPORT =
    "//div[contains(text(),'Logins - Activated but No Payments Made')]";
    HEADING_ACCOUNT_HISTORY_REPORT =
    "//div[contains(text(),'Account History Listing')]";
  URL_UNUSED_LOGINS_PAGE =
    "https://test.ipayimpact.co.uk/Test/Report/UnusedLogins?SchoolID";
  URL_UNUSED_LOGINS_REPORT =
    "https://test.ipayimpact.co.uk/Test/Reports/UnusedLogins?Parameters=";
  BTN_SELECT_ESTABLISHMENT = "//input[@id='btnInstitution']";
  DROPDOWN_YEAR = "#YearClass";
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RUN_REPORT_ON_ACCOUNT_REGISTER_LOGIN = "//input[@value='Run Report']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  Btn_Back = "//img[@alt='Back']";
  VALIDATION_ESTABLISHMENT = "#Establishment-error";
  URL_ACCOUNT_HISTORY = "https://test.ipayimpact.co.uk/Test/Report/AccountHistoryListing"
  URL_ACCOUNT_HISTORY1 = "https://test.ipayimpact.co.uk/Test/Reports/AccountHistoryListing"
   HEADING_ACCOUNT_HISTORY = "//h3[normalize-space()='Account History Listing']"
   BTN_SET_YEAR = "//input[@name='Submit']"
DROPDOWN_ACCOUNT = "#AccountID"
  verifyValidationMessage() {
    cy.get(this.VALIDATION_ESTABLISHMENT)
      .should("be.visible")
      .contains("The Establishment field is required.");
  }
  verifyHeadingAndURL() {
    cy.url().should("include", this.Login_Activity_Page_URL);
    cy.xpath(this.Login_Activity_Heading_Page)
      .should("be.visible")
      .contains("Login Activity Report");
  }
  verifyAccountHistoryHeadingAndURL() {
    cy.url().should("include", this.URL_ACCOUNT_HISTORY);
    cy.xpath(this.HEADING_ACCOUNT_HISTORY)
      .should("be.visible")
      .contains("Account History Listing");
  }
  verifyHeadersOnAccountsWithoutLoginPage() {
    cy.url().should("include", this.URL_PAGE_ACCOUNTS_WITHOUT_LOGINS);
    cy.xpath(this.HEADING_PAGE_ACCOUNTS_WITHOUT_LOGINS)
      .should("be.visible")
      .contains("Account History Listing");
  }
  verifyHeadersOnAccountsWithoutRegisteredParent() {
    cy.url().should("include", this.URL_PAGE_ACCOUNTS_WITHOUT_LOGINS);
    cy.xpath(this.HEADING_PAGE_ACCOUNTS_WITHOUT_LOGINS)
      .should("be.visible")
      .contains("Accounts Without Logins");
  }
  verifyHeadersOnAccountsWithoutLoginPage() {
    cy.url().should("include", this.URL_PAGE_ACCOUNTS_WITHOUT_LOGINS);
    cy.xpath(this.HEADING_PAGE_ACCOUNTS_WITHOUT_LOGINS)
      .should("be.visible")
      .contains("Account History Listing");
  }
  verifyHeadersOnAccountDetailsReport() { 
    cy.url().should("include", this.URL_REPORT_ACCOUNT_DETAILS);
    cy.xpath(this.HEADING_REPORT_ACCOUNT_DETAILS)
      .should("be.visible")
      .contains("Account Detail");
  }
  verifyHeadersOnAccountsWithoutLoginReport() {
    cy.url().should("eq", this.URL_REPORT_ACCOUNTS_WITHOUT_LOGINS);
    cy.xpath(this.HEADING_REPORT_ACCOUNTS_WITHOUT_LOGINS)
      .should("be.visible")
      .contains("Accounts Without Logins");
  }
  verifyHeadersOnUnusedLoginPage() {
    cy.url().should("include", this.URL_UNUSED_LOGINS_PAGE);
    cy.xpath(this.HEADING_UNUSED_LOGINS_PAGE)
      .should("be.visible")
      .contains("Unused Logins Report");
  }
  verifyHeadersOnUnusedLoginReport() {
    cy.url().should("include", this.URL_UNUSED_LOGINS_REPORT);
    cy.xpath(this.HEADING_UNUSED_LOGINS_REPORT)
      .should("be.visible")
      .contains("Logins - Activated but No Payments Made");
  }
  verifyHeadersOnAccountRegisteredLoginsPage() {
    cy.url().should("include", this.URL_PAGE_ACCOUNT_REGISTERED_LOGINS);
    cy.xpath(this.HEADING_PAGE_ACCOUNT_REGISTERED_LOGINS)
      .should("be.visible")
      .contains("Account Registered Logins");
  }
  verifyHeadersOnAccountHistoryReport() {
    cy.url().should("include", this.URL_ACCOUNT_HISTORY1);
    cy.xpath(this.HEADING_ACCOUNT_HISTORY_REPORT)
      .should("be.visible")
      .contains("Account History Listing");
  }
  clickRunReportButton() {
    cy.xpath(this.BTN_RUN_REPORT).click();
  }
  clickSetYearButton() {
    cy.xpath(this.BTN_SET_YEAR).click();
  }
  clickRunReportOnAccountRegisterButton() {
    cy.xpath(this.BTN_RUN_REPORT_ON_ACCOUNT_REGISTER_LOGIN)
    .should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT_ON_ACCOUNT_REGISTER_LOGIN).click();
  }
  clickReturnToReportListButton() {
    cy.xpath(this.BTN_RETURN_TO_REPORT).click();
  }
  clickReportReturnButton() {
    cy.xpath(this.Btn_Back).click();
  }
  SelectYear() {
    cy.get(this.DROPDOWN_YEAR).select("N/A - N/A").should("have.value", "N/A|N/A");
    cy.xpath(this.BTN_RUN_REPORT).click()
  }
  SelectAccount() {
    cy.get(this.DROPDOWN_ACCOUNT).select("Test, AccountAuto1").should("have.value", "522111");
  }
  SelectYearOnAccountListing() {
    cy.get(this.DROPDOWN_YEAR).select("N/A - N/A").should("have.value", "N/A|N/A");
  }
  clickSelectEstablishmentButton() {
    cy.xpath(this.BTN_SELECT_ESTABLISHMENT).should("be.visible")
    cy.xpath(this.BTN_SELECT_ESTABLISHMENT).click()
  }
  clickReportBackButton() {
    cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).click()
  }
}
export default AccountsReportPage;
