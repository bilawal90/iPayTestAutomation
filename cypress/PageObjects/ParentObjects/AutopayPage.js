class AutopayPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/AutomaticPayments"
PAGE_CREATE_URL = "https://test.ipayimpact.co.uk/Test/AutomaticPayments/CreateAutomaticPayment?"
PAGE_HEADING_CREATE = "//h3[normalize-space()='Create Automatic Payment']"
PAGE_HEADING = "//h4[normalize-space()='Automatic Payments']"
BTN_EDIT = "(//a[contains(text(),'Edit')])[1]"
PAGE_URL_EDIT = "https://test.ipayimpact.co.uk/Test/AutomaticPayments/EditAutomaticPayment?AutomaticPaymentID="
EDIT_PAGE_HEADING = "//h3[normalize-space()='Edit Automatic Payment']"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
BTN_CREATE_PAYMENT = "//a[normalize-space()='Create Auto Payment for AccountAuto1 Test']"
BTN_AUTO_PAY = "(//a[normalize-space()='Auto Pay'])[2]"
DROPDOWN_REGULARITY = "#RegularityID"
BTN_SUBMIT = "#btnSubmit"
VALIDATION_AMOUNT = "#Amount-error"
VALIDATION_INSTALLMENT = "#NumberOfPayments-error"
VALIDATION_CARD = "#SavedCardID-error"
FUND_NAME_PREORDER = "//*[@id='FundName']"
ACCOUNT_NAME ="//*[@id='Name']"
verifyAccountName()
{
    cy.get(this.ACCOUNT_NAME).contains('text','AccountAuto1 Test');
}
verifyFundNamePreOrder()
{
    cy.xpath(this.FUND_NAME_PREORDER).contains('text','Pre-order School Meals');
}
verifyFieldValidation()
{
    cy.get(this.VALIDATION_AMOUNT).contains("The Instalment Amount field is required.");
    cy.get(this.VALIDATION_INSTALLMENT).contains("The Number Of Instalments field is required.");
    cy.get(this.VALIDATION_CARD).contains("The Saved Card field is required.");
}
clickSubmitButton()
{
    cy.get(this.BTN_SUBMIT).click()
}
clickAutoPayButton()
{
    cy.xpath(this.BTN_AUTO_PAY).click()
}
clickCreatePaymentButton()
{
    cy.xpath(this.BTN_CREATE_PAYMENT).click()
}
clickAutoPaymentButton()
{
    cy.xpath(this.BTN_AUTO_PAY).click()
}
clickCancelButton()
{
    cy.xpath(this.BTN_CANCEL).click()
}
clickEditButton()
{
    cy.xpath(this.BTN_EDIT).click()
}
verifyCreatePageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_CREATE_URL);
    cy.xpath(this.PAGE_HEADING_CREATE).contains("Create Automatic Payment");
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Automatic Payments");
}
verifyEditPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL_EDIT);
    cy.xpath(this.EDIT_PAGE_HEADING).contains("Edit Automatic Payment");
}
selectRegularityDropdown() {
    cy.get(this.DROPDOWN_REGULARITY).select('Weekly').should('have.value', '1')
    cy.get(this.DROPDOWN_REGULARITY).select('Monthly').should('have.value', '2')
    cy.get(this.DROPDOWN_REGULARITY).select('Hourly').should('have.value', '3')
  }
}
export default AutopayPage
