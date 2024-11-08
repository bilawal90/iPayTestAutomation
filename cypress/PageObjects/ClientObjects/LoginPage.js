class Login {
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Account/LogOn"
  URL_CamelCase_PAGE = "https://test.ipayimpact.co.uk/Test/Account/Logon"
  HEADING_PAGE = "//h2[contains(text(),'Sign in to your account')]" 
  PAGE_LOGO = "//img[@alt='iPayimpact Logo']"
  txtUserName = "#UserID";
  textPassword = "#Password";
  btnLogon = "input[id='btnSubmit']";
  btnRegister = ".btn.btn-lg.btn-block.btn-secondary";
  linkHelp = ":nth-child(4) > .text-muted";
  LinkRecoverUsername = "a[href*='RecoverUserID']";
  LinkRecoverPassword = "a[href*='RecoverPassword']";
  LinkFAQ = "a[href*='FAQ']";
  LinkGovScottWhat = "a[href*='myaccount']";
  LinkSchoolLearnMore = "a[href*='https://www.schools.ipayimpact.co.uk/']";
  LinkMyGovScott = "a.btn:nth-child(7)";
  HeadingWelcome = "h2.text-xl-header";
  HeadingSignIn = "h2.text-muted";
  LINK_USERNAME = "//a[normalize-space()='Recover Your Username']"
  LINK_RESET_PASSWORD = "//a[normalize-space()='Reset Your Password']"
  BTN_REGISTER = "//a[normalize-space()='Register']"
  LINK_FAQS = "//a[normalize-space()='Read our FAQs']"
ERROR_LOGIN = "//li[contains(text(),'Login was unsuccessful.')]"
  clickFAQLink() {
    cy.xpath(this.LINK_FAQS).click();
  }
 clickRegisterButton() {
    cy.xpath(this.BTN_REGISTER).click();
  }
 clickResetPasswordLink() {
    cy.xpath(this.LINK_RESET_PASSWORD).click();
  }
  clickUsernameLink() {
    cy.xpath(this.LINK_USERNAME).click();
  }
  verifyLoginError()
  {
    cy.url().should("include", this.URL_CamelCase_PAGE);
    cy.xpath(this.ERROR_LOGIN).should('be.visible').and('contain', 'Login was unsuccessful. Please correct the errors and try again.')
  }
  verifyPageHeadingAndURL()
  {
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Sign in to your account')
    cy.xpath(this.PAGE_LOGO).should('be.visible')
  }
  setUserName(username) {
    cy.get(this.txtUserName).clear()
    cy.get(this.txtUserName).type(username);
    cy.get(this.txtUserName).should("have.value", username);
  }
  setPassword(password) {
    cy.get(this.textPassword).clear()
    cy.get(this.textPassword).type(password);
    cy.get(this.textPassword).should("have.value", password);
  }
  clickLogon() {
    cy.get(this.btnLogon).click();
  }
  verifyLogin() {
    cy.wait(2000);
    cy.get(this.LinkRecoverUsername).should("not.exist");
  }
}
export default Login;
