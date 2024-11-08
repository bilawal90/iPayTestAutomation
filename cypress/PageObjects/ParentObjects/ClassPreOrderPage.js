class ClassPreOrderPage {
  HEADING_PAGE = "//h3[normalize-space()='Class Pre-order']"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/ClassPreorder/ClassPreorder"
  HEADING_PAGE_ACCOUNT = "#accountTitle"
  URL_PAGE_PAGE_ACCOUNT = "https://test.ipayimpact.co.uk/Test/ClassPreorder/ListAccounts?classCode="
  ORDER_PAGE = "https://test.ipayimpact.co.uk/Test/ClassPreorder/ListAccounts?classCode="
  ORDER_PAGE_TITLE = "#accountTitle"
  VALIDATION_CLASS = ".field-validation-error.text-danger"
  VALIDATION_GENERAL = "//span[normalize-space()='Please correct the errors and try again.']"
BTN_PreOrder = "#submitForm"
DROPDOWN_CLASS = "#SelectedClass"
ACCOUNT = "#account-522111"
BTN_CONFIRM = "//button[@id='btnConfirm']"
EAT_HOME = "#S866"
clickEatHomeLink()
{
  cy.get(this.EAT_HOME).click()
}
clickConfirmButton()
{
  cy.xpath(this.BTN_CONFIRM).click()
}
clickAccount()
{
  cy.get(this.ACCOUNT).click()
}
verifyValidationMessage()
{
  cy.get(this.VALIDATION_CLASS).contains("Select either Year/Class or Class.")
  cy.xpath(this.VALIDATION_GENERAL).contains("Please correct the errors and try again.")
}
selectAccount() {
  cy.get(this.ACCOUNT).click();
}
selectClass() {
  cy.get(this.DROPDOWN_CLASS).select(1);
}
clickPreOrderButton()
{
  cy.get(this.BTN_PreOrder).click()
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Class Pre-order")
}
verifyPageHeadingAndURLOnAccount()
{
    cy.url().should("include", this.URL_PAGE_PAGE_ACCOUNT)
    cy.get(this.HEADING_PAGE_ACCOUNT)
      .should("be.visible")
      .contains("Please touch your name")
}
verifyPageHeadingAndURLOrderPage()
{
    cy.url().should("include", this.ORDER_PAGE)
    cy.get(this.ORDER_PAGE_TITLE)
      .should("be.visible")
      .contains("AccountAuto1 Test")
}
}
export default ClassPreOrderPage
