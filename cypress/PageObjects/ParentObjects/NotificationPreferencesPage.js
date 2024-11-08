class NotificationPreferencesPage {
  Page_Heading = "//h3[normalize-space()='Notification Preferences']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Notifications/ParentAlertNotificationsSettings?source=wizard"
BTN_SAVE_PREFERENCES = "#btnSubmit"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
TOAST_SUCCESS = "//div[contains(text(),'Successfully saved preferences')]"
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Notification Preferences');
}
clickSaveButton()
{
    cy.get(this.BTN_SAVE_PREFERENCES).click();
}
clickCancelButton()
{
    cy.xpath(this.BTN_CANCEL).click();
}
verifySuccessToastMessgae()
{
    cy.xpath(this.TOAST_SUCCESS).should('be.visible').and('contain', 'Successfully saved preferences')
}
}
export default NotificationPreferencesPage;
