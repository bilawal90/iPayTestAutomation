class GenerateCSVPage {
  Heading_Page = "//h3[normalize-space()='Communications']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Communication/SchoolIndex";
  PAGE_URL_ACCOUNT_CSV = "https://test.ipayimpact.co.uk/Test/Communication/AccountsCSV"
  HEADING_ACCOUNT_CSV = "//h3[normalize-space()='Accounts CSV']"
  LINK_ACCOUNT_CSV = "//a[normalize-space()='Accounts CSV']"
  BTN_RETURN_TO_COMMS = "//a[normalize-space()='Return to Comms']"
  verifyHeadingandURL()
  {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Communications')
  }
  verifyAccountCsvHeadingandURL()
  {
    cy.url().should("include", this.PAGE_URL_ACCOUNT_CSV);
    cy.xpath(this.HEADING_ACCOUNT_CSV).should('be.visible').and('contain', 'Accounts CSV')
  }
clickAccountCsvLink()
{
  cy.xpath(this.LINK_ACCOUNT_CSV).click();
}
clickReturnToCommsButton()
{
  cy.xpath(this.BTN_RETURN_TO_COMMS).click();
}
}
export default GenerateCSVPage;
