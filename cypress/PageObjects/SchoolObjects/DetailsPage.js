class DetailsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Institution"
PAGE_HEADING = "//h3[normalize-space()='Details']"
BTN_UPDATE_DETAILS = "//input[@name='submit']"
VALIDATION_POST_CODE = "#PostCode-error"
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Details");
}
verifyValidateMessage()
{
    cy.get(this.VALIDATION_POST_CODE).contains("The Postcode field is required.");
}
clickUpdateDetailsButton()
{
  cy.xpath(this.BTN_UPDATE_DETAILS).click()
}
}
export default DetailsPage
