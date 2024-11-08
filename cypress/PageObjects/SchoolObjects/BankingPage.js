class BankingPage {
  Heading_Page = "//h3[normalize-space()='Banking']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/ManageAccounts";
  Filter_URL = "https://test.ipayimpact.co.uk/Test/Banking/ManageAccounts?accountStatus=Active";
  Btn_Apply_Filter = "#btnApplyFilter";
  Btn_Manage_Ledger_Codes = "//a[normalize-space()='Manage Ledger Codes']";
  Btn_Manage_Client = "a[href='/Test/Banking/ManageAccount?bankDetailID=1081']"
  Btn_Manage_Establishment ="a[href='/Test/Banking/ManageAccount?bankDetailID=1082']"
  Establishment_Name = "//td[normalize-space()='SAAuto1 *REMOVE*']";
  Establishment_ID = "//td[normalize-space()='44401']";
  Success_Threshold = ".text-success";
  Success_NotificationsSettings = "//span[@class='text-success']";
  clickManageClientButton() {
    cy.get(this.Btn_Manage_Client).should("be.visible");
    cy.get(this.Btn_Manage_Client).click();
  }
  clickManageEstablishmentButton() {
    cy.get(this.Btn_Manage_Establishment).should("be.visible");
    cy.get(this.Btn_Manage_Establishment).click();
  }
  verifyHeadingandURL()
  {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Banking')
  }
  clickApplyFilterButton() {
    cy.get(this.Btn_Apply_Filter).should("be.visible");
    cy.get(this.Btn_Apply_Filter).click();
  }
  verifyFilterURL()
  {
    cy.url().should("eq", this.Filter_URL);
  }
  clickManageLedgerCodesButton() {
    cy.xpath(this.Btn_Manage_Ledger_Codes).should("be.visible");
    cy.xpath(this.Btn_Manage_Ledger_Codes).click();
  }
  verifyThresholdSuccessMessage() {
    cy.get(this.Success_Threshold)
      .should("be.visible")
      .and("contain", "updated threshold");
    cy.url().should("eq", "https://test.ipayimpact.co.uk/Test/Institution/GetInstitutionsForClient");
  }
  verifyNotificationsSuccessMessage() {
    cy.xpath(this.Success_NotificationsSettings)
      .should("be.visible")
      .and("contain", "Successfully saved settings.");
    cy.url().should("eq", "https://test.ipayimpact.co.uk/Test/Institution/GetInstitutionsForClient");
  }
  verifyPageHeading() {
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Establishments");
    cy.url().should("include", "/Institution/GetInstitutionsForClient");
  }
  verifyContentButtonVisibility() {
    cy.xpath(this.Btn_Content).should("be.visible");
  }
  clickTermButton() {
    cy.xpath(this.Btn_TermDates).should("be.visible");
    cy.xpath(this.Btn_TermDates).click();
  }
  verifyTermButtonVisibility() {
    cy.xpath(this.Btn_TermDates).should("be.visible");
  }
  clickHolidaysButton() {
    cy.xpath(this.Btn_Holidays).should("be.visible");
    cy.xpath(this.Btn_Holidays).click();
  }
  verifyHolidaysButtonVisibility() {
    cy.xpath(this.Btn_Holidays).should("be.visible");
  }
  clickThresholdButton() {
    cy.xpath(this.Btn_Threshold).should("be.visible");
    cy.xpath(this.Btn_Threshold).click();
  }
  verifyThresholdButtonVisibility() {
    cy.xpath(this.Btn_Threshold).should("be.visible");
  }
  clickNotificationsButton() {
    cy.xpath(this.Btn_Notifications).should("be.visible");
    cy.xpath(this.Btn_Notifications).click();
  }
  verifyNotificationsButtonVisibility() {
    cy.xpath(this.Btn_Notifications).should("be.visible");
  }
  verifyUsersButtonVisibility() {
    cy.xpath(this.Btn_Users).should("be.visible");
  }
  clickUsersButton() {
    cy.xpath(this.Btn_Users).click();
  }
  verifyEstablishmentIDVisibility() {
    cy.xpath(this.Establishment_ID).should("be.visible");
  }
  verifyEstablishmentNameVisibility() {
    cy.xpath(this.Establishment_Name).should("be.visible");
  }
}
export default BankingPage;
