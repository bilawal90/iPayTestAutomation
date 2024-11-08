class ChangeEmailAddressPage {
  Page_Heading = "//h3[normalize-space()='Change Email Address']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Account/ChangeEmailAddress"
  BTN_CHANGE_EMAILL_ADDRESS = "//input[@value='Change Email Address']";
  BTN_BACK_TO_MY_PROFILE = "//a[normalize-space()='Back to My Profile']";
  VALIDATION_EMAIL = "//span[contains(text(),'The New Email field is required.')]"
  VALIDATION_CONFIRM_EMAIL = "//span[contains(text(),'The Confirm New Email field is required.')]"
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Change Email Address');
}
clickChangeEmailAddressButton()
{
  cy.xpath(this.BTN_CHANGE_EMAILL_ADDRESS).click();
}
clickBackToMyProfieButton()
{
  cy.xpath(this.BTN_BACK_TO_MY_PROFILE).click();
}
verifyValidationsAppearing()
{
    cy.xpath(this.VALIDATION_EMAIL).should('be.visible')
    cy.xpath(this.VALIDATION_CONFIRM_EMAIL).should('be.visible')
}
}
export default ChangeEmailAddressPage;
