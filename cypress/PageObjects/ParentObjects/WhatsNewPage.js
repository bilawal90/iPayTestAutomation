class WhatsNewPage {
  Page_Heading = "//h3[contains(text(),'What')]";
  Page_URL = "https://test.ipayimpact.co.uk/Test/WhatsNew"
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'What\'s New');
}
}
export default WhatsNewPage;
