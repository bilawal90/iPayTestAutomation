class UsersPage {
  Page_Heading = "//h3[normalize-space()='Fusion Online Users']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/FusionOnline"
  LINK_LETTERS = "//a[normalize-space()='Need to send onboarding letters?']"
  HEADING_POPUP = "#exampleModalLongTitle"
  CLOSE_POPUP = "//span[normalize-space()='×']"
  TEXTBOX_SEARCH = "//label[normalize-space()='Search']"
TEXT_NO_RECORD = "//td[@valign='top']"
TEXT_RECORD = "#usersTablev2_info"
verifyHeadingAndURL()
{
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Fusion Online Users');
}
verifyPopupHeading()
{
  cy.wait(300)
    cy.get(this.HEADING_POPUP).should('be.visible').and('contain', 'Onboarding Letters');
}
clickLettersLink()
{
    cy.xpath(this.LINK_LETTERS).click();
}
clickClosePopop()
{
    cy.wait(300)
    cy.xpath(this.CLOSE_POPUP).trigger('mouseover').click({force: true})
}
enterSearchText()
{
  cy.xpath(this.TEXTBOX_SEARCH).type("abc")
}
clearSearchText()
{
  cy.xpath(this.TEXTBOX_SEARCH).clear()
}
verifySearchResult()
{
  cy.wait(300)
    cy.xpath(this.TEXT_NO_RECORD).should('be.visible').and('contain', 'No matching records found');
}
verifySearchResultPositive()
{
  cy.wait(300)
    cy.get(this.TEXT_RECORD).should('be.visible').and('contain', 'Showing 1');
}
}
export default UsersPage;
