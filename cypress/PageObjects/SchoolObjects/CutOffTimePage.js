class CutOffTimePage {
  HEADING_PAGE = "//h3[normalize-space()='Cut Off Day & Time']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Preorder/CutOffDayTime?fundID="
VALIDATION_CUT_OFF_WEEK = "#SelectedDayOfWeek-error"
VALIDATION_CUT_OFF_HOUR = "#SelectedCutOffHour-error"
BTN_SAVE = "#btnSubmit"
BREADCRUMB_FUNDS = "//a[normalize-space()='Funds']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Cut Off Day & Time");
}
verifyValidationMessage()
{
    cy.get(this.VALIDATION_CUT_OFF_WEEK)
      .should("be.visible")
      .contains("The Day of Week field is required.");
      cy.get(this.VALIDATION_CUT_OFF_HOUR)
      .should("be.visible")
      .contains("The Cut Off Hour field is required.");
}
clickSaveButton()
{
  cy.get(this.BTN_SAVE).click()
}
clickFundsBreadCrumb()
{
  cy.xpath(this.BREADCRUMB_FUNDS).click()
}
}
export default CutOffTimePage
