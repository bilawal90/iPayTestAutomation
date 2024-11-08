class BookingsReportPage {
  HEADING_REPORT = "//div[contains(text(),'Bookings Summary')]";
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/FundBookings?Parameters"
BTN_BACK = "img[alt='Back']"
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Bookings Summary");
}
clickBackButton()
{
  cy.get(this.BTN_BACK).click();
}
}
export default BookingsReportPage
