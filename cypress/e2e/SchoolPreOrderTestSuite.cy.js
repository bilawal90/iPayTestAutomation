import Login from "../PageObjects/SchoolObjects/LoginPage.js"
import EstablishmentHomePage from "../PageObjects/SchoolObjects/EstablishmentHomePage.js"
import SchoolLinksMenu from "../PageObjects/SchoolObjects/SchoolLinksMenu.js"
import FAQsPage from "../PageObjects/SchoolObjects/FAQsPage.js"
import WhatsNewPage from "../PageObjects/SchoolObjects/WhatsNewPage.js"
import ProfilePage from "../PageObjects/SchoolObjects/ProfilePage.js"
import ChangeEmailAddressPage from "../PageObjects/SchoolObjects/ChangeEmailAddressPage.js"
import ChangePasswordPage from "../PageObjects/SchoolObjects/ChangePasswordPage.js"
import FooterPage from "../PageObjects/SchoolObjects/FooterPage.js"
import UsersPage from "../PageObjects/SchoolObjects/UsersPage.js"
import BannersPage from "../PageObjects/SchoolObjects/BannersPage.js"
let ln
let ln1
let ln2
let ln3
let ln4
let ln5
let ln6
let ln7
let ln8
let ln9
let ln10
describe("SchoolPreOrderTestSuite", () => {
  before(() => {
    cy.fixture("TestData").then((data) => {
      cy.log("Launch the Ipay Impact Website")
    
      cy.visit(data.URL)
      ln = new Login
      ln.acceptCookies()
      ln.verifyPageHeadingAndURL()
    })
  })
  it("Positive Login Testcase", () => {
    cy.fixture("TestData").then((data) => {
      ln.setUserName(data.SAPreOrderUsername)
      ln.setPassword(data.SAPreOrderPassword)
      ln.clickLogon()
      ln1 = new EstablishmentHomePage
      ln1.verifySAPHeadingAndURL()
    })
  })
  it("Verify Menu Logo", () => {
    ln1.verifyLogoMenu()
  })
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenuSAP()
  })
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new SchoolLinksMenu
    ln2.clickLinkHome()
    ln1.verifySAPHeadingAndURL()
  })
  it("Verify Users Page from the Navigation Menu", () => {
    ln2.clickFusionOnlineLink()
    ln2.clickUsersLink()
    ln3 = new UsersPage
    ln3.verifyHeadingAndURL()
    ln3.clickLettersLink();
    ln3.verifyPopupHeading();
    ln3.clickClosePopop();
  })
  it("Verify Search Functionality on the Fusion Online Users", () => {
    ln3.enterSearchText();
    ln3.verifySearchResult();
    ln3.clearSearchText();
    ln3.verifySearchResultPositive();
  })
  it("Verify Banners Page from the Navigation Menu", () => {
    ln2.clickFusionOnlineLink()
    ln2.clickBannersLink()
    ln4 = new BannersPage
    ln4.verifyHeadingAndURL()
    ln4.verifyBannersText();
    ln4.clickBannersButton();
    ln4.verifyHeadingAndURLOnAddBannerPage();
    ln4.clickSaveButton();
    ln4.verifyValidationMessage();
    ln4.clickCancelButton();
    ln4.verifyHeadingAndURL()
  })
  it("Verify FAQs Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    ln5 = new FAQsPage
    ln5.verifyHeadingAndURL();
    ln5.clickSearchButton();
    ln5.verifyValidation();
    ln5.typeSearchContent();
    ln5.clickSearchButton();
    ln5.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln6 = new WhatsNewPage();
    ln6.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln7 = new ProfilePage
    ln7.verifyHeadingAndURL();
    ln7.clickSaveMyProfileButton();
    ln7.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln7.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    ln7.clickChangeEmailButton();
    ln8 = new ChangeEmailAddressPage();
    ln8.verifyHeadingAndURL();
    ln8.clickChangeEmailAddressButton();
    ln8.verifyValidationsAppearing();
    ln8.clickBackToMyProfieButton();
    ln7.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln7.clickChangeIpayPasswordButton();
    ln9 = new ChangePasswordPage();
    ln9.verifyHeadingAndURL();
    ln9.clickChangePasswordButton();
    ln9.verifyValidationsAppearing();
    ln9.clickBackToMyProfieButton();
    ln7.verifyHeadingAndURL();
    ln7.clickCancelButton();
    ln1.verifySAPHeadingAndURL();
  });
  it("Verify Footer Links", () => {
    ln10 = new FooterPage
    ln10.clickAccessibilityLink();
    ln10.verifyAccessibilityPageHeadingAndURL();
    ln10.clickCookiesLink();
    ln10.verifyCookiesPageHeadingAndURL();
    ln10.clickPrivacyStatementLink();
    ln10.verifyPrivacyStatementPageHeadingAndURL();
    ln10.clickSiteMapLink();
    ln10.verifySiteMapPageHeadingAndURL();
    ln10.clickPCIComplianceLink();
    ln10.verifyPCICompliancePageHeadingAndURL();
    ln10.clickAllergyAdviceLink();
    ln10.verifyAllergyAdvicePageHeadingAndURL();
    ln10.clickWhatsNewLink();
    ln10.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
}
)