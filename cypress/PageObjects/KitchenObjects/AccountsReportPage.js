class AccountsReportPage {
  Login_Activity_Heading_Page =
    "//div[contains(text(),'Login Activity Report')]";
  HEADING_PAGE_ACCOUNT_REGISTERED_LOGINS =
    "//h3[normalize-space()='Account Registered Logins']";
  URL_PAGE_ACCOUNT_REGISTERED_LOGINS =
    "https://test.ipayimpact.co.uk/Test/Report/";
  HEADING_REPORT_ACCOUNT_DETAILS = "//div[contains(text(),'Account Detail')]";
  URL_REPORT_ACCOUNT_DETAILS =
    "https://test.ipayimpact.co.uk/Test/Reports/AccountsRegisteredLogins?Parameters=44401%257c0%257cFalse";
  HEADING_PAGE_ACCOUNTS_WITHOUT_LOGINS =
    "//h3[normalize-space()='Accounts Without Logins Report']";
  URL_PAGE_ACCOUNTS_WITHOUT_LOGINS =
    "https://test.ipayimpact.co.uk/Test/Report/AccountsWithoutLogins?ClientID=444";
  HEADING_REPORT_ACCOUNTS_WITHOUT_LOGINS =
    "//div[contains(text(),'Accounts Without Logins')]";
  URL_REPORT_ACCOUNTS_WITHOUT_LOGINS =
    "https://test.ipayimpact.co.uk/Test/Reports/AccountsWithoutLogins?Parameters=444%257c44401";
  Login_Activity_Page_URL =
    "https://test.ipayimpact.co.uk/Test/Reports/LoginActivity?Parameters";
  HEADING_UNUSED_LOGINS_PAGE = "//h3[normalize-space()='Unused Logins Report']";
  HEADING_UNUSED_LOGINS_REPORT =
    "//div[contains(text(),'Logins - Activated but No Payments Made')]";
  URL_UNUSED_LOGINS_PAGE =
    "https://test.ipayimpact.co.uk/Test/Report/UnusedLogins";
  URL_UNUSED_LOGINS_REPORT =
    "https://test.ipayimpact.co.uk/Test/Reports/UnusedLogins?Parameters";
  BTN_SELECT_ESTABLISHMENT = "//input[@id='btnInstitution']";
  DROPDOWN_ESTABLISHMENT = "//select[@id='Establishment']";
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RUN_REPORT_ON_ACCOUNT_REGISTER_LOGIN = "//input[@value='Run Report']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  Btn_Back = "//img[@alt='Back']";
  VALIDATION_ESTABLISHMENT = "#Establishment-error";
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
  verifyHeadersOnAccountsWithoutLoginPage() {
    cy.url().should("eq", this.URL_PAGE_ACCOUNTS_WITHOUT_LOGINS);
    cy.xpath(this.HEADING_PAGE_ACCOUNTS_WITHOUT_LOGINS)
      .should("be.visible")
      .contains("Accounts Without Logins Report");
  }
  verifyHeadersOnAccountDetailsReport() { 
    cy.url().should("eq", this.URL_REPORT_ACCOUNT_DETAILS);
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
  clickRunReportButton() {
    cy.xpath(this.BTN_RUN_REPORT).click();
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
  SelectEstablishment() {
    cy.xpath(this.DROPDOWN_ESTABLISHMENT).select("SAAuto1 *REMOVE*").should("have.value", "44401");
    cy.xpath(this.BTN_SELECT_ESTABLISHMENT).should("be.visible")
    cy.xpath(this.BTN_SELECT_ESTABLISHMENT).click()
  }
  clickSelectEstablishmentButton() {
    cy.xpath(this.BTN_SELECT_ESTABLISHMENT).should("be.visible")
    cy.xpath(this.BTN_SELECT_ESTABLISHMENT).click()
  }
}
export default AccountsReportPage;
