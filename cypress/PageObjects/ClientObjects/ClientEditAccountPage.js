class ClientEditAccountPage
{
  Heading_Page = "//h3[normalize-space()='Council Test acount - Edit Account']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/EditAccount?bankDetailID=1081"
  Btn_Save_Account = "//input[@id='btnSubmit']";
   Btn_Back = "//a[normalize-space()='Back']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Council Test acount - Edit Account')
  }
  clickSaveAccount()
  {
    cy.xpath(this.Btn_Save_Account).should('be.visible');
    cy.xpath(this.Btn_Save_Account).click();
  }
  clickBackButton()
  {
    cy.xpath(this.Btn_Back).should('be.visible');
    cy.xpath(this.Btn_Back).click();
  }
}
export default ClientEditAccountPage