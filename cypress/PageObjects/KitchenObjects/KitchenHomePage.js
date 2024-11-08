class KitchenHomePage 
{
  HeadingHome = ".col-12 > h3";
  TextHome = "h4[class='mb-0']";
  toggleMenu = ".collapse-toggle";
  logoMenu   = ".navbar-brand-img";
  linksMenu  = "//a[@class='nav-link']/i";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test"
  Link_Configure = "//a[normalize-space()='Configure']"
  CONFIGURE_POPUP = "#configureModalLabel"
  POPUP_CLOSE = "//button[normalize-space()='Close']"
  HEADING_KITCHEN = "//h3[normalize-space()='Welcome to iPayimpact']"
  HEADING_SCHOOL_FINANCE = "//h3[normalize-space()='Establishment Finance Home']"
  HEADING_SCHOOL_ADMIN_PREORDER = "//h3[normalize-space()='Establishment Admin Home (Fusion Online)']"
  SA_SUBHEADING = "//h3[normalize-space()='Fund Summaries']";
  DAILY_VIEW_REPORT = "input[value='View Report']";
  DAILY_PREORDER_VIEW_REPORT = "//a[normalize-space()='View Report']";
  DAILY_PREORDER_VIEW_REPORT_SF = "//a[normalize-space()='View Preorder Fund']";
  LINK_VIEW_PREORDER_FUND = "//a[normalize-space()='View Preorder Fund']"
  clickViewPreOrderFundLink() {
    cy.xpath(this.LINK_VIEW_PREORDER_FUND).click({ force: true });
  }
  clickDailyPreOrderViewReport() {
    cy.xpath(this.DAILY_PREORDER_VIEW_REPORT).click({ force: true });
  }
  clickSFDailyPreOrderViewReport() {
    cy.xpath(this.DAILY_PREORDER_VIEW_REPORT_SF).click({ force: true });
  }
  clickDailyPaymentsViewReport() {
    cy.get(this.DAILY_VIEW_REPORT).trigger('mouseover').click({ force: true });
  }
  closePopupWindow()
  {
  cy.xpath(this.POPUP_CLOSE).contains('Close').trigger('mouseover').click({force: true}).click({force: true});
  }
   verifyPopupWindowHeading() {
    cy.get(this.CONFIGURE_POPUP).trigger('mouseover').should("contain.text", "Configure Summaries");
  }
clickConfigureLink() {
    cy.xpath(this.Link_Configure).trigger('mouseover').click();
  }
  verifyKitchenHeadingAndURL() {
    cy.xpath(this.HEADING_KITCHEN).should("have.text", "Welcome to iPayimpact");
    cy.title().should('eq','Welcome to iPayimpact')
    cy.url().should("include", this.URL_PAGE);
  }
  verifySFHeadingAndURL() {
    cy.xpath(this.HEADING_SCHOOL_FINANCE).should("have.text", "Establishment Finance Home");
    cy.title().should('eq','Welcome to iPayimpact')
    cy.url().should("include", this.URL_PAGE);
  }
  verifySAPHeadingAndURL() {
    cy.xpath(this.HEADING_SCHOOL_ADMIN_PREORDER).should("contain", "Establishment Admin Home (Fusion Online)");
    cy.title().should('eq','Welcome to iPayimpact')
    cy.url().should("include", this.URL_PAGE);
  }
  verifyTextHome() {
    cy.xpath(this.TextHome).should('contain.text',"There are no actions that require your attention");
  }
  verifySASubheading()
  {
    cy.xpath(this.SA_SUBHEADING).should('have.text',"Fund Summaries");
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
  VerifyLinksMenuKitchen()
  {
    cy.xpath(this.linksMenu).should('have.length','7') ;
  }
}
export default KitchenHomePage
