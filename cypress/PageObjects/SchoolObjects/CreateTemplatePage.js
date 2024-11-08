class CreateTemplatePage
{
  Heading_Page = "//text[normalize-space()='Choose Template Type']";
  CREATE_EMAIL_TEMP_Heading_Page = "//text[normalize-space()='Create Email Template']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Templates/SelectTemplate"
  CREATE_EMAIL_TEMP_Page_URL = "https://test.ipayimpact.co.uk/Test/Templates/CreateEmailTemplate?templateType=1"
  VALIDATION_NAME = "#Name-error";
  VALIDATION_SUBJECT = "#Subject-error";
  BTN_VIEW_EXAMPLE= "//input[@value='View Example']";
  BTN_BACK_TO_TEMPLATE="//a[normalize-space()='Back']";
  Btn_Retrun_To_Comms = "//a[normalize-space()='Return to Comms']";
  BTN_CREATE_TEMPLATE = "//input[@value='Create Template']";
  BTN_BACK_INNER_PAGE = "//a[normalize-space()='Back']";
  BTN_SELECT_TEMPLATE = "//input[@name='submit']";
HEADING_MODAL = "//span[normalize-space()='Template Example']";
BTN_MODAL_CLOSE = "//button[normalize-space()='Close']";
  verifyHeadingAndURL()
  {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Choose Template Type')
  }
  verifyHeadingOnViewExampleModal()
  {
    cy.xpath(this.HEADING_MODAL).should('be.visible').and('contain', 'Template Example')
  }
  verifyHeadingandURLOnCreateEmailTempPage()
  {
    cy.url().should("eq", this.CREATE_EMAIL_TEMP_Page_URL);
    cy.xpath(this.CREATE_EMAIL_TEMP_Heading_Page).should('be.visible').and('contain', 'Create Email Template')
  }
  verifyValidationMessage()
  {
    cy.get(this.VALIDATION_NAME).should('be.visible').and('contain', 'The Name field is required.')
    cy.get(this.VALIDATION_SUBJECT).should('be.visible').and('contain', 'The Subject field is required.')
  }
  clickViewExampleButton()
  {
    cy.xpath(this.BTN_VIEW_EXAMPLE).should('be.visible');
    cy.xpath(this.BTN_VIEW_EXAMPLE).click();
  }
  clickSelectTemplateButton()
  {
    cy.xpath(this.BTN_SELECT_TEMPLATE).should('be.visible');
    cy.xpath(this.BTN_SELECT_TEMPLATE).click();
  }
  clickCloseButtonOnModal()
  {
    //cy.xpath(this.BTN_MODAL_CLOSE).scrollIntoView();
    cy.xpath(this.BTN_MODAL_CLOSE).should('be.visible');
    cy.xpath(this.BTN_MODAL_CLOSE).click({force: true});
  }
  clickCreateTemplateButton()
  {
    cy.xpath(this.BTN_CREATE_TEMPLATE).should('be.visible');
    cy.xpath(this.BTN_CREATE_TEMPLATE).click();
  }
  clickBackButtonOnCreateEmailTempPage()
  {
    cy.xpath(this.BTN_BACK_INNER_PAGE).should('be.visible');
    cy.xpath(this.BTN_BACK_INNER_PAGE).click();
  }
  clickBackToTempPage()
  {
    cy.xpath(this.BTN_BACK_TO_TEMPLATE).should('be.visible');
    cy.xpath(this.BTN_BACK_TO_TEMPLATE).click();
  }
}
export default CreateTemplatePage