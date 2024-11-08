class ChangePasswordPage {
  Page_Heading = "//h3[normalize-space()='Change Password']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Account/ChangePassword"
  BTN_CHANGE_PASSWORD = "//input[@value='Change Password']";
  BTN_BACK_TO_MY_PROFILE = "//a[normalize-space()='Back to My Profile']";
  VALIDATION_CURRENT_PASSWORD = "//span[contains(text(),'The Current Password field is required.')]"
  VALIDATION_NEW_PASSWORD = "//span[contains(text(),'The New Password field is required.')]"
  VALIDATION_CONFIRM__NEW_PASSWORD = "//span[contains(text(),'The Confirm New Password field is required.')]"
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Change Password');
}
clickChangePasswordButton()
{
  cy.xpath(this.BTN_CHANGE_PASSWORD).click();
}
clickBackToMyProfieButton()
{
  cy.xpath(this.BTN_BACK_TO_MY_PROFILE).click();
}
verifyValidationsAppearing()
{
    cy.xpath(this.VALIDATION_CURRENT_PASSWORD).should('be.visible')
    cy.xpath(this.VALIDATION_NEW_PASSWORD).should('be.visible')
    cy.xpath(this.VALIDATION_CONFIRM__NEW_PASSWORD).should('be.visible')
}
}
export default ChangePasswordPage;
