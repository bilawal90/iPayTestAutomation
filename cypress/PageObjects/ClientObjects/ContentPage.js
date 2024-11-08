class ContentPage
{
  Heading_Page = "//h3[normalize-space()='Content']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Institution/CustomContent"
  Btn_ShowPreview = "#showPreview";
  Editor = "div[role='textbox']";
  Preview = "#actualView";
  Btn_Save = "#btnSubmit";
  Btn_Cancel = "//a[normalize-space()='Cancel']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Content')
  }
  clickShowPreviewButton()
  {
    cy.get(this.Btn_ShowPreview).should('be.visible');
    cy.get(this.Btn_ShowPreview).click();
  }
  VerifyShowPreviewEffect()
  {
    cy.get(this.Preview).should('be.visible');
    cy.xpath(this.Btn_Cancel).should('be.visible');
  }
  clickSaveButton()
  {
    cy.get(this.Btn_Save).should('be.visible');
    cy.get(this.Btn_Save).click();
  }
}
export default ContentPage