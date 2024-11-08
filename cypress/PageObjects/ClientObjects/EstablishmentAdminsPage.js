class EstablishmentAdminsPage {
Heading_Page = "//h3[normalize-space()='Establishment Admins']";
Btn_CreateUser = "//a[@class='btn btn-sm btn-primary']";
Btn_Return = "//a[normalize-space()='Return to Establishments List']";
Checkbox_InActive = "//input[@id='ShowDisabled']";
Btn_Edit = "//a[normalize-space()='Edit']";
Toast_Sucess = "//p[@class='text-success']";
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Account/ListAccountsByInstitution"
HEADING_PAGE = "//h3[normalize-space()='Establishment Admins']"
verifyHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Establishment Admins');
}
verifySuccessToast() {
    cy.xpath(this.Toast_Sucess).should('be.visible')
  }
  verifyHeadingVisibility() {
    cy.xpath(this.Heading_Page).should('be.visible').and('contain','Establishment Admins');
  }
  clickCreateEAUserButton() {
    cy.xpath(this.Btn_CreateUser).should('be.visible')
    cy.xpath(this.Btn_CreateUser).click();
}
clickEditButton() {
  cy.xpath(this.Btn_Edit).should('be.visible')
  cy.xpath(this.Btn_Edit).click();
}
clickReturnButton() {
  cy.xpath(this.Btn_Return).should('be.visible')
  cy.xpath(this.Btn_Return).click();
}
}
export default EstablishmentAdminsPage