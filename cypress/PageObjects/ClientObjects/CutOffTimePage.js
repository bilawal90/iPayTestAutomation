class CutOffTimePage
{
  Heading_Page = "//h3[normalize-space()='Cut Off Day & Time']";
  Sub_Heading_Page = "//h3[normalize-space()='Cut Off Time']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Preorder/CutOffDayTime"
  Btn_Save_CutOffTime = "//input[@id='btnSubmit']";
  Btn_Return_Menu_List = "//a[normalize-space()='Return to Menu List']";
  Validation_CuttOff_Week = "#SelectedDayOfWeek-error"
  Validation_CuttOff_Hour = "#SelectedCutOffHour-error"
  verifyHeadingsandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').contains('Cut Off Day & Time')
    cy.xpath(this.Sub_Heading_Page).should('be.visible').contains('Cut Off Time')
  }
  clickSaveCutOffTimeButton()
  {
    cy.xpath(this.Btn_Save_CutOffTime).should('be.visible');
    cy.xpath(this.Btn_Save_CutOffTime).click();
  }
  clickReturnToMenuListButton()
  {
    cy.xpath(this.Btn_Return_Menu_List).should('be.visible');
    cy.xpath(this.Btn_Return_Menu_List).click();
  }
  verifyValidationMessagesAppearing()
  {
    cy.get(this.Validation_CuttOff_Week).should("be.visible").contains("The Day of Week field is required.")
    cy.get(this.Validation_CuttOff_Hour).should("be.visible").contains("The Cut Off Hour field is required.")
  }
}
export default CutOffTimePage