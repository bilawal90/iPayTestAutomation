class ClientHome {
  HeadingHome = ".col-12 > h3";
  TextHome = "div[class='col-md-12'] p";
  toggleMenu = ".collapse-toggle";
  logoMenu = ".navbar-brand-img";
  linksMenu = "//a[@class='nav-link']/i";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test"
  HEADING_CLIENT_FINANCE = "//h3[normalize-space()='Client Finance Home']"
  HEADING_CLIENT_CATERING = "//h3[normalize-space()='Welcome to iPayimpact']"
  verifyHeadingAndURL() {
    cy.get(this.HeadingHome).should("have.text", "Client Admin Home");
    cy.title().should('eq', 'Welcome to iPayimpact')
    cy.url().should("include", this.URL_PAGE);
  }
  verifyClientFinanceHeadingAndURL() {
    cy.xpath(this.HEADING_CLIENT_FINANCE).should("have.text", "Client Finance Home");
    cy.title().should('eq', 'Welcome to iPayimpact')
    cy.url().should("include", this.URL_PAGE);
  }
  verifyClientCateringHeadingAndURL() {
    cy.xpath(this.HEADING_CLIENT_CATERING).should("have.text", "Welcome to iPayimpact");
    cy.title().should('eq', 'Welcome to iPayimpact')
    cy.url().should("include", this.URL_PAGE);
  }
  verifyTextHome() {
    cy.get(this.TextHome).should('have.text', "There are no issues currently needing to be drawn to your attention.");
  }
  clickToggleMenu() {
    cy.get(this.toggleMenu).click();
  }
  mouseoverToggleMenu() {
    cy.get(this.toggleMenu).trigger('mouseover')
  }
  verifyLogoMenu() {
    cy.get(this.logoMenu).should('be.visible').and('exist')
  }
  VerifyLinksMenu() {
    cy.xpath(this.linksMenu).should('have.length', '10');
  }
  VerifyLinksMenuSF() {
    cy.xpath(this.linksMenu).should('have.length', '5');
  }
  VerifyLinksMenuCC() {
    cy.xpath(this.linksMenu).should('have.length', '4');
  }
  VerifyLinksMenuCE() {
    cy.xpath(this.linksMenu).should('have.length', '3');
  }
  VerifyLinksMenuCateringCompany() {
    cy.xpath(this.linksMenu).should('have.length', '5');
  }
}
export default ClientHome;
