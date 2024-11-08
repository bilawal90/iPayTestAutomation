class PaymentPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Basket/AddPayment?fundID="
PAGE_HEADING = "//h3[normalize-space()='Adding Item']"
BUTTON_SAVE_ITEM = "#btnSubmit"
TEXTBOX_AMOUNT = "#Amount"
HEADING_POPUP = "(//h4[normalize-space()='Online Permission'])[1]"
CHECKBOX_CONSENT = "#OnlineParentalPermission"
BUTTON_CONSENT = "#btnContinueOnline"
clickConfirmButton()
{
    cy.get(this.BUTTON_CONSENT).click();
}
clickConsentCheckbox()
{
    cy.get(this.CHECKBOX_CONSENT).click();
}
verifyPermissionPopupHeading()
{
    cy.xpath(this.HEADING_POPUP).contains("Online Permission");
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Adding Item");
}
clickSaveItem()
{
    cy.get(this.BUTTON_SAVE_ITEM).click();
}
verifyAmountText()
{
    cy.get(this.TEXTBOX_AMOUNT).contains("value", "10.00") ;
}
}
export default PaymentPage
