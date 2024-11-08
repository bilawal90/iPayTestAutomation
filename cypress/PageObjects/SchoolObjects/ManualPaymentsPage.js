class ManualPaymentsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/AddManualPayments?fundID=6763"
LA_PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/ManualPaymentsForLimitedAvailability?fundID=6765"
PAGE_URL_RETURN = "https://test.ipayimpact.co.uk/Test/Fund/AddManualPayments?FundID=6763"
PAGE_HEADING = "//h3[contains(text(),'Manual Payments')]"
LA_PAGE_HEADING = "//h3[contains(text(),'Manual Payments')]"
MAKE_PAYMENTS_BTN = "#submit"
DROPDOWN_YEAR = "#SelectedClass"
PAYMENTS_TYPE = "#SchoolManualPaymentClassList_0__PaymentType"
TEXTBOX_AMOUNT = "#SchoolManualPaymentClassList_0__Amount"
TEXTBOX_PAYEE = "#SchoolManualPaymentClassList_0__Payee"
VALIDATION_AMOUNT = "span[data-valmsg-for='SchoolManualPaymentClassList[0].Amount']"
VALIDATION_PAYEE = "span[data-valmsg-for='SchoolManualPaymentClassList[0].Payee']"
SAVE_BTN = "#btnSubmitBottom"
MSG_SUCCESS = "//p[normalize-space()='Your Group Manual Payments have been saved']";
BTN_RETURN = "//a[normalize-space()='Return To Fund']";
BTN_BACK = "//a[normalize-space()='Back']";
submitAmountAndPayee()
{
  cy.get(this.TEXTBOX_AMOUNT).type('1')
  cy.get(this.TEXTBOX_PAYEE).type('1')
}
verifyAmountValidationsMessage()
{
  cy.get(this.VALIDATION_AMOUNT)
      .should("be.visible")
      .contains("Payment must be between 0.01 and 10000.00");
}
verifyPayeeValidationsMessage()
{
  cy.get(this.VALIDATION_PAYEE)
      .should("be.visible")
      .contains("The payee name is required.");
}
clickReturnToFundButton()
{
  cy.xpath(this.BTN_RETURN).should("be.visible").click();
}
verifySucessMessage()
{
    cy.xpath(this.MSG_SUCCESS)
      .should("be.visible")
      .contains("Your Group Manual Payments have been saved");
}
clickSaveButton()
{
  cy.get(this.SAVE_BTN).should("be.visible").click();
}
clickBackButton()
{
  cy.xpath(this.BTN_BACK).should("be.visible").click();
}
clickMakePaymentButton()
{
  cy.get(this.MAKE_PAYMENTS_BTN).should("be.visible").click();
}
selectYear() {
  cy.get(this.DROPDOWN_YEAR).select('N/A - N/A')
}
selectPaymentTypeValues() {
  //cy.get(this.DROPDOWN_FUND_TYPE).click();
  cy.get(this.PAYMENTS_TYPE).select('Adjustment').should('have.value', '7')
  cy.get(this.PAYMENTS_TYPE).select('Cash').should('have.value', '1')
  cy.get(this.PAYMENTS_TYPE).select('Cheque').should('have.value', '2')
  cy.get(this.PAYMENTS_TYPE).select('Childcare Voucher').should('have.value', '9')
  cy.get(this.PAYMENTS_TYPE).select('Debt transferred to Invoice').should('have.value', '11')
  cy.get(this.PAYMENTS_TYPE).select('Debt Write Off').should('have.value', '5')
  cy.get(this.PAYMENTS_TYPE).select('Refund (not to card)').should('have.value', '4')
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Manual Payments - Trip Fund Test Automation Selected Accounts Paid");
}
verifyLAPageHeadingAndURL()
{
    cy.url().should("include", this.LA_PAGE_URL);
    cy.xpath(this.LA_PAGE_HEADING)
      .should("be.visible")
      .contains("Manual Payments - LA Test Automation Fund");
}
verifyPageHeadingAndURLOnReturn()
{
    cy.url().should("include", this.PAGE_URL_RETURN);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Manual Payments - Trip Fund Test Automation Selected Accounts Paid");
}
}
export default ManualPaymentsPage
