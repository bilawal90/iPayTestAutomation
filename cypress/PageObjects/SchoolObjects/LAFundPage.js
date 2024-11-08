class LAFundPage {
  HEADING_PAGE = "//h3[normalize-space()='LA Test Automation Fund']"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6765"
  URL_PAGE_EDIT = "https://test.ipayimpact.co.uk/Test/Fund/EditFundDetails?fundID=6765"
EDIT_HEADING_PAGE = "//h3[normalize-space()='Edit Fund Details']"
URL_PAGE_SAVE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6765&confirmationMessage=Fund"
HEADING_PAGE_SAVE = "//h3[normalize-space()='LA Test Automation Fund']"
FUND_DETAILS_HEADING = "//h4[normalize-space()='Fund Details']"
FUND_STATUS_HEADING ="//h4[normalize-space()='Fund Status']"
FUND_EXPENDITURE_HEADING ="//h4[normalize-space()='Fund Expenditure']"
BTN_EDIT_DETAILS = "//a[normalize-space()='Edit Details']"
DROPDOWN_FUND_ACTIONS = "#fund-actions"
LINK_NOTIFICATIONS = "//a[normalize-space()='Notifications']"
LINK_REPORTS = "a[href='/Test/Fund/Reports?fundID=6765']"
LINK_FUND_MANAGEMENT = "a[href='/Test/Fund/FundManagement?fundID=6765']"
LINK_PAYMENT = "//a[normalize-space()='Payments']"
LINK_LA_Schedule = "//a[normalize-space()='Schedule and Prices']"
BREADCRUMB_FUND = "//a[normalize-space()='Funds']"
clickFundBreadCrumb()
{
  cy.xpath(this.BREADCRUMB_FUND).click();
}
clickLAScheduleLink()
{
  cy.xpath(this.LINK_LA_Schedule).click();
}
clickPaymentsLink()
{
  cy.xpath(this.LINK_PAYMENT).click();
}
clickFundManagementLink()
{
  cy.get(this.LINK_FUND_MANAGEMENT).click();
}
clickReportsLink()
{
  cy.get(this.LINK_REPORTS).click();
}
clickNotificationsLink()
{
  cy.xpath(this.LINK_NOTIFICATIONS).click();
}
selectDescriptionAction() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).select('Description')
}
selectAddManualPayments() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).select('Add Manual Payments')
}
selectPermissions() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).select('Permissions')
}
selectArchiveFund() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).trigger('mouseover').select('Archive Fund')
}
selectCancelFund() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).select('Cancel Fund')
}
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("LA Test Automation Fund")
}
verifyEditPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE_EDIT)
    cy.xpath(this.EDIT_HEADING_PAGE)
      .should("be.visible")
      .contains("Edit Fund Details")
}
verifyPageHeadingAndURLOnSAve()
{
    cy.url().should("include", this.URL_PAGE_SAVE)
    cy.xpath(this.HEADING_PAGE_SAVE)
      .should("be.visible")
      .contains("LA Test Automation Fund")
}
verifyFundDetailsHeading()
{
    cy.xpath(this.FUND_DETAILS_HEADING)
      .should("be.visible")
      .contains("Fund Details")
}
verifyStatusHeading()
{
    cy.xpath(this.FUND_STATUS_HEADING)
      .should("be.visible")
      .contains("Fund Status")
}
verifyFundExpenditureHeading()
{
    cy.xpath(this.FUND_EXPENDITURE_HEADING)
      .should("be.visible")
      .contains("Fund Expenditure")
}
clickEditDetailsLink()
{
    cy.xpath(this.BTN_EDIT_DETAILS)
      .should("be.visible").click()
}
}
export default LAFundPage
