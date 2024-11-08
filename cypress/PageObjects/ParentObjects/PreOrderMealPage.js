class PreOrderMealPage {
  HEADING_PAGE = "//h3[normalize-space()='Pre-order for AccountAuto1 Test']"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Preorder/SelectPreorderWeek"
  URL_PREORDER_PAGE = "https://test.ipayimpact.co.uk/Test/PreOrder/PreOrder"
  HEADING_PREORDER_PAGE = "(//h4[contains(text(),'Pre-order for AccountAuto1 Test')])[1]"
  VALIDATION_NO_MENU = "//td[contains(text(),'No menu has been set for this week.')]"
BTN_SELECT = "input[value='Select']"
BTN_CANCEL_PREORDER = "(//a[normalize-space()='Cancel'])[1]"
DROPDOWN_WEEK = "#SelectedDate"
verifyNoMenuValidation()
{
  cy.wait(500)
  cy.xpath(this.VALIDATION_NO_MENU).contains("No menu has been set for this week. The appropriate person has been alerted. Please try again later.")
}
selectWeek() {
  cy.get(this.DROPDOWN_WEEK).select(1);
}
clickSelectButton()
{
  cy.get(this.BTN_SELECT).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL_PREORDER).click()
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Pre-order for AccountAuto1 Test")
}
verifyPreOrderPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PREORDER_PAGE)
    cy.xpath(this.HEADING_PREORDER_PAGE)
      .should("be.visible")
      .contains("Pre-order for AccountAuto1 Test")
}
}
export default PreOrderMealPage
