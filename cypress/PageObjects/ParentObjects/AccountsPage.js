class AccountsPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Accounts"
PAGE_HEADING = "//h4[normalize-space()='Accounts']"
BTN_SELECT = "(//a[contains(text(),'Select')])[1]"
BTN_LINK_NEW_ACCOUNT = "//a[normalize-space()='Link a New Account']"
clickLinkNewAccountButton()
{
    cy.xpath(this.BTN_LINK_NEW_ACCOUNT).click()
}
clickSelectButton()
{
    cy.xpath(this.BTN_SELECT).click()
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Accounts");
}
}
export default AccountsPage
