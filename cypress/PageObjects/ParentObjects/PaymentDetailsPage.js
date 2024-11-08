class PaymentDetailsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Payment/PaymentDetails?paymentID"
PAGE_HEADING = "//h3[normalize-space()='Payment Details']"
BUTTON_TRANSACTION_HISTORY = "(//a[normalize-space()='Transaction History'])[2]"
clickTransactionHistoryButton()
{
    cy.xpath(this.BUTTON_TRANSACTION_HISTORY).click();
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Payment Details");
}
}
export default PaymentDetailsPage
