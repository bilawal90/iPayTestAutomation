class BookingsDetailPage {
  HEADING_PAGE = "//h3[normalize-space()='Booking detail for - LA Test Automation Fund']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/BookingDetailForFund?fundID=6765"
BTN_RUN_REPORT = "//input[@name='Submit']"
VALIDATION_DATE = "#DateTimeIDSelected-error"
BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Booking detail");
}
verifyDateValidationMessage()
{
    cy.get(this.VALIDATION_DATE)
      .should("be.visible")
      .contains("The Date/Time field is required.");
}
clickRunReportButton()
{
  cy.xpath(this.BTN_RUN_REPORT).click();
}
clickReturnToReportButton()
{
  cy.xpath(this.BTN_RETURN_TO_REPORT).click();
}
}
export default BookingsDetailPage
