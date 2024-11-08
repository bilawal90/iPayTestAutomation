class MessagesPage {
  Page_Heading = "//h3[normalize-space()='Messages']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Conversation/Parent"
  Page_URL_CREATE_MESSAGE = "https://test.ipayimpact.co.uk/Test/Conversation/ParentNewMessage"
  Page_Heading_CREATE_MESSAGE = "//h3[normalize-space()='New Message']";
BTN_NEW_MESSAGE = "//a[normalize-space()='New Message']"
TEXTFIELD_SUBJECT = "#Subject"
TEXTFIELD_CONTENT = "#Content"
BTN_SEND_MESSAGE = "#btnSubmit"
SUCCESS_MESSAGE = "//p[normalize-space()='Message was sent successfully.']"
SUBJECT_VALIDATION = "#Subject-error"
CONTENT_VALIDATION = "#Content-error"
verifyValidationMessages()
{
    cy.get(this.SUBJECT_VALIDATION).should('be.visible').and('contain', 'Subject is required');
    cy.get(this.CONTENT_VALIDATION).should('be.visible').and('contain', 'Message is required');
}
verifySucessMessage()
{
    cy.xpath(this.SUCCESS_MESSAGE).should('be.visible').and('contain', 'Message was sent successfully.');
}
enterSubject()
{
    cy.get(this.TEXTFIELD_SUBJECT).type("Test Automated Subject")
}
enterContent()
{
    cy.get(this.TEXTFIELD_CONTENT).type("Test Automated Content")
}
verifyHeadingAndURL()
{
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Messages');
}
verifyHeadingAndURLCreateMessage()
{
    cy.url().should("include", this.Page_URL_CREATE_MESSAGE);
    cy.xpath(this.Page_Heading_CREATE_MESSAGE).should('be.visible').and('contain', 'New Message');
}
clickNewMessageButton()
{
    cy.xpath(this.BTN_NEW_MESSAGE).click();
}
clickSendMessageButton()
{
    cy.get(this.BTN_SEND_MESSAGE).click();
}
}
export default MessagesPage;
