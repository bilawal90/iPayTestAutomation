class FundAccountsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/FundAccountsList?fundID=6763"
PAGE_URL_RETURN = "https://test.ipayimpact.co.uk/Test/Fund/FundAccountsList?FundID=6763"
PAGE_HEADING = "//h3[normalize-space()='Accounts']"
ACCOUNT_STATUS_HEADING = "//h4[normalize-space()='Account Status']";
ACCOUNT_BALANCE_HEADING = "//h4[normalize-space()='Account Balance']";
ALLOCATED_PLACES_HEADING = "//h4[normalize-space()='Allocated Places']";
CHART_ACCOUNT = "#AccountChart";
CHART_ACCOUNT_BALANCE = "#AccountBalanceChart"
CHART_ALLOCATED_PLACES = "#AccountAllocatedChart"
DROPDOWN_YEAR = "#year-class-chooser"
DROPDOWN_ACTION = "//tbody//tr//td//select"
BUTTON_BULK_ACTION = "#bulkActionsDropdownMenu"
OPTION_ISA = "#invite-selected"
OPTION_ASA = "#accept-selected"
OPTION_RIA = "#remove-selected"
OPTION_CAA = "#cancel-selected"
TEXTBOX_SEARCH = "//input[@placeholder='Search...']"
EMPTY_SEARCH_MESSAGE = "td[valign='top']"
TEXT_SEARCH_RESULT = "//div[@id='fundAccountsTable_info']"
CRITERIA_SEARCH = "#search-col-select"
LINK_ALL = "//a[normalize-space()='All']"
LINK_ALLOCATED = "//a[normalize-space()='Allocated']"
LINK_ACCEPTED = "//a[normalize-space()='Accepted']"
LINK_INVITED = "//a[normalize-space()='Invited']"
LINK_CANCELLED = "//a[normalize-space()='Cancelled']"
LINK_FULLY_PAID = "//a[normalize-space()='Fully Paid']"
LINK_UNPAID = "//a[normalize-space()='Unpaid']"
BTN_CUSTOMISE = "#customise-button"
BTN_CUSTOMIZE_CLOSE = "//button[normalize-space()='Close']"
BTN_ADD_GROUP = "//a[normalize-space()='Add Group(s)']"
BTN_ADD_ACCOUNT = "//a[normalize-space()='Add Account(s)']"
clickAddAccountButton()
{
  cy.xpath(this.BTN_ADD_ACCOUNT).click()
}
clickAddGroupButton()
{
  cy.xpath(this.BTN_ADD_GROUP).click()
}
clickCustomiseCloseButton()
{
  cy.xpath(this.BTN_CUSTOMIZE_CLOSE).trigger('mouseover').click()
}
clickCustomiseButton()
{
  cy.get(this.BTN_CUSTOMISE).click()
}
verifyAccountsLinkAppearing()
{
    cy.xpath(this.LINK_ALL)
      .should("be.visible")
      cy.xpath(this.LINK_ALLOCATED)
      .should("be.visible")
      cy.xpath(this.LINK_ACCEPTED)
      .should("be.visible")
      cy.xpath(this.LINK_INVITED)
      .should("be.visible")
      cy.xpath(this.LINK_CANCELLED)
      .should("be.visible")
      cy.xpath(this.LINK_FULLY_PAID)
      .should("be.visible")
      cy.xpath(this.LINK_UNPAID)
      .should("be.visible")
}
inputSearchValue()
{
  cy.xpath(this.TEXTBOX_SEARCH).type('asa')
}
clearSearchBox()
{
  cy.xpath(this.TEXTBOX_SEARCH).clear()
}
emptySearchMessage()
{
  cy.get(this.EMPTY_SEARCH_MESSAGE).should("be.visible").contains("No data available in table");
}
SearchResultCount()
{
  cy.xpath(this.TEXT_SEARCH_RESULT).should("be.visible").contains("Showing 1 to 1 of 1 entries");
}
verifyBulkOptionsAppearing()
{
    cy.wait(1000)
    cy.get(this.OPTION_ISA)
      .should("be.visible")
      cy.get(this.OPTION_ASA)
      .should("be.visible")
      cy.get(this.OPTION_RIA)
      .should("be.visible")
      cy.get(this.OPTION_CAA)
      .should("be.visible")
}
clickBultActionButton()
{
  cy.get(this.BUTTON_BULK_ACTION).click();
}
selectActionDropdown() {
  cy.xpath(this.DROPDOWN_ACTION).select('Payment').should('have.id', '522111')
  cy.xpath(this.DROPDOWN_ACTION).select('Cancel').should('have.id', '522111')
  cy.xpath(this.DROPDOWN_ACTION).select('History').should('have.id', '522111')
}
selectYearValue() {
  cy.get(this.DROPDOWN_YEAR).select('Year / Class').should('have.value', 'yearclass')
  cy.get(this.DROPDOWN_YEAR).select('Class').should('have.value', 'class')
}
selectSearchCriteria() {
  cy.get(this.CRITERIA_SEARCH).select('Name').should('have.value', 'Name')
  cy.get(this.CRITERIA_SEARCH).select('Year').should('have.value', 'Year')
  cy.get(this.CRITERIA_SEARCH).select('Class').should('have.value', 'Class')
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Accounts");
}
verifyPageURLOnReturn()
{
    cy.url().should("include", this.PAGE_URL_RETURN);
    cy.xpath(this.PAGE_HEADING)
    .should("be.visible")
    .contains("Accounts");
}
verifyAccountStatusHeading()
{
    cy.xpath(this.ACCOUNT_STATUS_HEADING)
      .should("be.visible")
      .contains("Account Status");
}
verifyAccountBalanceHeading()
{
    cy.xpath(this.ACCOUNT_BALANCE_HEADING)
      .should("be.visible")
      .contains("Account Balance");
}
verifyAllocatedPlacesHeading()
{
    cy.xpath(this.ALLOCATED_PLACES_HEADING)
      .should("be.visible")
      .contains("Allocated Places");
}
verifyChartsAppearing()
{
  cy.get(this.CHART_ACCOUNT)
      .should("be.visible")
      cy.get(this.CHART_ACCOUNT_BALANCE)
      .should("be.visible")
      cy.get(this.CHART_ALLOCATED_PLACES)
      .should("be.visible")
}
}
export default FundAccountsPage
