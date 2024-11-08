class ClientAddAmountPage
{
  Heading_Page = "//h3[contains(text(),'Council Test acount - Add Banked Amount')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/AddBankedDetail?bankDetailID=1081";
  Btn_Save_Amount = "//input[@id='btnSubmit']";
   Btn_Cancel = "//a[normalize-space()='Cancel']";
Validation_Pay = "#PayInReference-error";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Council Test acount - Add Banked Amount')
  }
  clickSaveAmount()
  {
    cy.xpath(this.Btn_Save_Amount).should('be.visible');
    cy.xpath(this.Btn_Save_Amount).click();
  }
  clickCancelButton()
  {
    cy.xpath(this.Btn_Cancel).should('be.visible');
    cy.xpath(this.Btn_Cancel).click();
  }
  verifyValidationMessages()
  {
  cy.get(this.Validation_Pay).should('be.visible').and('contain', 'The Pay in slip reference field is required.')
  }
}
export default ClientAddAmountPage
