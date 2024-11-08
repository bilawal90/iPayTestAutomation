class Login {
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Account/LogOn"
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
  COOKIES = "#ipay-cookie-banner > div.alert.alert-primary.d-none.d-md-block"
  verifyPageHeadingAndURL()
  {
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Sign in to your account')
    cy.xpath(this.PAGE_LOGO).should('be.visible')
  }
  setUserName(username) {
    cy.get(this.txtUserName).type(username);
    cy.get(this.txtUserName).should("have.value", username);
  }
  setPassword(password) {
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
  acceptCookies() {
    cy.get(this.COOKIES).contains('Accept').click({ force: true })
  }
}
export default Login
