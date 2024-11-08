class CommunicationsPage
{
  Heading_Page = "//h3[normalize-space()='Communications']";
  ACCOUNT_CSV_Heading_Page = "//h3[normalize-space()='Accounts CSV']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Communication/ClientIndex"
  ACCOUNT_CSV_Page_URL = "https://test.ipayimpact.co.uk/Test/Communication/AccountsCSV"
  Link_Account_CSV = "//a[normalize-space()='Accounts CSV']"
  VALIDATION_ESTABLISHMENT = "#SchoolID-error";
  Btn_Create = "//input[@name='Submit']";
  Btn_Retrun_To_Comms = "//a[normalize-space()='Return to Comms']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Communications')
  }
  verifyHeadingandURLOnAccountCSVpage()
  {
    cy.url().should("eq", this.ACCOUNT_CSV_Page_URL);
    cy.xpath(this.ACCOUNT_CSV_Heading_Page).should('be.visible').and('contain', 'Accounts CSV')
  }
  verifyValidationMessage()
  {
    cy.get(this.VALIDATION_ESTABLISHMENT).should('be.visible').and('contain', 'The Establishment field is required.')
  }
  clickAccountCSVLink()
  {
    cy.xpath(this.Link_Account_CSV).should('be.visible');
    cy.xpath(this.Link_Account_CSV).click();
  }
  clickCreateButton()
  {
    cy.xpath(this.Btn_Create).should('be.visible');
    cy.xpath(this.Btn_Create).click();
  }
  clickReturnToComms()
  {
    cy.xpath(this.Btn_Retrun_To_Comms).should('be.visible');
    cy.xpath(this.Btn_Retrun_To_Comms).click();
  }
}
export default CommunicationsPage