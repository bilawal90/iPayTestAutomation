class CreateLogin {
  Page_Heading = "//h3[normalize-space()='Create Login']";
  TextFields_Label = "label[class='col-sm-4 col-form-label']";
  TextFields = "input[class='form-control']";
  Alert = "div[class='alert alert-danger']";
  Btn_Create = "input[type='submit']";
  Btn_Cancel = "a[class='btn btn-sm btn-info']";
  TextFields_Validations = "span[class='has-error']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Login/CreateLogin"
    HEADING_PAGE = "//h3[normalize-space()='Create Login']"
    verifyHeadingAndURL()
    {
        cy.url().should("eq", this.URL_PAGE);
        cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Create Login');
    }
  verifyCreateLoginPageOpen() {
    cy.xpath(this.Page_Heading)
      .should("be.visible")
      .and("contain", "Create Login");
    cy.url().should("include", "/Test/Login/CreateLogin");
  }
  verifyTextFieldslabelsQuantity() {
    cy.get(this.TextFields_Label).should("have.length", 9);
  }
  verifyTextFieldsQuantity() {
    cy.get(this.TextFields).should("have.length", 9);
  }
  verifyTextFieldsValidations() {
    cy.get(this.TextFields_Validations).should("have.length", 9);
  }
  verifyAlertText() {
    cy.get(this.Alert)
      .should("be.visible")
      .and(
        "contain",
        'When you click "Create" this form is submitted and results in an email being generated and sent to the new user. It details their Username and provides a link by which they can Activate their account. In order for the new user to be able to login, they will '
      );
  }
  verifyCreateButton() {
    cy.get(this.Btn_Create).should("be.visible");
  }
  verifyCancelButton() {
    cy.get(this.Btn_Cancel).should("be.visible");
  }
  clickCreateButton() {
    cy.get(this.Btn_Create).click();
  }
  clickCancelButton() {
    cy.get(this.Btn_Cancel).click();
  }
  verifyCancelButtonFunctionality() {
    cy.url().should("include", "/Test/Login/ListLogins");
  }
}
export default CreateLogin;
