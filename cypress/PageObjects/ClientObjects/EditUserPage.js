class EditUserPage
{
  Heading_Page = "//h3[normalize-space()='Edit User']";
  Btn_Save = "input[value='Save']";
  Btn_Cancel = "//a[normalize-space()='Cancel']";
  verifyHeadingAndURL() {
    cy.xpath(this.Heading_Page).should('be.visible').and('contain','Edit User');
    cy.url().should("contains", "/Test/Account/ClientEditUser");
  }
  clickSaveButton() {
    cy.get(this.Btn_Save).should('be.visible')
    cy.get(this.Btn_Save).click();
}
}
export default EditUserPage;