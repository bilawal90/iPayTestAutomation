class ClientBankCreditsPage
{
  Heading_Page = "//h3[contains(text(),'Council Test acount - Bank Credits')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/ManageCreditsDebits?bankDetailID=1081";
  Btn_Add_New_Card = "//a[normalize-space()='Add a new Credit/Debit']";
   Btn_Back = "//a[normalize-space()='Back']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Council Test acount - Bank Credits / Debits')
  }
  clickAddNewCard()
  {
    cy.xpath(this.Btn_Add_New_Card).should('be.visible');
    cy.xpath(this.Btn_Add_New_Card).click();
  }
  clickBackButton()
  {
    cy.xpath(this.Btn_Back).should('be.visible');
    cy.xpath(this.Btn_Back).click();
  }
}
export default ClientBankCreditsPage