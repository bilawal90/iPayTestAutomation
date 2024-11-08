class UFSMEligibilityPage {
  HEADING_PAGE = "//h3[normalize-space()='UFSM Eligibility']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Preorder/UFSMEligibility?fundID="
  URL_PAGE_RETURN = "https://test.ipayimpact.co.uk/Test/Preorder/UFSMEligibility"
  URL_PAGE_ADD_UFSM = "https://test.ipayimpact.co.uk/Test/Preorder/AddUFSMEligibility"
  HEADING_PAGE_ADD_UFSM = "//h3[normalize-space()='Add UFSM Eligibility']"
BTN_ADD = "//a[normalize-space()='Add a new UFSM period']"
VALIDATION_YEAR = "#Year-error"
BTN_SAVE = "#btnSubmit"
BTN_UFSM_LIST = "//a[normalize-space()='UFSM List']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("UFSM Eligibility");
}
verifyPageHeadingAndURLOnReturn()
{
    cy.url().should("include", this.URL_PAGE_RETURN);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("UFSM Eligibility");
}
verifyAddUFSMPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE_ADD_UFSM);
    cy.xpath(this.HEADING_PAGE_ADD_UFSM)
      .should("be.visible")
      .contains("Add UFSM Eligibility");
}
verifyYearValidation()
{
    cy.get(this.VALIDATION_YEAR)
      .should("be.visible")
      .contains("The Year field is required.");
}
clickAddButton()
{
  cy.xpath(this.BTN_ADD).click()
}
clickSaveButton()
{
  cy.get(this.BTN_SAVE).click()
}
clickUFSMListButton()
{
  cy.xpath(this.BTN_UFSM_LIST).click()
}
}
export default UFSMEligibilityPage
