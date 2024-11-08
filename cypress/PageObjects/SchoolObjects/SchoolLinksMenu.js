class SchoolLinksMenu
{
  linkHome = "//a[normalize-space()='Home']"
  LINK_MEALS = ".nav-link[href='#meals']"
  LINK_PREORDERS = "//a[normalize-space()='Pre-orders']";
  LINK_RECORDING = "//a[normalize-space()='Recording']";
  LINK_REPORTING = "//a[normalize-space()='Reporting']";
  linkLogins = "a[title='Logins']"
  linkAccounts = "a[title='Accounts']"
LINK_GROUPS = "//a[normalize-space()='Groups']"
LINK_YOUR_ESTABLISHMENT = "//a[normalize-space()='Your Establishment']"
  linkEstablishments = "a[title='Establishments']"
  linkBanking = "a[title='Banking']"
  linkMenus = "a[title='Menus']"
  linkReports = "a[title='Reports']"
  linkCommunications = ".nav-link[href='#comms']"
  linkMessaging = "a[href='https://test.ipayimpact.co.uk:443/Test/Conversation/Establishment']"
  LinkGenerateCSV = "//a[normalize-space()='Generate CSV']"
  LinkTemplateManagement = "a[href='/Test/Templates']"
  LinkHelp = "//a[@href='#help']"
  LinkFaqs= "//a[normalize-space()='FAQs']";
  LinkFeedback = "//a[normalize-space()='Give Feedback']"
  LinkWhatsNew = "//a[@href='https://test.ipayimpact.co.uk:443/Test/WhatsNew']"
  LinkContactSupport = "//a[normalize-space()='Contact Support']"
  LinkNameLogo = ".avatar-title.avatar-sm.rounded-circle";
  LinkMyProfile = "div[aria-labelledby='avatar-top'] a:nth-child(1)";
  LinkLogOut = "//a[contains(text(),'Logout')]"
  Link_Funds = "//a[@title='Funds']";
  LINK_DETAILS = "//a[normalize-space()='Details']"
LINK_TERM_DATES = "//a[normalize-space()='Term Dates']"
LINK_HOLIDAYS = "//a[normalize-space()='Holidays']"
LINK_ACCOUNT_DESCRIPTIONS = "//a[normalize-space()='Account Descriptions']"
LINK_CONTENT = "//a[normalize-space()='Content']"
LINK_DOCUMENTS = "//a[normalize-space()='Documents']"
LINK_PROVISIONING = "//a[normalize-space()='Provisioning']"
LINK_FORMS = "a[href='https://test.ipayimpact.co.uk:443/Test/Forms/Index']"
LINK_FUSION_ONLINE = "//a[normalize-space()='Fusion Online']"
LINK_USERS = "//a[normalize-space()='Users']"
LINK_BANNERS = "//a[normalize-space()='Banners']"
clickFusionOnlineLink()
{
  cy.xpath(this.LINK_FUSION_ONLINE).click();
}
clickUsersLink()
{
  cy.xpath(this.LINK_USERS).click();
}
clickBannersLink()
{
  cy.xpath(this.LINK_BANNERS).click();
}
clickFormsLink()
{
  cy.get(this.LINK_FORMS).click();
}
clickProvisioningLink()
{
  cy.xpath(this.LINK_PROVISIONING).click();
}
  clickGroupsLink()
  {
    cy.xpath(this.LINK_GROUPS).click();
  }
clickFundsLink()
{
  cy.xpath(this.Link_Funds).click();
}
clickLinkHome()
{
  cy.xpath(this.linkHome).click();
}
clickLinkMeals()
{
  cy.get(this.LINK_MEALS).click();
}
clickLinkPreOrders()
{
  cy.xpath(this.LINK_PREORDERS).click();
}
clickLinkRecording()
{
  cy.xpath(this.LINK_RECORDING).click();
}
clickLinkReporting()
{
  cy.xpath(this.LINK_REPORTING).click();
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
clickYourEstablishmentLink()
{
  cy.xpath(this.LINK_YOUR_ESTABLISHMENT).click();
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
clickMessagingLink()
{
  cy.get(this.linkMessaging).should('be.visible')
  cy.get(this.linkMessaging).click();
}
clickGenerateCSVLink()
{
  cy.xpath(500)
  cy.xpath(this.LinkGenerateCSV).scrollIntoView()
  cy.xpath(this.LinkGenerateCSV).click();
}
clickTemplateManagementLink()
{
  cy.get(this.LinkTemplateManagement).click({force: true});
}
clickHelpLink()
{
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
clickDetailsLink()
{
  cy.xpath(this.LINK_DETAILS).click();
}
clickTermDatesLink()
{
  cy.xpath(this.LINK_TERM_DATES).click();
}
clickHolidaysLink()
{
  cy.xpath(this.LINK_HOLIDAYS).click();
}
clickAccountDescriptionsLink()
{
  cy.xpath(this.LINK_ACCOUNT_DESCRIPTIONS).click();
}
clickContentLink()
{
  cy.xpath(this.LINK_CONTENT).click();
}
clickDocumentsLink()
{
  cy.xpath(this.LINK_DOCUMENTS).click();
}
}
export default SchoolLinksMenu