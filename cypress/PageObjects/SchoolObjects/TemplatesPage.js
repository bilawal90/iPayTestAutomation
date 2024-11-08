class TemplatesPage
{
  Heading_Page = "//text[normalize-space()='Templates']";
  Heading_Temp_Modal = "#ui-id-1"
  DEFAULT_TEMP_Heading_Page = "//h3[normalize-space()='Default Templates']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Templates"
  DEFAULT_TEMP_Page_URL = "https://test.ipayimpact.co.uk/Test/Templates/DefaultTemplatesClient"
  DEFAULT_TEMP_Page_URL_SA = "https://test.ipayimpact.co.uk/Test/Templates/DefaultTemplates"
  Link_Account_CSV = "//a[normalize-space()='Accounts CSV']"
  BTN_VIEW_TEMP = "(//input[@value='View Template'])[1]";
  Btn_Create_Template = "//a[normalize-space()='Create Template']";
  Btn_Set_Default_Template = "//a[normalize-space()='Set Default Templates']";
  Btn_Apply_Filter= "//input[@value='Apply Filter']";
  Btn_Clear_Filter= "//input[@value='Clear Filter']";
  Checkbox_Include = "//input[@id='IncludeSystem']";
  Text_No_Existing = "//label[normalize-space()='There are no existing templates']"
  BUTTON_CLOSE_MODAL = "//button[normalize-space()='Close']"
  BTN_DEAFULT_SAVE = "#btnSubmit"
  TOAST_SUCCESS_TEMP = "//span[normalize-space()='Successfully updated default templates']"
  verifyHeadingandURL()
  {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Templates')
  }
  verifyHeadingOnTempModal()
  {
    cy.get(this.Heading_Temp_Modal).should('be.visible').and('contain', 'Template')
  }
  verifyDefaultTempHeadingAndURL()
  {
    cy.url().should("include", this.DEFAULT_TEMP_Page_URL_SA);
    cy.xpath(this.DEFAULT_TEMP_Heading_Page).should('be.visible').and('contain', 'Default Templates')
  }
  VerifyInfoTextOnEmpty()
  {
    cy.xpath(this.Text_No_Existing).should('be.visible').and('contain', 'There are no existing templates')
  }
  VerifyInfoText()
  {
    cy.xpath(this.Text_No_Existing).should('not.exist');
  }
  verifySuccessToast()
  {
    cy.xpath(this.TOAST_SUCCESS_TEMP).should('be.visible').and('contain', 'Successfully updated default templates')
  }
  clickSystemTemplatesCheckBox()
  {
    cy.xpath(this.Checkbox_Include).should('be.visible');
    cy.xpath(this.Checkbox_Include).click();
  }
  clickApplyFilterButton()
  {
    cy.xpath(this.Btn_Apply_Filter).should('be.visible');
    cy.xpath(this.Btn_Apply_Filter).click();
  }
  clickSetDefaultTemplateButton()
  {
    cy.xpath(this.Btn_Set_Default_Template).should('be.visible');
    cy.xpath(this.Btn_Set_Default_Template).click();
  }
  clickViewTemplateButton()
  {
    cy.xpath(this.BTN_VIEW_TEMP).should('be.visible');
    cy.xpath(this.BTN_VIEW_TEMP).click();
  }
  clickCloseTempModalButton()
  {
    cy.xpath(this.BUTTON_CLOSE_MODAL).should('be.visible');
    cy.xpath(this.BUTTON_CLOSE_MODAL).click();
  }
  clickSaveButtonOnDefaultTemp()
  {
    cy.get(this.BTN_DEAFULT_SAVE).should('be.visible');
    cy.get(this.BTN_DEAFULT_SAVE).click();
  }
  clickCreateTemplateButton()
  {
    cy.xpath(this.Btn_Create_Template).should('be.visible');
    cy.xpath(this.Btn_Create_Template).click();
  }
}
export default TemplatesPage