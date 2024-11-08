class SchoolBankAmountPage
{
  Heading_Page = "//h3[contains(text(),'School Account - Banked Amount')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/BankedDetailList?BankDetailID=1082";
  Page_URL_BACK = "https://test.ipayimpact.co.uk/Test/Banking/BankedDetailList?bankDetailID=1082";
  Btn_Add_Banked_Amount = "//a[normalize-space()='Add Banked Amount']";
   Btn_Back = "//a[normalize-space()='Back']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'School Account - Banked Amount')
  }
  verifyHeadingandURLOnBack()
  {
    cy.url().should("eq", this.Page_URL_BACK);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'School Account - Banked Amount')
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
export default SchoolBankAmountPage