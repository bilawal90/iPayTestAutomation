class ClientLoginsPage
{
    headingLogin = "//h3[normalize-space()='Logins']" ;
    btnCreateLogin = "//a[normalize-space()='Create Login']" ;
    btnRefreshList = "//input[@id='btnSubmit']" ;
    checkboxInactive = "//input[@id='ShowDisabled']" ;
    lblUserName = "//th[normalize-space()='Username']"
    btnEdit = "//a[normalize-space()='Edit']" ;
    URL_PAGE = "https://test.ipayimpact.co.uk/Test/Login/ListLogins"
    HEADING_PAGE = "//h3[normalize-space()='Logins']"
    verifyHeadingAndURL()
    {
        cy.url().should("eq", this.URL_PAGE);
        cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Logins');
    }
    verifyHeadingVisibility()
{
    cy.xpath(this.headingLogin).should('be.visible');
}
verifyHeadingText()
{
    cy.xpath(this.headingLogin).should('contain', 'Logins');
}
verifyCreateLoginBtnVisibility()
{
    cy.xpath(this.btnCreateLogin).should('be.visible');
}
verifyRefreshBtnVisibility()
{
    cy.xpath(this.btnRefreshList).should('be.visible');
}
verifyCheckboxVisibility()
{
    cy.xpath(this.checkboxInactive).should('be.visible');
}
verifyUserNameLblVisibility()
{
    cy.xpath(this.lblUserName).should('be.visible');
}
verifyEditBtnVisibility()
{
    cy.xpath(this.btnEdit).should('be.visible');
}
clickCreateLoginBtn()
{
    cy.xpath(this.btnCreateLogin).click();
}
}
export default ClientLoginsPage;