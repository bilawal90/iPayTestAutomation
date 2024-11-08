class TripFundPage {
  HEADING_PAGE = "//h3[normalize-space()='Trip Fund Test Automation Selected Accounts Paid']"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6763"
  URL_PAGE_EDIT = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6763&confirmationMessage=Fund%20has%20been%20successfully%20edited."
  URL_PAGE_RETURN = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?FundID=6763"
  FUND_DETAILS_HEADING = "//h4[normalize-space()='Fund Details']"
  FUND_STATUS_HEADING ="//h4[normalize-space()='Fund Status']"
  FUND_EXPENDITURE_HEADING ="//h4[normalize-space()='Fund Expenditure']"
FORMS_HEADING ="//h4[normalize-space()='Forms']"
ACCOUNT_STATUS_HEADING ="//h4[normalize-space()='Account Status']"
ACCOUNT_BALANCE_HEADING ="//h4[normalize-space()='Account Balance']"
ALLOCATED_PLACES_HEADING ="//h4[normalize-space()='Allocated Places']"
FORMS_TEXT = "//span[normalize-space()='No form is currently linked to this Fund']"
FORMS_ICON = "//div[@id='FormNoData']//div//img"
ACCOUNT_CHART = "#AccountChart"
ALLOCATED_PLACES_CHART = "//canvas[@id='AccountAllocatedChart']"
BTN_EDIT_DETAILS = "//a[normalize-space()='Edit Details']"
DROPDOWN_FUND_ACTIONS = "#fund-actions"
LINK_NOTIFICATIONS = "//a[normalize-space()='Notifications']"
LINK_ACCOUNTS = "a[href='/Test/Fund/FundAccounts?fundID=6763']"
LINK_REPORTS = "a[href='/Test/Fund/Reports?fundID=6763']"
LINK_FUND_MANAGEMENT = "a[href='/Test/Fund/FundManagement?fundID=6763']"
LINK_PAYMENT = "//a[normalize-space()='Payments']"
LINK_HELPERS = "//a[normalize-space()='Helpers']"
LINK_DOCS = "//a[normalize-space()='Docs']"
LINK_AUTO_PAYMENTS = "//a[normalize-space()='Auto Payments']"
clickAutoPaymentsLink()
{
  cy.xpath(this.LINK_AUTO_PAYMENTS).click();
}
clickDocsLink()
{
  cy.xpath(this.LINK_DOCS).click();
}
clickHelpersLink()
{
  cy.xpath(this.LINK_HELPERS).click();
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
clickAccountsLink()
{
  cy.get(this.LINK_ACCOUNTS).click();
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
      .contains("Trip Fund Test Automation Selected Accounts Paid")
}
verifyPageHeadingAndURLOnReturn()
{
    cy.url().should("eq", this.URL_PAGE_RETURN)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Trip Fund Test Automation Selected Accounts Paid")
}
verifyPageHeadingAndURLEdit()
{
    cy.url().should("eq", this.URL_PAGE_EDIT)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Trip Fund Test Automation Selected Accounts Paid")
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
verifyFormsHeading()
{
    cy.xpath(this.FORMS_HEADING)
      .should("be.visible")
      .contains("Forms")
}
verifyFormsIcon()
{
    cy.xpath(this.FORMS_ICON)
      .should("be.visible")
}
verifyFormsChartText()
{
    cy.xpath(this.FORMS_TEXT)
      .should("be.visible")
      .contains("No form is currently linked to this Fund")
}
verifyAccountStatusHeading()
{
    cy.xpath(this.ACCOUNT_STATUS_HEADING)
      .should("be.visible")
      .contains("Account Status")
}
verifyAccountStatusChart()
{
    cy.get(this.ACCOUNT_CHART)
      .should("be.visible")
}
verifyAccountBalanceHeading()
{
    cy.xpath(this.ACCOUNT_BALANCE_HEADING)
      .should("be.visible")
      .contains("Account Balance")
}
verifyAllocatedPlacesHeading()
{
    cy.xpath(this.ALLOCATED_PLACES_HEADING)
      .should("be.visible")
      .contains("Allocated Places")
}
verifyAllocatedPlacesChart()
{
    cy.xpath(this.ALLOCATED_PLACES_CHART)
      .should("be.visible")
}
clickEditDetailsLink()
{
    cy.xpath(this.BTN_EDIT_DETAILS)
      .should("be.visible").click()
}
}
export default TripFundPage
