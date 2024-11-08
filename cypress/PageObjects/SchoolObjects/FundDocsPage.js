class FundDocsPage {
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundDocuments?fundID=6763"
URL_PAGE_DOCS = "https://test.ipayimpact.co.uk/Test/Fund/FundDocumentDetails?documentID=0&fundID=6763"
HEADING_PAGE = "//h3[normalize-space()='Docs']"
DOCS_HEADING_PAGE = "//h3[contains(text(),'Adding New Document')]"
BTN_ADD_NEW_Document = "//a[normalize-space()='Add New Document']"
VALIDATION_DOCUMENT_NAME = "#Name-error"
BTN_SAVE_DOCUMENT= "//input[@id='btnSubmit']"
BTN_RETURN_FUND = "//a[normalize-space()='Return to Fund']"
verifyDocNameValidationMessage()
{
  cy.get(this.VALIDATION_DOCUMENT_NAME)
  .should("be.visible")
  .contains("The Document Name field is required.")
}
clickReturnToFundButton()
{
  cy.xpath(this.BTN_RETURN_FUND).click()
}
clickSaveDocumentButton()
{
  cy.xpath(this.BTN_SAVE_DOCUMENT).click()
}
clickAddNewDocumentButton()
{
  cy.xpath(this.BTN_ADD_NEW_Document).click()
}
verifyPageHeadingAndURL()
{
  cy.url().should("eq", this.URL_PAGE)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Docs")
}
verifyDocumentPageHeadingAndURL()
{
  cy.url().should("eq", this.URL_PAGE_DOCS)
  cy.xpath(this.DOCS_HEADING_PAGE)
    .should("be.visible")
    .contains("Adding New Document - Trip Fund Test Automation Selected Accounts Paid")
}
}
export default FundDocsPage
