class PreOrderMealPage {
  HEADING_PAGE = "//h3[normalize-space()='Pre-order School Meals']"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?"
  URL_PAGE_EDIT = "https://test.ipayimpact.co.uk/Test/Fund/EditFundDetails?fundID=6480"
EDIT_HEADING_PAGE = "//h3[normalize-space()='Edit Fund Details']"
URL_PAGE_SAVE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6767&confirmationMessage="
HEADING_PAGE_SAVE = "//h3[normalize-space()='Shop Test Automation Fund']"
FUND_DETAILS_HEADING = "//h4[normalize-space()='Fund Details']"
FUND_STATUS_HEADING ="//h4[normalize-space()='Fund Status']"
FUND_EXPENDITURE_HEADING ="//h4[normalize-space()='Fund Expenditure']"
BTN_EDIT_DETAILS = "//a[normalize-space()='Edit Details']"
DROPDOWN_FUND_ACTIONS = "#fund-actions"
LINK_NOTIFICATIONS = "//a[normalize-space()='Notifications']"
LINK_REPORTS = "a[href='/Test/Fund/Reports?fundID=6480']"
LINK_FUND_MANAGEMENT = "//a[normalize-space()='Fund Management']"
LINK_PAYMENT = "//a[normalize-space()='Payments']"
BREADCRUMB_FUND = "//a[normalize-space()='Funds']"
LINK_SALES_PRODUCTS = "//a[normalize-space()='Sales Products']"
LINK_FUND_ARREARS = "//a[normalize-space()='Fund Arrears']"
LINK_UFSM_ELIGIBILITY = "//a[normalize-space()='UFSM Eligibility']"
LINK_CUTOFF_TIME = "//a[normalize-space()='Cut Off Time']"
LINK_MEAL_PRICES_LINK = "//a[normalize-space()='Meal Prices']"
LINK_THRESHOLD = "//a[normalize-space()='Threshold']"
LINK_AUTO_PAYMENTS = "//a[normalize-space()='Auto Payments']"
clickAutoPaymentsLink()
{
  cy.xpath(this.LINK_AUTO_PAYMENTS).click();
}
clickThresholdLink()
{
  cy.xpath(this.LINK_THRESHOLD).click();
}
clickMealPricesLink()
{
  cy.xpath(this.LINK_MEAL_PRICES_LINK).click();
}
clickCutOffTimeLink()
{
  cy.xpath(this.LINK_CUTOFF_TIME).click();
}
clickUFSMEligibilityLink()
{
  cy.xpath(this.LINK_UFSM_ELIGIBILITY).click();
}
clickFundArrearsLink()
{
  cy.xpath(this.LINK_FUND_ARREARS).click();
}
clickSalesProductsLink()
{
  cy.xpath(this.LINK_SALES_PRODUCTS).click();
}
clickFundBreadCrumb()
{
  cy.xpath(this.BREADCRUMB_FUND).click();
}
clickPaymentsLink()
{
  cy.xpath(this.LINK_PAYMENT).click();
}
clickFundManagementLink()
{
  cy.xpath(this.LINK_FUND_MANAGEMENT).click();
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
    cy.url().should("include", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Pre-order School Meals")
}
verifyEditPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE_EDIT)
    cy.xpath(this.EDIT_HEADING_PAGE)
      .should("be.visible")
      .contains("Edit Fund Details")
}
verifyPageHeadingAndURLOnSAve()
{
    cy.url().should("include", this.URL_PAGE_SAVE)
    cy.xpath(this.HEADING_PAGE_SAVE)
      .should("be.visible")
      .contains("Shop Test Automation Fund")
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
selectGroupRefund() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).select('Group Refund')
}
selectMenuSubstitutions() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).select('Menu Substitutions')
}
selectSupervisor() {
  cy.get(this.DROPDOWN_FUND_ACTIONS).select('Supervisor')
}
}
export default PreOrderMealPage
