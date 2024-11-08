class DocumentsPage
{
  HEADING_PAGE = "//h3[normalize-space()='Documents']";
  PAGE_URL= "https://test.ipayimpact.co.uk/Test/Institution/Documents"
  ADDING_DOCUMENT_HEADING_PAGE = "//h3[normalize-space()='Adding New Document']";
  ADDING_DOCUMENT_PAGE_URL = "https://test.ipayimpact.co.uk/Test/Institution/DocumentDetail?documentID=0"
 BTN_ADD_DOCUMENT = "//a[normalize-space()='Add New Document']";
  BTN_SAVE_DOCUMENT = "#btnSubmit";
  BTN_RETURN_TO_DOCUMENTS = "//a[normalize-space()='Return to Documents List']";
  VALIDATION_DOCUMENT_NAME = "#Name-error"
  verifyHeadingandURL()
  {
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Documents')
  }
  verifyAddDocumentHeadingandURL()
  {
    cy.url().should("include", this.ADDING_DOCUMENT_PAGE_URL);
    cy.xpath(this.ADDING_DOCUMENT_HEADING_PAGE).should('be.visible').and('contain', 'Adding New Document')
  }
  verifyPageValidation()
  {
    cy.get(this.VALIDATION_DOCUMENT_NAME).should('be.visible').and('contain', 'The Document Name field is required.')
  }
  clickAddNewDocumentButton()
  {
    cy.xpath(this.BTN_ADD_DOCUMENT).should('be.visible');
    cy.xpath(this.BTN_ADD_DOCUMENT).click();
  }
  clickSaveButton()
  {
    cy.get(this.BTN_SAVE_DOCUMENT).should('be.visible');
    cy.get(this.BTN_SAVE_DOCUMENT).click();
  }
  clickReturnToDocumentListButton()
  {
    cy.xpath(this.BTN_RETURN_TO_DOCUMENTS).should('be.visible');
    cy.xpath(this.BTN_RETURN_TO_DOCUMENTS).click();
  }
}
export default DocumentsPage