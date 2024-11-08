class ResetPasswordPage {
  URL_PASSWORD = "https://test.ipayimpact.co.uk/Test/Account/RecoverPassword"
  URL_SUCCESS = "https://test.ipayimpact.co.uk/Test/Account/RecoverPasswordSent"
  HEADING_PASSWORD = "//h2[normalize-space()='Reset Password']"
  HEADING_SUCCESS = "//h2[normalize-space()='Reset Password']"
  BTN_RESET_PASSWORD = "//input[@id='btnSubmit']"
  VALIDATION_USERNAME = "#UserID-error"
  VALIDATION_EMAIL = "#EmailAddress-error"
  BTN_RETURN_TO_LOGIN = "//a[normalize-space()='Return to Log In']"
  TEXTFIELD_USERNAME = "#UserID"
TEXTFIELD_EMAIL = "#EmailAddress"
  typeValidUsernamePassword() 
  {
    cy.get(this.TEXTFIELD_USERNAME).type("103124");
    cy.get(this.TEXTFIELD_EMAIL).type("abc@abc.com");
  }
  clickReturnToLoginButtonButton() {
    cy.xpath(this.BTN_RETURN_TO_LOGIN).click();
  }
  verifyValidations()
  {
    cy.get(this.VALIDATION_USERNAME).should('be.visible').and('contain', 'The Username field is required.')
    cy.get(this.VALIDATION_EMAIL).should('be.visible').and('contain', 'The Email Address field is required.')
  }
  clickResetPasswordButton() {
    cy.xpath(this.BTN_RESET_PASSWORD).click();
  }
  verifyPageHeadingAndURL()
  {
    cy.url().should("include", this.URL_PASSWORD);
    cy.xpath(this.HEADING_PASSWORD).should('be.visible').and('contain', 'Reset Password')
  }
  verifySuccessPageHeadingAndURL()
  {
    cy.url().should("include", this.URL_SUCCESS);
    cy.xpath(this.HEADING_SUCCESS).should('be.visible').and('contain', 'Reset Password')
  }
}
export default ResetPasswordPage;
