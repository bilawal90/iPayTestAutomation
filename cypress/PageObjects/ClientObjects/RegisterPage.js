class RegisterPage {
  URL = "https://test.ipayimpact.co.uk/Test/Account/Register"
  HEADING = "//h2[normalize-space()='Registration']"
  BTN_REGISTER = "//input[@id='btnSubmit']"
  VALIDATION_EMAIL = "#Email-error"
  VALIDATION_CONFIRM_EMAIL = "#ConfirmEmail-error"
  VALIDATION_CONFIRM_PASSWORD = "#ConfirmPassword-error"
  VALIDATION_TEST = "#Captcha-error"
  BTN_RETURN_TO_LOGIN = "//a[normalize-space()='Return to Log In']"
  clickReturnToLoginButton() {
    cy.xpath(this.BTN_RETURN_TO_LOGIN).click();
  }
  verifyValidations()
  {
    cy.get(this.VALIDATION_EMAIL).should('be.visible').and('contain', 'The Email field is required.')
    cy.get(this.VALIDATION_CONFIRM_EMAIL).should('be.visible').and('contain', 'The Confirm Email field is required.')
    cy.get(this.VALIDATION_CONFIRM_PASSWORD).should('be.visible').and('contain', 'The Password Confirm field is required.')
    cy.get(this.VALIDATION_TEST).should('be.visible').and('contain', 'The Maths Test Answer field is required.')
  }
  clickRegisterButton() {
    cy.xpath(this.BTN_REGISTER).click();
  }
  verifyPageHeadingAndURL()
  {
    cy.url().should("include", this.URL);
    cy.xpath(this.HEADING).should('be.visible').and('contain', 'Registration')
  }
}
export default RegisterPage;
