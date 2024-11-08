class BannersPage {
  Page_Heading = "//h3[normalize-space()='Pre-order App Banners']";
  Add_Banner_Page_Heading = "//h1[normalize-space()='Add Banner']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/FusionOnline/EstablishmentNotifications"
  ADD_BANNER_PAGE_URL = "https://test.ipayimpact.co.uk/Test/FusionOnline/EstablishmentNotification"
  BUTTON_BANNERS = "//a[normalize-space()='Add Banner']"
TEXT_NO_BANNERS = "//td[normalize-space()='No Banners Found']"
BTN_SAVE = "#btnSubmit"
VALIDATION_TITLE = "#Title-error"
VALIDATION_TEXT = "#Text-error"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Pre-order App Banners');
}
verifyValidationMessage()
{
    cy.get(this.VALIDATION_TITLE).should('be.visible').and('contain', 'The Title field is required.');
    cy.get(this.VALIDATION_TEXT).should('be.visible').and('contain', 'The Text field is required.');
}
verifyHeadingAndURLOnAddBannerPage()
{
    cy.url().should("eq", this.ADD_BANNER_PAGE_URL);
    cy.xpath(this.Add_Banner_Page_Heading).should('be.visible').and('contain', 'Add Banner');
}
clickBannersButton()
{
    cy.xpath(this.BUTTON_BANNERS).click();
}
clickSaveButton()
{
    cy.get(this.BTN_SAVE).click();
}
clickCancelButton()
{
    cy.xpath(this.BTN_CANCEL).click();
}
verifyBannersText()
{
    cy.xpath(this.TEXT_NO_BANNERS).should('be.visible').and('contain', 'No Banners Found');
}
}
export default BannersPage;
