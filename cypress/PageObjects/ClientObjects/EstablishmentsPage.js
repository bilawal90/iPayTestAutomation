class EstablishmentsPage {
  Heading_Page = "//h3[normalize-space()='Establishments']";
  Btn_Content = "//a[normalize-space()='Content']";
  Btn_TermDates = "//a[normalize-space()='Term Dates']";
  Btn_Holidays = "//a[normalize-space()='Holidays']";
  Btn_Threshold = "//a[normalize-space()='Pre-order Threshold']";
  Btn_Notifications = "//a[normalize-space()='Notifications']";
  Btn_Users = "//a[normalize-space()='Users']";
  Establishment_Name = "//td[normalize-space()='SAAuto1 *REMOVE*']";
  Establishment_ID = "//td[normalize-space()='44401']";
  Success_Threshold = ".text-success";
  Success_NotificationsSettings = "//span[@class='text-success']";
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
  verifyPageHeadingAndURL() {
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Establishments");
    cy.url().should("include", "/Institution/GetInstitutionsForClient");
  }
  clickContentButton() {
    cy.xpath(this.Btn_Content).should("be.visible");
    cy.xpath(this.Btn_Content).click();
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
export default EstablishmentsPage;
