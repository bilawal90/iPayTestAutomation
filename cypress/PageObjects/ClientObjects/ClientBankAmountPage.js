class ClientBankAmountPage
{
  Heading_Page = "//h3[contains(text(),'Council Test acount - Banked')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/BankedDetailList?BankDetailID=1081";
  Page_URL_RETURN = "https://test.ipayimpact.co.uk/Test/Banking/BankedDetailList?bankDetailID=1081";
  Btn_Add_Banked_Amount = "//a[normalize-space()='Add Banked Amount']";
   Btn_Back = "//a[normalize-space()='Back']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Council Test acount - Banked Amount')
  }
  verifyReturnHeadingAndURL()
  {
    cy.url().should("eq", this.Page_URL_RETURN);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Council Test acount - Banked Amount')
  }
  clickAddBankedAmount()
  {
    cy.xpath(this.Btn_Add_Banked_Amount).should('be.visible');
    cy.xpath(this.Btn_Add_Banked_Amount).click();
  }
  clickBackButton()
  {
    cy.xpath(this.Btn_Back).should('be.visible');
    cy.xpath(this.Btn_Back).click();
  }
}
export default ClientBankAmountPage