class ProfilePage {
  Page_Heading = "//h3[normalize-space()='Update My Profile']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Account/AccountDetails"
  Status_Updated_Page_Heading = "//h3[normalize-space()='Account Updated Successfully']";
  Status_Updated_Page_URL = "https://test.ipayimpact.co.uk/Test/Account/DetailsAmended"
  BTN_SAVE_MY_PROFILE = "input[value='Save My Profile']";
  BTN_CANCEL = "//a[normalize-space()='Cancel']"
  BTN_CHANGE_EMAIL = "//a[normalize-space()='Change Your Email Address']"
  BTN_CHANGE_PSWD = "//a[normalize-space()='Change Your iPayimpact Password']";
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Update My Profile');
}
verifyHeadingAndURLOnStatusUpdatePage()
{
    cy.url().should("eq", this.Status_Updated_Page_URL);
    cy.xpath(this.Status_Updated_Page_Heading).should('be.visible').and('contain', 'Account Updated Successfully');
}
clickSaveMyProfileButton()
{
    cy.get(this.BTN_SAVE_MY_PROFILE).click();
}
clickCancelButton()
{
    cy.xpath(this.BTN_CANCEL).click();
}
clickChangeEmailButton()
{
    cy.xpath(this.BTN_CHANGE_EMAIL).click();
}
clickChangeIpayPasswordButton()
{
    cy.xpath(this.BTN_CHANGE_PSWD).click();
}
}
export default ProfilePage;
