class SupervisorPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Preorder/SelectSupervisorEligibilityWeek"
PAGE_HEADING = "//h3[normalize-space()='Supervisor Eligibility']"
VALIDATION_SELECT_WEEK= "#SelectedDate-error"
BTN_SELECT = "#submit"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Supervisor Eligibility");
}
verifyPageValidation()
{
    cy.get(this.VALIDATION_SELECT_WEEK)
      .should("be.visible")
      .contains("The Select Week field is required.");
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
export default SupervisorPage
