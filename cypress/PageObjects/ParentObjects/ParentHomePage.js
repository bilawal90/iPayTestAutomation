class ParentHomePage 
{
  HeadingHome = ".col-12 > h3";
  TextHome = "h4[class='mb-0']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test"
  HEADING_PARENT = "//h3[normalize-space()='Your Notification Settings have not been set']"
PA_SUBHEADING = "//h4[normalize-space()='Funds Requiring Payments']";
LINK_HOME = "//a[normalize-space()='Home']"
LINK_AN_ACCOUNT = "//a[normalize-space()='Link an Account']"
BTN_TERM_DATES = "#btnTermDates"
BTN_HOLIDAYS = "#btnHolidays"
TERM_MODULE_HEADING = "(//h4[@id='myModalLabel'])[1]"
TERM_MODULE_CLOSE = "(//button[@type='button'][normalize-space()='Close'])[1]"
HOLIDAYS_MODULE_HEADING = "(//h4[@id='myModalLabel'])[2]"
HOLIDAYS_MODULE_CLOSE = "(//button[@type='button'][normalize-space()='Close'])[2]"
LINK_NOTIFICATION_SETTINGS = "//a[normalize-space()='here']"
BTN_PRE_ORDER = "(//a[contains(text(),'Pre-order')])[1]"
TEXTBOX_AMOUNT = "(//input[@id='ChildrenMealList_0__Amount'])[1]"
BTN_ADD_TO_BASKET = "(//input[@value='Add To Basket'])[1]"
ICON_BASKET = "(//a[@id='basketImg'])[2]"
BUTTON_BASKET = "//i[@title='Add To Basket']"
DROPDOWN_FUND = "(//*[@id='CharityFundsList_0__SchoolFundID'])[1]"
TEXTBOX_DONATE_AMOUNT = "(//input[@id='CharityFundsList_0__Amount'])[1]"
BTN_ADD_BASKET_CHARITY = "(//input[@value='Add To Basket'])[3]"
HEADER_ACCOUNTS = "//a[normalize-space()='Accounts']"
HEADER_AUTOPAY = "(//a[normalize-space()='Auto Pay'])[1]"
HEADER_TRANSACTION_HISTORY = "//a[normalize-space()='Transaction History']"
HEADER_NOTIFICATIONS = "//a[normalize-space()='Notifications']"
BTN_PRE_ORDER = "(//a[contains(text(),'Pre-order')])[1]"
LINK_HELP = "//a[normalize-space()='Help']"
LINK_FAQs = "(//a[contains(text(),'FAQs')])[1]"
LINK_WHATSNEW = "//*[@id='newnavbaruser']/div/div[1]/div[2]/a[2]"
LINK_WHATSNEW_TEACHER = ".d-flex.align-items-center.nav-link"
NOTIFICATION_ICON = "//body/nav/div/div[@id='newnavbaruser']/div/a[1]/i[1]"
ICON_NAME = "//span[normalize-space()='BA']"
LINK_MY_PROFILE = "//a[@class='dropdown-item'][normalize-space()='My Profile']"
LINK_NOTIFICATION_PREFERENCES = "//a[@class='dropdown-item'][normalize-space()='Notification Preferences']"
LINK_SIGNOUT = "//a[@class='dropdown-item'][normalize-space()='Logout']"
CARD_PREORDER = "//h3[normalize-space()='Pre-orders']"
CARD_REPORTS = "//h3[normalize-space()='Reports']"
CARD_FUNDS = "//h3[normalize-space()='Funds']"
CARD_BENEFITS = "//h3[normalize-space()='The benefits of iPayimpact']"
BTN_VIEW_FUNDS = "//a[normalize-space()='View Funds']"
BTN_VIEW_REPORTS = "//a[normalize-space()='View Reports']"
BTN_PREORDER = "//a[normalize-space()='Pre-order']"
SIDELINK_HOME = "//a[normalize-space()='Home']"
SIDELINK_MEALS = "//a[normalize-space()='Meals']"
SIDELINK_PREORDER = "//a[normalize-space()='Pre-orders']"
SIDELINK_REPORTING = "//a[normalize-space()='Reporting']"
SIDELINK_FUNDS = "a[title='Funds']"
NAME_LOGO = "span[class='avatar-title rounded-circle']"
PROFILE_LINK = "(//a[contains(text(),'My Profile')])[2]"
LOGOUT_LINK = "(//a[contains(text(),'Logout')])[2]"
clickLogOutLink() {
  cy.xpath(this.LOGOUT_LINK).click();
}
clickMyProfilelink() {
  cy.xpath(this.PROFILE_LINK).click();
}
clickNameLogo() {
  cy.get(this.NAME_LOGO).click();
}
clickFundsSideLink() {
  cy.get(this.SIDELINK_FUNDS).click();
}
clickReportingSideLink() {
  cy.xpath(this.SIDELINK_REPORTING).click();
}
clickPreordersSideLink() {
  cy.xpath(this.SIDELINK_PREORDER).click();
}
clickMealsSideLink() {
  cy.xpath(this.SIDELINK_MEALS).click({force: true});
}
clickHomeSideLink() {
  cy.xpath(this.SIDELINK_HOME).click();
}
clickPreOrderButton() {
  cy.xpath(this.BTN_PREORDER).click();
}
clickViewReportsButton() {
  cy.xpath(this.BTN_VIEW_REPORTS).click();
}
clickViewFundsButton() {
  cy.xpath(this.BTN_VIEW_FUNDS).click();
}
verifyTeacherCards()
{
  cy.xpath(this.CARD_PREORDER).should('contain.text',"Pre-orders");
  cy.xpath(this.CARD_REPORTS).should('contain.text',"Reports");
  cy.xpath(this.CARD_FUNDS).should('contain.text',"Funds");
  cy.xpath(this.CARD_BENEFITS).should('contain.text',"The benefits of iPayimpact");
}
clickSignoutLink() {
  cy.xpath(this.LINK_SIGNOUT).click();
}
clickNotificationPreferencesLink() {
  cy.xpath(this.LINK_NOTIFICATION_PREFERENCES).click();
}
clickMyProfileLink() {
  cy.xpath(this.LINK_MY_PROFILE).click();
}
clickNameIcon() {
  cy.xpath(this.ICON_NAME).click();
}
clickNotificationIcon() {
  cy.xpath(this.NOTIFICATION_ICON).click();
}
clickHelpLink() {
  cy.xpath(this.LINK_HELP).click({force: true});
}
clickFaqsLink() {
  cy.xpath(this.LINK_FAQs).click({force: true});
}
clickWhatsNewLink() {
  cy.xpath(this.LINK_WHATSNEW).click({force: true});
}
clickTeacherWhatsNewLink() {
  cy.get(this.LINK_WHATSNEW_TEACHER).click({force: true});
}
clickPreOrderButton() {
  cy.xpath(this.BTN_PRE_ORDER).click();
}
clickNotificationsLink() {
  cy.xpath(this.HEADER_NOTIFICATIONS).click();
}
clickTransactionHistoryLink() {
  cy.xpath(this.HEADER_TRANSACTION_HISTORY).click();
}
clickAutoPayLink() {
  cy.xpath(this.HEADER_AUTOPAY).click();
}
clickAccountsLink() {
  cy.xpath(this.HEADER_ACCOUNTS).click();
}
clickCharityAddBasketButton() {
  cy.xpath(this.BTN_ADD_BASKET_CHARITY).click();
}
selectFund() {
  cy.xpath(this.DROPDOWN_FUND).select('Charity Test Automation Fund').should('have.value', '6766')
}
clickBasketButton() {
  cy.xpath(this.BUTTON_BASKET).click();
}
clickBasketIcon() {
  cy.xpath(this.ICON_BASKET).click();
}
clickAddToBasketButton() {
  cy.xpath(this.BTN_ADD_TO_BASKET).click();
}
TypeAmount() {
  cy.xpath(this.TEXTBOX_AMOUNT).clear()
cy.wait(400)
  cy.xpath(this.TEXTBOX_AMOUNT).type("10")
}
clickPreOrderButton() {
  cy.xpath(this.BTN_PRE_ORDER).click();
}
clickNotificationSettingsLink() {
  cy.get(this.LINK_NOTIFICATION_SETTINGS).click();
}
clickHolidaysButton() {
  cy.get(this.BTN_HOLIDAYS).click();
}
verifyHolidaysModuleHeading() {
  cy.xpath(this.HOLIDAYS_MODULE_HEADING).should("contain", "Holidays");
}
clickHolidaysModuleCloseButton() {
  cy.wait(500)
  cy.xpath(this.HOLIDAYS_MODULE_CLOSE).trigger('mouseover').click({force: true}).click({force: true});
}
verifyTermDatesModuleHeading() {
  cy.xpath(this.TERM_MODULE_HEADING).should("contain", "Term Dates");
}
clickTermModuleCloseButton() {
  cy.wait(500)
  cy.xpath(this.TERM_MODULE_CLOSE).trigger('mouseover').click({force: true}).click({force: true});
}
clickTermDatesButton() {
  cy.get(this.BTN_TERM_DATES).click();
}
clickLinkAnAccount() {
  cy.xpath(this.LINK_AN_ACCOUNT).click();
}
clickHomeLink() {
  cy.xpath(this.LINK_HOME).click();
}
  verifyParentHeadingAndURL() {
    cy.title().should('eq','Welcome to iPayimpact')
    cy.url().should("include", this.URL_PAGE);
  }
  verifyTextHome() {
    cy.xpath(this.TextHome).should('contain.text',"There are no actions that require your attention");
  }
  verifyPASubheading()
  {
    cy.xpath(this.PA_SUBHEADING).should('have.text',"Funds Requiring Payments");
  }
  typeDonatedAmount() {
    cy.xpath(this.TEXTBOX_DONATE_AMOUNT).clear()
    cy.xpath(this.TEXTBOX_DONATE_AMOUNT).type("3")
  }
}
export default ParentHomePage
