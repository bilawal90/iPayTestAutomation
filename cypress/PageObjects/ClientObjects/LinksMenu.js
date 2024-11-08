class LinksMenu
{
  linkHome = "li[class='nav-item active '] a[title='Home']"
  linkClientDetails = "a[title='Client Details']"
  linkLogins = "a[title='Logins']"
  linkAccounts = "a[title='Accounts']"
  linkEstablishments = "a[title='Establishments']"
  linkBanking = "a[title='Banking']"
  linkMenus = "a[title='Menus']"
  linkReports = "a[title='Reports']"
  linkCommunications = ".nav-link[href='#comms']"
  LinkGenerateCSV = "//a[normalize-space()='Generate CSV']"
  LinkTemplateManagement = "a[href='/Test/Templates']"
  //LinkHelp = "//a[normalize-space()='Help']"
  LinkHelp = "//a[@href='#help']"
  LinkFaqs= "//a[normalize-space()='FAQs']";
  LinkFeedback = "//a[normalize-space()='Give Feedback']"
  LinkWhatsNew = "//a[@href='https://test.ipayimpact.co.uk:443/Test/WhatsNew']"
  LinkContactSupport = "//a[normalize-space()='Contact Support']"
  LinkNameLogo = ".avatar-title.avatar-sm.rounded-circle";
  LinkMyProfile = "div[aria-labelledby='avatar-top'] a:nth-child(1)";
LinkLogOut = "//a[contains(text(),'Logout')]"
clickLinkClientDetails()
{
  cy.get(this.linkClientDetails).should('be.visible')
  cy.get(this.linkClientDetails).click();
}
clickLinkHome()
{
  cy.get(this.linkHome).click();
}
clickLoginsLink()
{
  cy.get(this.linkLogins).should('be.visible')
  cy.get(this.linkLogins).click();
}
clickAccountsLink()
{
  cy.get(this.linkAccounts).should('be.visible')
  cy.get(this.linkAccounts).click();
}
clickEstablishments()
{
  cy.get(this.linkEstablishments).should('be.visible')
  cy.get(this.linkEstablishments).click();
}
clickBanking()
{
  cy.get(this.linkBanking).should('be.visible')
  cy.get(this.linkBanking).click();
}
clickMenus()
{
  cy.get(this.linkMenus).should('be.visible')
  cy.get(this.linkMenus).click();
}
clickReports()
{
  cy.get(this.linkReports).should('be.visible')
  cy.get(this.linkReports).click();
}
clickCommunicationsLink()
{
  cy.get(this.linkCommunications).should('be.visible')
  cy.get(this.linkCommunications).click();
}
clickGenerateCSVLink()
{
  cy.xpath(this.LinkGenerateCSV).should('be.visible')
  cy.xpath(this.LinkGenerateCSV).click();
}
clickTemplateManagementLink()
{
  cy.get(this.LinkTemplateManagement).click({force: true});
}
clickHelpLink()
{
  //cy.xpath(this.LinkHelp).should('be.visible')
  cy.xpath(this.LinkHelp).click();
}
clickFAQLink()
{
  cy.xpath(this.LinkFaqs).should('be.visible')
  cy.xpath(this.LinkFaqs).click();
}
clickGiveFeedbackLink()
{
  cy.xpath(this.LinkFeedback).should('be.visible')
  cy.xpath(this.LinkFeedback).invoke('removeAttr','target').click();
}
clickWhatsNewLink()
{
  cy.xpath(this.LinkWhatsNew).should('be.visible')
  cy.xpath(this.LinkWhatsNew).click();
}
clickContactSupportlink()
{
  cy.xpath(this.LinkContactSupport).should('be.visible')
  cy.xpath(this.LinkContactSupport).click();
}
clickNameLogo()
{
  cy.get(this.LinkNameLogo).click({force: true});
}
clickMyProfilelink()
{
  cy.get(this.LinkMyProfile).click({force: true});
}
clickLogOutLink()
{
  cy.xpath(this.LinkLogOut).eq(1).click({force: true});
}
}
export default LinksMenu