class KitchenPreOrderPage {
  URL_PAGE_CLASS_PREORDER = "https://test.ipayimpact.co.uk/Test/SchoolPreorder/ClassPreorder"
  HEADING_PAGE_CLASS_PREORDER = "//h3[contains(text(),'School Meals Pre-order')]";
  HEADING_PAGE = "//h3[normalize-space()='School Pre-order']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/SchoolPreorder"
  BTN_PREORDER = "#submit"
  VALIDATION_WEEK = "#SelectedDate-error";
DROPDOWN_WEEK = "#SelectedDate"
DROPDOWN_YEAR = "#SelectedYearClass"
NO_MENU = "//div[@class='text-danger']"
BTN_BACK = "//a[normalize-space()='Back']"
clickBackButton()
{
  cy.xpath(this.BTN_BACK).click();
}
verifyNoMenuText()
{
    cy.xpath(this.NO_MENU)
      .should("be.visible")
      .contains("No menu has been defined for this week.");
}
selectYear()
{
  cy.get(this.DROPDOWN_YEAR).select(1)
}
selectWeek()
{
  cy.get(this.DROPDOWN_WEEK).select(1)
}
  verifyWeekValidationAppearing()
{
    cy.get(this.VALIDATION_WEEK)
      .should("be.visible")
      .contains("The Select Week field is required.");
}
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("School Pre-order");
}
verifyClassPreOrderPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE_CLASS_PREORDER);
    cy.xpath(this.HEADING_PAGE_CLASS_PREORDER)
      .should("be.visible")
      .contains("School Meals Pre-order");
}
clickPreOrderButton()
{
  cy.get(this.BTN_PREORDER).click();
}
}
export default KitchenPreOrderPage
