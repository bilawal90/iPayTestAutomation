class CharityFundPage {
  HEADING_PAGE = "//h3[normalize-space()='Charity Test Automation Fund']"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6766"
  EDIT_URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/EditFundDetails?fundID=6766"
  EDIT_HEADING_PAGE = "//h3[normalize-space()='Edit Fund Details']"
  BTN_SAVE_FUND = "//input[@id='btnSubmit']"
  HEADING_SUMMARY = "//h3[normalize-space()='Summary']"
  HEADING_REPORT = "//h3[normalize-space()='Reports']"
  HEADING_FUND_MANAGEMENT = "//h3[normalize-space()='Fund Management']"
  HEADING_PAYMENTS = "//h3[normalize-space()='Payments']"
  LINK_REPORTS = "a[href='/Test/Fund/Reports?fundID=6766']"
  LINK_FUND_MANAGEMENT = "a[href='/Test/Fund/FundManagement?fundID=6766']"
  LINK_PAYMENTS = "a[href='/Test/Fund/Payments?fundID=6766']"
  LINK_SUMMARY = "a[href='/Test/Fund/FundDetails?FundID=6766']"
  BTN_EDIT_DETAILS = "//a[normalize-space()='Edit Details']"
  DROPDOWN_FUND_ACTIONS = "#fund-actions"
  HEADING_ARCHIVE_FUND = "//h4[normalize-space()='Archive Fund']"
  HEADING_CANCEL_FUND = "//h4[@id='myModalLabel']"
  //CANCEL_ARCHIVE_FUND = "//form[@action='/Test/Fund/ArchiveFund']//button[@type='button'][normalize-space()='Cancel']"
  CANCEL_ARCHIVE_FUND = "(//button[text()='Cancel'])[3]"
  //CANCEL_CANCELLING_FUND = "//form[@action='/Test/Fund/CancelFund']//button[@type='button'][normalize-space()='Cancel']"
CANCEL_CANCELLING_FUND = "(//button[text()='Cancel'])[4]"
  LINK_PAYMENT_BETWEEN_DATES = "//a[normalize-space()='Payments Between Dates']"
  LINK_FUND_EXPENDITURE = "//a[normalize-space()='Fund Expenditure']"
  BREADCRUMB_FUNDS = "//a[normalize-space()='Funds']"
  clickFundBreadcrumb() {
    cy.xpath(this.BREADCRUMB_FUNDS).trigger('mouseover').click()
  }
  verifyArchiveFundPopupHeading() {
//26 august
cy.wait(150)
    cy.xpath(this.HEADING_ARCHIVE_FUND).contains("Archive Fund")
  }
  verifyCancelFundPopupHeading() {
    cy.wait(500)
    cy.xpath(this.HEADING_CANCEL_FUND).contains("Cancel Fund")
  }
  selectAddManualPayments() {
    cy.get(this.DROPDOWN_FUND_ACTIONS).select('Add Manual Payments')
  }
  selectArchiveFund() {
    cy.get(this.DROPDOWN_FUND_ACTIONS).trigger('mouseover').select('Archive Fund')
  }
  selectCancelFund() {
    //cy.wait(200)
    cy.get(this.DROPDOWN_FUND_ACTIONS).select('Cancel Fund')
  }
  clickCancelCancellingFund() {
    //cy.xpath(this.CANCEL_CANCELLING_FUND).click({force: true})
    cy.wait(1000)
    //cy.xpath(this.CANCEL_CANCELLING_FUND).contains('Cancel').trigger('mouseover').click().click({ force: true });
    cy.xpath(this.CANCEL_CANCELLING_FUND).trigger('mouseover').click({ force: true })
  }
  clickPaymentReports() {
    cy.xpath(this.LINK_PAYMENT_BETWEEN_DATES).click()
  }
  clickFundExpenditureReports() {
    cy.xpath(this.LINK_FUND_EXPENDITURE).click()
  }
  clickCancelArchiveFund() {
    //cy.xpath(this.CANCEL_ARCHIVE_FUND).click.click();
cy.wait(1000)
    //27-august cy.xpath(this.CANCEL_ARCHIVE_FUND).contains('Cancel').trigger('mouseover').click({ force: true }).click({ force: true });
    cy.xpath(this.CANCEL_ARCHIVE_FUND).trigger('mouseover').click({force: true})
    //cy.xpath(this.CANCEL_ARCHIVE_FUND).click()
    //cy.contains(this.CANCEL_ARCHIVE_FUND).click().click();
    //.contains('+ New Worker')
  }
  clickSaveFundButton() {
    cy.xpath(this.BTN_SAVE_FUND).click()
  }
  clickEditDetailsLink() {
    cy.xpath(this.BTN_EDIT_DETAILS).click()
  }
  clickSummaryLink() {
    cy.get(this.LINK_SUMMARY).click()
  }
  clickReportsLink() {
    cy.get(this.LINK_REPORTS).click()
  }
  clickFundManagementLink() {
    cy.get(this.LINK_FUND_MANAGEMENT).click()
  }
  clickPaymentsLink() {
    cy.get(this.LINK_PAYMENTS).click()
  }
  verifyEditPageHeadingAndURL() {
    cy.url().should("eq", this.EDIT_URL_PAGE)
    cy.xpath(this.EDIT_HEADING_PAGE)
      .should("be.visible")
      .contains("Edit Fund Details")
  }
  verifyPageHeadingAndURL() {
    cy.url().should("eq", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Charity Test Automation Fund")
  }
  verifySummaryHeading() {
    cy.xpath(this.HEADING_SUMMARY)
      .should("be.visible")
      .contains("Summary")
  }
  verifyReportsHeading() {
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Reports")
  }
  verifyFundManagementHeading() {
    cy.xpath(this.HEADING_FUND_MANAGEMENT)
      .should("be.visible")
      .contains("Fund Management")
  }
  verifyPaymentsHeading() {
    cy.xpath(this.HEADING_PAYMENTS)
      .should("be.visible")
      .contains("Payments")
  }
}
export default CharityFundPage
