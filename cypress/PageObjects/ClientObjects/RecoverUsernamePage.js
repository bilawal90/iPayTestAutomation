class RecoverUsernamePage {
  URL_USERNAME = "https://test.ipayimpact.co.uk/Test/Account/RecoverUserID"
  URL_SUCCESS = "https://test.ipayimpact.co.uk/Test/Account/RecoverUserIDSent"
  HEADING_USERNAME = "//h2[normalize-space()='Recover Username Request']"
  HEADING_SUCCESS = "//h2[normalize-space()='Recover Your Username']"
  BTN_RECOVER_USERNAME = "//input[@id='btnSubmit']"
  VALIDATION_USERNAME = "#EmailAddress-error"
  VALIDATION_EMAIL = "#EmailAddress-error"
  BTN_RETURN_TO_LOGIN = "//a[normalize-space()='Return to Log In']"
  SUCCESS_BTN_RETURN_TO_LOGIN = "//a[normalize-space()='Return to Log In']"
  TEXTBOX_EMAIL = "#EmailAddress"
  typeInvalidUsername() {
    cy.get(this.TEXTBOX_EMAIL).type("abc");
  }
  typeValidUsername() 
  {
    cy.get(this.TEXTBOX_EMAIL).clear()
    cy.get(this.TEXTBOX_EMAIL).type("abc@abc.com");
  }
  clickSucessPageReturn() 
  {
    cy.xpath(this.SUCCESS_BTN_RETURN_TO_LOGIN).click();
  }
  clickReturnToLoginButtonButton() 
  {
    cy.xpath(this.BTN_RETURN_TO_LOGIN).click();
  }
  invalidEmailValidation()
  {
    cy.get(this.VALIDATION_EMAIL).should('be.visible').and('contain', 'The Email Address field is not valid.')
  }
  verifyUsernameValidation()
  {
    cy.get(this.VALIDATION_USERNAME).should('be.visible').and('contain', 'The Email Address field is required.')
  }
  clickRecoverUsernameButton() 
  {
    cy.xpath(this.BTN_RECOVER_USERNAME).click();
  }
  verifyUsernamePageHeadingAndURL()
  {
    cy.url().should("include", this.URL_USERNAME);
    cy.xpath(this.HEADING_USERNAME).should('be.visible').and('contain', 'Recover Username Request')
   }
   verifySuccessPageHeadingAndURL()
   {
     cy.url().should("include", this.URL_SUCCESS);
     cy.xpath(this.HEADING_SUCCESS).should('be.visible').and('contain', 'Recover Your Username')
    }
  }
export default RecoverUsernamePage;
