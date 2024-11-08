class NotificationPage {
  Page_Heading = "//h3[contains(text(),'Notifications')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Notifications/NotificationsList"
BTN_REFRESH_LIST = "//input[@name='Action']"
BTN_DETAILS = "(//a[contains(text(),'Details')])[1]"
verifyHeadingAndURL()
{
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Notifications - ');
}
clickRefreshListButton()
{
    cy.xpath(this.BTN_REFRESH_LIST).click();
}
clickDetailsButton()
{
    cy.xpath(this.BTN_DETAILS).click();
}
}
export default NotificationPage;
