class FundNotificationsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/FundNotifications"
PAGE_HEADING = "//h3[normalize-space()='Notifications']"
STEP1_HEADING = "//p[normalize-space()='Step 1 - Select the accounts to notify']";
BTN_SEARCH_ACCOUNTS = "//input[@value='Search Accounts']"
SEARCH_RESULT = "//p[normalize-space()='1 result was found']";
SENT_NOTIFICATIONS_LINK = "//a[normalize-space()='Sent Notifications']";
NO_DATA_TEXT = "//td[@valign='top']";
INFO_ACCOUNT = "td[colspan='9']"
LINK_AUTO_NOTIFICATIONS = "//a[normalize-space()='Automatic Notifications']"
TEXT_BALANCE_ALERT = "//h4[normalize-space()='Balance Alert']"
BTN_RETURN_TO_FUND = "//a[normalize-space()='Return to fund']"
verifySentNotificationInfoText()
{
    cy.xpath(this.NO_DATA_TEXT)
      .should("be.visible")
      .contains("No data available in table");
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Notifications");
}
verifyStep1Heading()
{
    cy.xpath(this.STEP1_HEADING)
      .should("be.visible")
      .contains("Step 1 - Select the accounts to notify");
}
verifyAccountsInfo()
{
    cy.get(this.INFO_ACCOUNT)
      .should("be.visible")
      .contains("No accounts currently meet the above critera.");
}
verifyBalanceAlertText()
{
    cy.xpath(this.TEXT_BALANCE_ALERT)
      .should("be.visible")
      .contains("Balance Alert");
}
verifyAccountsInfoNotAppearing()
{
    cy.get(this.INFO_ACCOUNT)
      .should("not.be.exist")
}
verifySearchResult()
{
    cy.xpath(this.SEARCH_RESULT)
      .should("be.visible")
      .contains("1 result was found");
}
clickSearchAccounts()
{
  cy.xpath(this.BTN_SEARCH_ACCOUNTS)
      .should("be.visible")
      .click();
}
clickReturnToFundButton()
{
  cy.xpath(this.BTN_RETURN_TO_FUND)
      .should("be.visible")
      .click();
}
clickSentNotificationsLink()
{
  cy.xpath(this.SENT_NOTIFICATIONS_LINK)
      .should("be.visible")
      .click();
}
clickAutoNotificationsLink()
{
  cy.xpath(this.LINK_AUTO_NOTIFICATIONS)
      .should("be.visible")
      .click();
}
}
export default FundNotificationsPage
