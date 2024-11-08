class AddLedgerCodePage
{
  Heading_Page = "//h3[normalize-space()='Add Ledger Code']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/AddEditLedgerCode"
  Btn_Save_Ledger_Code = "//input[@id='btnSubmit']";
  Btn_Cancel = "//a[normalize-space()='Cancel']";
  Validation_Ledger_Code = "#LedgerCode-error";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Add Ledger Code')
  }
  VerifyValidationMessageAppearing()
  {
    cy.get(this.Validation_Ledger_Code).should('be.visible').and('contain','The Ledger Code field is required.')
  }
  clickSaveLedgerCode()
  {
    cy.xpath(this.Btn_Save_Ledger_Code).should('be.visible');
    cy.xpath(this.Btn_Save_Ledger_Code).click();
  }
  clickCancelButton()
  {
    cy.xpath(this.Btn_Cancel).should('be.visible');
    cy.xpath(this.Btn_Cancel).click();
  }
}
export default AddLedgerCodePage