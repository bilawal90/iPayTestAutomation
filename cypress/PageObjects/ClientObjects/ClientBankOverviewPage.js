class ClientBankOverviewPage
{
  Heading_Page = "//h3[normalize-space()='Council Test acount - Bank Overview']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/ManageAccount?bankDetailID=1081"
  Btn_Edit_Account = "//a[normalize-space()='Edit Account']";
  Btn_Manage_Credit = "//a[normalize-space()='Manage Credits/Debits']";
  Btn_Banked_Amount = "//a[normalize-space()='Manage Banked Amount']";
  Btn_Back = "//a[normalize-space()='Back']";
  Toast_Edit_Success = ".text-success";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Council Test acount - Bank Overview')
  }
  verifyEditSuccessToast()
  {
    cy.get(this.Toast_Edit_Success).should('be.visible').and('contain', 'Successfully updated account details')
  }
  clickEditAccountButton()
  {
    cy.xpath(this.Btn_Edit_Account).should('be.visible');
    cy.xpath(this.Btn_Edit_Account).click();
  }
  clickManageCreditButton()
  {
    cy.xpath(this.Btn_Manage_Credit).should('be.visible');
    cy.xpath(this.Btn_Manage_Credit).click();
  }
  clickManagebankedAmountButton()
  {
    cy.xpath(this.Btn_Banked_Amount).should('be.visible');
    cy.xpath(this.Btn_Banked_Amount).click();
  }
  clickBackButton()
  {
    cy.xpath(this.Btn_Back).should('be.visible');
    cy.xpath(this.Btn_Back).click();
  }
}
export default ClientBankOverviewPage