class ClientDetailsPage
{
pageHeading = "/html/body/div[2]/div/div/div/h3" ;
lblClientID = "label[for='ClientID']" ;
lblClientName = "label[for='ClientName']" ;
lblLedgerCode = "label[for='LedgerCodeID']" ;
lblBandingRef = "label[for='BrandingRef']" ;
btnUpdateClient = "input[value='Update Client Details']"
txtBrandingRef = "#BrandingRef"
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Client"
HEADING_PAGE = "//h3[normalize-space()='Update Client details']"
verifyHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Update Client details');
}
verifyPageHeadingText()
{
    cy.xpath(this.pageHeading).should('contain', 'Update Client details');
}
verifyClientIDLbl()
{
    cy.get(this.lblClientID).should('be.visible');
}
verifyClientNameLbl()
{
    cy.get(this.lblClientName).should('be.visible');
}
verifyledgerCodeLbl()
{
    cy.get(this.lblLedgerCode).should('be.visible');
}
verifyBrandingRefLbl()
{
    cy.get(this.lblBandingRef).should('be.visible');
}
verifyUpdateDetailsBtn()
{
    cy.get(this.btnUpdateClient).should('be.visible');
}
verifyBrandingRefTextbox()
{
    cy.get(this.txtBrandingRef).should('be.visible');
}
}
export default ClientDetailsPage