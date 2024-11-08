class ThresholdPage {
  HEADING_PAGE = "//h3[normalize-space()='Threshold']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Preorder/ThresholdManagement?fundID="
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Threshold");
}
}
export default ThresholdPage
