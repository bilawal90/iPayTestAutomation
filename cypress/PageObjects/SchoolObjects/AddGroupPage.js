class AddGroupPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/AccountGroups/FundGroupAdd?"
PAGE_HEADING = "//h3[contains(text(),'Select Group(s) for Fund -')]"
TEXTBOX_GROUP = "//input[@placeholder='Select groups']"
BTN_ADD_GROUP = "#btn-add"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
VALIDATION_GROUP = "//p[normalize-space()='Please Select Group.']"
ADDED_GROUP_CARD = "//div[contains(text(),'Group(s) already added to fund')]"
PENDING_GROUP_CHART = "//div[contains(text(),'Group(s) pending to fund')]"
verifyGroupsChartAppearing()
{
    cy.xpath(this.ADDED_GROUP_CARD)
      .should("be.visible")
      cy.xpath(this.PENDING_GROUP_CHART)
      .should("be.visible")
}
verifyValidationMessage()
{
    cy.xpath(this.VALIDATION_GROUP)
      .should("be.visible")
      .contains("Please Select Group.");
}
clickAddGroupButton()
{
  cy.get(this.BTN_ADD_GROUP).click()
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    //cy.xpath(this.PAGE_HEADING)
      //.contains("Select Group(s) for Fund -  Trip Fund Test Automation Selected Accounts Paid ");
}
}
export default AddGroupPage
