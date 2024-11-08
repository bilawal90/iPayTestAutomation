class GroupsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/AccountGroups"
PAGE_URL_ADD_GROUP = "https://test.ipayimpact.co.uk/Test/AccountGroups/Add"
PAGE_HEADING = "//h3[normalize-space()='Groups']"
PAGE_HEADING_ADD_GROUP = "//h3[normalize-space()='Add a Group']"
GROUP_RESULT = "//p[normalize-space()='No Groups Found']"
BTN_ADD_GROUP = "//a[normalize-space()='Add a new Group']"
BTN_SAVE_GROUP = "#btnSubmit"
VALIDATION_GROUP_NAME = "#GroupName-error"
BTN_RETURN_GROUP = "//a[normalize-space()='Return to Group List']"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Groups");
}
verifyGroupsList()
{
    cy.xpath(this.GROUP_RESULT).contains("No Groups Found");
}
verifyAddGroupPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL_ADD_GROUP);
    cy.xpath(this.PAGE_HEADING_ADD_GROUP).contains("Add a Group");
}
clickAddNewGroupButton()
{
  cy.xpath(this.BTN_ADD_GROUP).click()
}
clickSaveGroupDetailsButton()
{
  cy.get(this.BTN_SAVE_GROUP).click()
}
clickReturnGroupListButton()
{
  cy.xpath(this.BTN_RETURN_GROUP).click()
}
validationGroupName()
{
  cy.get(this.VALIDATION_GROUP_NAME).contains("The Group Name field is required.");
}
}
export default GroupsPage
