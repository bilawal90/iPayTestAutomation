class LedgerCodesPage
{
  Heading_Page = "//h3[normalize-space()='Ledger Codes']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Banking/LedgerCodes"
  Page_URL_Callback = "https://test.ipayimpact.co.uk/Test/Banking/LedgerCodes?includeInactive=False";
  Btn_Add_Ledger_Code = "//a[normalize-space()='Add Ledger Code']";
  Btn_Refresh_List = "//input[@id='refreshButton']" ;
  Btn_Back = "//a[normalize-space()='Back']";
  Info_Text = "//td[normalize-space()='There are no Ledger Codes to show.']"
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Ledger Codes')
  }
  verifyHeadingandURLCallBack()
  {
    cy.url().should("eq", this.Page_URL_Callback);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Ledger Codes')
  }
  VerifyPageWebElements()
  {
    cy.xpath(this.Btn_Refresh_List).should('be.visible');
    cy.xpath(this.Info_Text).should('be.visible').and('contain','There are no Ledger Codes to show.')
  }
  clickAddLedgerCode()
  {
    cy.xpath(this.Btn_Add_Ledger_Code).should('be.visible');
    cy.xpath(this.Btn_Add_Ledger_Code).click();
  }
  clickBackButton()
  {
    cy.xpath(this.Btn_Back).should('be.visible');
    cy.xpath(this.Btn_Back).click();
  }
}
export default LedgerCodesPage