class ParentPermissionReport {
  HEADING_REPORT = "//div[contains(text(),'SAAuto1')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/ParentPermissions?fundID=6763"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/ParentPermissions?Parameters="
  HEADING_REPORT = "//div[contains(text(),'Parent Permissions')]"
  HEADING_PAGE = "//h3[contains(text(),'Parent Permissions - Trip Fund Test Automation Sel')]"
BTN_RUN_REPORT = "//input[@name='Submit']"
  BTN_BACK_REPORT = "//img[@alt='Back']";
  verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Parent Permissions - Trip Fund Test Automation Selected Accounts Paid");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Parent Permissions");
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).trigger('mouseover').click()
}
clickRunReportButton()
{
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).trigger('mouseover').click()
}
}
export default ParentPermissionReport
