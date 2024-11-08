class FormsPage {
  Heading_Page = "//h3[normalize-space()='Forms']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Forms/Index";
  HEADING_TEMPLATES = "//h4[normalize-space()='No Templates to display']"
BTN_NEW_TEMPLATE = "//div[@id='templatesWrapper']//div//button[@id='create-template']"
HEADING_POPUP = "//h4[text()='Create Template']"
BTN_CANCEL_POPUP = "(//button[text()='Cancel'])[1]"
  verifyHeadingandURL()
  {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Forms')
    cy.xpath(this.HEADING_TEMPLATES).should('be.visible').and('contain', 'No Templates to display')
  }
  verifyPopupHeading()
  {
    cy.wait(500)
    cy.xpath(this.HEADING_POPUP).should('be.visible').and('contain', 'Create Template')
  }
  clickNewTemplateButton()
  {
    cy.xpath(this.BTN_NEW_TEMPLATE).click();
  }
  clickPopupCancelButton()
  {
    cy.xpath(this.BTN_CANCEL_POPUP).click();
  }
}
export default FormsPage;
