class PermissionsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/Permissions?fundID=6763"
PERMISSION_LIST_PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/PermissionsListSelect"
PAGE_URL_ON_SAVE = "https://test.ipayimpact.co.uk/Test/Fund/SaveGroupPermissions"
PAGE_HEADING = "//body/div/div/div/div/h3[1]"
VIEW_PERMISSION_BTN = "#submit"
DROPDOWN_YEAR = "#SelectedClass"
SAVE_BTN = "#btnSubmitBottom"
BTN_RETURN = "//a[normalize-space()='Return To Fund']";
clickReturnToFundButton()
{
  cy.xpath(this.BTN_RETURN).should("be.visible").click();
}
clickSaveButton()
{
  cy.get(this.SAVE_BTN).should("be.visible").click();
}
clickViewPermissionsButton()
{
  cy.get(this.VIEW_PERMISSION_BTN).should("be.visible").click();
}
selectYear() {
  cy.get(this.DROPDOWN_YEAR).select('N/A - N/A')
}
verifyPermissionListUrl()
{
    cy.url().should("include", this.PERMISSION_LIST_PAGE_URL);
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Permissions - Trip Fund Test Automation Selected Accounts Paid");
}
verifyPageHeadingAndURLOnSave()
{
    cy.url().should("include", this.PAGE_URL_ON_SAVE);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Permissions - Trip Fund Test Automation Selected Accounts Paid");
}
}
export default PermissionsPage
