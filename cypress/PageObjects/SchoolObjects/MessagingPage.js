class MessagingPage {
  Heading_Page = "//h3[normalize-space()='Messaging']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Conversation/Establishment";
  Page_URL_SENT = "https://test.ipayimpact.co.uk/Test/Conversation/EstablishmentMessagesSent";
  Page_URL_NEW_MESSAGE = "https://test.ipayimpact.co.uk/Test/Conversation/EstablishmentNewMessage";
  PAGE_HEADING_NEW_MESSAGE = "//h3[normalize-space()='New Message']"
  HEADING_CONVERSATION = "//h2[normalize-space()='No Conversation selected']"
HEADING_GRID = "//h4[normalize-space()='No conversations found.']"
LINK_SENT = "//a[normalize-space()='Sent']"
BTN_NEW_MESSAGE = "//a[normalize-space()='New Message']"
BTN_DISCARD = "//a[@id='discard-message']"
MESSAGE_NO_AUDIENCE = "#no-audience-message"
  verifyHeadingandURL()
  {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Messaging')
    cy.xpath(this.HEADING_CONVERSATION).should('be.visible').and('contain', 'No Conversation selected')
    //cy.xpath(this.HEADING_GRID).should('be.visible').and('contain', 'No conversations found.')
  }
  verifySentHeadingandURL()
  {
    cy.url().should("include", this.Page_URL_SENT);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Messaging')
    cy.xpath(this.HEADING_CONVERSATION).should('be.visible').and('contain', 'No Conversation selected')
    //cy.xpath(this.HEADING_GRID).should('be.visible').and('contain', 'No conversations found.')
  }
  verifyNewMessageHeadingandURL()
  {
    cy.url().should("include", this.Page_URL_NEW_MESSAGE);
    cy.xpath(this.PAGE_HEADING_NEW_MESSAGE).should('be.visible').and('contain', 'New Message')
    cy.get(this.MESSAGE_NO_AUDIENCE).should('be.visible').and('contain', 'No audience selected yet. Add an audience to get started')
  }
  clickSentLink()
  {
    cy.xpath(this.LINK_SENT).click();
  }
  clickNewMessageButton()
  {
    cy.xpath(this.BTN_NEW_MESSAGE).click();
  }
  clickDiscardButton()
  {
    cy.xpath(this.BTN_DISCARD).click();
  }
}
export default MessagingPage;
