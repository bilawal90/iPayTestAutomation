class FAQsPage {
  Page_Heading = "//h2[normalize-space()='Frequently Asked Questions']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/FAQ"
  TextBox_Search = "#SearchText"
Button_Search = "input[value='Search']";
Validation_Search = "//span[contains(text(),'The Search field is required.')]";
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Frequently Asked Questions');
}
verifyValidation()
{
    cy.xpath(this.Validation_Search).should('be.visible').and('contain', 'The Search field is required.');
}
verifyValidationNotAppearing()
{
    cy.xpath(this.Validation_Search).should('not.exist')
}
clickSearchButton()
{
    cy.get(this.Button_Search).click()
}
typeSearchContent()
{
    cy.get(this.TextBox_Search).type("Bilawal")
}
}
export default FAQsPage;
