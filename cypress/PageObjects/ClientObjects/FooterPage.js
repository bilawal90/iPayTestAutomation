class FooterPage {
  LINK_ACCESSIBILITY = "a[href='/Test/Home/Accessibility']"
  LINK_COOKIES = "//a[contains(text(),'Cookies')]"
  LINK_PRIVACY_STATEMENT = "a[href='/Test/Home/PrivacyStatement']"
  LINK_SITEMAP = "a[href='/Test/Home/Sitemap']"
  LINK_PCI = "//a[contains(text(),'PCI DSS Compliance') and @href ='/Test/Home/PCIDSSCompliance']"
  LINK_ALLERGY_ADVICE = "a[href='/Test/Home/AllergyAdvice']"
  LINK_STATUS = "a[href='https://status.ipayimpact.co.uk/']"
  LINK_WHATS_NEW = "a[href='/Test/WhatsNew']"
  ACCESSIBILITY_URL = "https://test.ipayimpact.co.uk/Test/Home/Accessibility"
  ACCESSIBILITY_PAGE_HEADING = "//h1[normalize-space()='Accessibility Statement for iPayimpact']"
  COOKIES_URL = "https://test.ipayimpact.co.uk/Test/Home/Cookies"
  COOKIES_PAGE_HEADING = "//h1[normalize-space()='Cookies']"
  PRIVACY_URL = "https://test.ipayimpact.co.uk/Test/Home/PrivacyStatement"
  PRIVACY_PAGE_HEADING = "//h1[normalize-space()='Privacy Statement']"
  SITEMAP_URL = "https://test.ipayimpact.co.uk/Test/Home/Sitemap"
  SITEMAP_PAGE_HEADING = "//h1[normalize-space()='iPayimpact Sitemap']"
  PCI_URL = "https://test.ipayimpact.co.uk/Test/Home/PCIDSSCompliance"
  PCI_PAGE_HEADING = "//h1[normalize-space()='PCI DSS Compliance']"
  ALLERGY_ADVICE_URL = "https://test.ipayimpact.co.uk/Test/Home/AllergyAdvice"
  ALLERGY_ADVICE_PAGE_HEADING = "//h1[normalize-space()='Allergy Advice']"
  STATUS_URL = "https://status.ipayimpact.co.uk/"
  STATUS_PAGE_HEADING = "//h2[normalize-space()='Service status']"
  WHATS_NEW_URL = "https://test.ipayimpact.co.uk/Test/WhatsNew"
  WHATS_NEW_PAGE_HEADING = "//h3[contains(text(),'What')]"  
  clickAccessibilityLink()
  {
    cy.get(this.LINK_ACCESSIBILITY).click();
  }
  clickCookiesLink()
  {
    cy.xpath(this.LINK_COOKIES).click();
  }
  clickPrivacyStatementLink()
  {
    cy.get(this.LINK_PRIVACY_STATEMENT).click();
  }
  clickSiteMapLink()
  {
    cy.get(this.LINK_SITEMAP).click();
  }
  clickPCIComplianceLink()
  {
    cy.xpath(this.LINK_PCI).eq(0).click();
  }
  clickAllergyAdviceLink()
  {
    cy.get(this.LINK_ALLERGY_ADVICE).click();
  }
  clickStatusLink()
  {
    cy.get(this.LINK_STATUS).click();
  }
  clickWhatsNewLink()
  {
    cy.get(this.LINK_WHATS_NEW).click();
  }
verifyAccessibilityPageHeadingAndURL()
{
    cy.url().should("eq", this.ACCESSIBILITY_URL);
    cy.xpath(this.ACCESSIBILITY_PAGE_HEADING).should('be.visible').and('contain', 'Accessibility Statement for iPayimpact');
}
verifyCookiesPageHeadingAndURL()
{
    cy.url().should("eq", this.COOKIES_URL);
    cy.xpath(this.COOKIES_PAGE_HEADING).should('be.visible').and('contain', 'Cookies');
}
verifyPrivacyStatementPageHeadingAndURL()
{
    cy.url().should("eq", this.PRIVACY_URL);
    cy.xpath(this.PRIVACY_PAGE_HEADING).should('be.visible').and('contain', 'Privacy Statement');
}
verifySiteMapPageHeadingAndURL()
{
    cy.url().should("eq", this.SITEMAP_URL);
    cy.xpath(this.SITEMAP_PAGE_HEADING).should('be.visible').and('contain', 'iPayimpact Sitemap');
}
verifyPCICompliancePageHeadingAndURL()
{
    cy.url().should("eq", this.PCI_URL);
    cy.xpath(this.PCI_PAGE_HEADING).should('be.visible').and('contain', 'PCI DSS Compliance');
}
verifyAllergyAdvicePageHeadingAndURL()
{
    cy.url().should("eq", this.ALLERGY_ADVICE_URL);
    cy.xpath(this.ALLERGY_ADVICE_PAGE_HEADING).should('be.visible').and('contain', 'Allergy Advice');
}
verifyWhatsNewPageHeadingAndURL()
{
    cy.url().should("eq", this.WHATS_NEW_URL);
    cy.xpath(this.WHATS_NEW_PAGE_HEADING).should('be.visible').and('contain', 'What\'s New');
}
}
export default FooterPage;
