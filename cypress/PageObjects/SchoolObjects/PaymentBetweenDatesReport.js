class PaymentBetweenDatesReport {
  URL_PAGE_PAYMENT_DATES = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDatesForFund?fundID=6763"
  LA_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDatesForFund?fundID=6765"
  LA_HEADING_PAGE = "//h3[contains(text(),'Payments Between Dates For Fund - LA Test Automati')]"
  SHOP_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDatesForFund?fundID"
  SHOP_HEADING_PAGE = "//h3[contains(text(),'Payments Between Dates For Fund - Shop Test Automa')]"
 PRE_ORDER_HEADING_PAGE = "//h3[contains(text(),'Payments Between Dates For Fund - Pre-order School')]"
HEADING_PAGE_PAYMENT_DATES = "//h3[contains(text(),'Payments Between Dates For Fund - Trip Fund Test A')]"
URL_REPORT_TRIP = "https://test.ipayimpact.co.uk/Test/Reports/PaymentsBetweenDatesForFund"
HEADING_REPORT_TRIP = "//div[contains(text(),'Payments between Dates')]"
  HEADING_PAGE = "//h3[normalize-space()='Payments Between Dates']";
  HEADING_PAGE_CHARITY = "//h3[contains(text(),'Payments Between Dates For Fund - Charity Test Aut')]";
  HEADING_PAGE_MILK = "//h3[contains(text(),'Payments Between Dates For Fund - Fund Test Automa')]";
  HEADING_REPORT = "//div[contains(text(),'Payments between Dates')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDates"
  URL_PAGE_CHARITY = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDatesForFund?fundID=6766"
  URL_PAGE_MILK = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDatesForFund?fundID=6761"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/"
CHECKBOX_ALL = "//input[@id='chkAll']";
BTN_RETURN = "//a[normalize-space()='Return to Reports List']"
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
URL_SCHOOL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDates"
URL_SCHOOL_HEADING = "//h3[normalize-space()='Payments Between Dates']"
URL_SCHOOL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/PaymentsBetweenDates?Parameters="
URL_SCHOOL_HEADING_REPORT = "//div[contains(text(),'Payments between Dates')]"
verifySchoolPageHeadingAndURL()
{
    cy.url().should("include", this.URL_SCHOOL_PAGE);
    cy.xpath(this.URL_SCHOOL_HEADING)
      .should("be.visible")
      .contains("Payments Between Dates");
}
  verifyPageHeadingAndURL1()
{
    cy.url().should("eq", this.URL_PAGE_PAYMENT_DATES);
    cy.xpath(this.HEADING_PAGE_PAYMENT_DATES)
      .should("be.visible")
      .contains("Payments Between Dates For Fund - Trip Fund Test Automation Selected Accounts Paid");
}
verifyLAPageHeadingAndURL()
{
    cy.url().should("eq", this.LA_URL_PAGE);
    cy.xpath(this.LA_HEADING_PAGE)
      .should("be.visible")
      .contains("Payments Between Dates For Fund - LA Test Automation Fund");
}
verifyShopPageHeadingAndURL()
{
    cy.url().should("include", this.SHOP_URL_PAGE);
    cy.xpath(this.SHOP_HEADING_PAGE)
      .should("be.visible")
      .contains("Payments Between Dates For Fund");
}
verifyPreOrderPageHeadingAndURL()
{
    cy.url().should("include", this.SHOP_URL_PAGE);
    cy.xpath(this.PRE_ORDER_HEADING_PAGE)
      .should("be.visible")
      .contains("Payments Between Dates For Fund");
}
verifyTripReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT_TRIP);
    cy.xpath(this.HEADING_REPORT_TRIP)
      .should("be.visible")
      .contains("Payments between Dates");
}
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Payments Between Dates");
}
verifyCharityReportPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE_CHARITY);
    cy.xpath(this.HEADING_PAGE_CHARITY)
      .should("be.visible")
      .contains("Payments Between Dates For Fund - Charity Test Automation Fund");
}
verifyMilkReportPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE_MILK);
    cy.xpath(this.HEADING_PAGE_MILK)
      .should("be.visible")
      .contains("Payments Between Dates For Fund - Fund Test Automation Milk");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Payments between Dates");
}
clickAllCheckbox()
{
  cy.xpath(this.CHECKBOX_ALL).should("be.visible")
    cy.xpath(this.CHECKBOX_ALL).click()
}
clickReturnToReportListBtn()
{
  cy.xpath(this.BTN_RETURN).should("be.visible")
    cy.xpath(this.BTN_RETURN).click()
}
clickRunReport()
{
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).click()
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).click()
}
verifySchoolReportHeadingAndURL()
{
    cy.url().should("include", this.URL_SCHOOL_REPORT);
    cy.xpath(this.URL_SCHOOL_HEADING_REPORT)
      .should("be.visible")
      .contains("Payments between Dates");
}
}
export default PaymentBetweenDatesReport
