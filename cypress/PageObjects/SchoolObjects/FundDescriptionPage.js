class FundDescriptionPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/FundBlurb?fundID=6763"
LA_PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/FundBlurb?fundID=6765"
PAGE_HEADING = "//h3[contains(text(),'Fund Description - Trip Fund Test Automation Selec')]"
LA_PAGE_HEADING = "//h3[normalize-space()='Fund Description - LA Test Automation Fund']"
SAVE_DESCRIPTION_BTN = "#submit"
clickSaveDescriptionBtn()
{
  cy.get(this.SAVE_DESCRIPTION_BTN).click()
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING)
      .should("be.visible")
      .contains("Trip Fund Test Automation Selected Accounts Paid");
}
verifyLAPageHeadingAndURL()
{
    cy.url().should("include", this.LA_PAGE_URL);
    cy.xpath(this.LA_PAGE_HEADING)
      .should("be.visible")
      .contains("Fund Description - LA Test Automation Fund");
}
}
export default FundDescriptionPage
