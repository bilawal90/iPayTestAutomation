class SchoolAddCardPage
{
  Heading_Page = "//h3[contains(text(),'School Account - Add Credit/Debit')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/AddCreditDebit?bankDetailID=1082";
  Btn_Save_Card = "//input[@id='btnSubmit']";
   Btn_Cancel = "//a[normalize-space()='Cancel']";
Validation_Reference = "#Reference-error";
Validation_Payee = "#PayeePayer-error";
Validation_Description = "#Description-error";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'School Account - Add Credit/Debit')
  }
  clickSaveCard()
  {
    cy.xpath(this.Btn_Save_Card).should('be.visible');
    cy.xpath(this.Btn_Save_Card).click();
  }
  clickCancelButton()
  {
    cy.xpath(this.Btn_Cancel).should('be.visible');
    cy.xpath(this.Btn_Cancel).click();
  }
  verifyValidationMessages()
  {
  cy.get(this.Validation_Reference).should('be.visible').and('contain', 'The Reference field is required.')
  cy.get(this.Validation_Payee).should('be.visible').and('contain', 'The Payee / Payer field is required.')
  cy.get(this.Validation_Description).should('be.visible').and('contain', 'The Description field is required.')
  }
}
export default SchoolAddCardPage