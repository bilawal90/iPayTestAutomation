class PreOrderRefundPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/GroupRefundPreOrder?fundID="
PAGE_HEADING = "//h3[normalize-space()='Pre-order Refund for Day']"
VALIDATION_COST = "#Reason-error"
BTN_REFUND = "input[value='Refund']"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Pre-order Refund for Day");
}
verifyReasonValidation()
{
    cy.get(this.VALIDATION_COST)
      .should("be.visible")
      .contains("The Reason field is required.");
}
clickRefundButton()
{
  cy.get(this.BTN_REFUND).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
}
export default PreOrderRefundPage
