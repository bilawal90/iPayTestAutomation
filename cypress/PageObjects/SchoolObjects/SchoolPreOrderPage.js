class SchoolPreOrderPage {
  HEADING_PAGE = "//h3[normalize-space()='School Pre-order']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/SchoolPreorder"
  BTN_PREORDER = "#submit"
  VALIDATION_WEEK = "#SelectedDate-error";
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
clickPreOrderButton()
{
  cy.get(this.BTN_PREORDER).click();
}
}
export default SchoolPreOrderPage
