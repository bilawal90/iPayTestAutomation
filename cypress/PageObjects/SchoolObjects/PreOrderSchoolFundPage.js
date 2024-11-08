class PreOrderSchoolFundPage {
  HEADING_PAGE = "//h3[normalize-space()='Pre-order School Meals']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundDetails?fundID=6480"
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Pre-order School Meals");
}
}
export default PreOrderSchoolFundPage;
