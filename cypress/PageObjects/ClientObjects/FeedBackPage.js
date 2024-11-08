class FeedBackPage {
  Page_Heading = "//div[contains(text(),'CRB Cunninghams Product Roadmap')]";
  Page_URL = "https://portal.productboard.com/crbcunninghams/2-crb-cunninghams-product-roadmap/tabs/9-ipayimpact"
  Heading_Modal = "//div[contains(text(),'Submit new idea')]";
  Modal_Close = "#portal-card-detail > div > div > div > div.WRUxBTz3xZatb7uY9XSZ.VD4ITxupC_pzbPGBkMiw > div > div.vd7UTnYwcY8uLyp1zz9F.pKr29L4nCCGWX_Ege_JL > svg"
  Btn_Submit_Idea = "//span[contains(text(),'Submit idea')]"
verifyHeadingAndURL()
{
    //cy.url().should('eq', this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'CRB Cunninghams Product Roadmap');
}
verifyModalHeading()
{
    cy.xpath(this.Heading_Modal).should('be.visible').and('contain', 'Submit new idea');
}
clickCloseModalButton()
{   
    cy.get(this.Modal_Close).click()
}
clickSubmitIdeaButton()
{
    cy.xpath(this.Btn_Submit_Idea).click()
}
}
export default FeedBackPage;
