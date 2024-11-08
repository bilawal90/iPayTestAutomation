class CreateEstablishmentUser {
  Heading_Page = "//h3[normalize-space()='Create Establishment Admin User']";
  Btn_Create = "//input[@id='btnSubmit']";
  Btn_Cancel = "//a[normalize-space()='Cancel']";
  Alert_Msg = "//div[@class='alert alert-danger']";
  TextFields = "input[class='form-control']";
  Validation_Message = "span[class='has-error']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Account/ClientCreateUser"
  verifyPageHeadingAndURL() {
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Create Establishment Admin User");
  }
  clickCreateButton() {
    cy.xpath(this.Btn_Create).should("be.visible")
    cy.xpath(this.Btn_Create).click();
  }
  verifyAlertVisibility() {
    cy.xpath(this.Alert_Msg).should("be.visible");
  }
  verifyValidationMessages() {
    cy.get(this.Validation_Message).should("have.length", 8);
  }
  clickCancelButton() {
    cy.xpath(this.Btn_Cancel).should("be.visible")
    cy.xpath(this.Btn_Cancel).click();
  }
}
export default CreateEstablishmentUser;
