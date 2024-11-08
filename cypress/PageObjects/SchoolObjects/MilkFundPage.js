class MilkFundPage {
  HEADING_PAGE = "//h3[normalize-space()='Fund Test Automation Milk']"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6761"
  URL_PAGE_RETURN = "https://test.ipayimpact.co.uk/Test/Fund/Reports?fundID=6761"
  EDIT_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/EditFundDetails?fundID=6766"
EDIT_HEADING_PAGE = "//h3[normalize-space()='Edit Fund Details']"
BTN_SAVE_FUND = "//input[@id='btnSubmit']"
  HEADING_SUMMARY = "//h3[normalize-space()='Summary']"
  HEADING_REPORT = "//h3[normalize-space()='Reports']"
  HEADING_FUND_MANAGEMENT = "//h3[normalize-space()='Fund Management']"
  HEADING_PAYMENTS = "//h3[normalize-space()='Payments']"
  LINK_REPORTS = "a[href='/Test/Fund/Reports?fundID=6761']"
  LINK_FUND_MANAGEMENT = "a[href='/Test/Fund/FundManagement?fundID=6761']"
  LINK_PAYMENTS = "a[href='/Test/Fund/Payments?fundID=6761']"
  LINK_SUMMARY = "a[href='/Test/Fund/FundDetails?FundID=6761']"
  LINK_AUTO_PAYMENTS = "//a[normalize-space()='Auto Payments']"
  BTN_EDIT_DETAILS = "//a[normalize-space()='Edit Details']"
  DROPDOWN_FUND_ACTIONS = "#fund-actions"
  HEADING_ARCHIVE_FUND = "//h4[normalize-space()='Archive Fund']"
  HEADING_CANCEL_FUND = "//h4[@id='myModalLabel']"
  CANCEL_ARCHIVE_FUND = "//form[@action='/Test/Fund/ArchiveFund']//button[@type='button'][normalize-space()='Cancel']"
  CANCEL_CANCELLING_FUND = "//form[@action='/Test/Fund/CancelFund']//button[@type='button'][normalize-space()='Cancel']"
  LINK_PAYMENT_BETWEEN_DATES = "//a[normalize-space()='Payments Between Dates']"
  LINK_FUND_EXPENDITURE = "//a[normalize-space()='Fund Expenditure']"
LINK_BALANCES = "//a[normalize-space()='Balances']"
HEADING_FUND_STATUS = "//h4[normalize-space()='Fund Status']"
TOAST_FUND_SUCCESS = "//p[normalize-space()='Fund has been successfully edited.']"
verifySuccessToastAppearing()
{
    cy.xpath(this.TOAST_FUND_SUCCESS)
      .should("be.visible")
      .contains("Fund has been successfully edited.")
}
verifyArchiveFundPopupHeading()
{
    cy.xpath(this.HEADING_ARCHIVE_FUND)
      .should("be.visible")
      .contains("Archive Fund")
}
verifyCancelFundPopupHeading()
{
    cy.xpath(this.HEADING_CANCEL_FUND)
      .should("be.visible")
      .contains("Cancel Fund")
}
  selectAddManualPayments() {
    cy.get(this.DROPDOWN_FUND_ACTIONS).select('Add Manual Payments')
  }
  selectArchiveFund() {
    cy.get(this.DROPDOWN_FUND_ACTIONS).select('Archive Fund')
  }
  selectCancelFund() {
    cy.get(this.DROPDOWN_FUND_ACTIONS).select('Cancel Fund')
  }
  clickCancelCancellingFund()
  {
    //cy.xpath(this.CANCEL_CANCELLING_FUND).click({force: true})
    cy.xpath(this.CANCEL_CANCELLING_FUND).contains('Cancel').trigger('mouseover').click().click();
  }
clickAutoPaymentLink()
  {
    cy.xpath(this.LINK_AUTO_PAYMENTS).click()
  }
  clickPaymentReports()
  {
    cy.xpath(this.LINK_PAYMENT_BETWEEN_DATES).click()
  }
  clickFundExpenditureReports()
  {
    cy.xpath(this.LINK_FUND_EXPENDITURE).click()
  }
  clickBalancesReport()
  {
    cy.xpath(this.LINK_BALANCES).click()
  }
 clickCancelArchiveFund()
  {
    //cy.xpath(this.CANCEL_ARCHIVE_FUND).click.click();
    cy.xpath(this.CANCEL_ARCHIVE_FUND).contains('Cancel').trigger('mouseover').click().click();
    //cy.contains(this.CANCEL_ARCHIVE_FUND).click().click();
    //.contains('+ New Worker')
  }
  clickSaveFundButton()
  {
    cy.xpath(this.BTN_SAVE_FUND).trigger('mouseover').click()
  }
  clickEditDetailsLink()
  {
    cy.xpath(this.BTN_EDIT_DETAILS).click()
  }
  clickSummaryLink()
  {
    cy.get(this.LINK_SUMMARY).click()
  }
  clickReportsLink()
  {
    cy.get(this.LINK_REPORTS).click()
  }
  clickFundManagementLink()
  {
    cy.get(this.LINK_FUND_MANAGEMENT).click()
  }
  clickPaymentsLink()
  {
    cy.get(this.LINK_PAYMENTS).click()
  }
  verifyEditPageHeadingAndURL()
{
    cy.url().should("eq", this.EDIT_URL_PAGE)
    cy.xpath(this.EDIT_HEADING_PAGE)
      .should("be.visible")
      .contains("Edit Fund Details")
}
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Test Automation Milk")
}
verifyPageHeadingAndURLOnReturn()
{
    cy.url().should("eq", this.URL_PAGE_RETURN)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Test Automation Milk")
}
verifySummaryHeading()
{
    cy.xpath(this.HEADING_SUMMARY)
      .should("be.visible")
      .contains("Summary")
}
verifyFundStatusHeading()
{
    cy.xpath(this.HEADING_FUND_STATUS)
      .should("be.visible")
      .contains("Fund Status")
}
verifyReportsHeading()
{
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Reports")
}
verifyFundManagementHeading()
{
    cy.xpath(this.HEADING_FUND_MANAGEMENT)
      .should("be.visible")
      .contains("Fund Management")
}
verifyPaymentsHeading()
{
    cy.xpath(this.HEADING_PAYMENTS)
      .should("be.visible")
      .contains("Payments")
}
}
export default MilkFundPage
