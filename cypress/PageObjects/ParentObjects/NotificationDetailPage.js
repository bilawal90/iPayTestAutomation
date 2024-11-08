class NotificationDetailPage {
  Page_Heading = "//h3[normalize-space()='iPayimpact Automatic Payment Declined']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Notifications/NotificationDetails?"
BTN_BACK = "//a[normalize-space()='Back']"
verifyHeadingAndURL()
{
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'iPayimpact Automatic Payment Declined');
}
clickBackButton()
{
    cy.xpath(this.BTN_BACK).click();
}
}
export default NotificationDetailPage;
