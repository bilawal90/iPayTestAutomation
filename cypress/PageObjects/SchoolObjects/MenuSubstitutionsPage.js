class MenuSubstitutionsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Menu/MenuSubstitutions?fundID="
PAGE_HEADING = "//h3[normalize-space()='Menu Substitutions']"
VALIDATION_WEEK_START_DATE = "#SelectedDate-error"
VALIDATION_MENU_CATEGORY = "#MenuCategoryID-error"
BTN_SELECT = "#btnSubmitDate"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Menu Substitutions");
}
verifyPageValidation()
{
    cy.get(this.VALIDATION_WEEK_START_DATE)
      .should("be.visible")
      .contains("The Week Start Date field is required.");
      cy.get(this.VALIDATION_MENU_CATEGORY)
      .should("be.visible")
      .contains("The Menu Category field is required.");
}
clickSelectButton()
{
  cy.get(this.BTN_SELECT).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
}
export default MenuSubstitutionsPage
