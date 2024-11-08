import Login from "../PageObjects/SchoolObjects/LoginPage"
import ParentHomePage from "../PageObjects/ParentObjects/ParentHomePage.js"
import FundsPage from "../PageObjects/ParentObjects/FundsPage.js"
import PreOrderReportPage from "../PageObjects/ParentObjects/PreOrderReportPage.js"
import ClassPreOrderPage from "../PageObjects/ParentObjects/ClassPreOrderPage.js"
import AddNewFundPage from "../PageObjects/ParentObjects/AddNewFundPage.js"
import FAQsPage from "../PageObjects/ParentObjects/FAQsPage.js"
import WhatsNewPage from "../PageObjects/ParentObjects/WhatsNewPage.js"
import ProfilePage from "../PageObjects/ParentObjects/ProfilePage.js"
import ChangeEmailAddressPage from "../PageObjects/ParentObjects/ChangeEmailAddressPage.js"
import ChangePasswordPage from "../PageObjects/ParentObjects/ChangePasswordPage.js"
import FooterPage from "../PageObjects/ParentObjects/FooterPage.js"
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
let ln11
describe("TeacherTestSuite", () => {
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
      ln.setUserName(data.TeacherUsername)
      ln.setPassword(data.TeacherPassword)
      ln.clickLogon()
      ln1 = new ParentHomePage
      ln1.verifyParentHeadingAndURL()
      ln1.verifyTeacherCards()
    })
  })
  it("Verify View Funds Button Functionality", () => {
    ln1.clickViewFundsButton();
    ln2 = new FundsPage
    ln2.verifyPageHeadingAndURL();
    cy.go('back')
  });
  it("Verify View Reports Button Functionality", () => {
    ln1.clickViewReportsButton();
    ln3 = new PreOrderReportPage
    ln3.verifyPageHeadingAndURL();
    ln3.clickReportNameButton();
    ln3.verifyValidationMessage();
    ln3.clickReportSelectionButton();
    ln3.verifyValidationMessage();
    ln3.selectClass();
    ln3.clickReportNameButton();
    ln3.verifyPageHeadingAndURLOnMealReport();
    ln1.clickHomeSideLink()
    ln1.verifyParentHeadingAndURL()
      ln1.verifyTeacherCards()
    cy.go('back')
  });
  it("Verify Pre-Order Button Functionality On the HomePage", () => {
    ln1.clickPreOrderButton();
    ln4 = new ClassPreOrderPage
    ln4.verifyPageHeadingAndURL();
    ln4.clickPreOrderButton();
    ln4.verifyValidationMessage();
    ln4.selectClass();
    ln4.verifyPageHeadingAndURLOnAccount();
    ln4.clickAccount();
    ln4.verifyPageHeadingAndURLOrderPage();
    ln4.clickEatHomeLink();
    ln4.clickConfirmButton()
    ln4.verifyPageHeadingAndURLOnAccount();
    ln1.clickHomeSideLink()
    ln1.verifyParentHeadingAndURL()
    ln1.verifyTeacherCards()
  });
  it("Verify Pre-Order Page from Side Menu List", () => {
    ln1.clickMealsSideLink();
    ln1.clickPreordersSideLink();
    ln4.verifyPageHeadingAndURL();
    ln4.clickPreOrderButton();
    ln4.verifyValidationMessage();
    ln4.selectClass();
    ln4.verifyPageHeadingAndURLOnAccount();
    ln4.clickAccount();
    ln4.verifyPageHeadingAndURLOrderPage();
    ln4.clickEatHomeLink();
    ln4.clickConfirmButton()
    ln4.verifyPageHeadingAndURLOnAccount();
    ln1.clickHomeSideLink()
    ln1.verifyParentHeadingAndURL()
    ln1.verifyTeacherCards()
  });
  it("Verify Meals Reporting Page from Side Menu List", () => {
    ln1.clickMealsSideLink();
    ln1.clickReportingSideLink();
    ln3.verifyPageHeadingAndURLOnPreOrderReporting();
    ln3.enterDate();
    ln3.clickUpdateButton();
    ln3.verifyStatsData();
    ln3.enterSearchText();
    ln3.verifyNoSearchResult();
    ln3.clearSearchText();
    ln3.clickYearLink();
    ln3.textNoData();
  });
  it("Verify Funds Page from Side Menu List", () => {
    ln1.clickFundsSideLink();
    ln2.verifyPageHeadingAndURL()
    ln2.clickInactiveLink()
    ln2.verifyInactiveListInfo()
    ln2.clickAllLink()
    ln2.verifyTeacherFundPageListing()
    ln2.clickArchivedFunds()
    ln2.verifyInactiveListInfo()
    ln2.clickActiveFundLink()
  });
  it("Verify Search Fund Functionality on the Fund Page", () => {
    ln2.typeFundNameTeacher()
    cy.wait(1000)
    ln2.verifySearchResult()
    ln2.typeInvalidFundNameTeacher()
    ln2.verifySearchInfoText()
    ln2.clearTeacherSearchTextboxValue()
    ln2.verifyTeacherFundPageListing()
  })
  it("Verify Fund Type Dropdown List Values", () => {
    ln2.selectTeacherDropdownValues()
  })
  it("Verify Customise Button Action", () => {
    ln2.clickCustomiseButton()
    ln2.verifyCustomisePageHeading()
    cy.wait(1000)
    ln2.clickCustomiseCloseButton()
  })
  it("Verify Add New Fund Action Button and Page Artifacts On Fund Page", () => {
    ln2.clickAddNewFund()
    ln5 = new AddNewFundPage
    ln5.verifyPageHeadingAndURL()
    ln5.selectDropdownValues()
    ln5.selectFundCategoryValues()
    ln5.clickSaveFundDetails()
    ln5.verifyValidationsOnNewFundPage()
    ln5.clickReturnToFundList()
    ln2.verifyPageHeadingAndURL()
  })
it("Verify FAQs Page Content from the Side Menu", () => {
    ln1.clickHelpLink();
    ln1.clickFaqsLink();
    ln6 = new FAQsPage
    ln6.verifyHeadingAndURL();
    ln6.clickSearchButton();
    ln6.verifyValidation();
    ln6.typeSearchContent();
    ln6.clickSearchButton();
    ln6.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content from the Side Menu", () => {
    ln1.clickHelpLink();
    ln1.clickTeacherWhatsNewLink();
    ln7 = new WhatsNewPage();
    ln7.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln1.clickHelpLink();
    ln1.clickNameLogo();
    ln1.clickMyProfilelink();
    ln8 = new ProfilePage
    ln8.verifyHeadingAndURL();
    ln8.clickSaveMyProfileButton();
    ln8.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln8.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    ln8.clickChangeEmailButton();
    ln9 = new ChangeEmailAddressPage();
    ln9.verifyHeadingAndURL();
    ln9.clickChangeEmailAddressButton();
    ln9.verifyValidationsAppearing();
    ln9.clickBackToMyProfieButton();
    ln8.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln8.clickChangeIpayPasswordButton();
    ln10 = new ChangePasswordPage();
    ln10.verifyHeadingAndURL();
    ln10.clickChangePasswordButton();
    ln10.verifyValidationsAppearing();
    ln10.clickBackToMyProfieButton();
    ln8.verifyHeadingAndURL();
    ln8.clickCancelButton();
    ln1.verifyParentHeadingAndURL()
    ln1.verifyTeacherCards()
  });
  it("Verify Footer Links", () => {
    ln11 = new FooterPage
    ln11.clickAccessibilityLink();
    ln11.verifyAccessibilityPageHeadingAndURL();
    ln11.clickCookiesLink();
    ln11.verifyCookiesPageHeadingAndURL();
    ln11.clickPrivacyStatementLink();
    ln11.verifyPrivacyStatementPageHeadingAndURL();
    ln11.clickSiteMapLink();
    ln11.verifySiteMapPageHeadingAndURL();
    ln11.clickPCIComplianceLink();
    ln11.verifyPCICompliancePageHeadingAndURL();
    ln11.clickAllergyAdviceLink();
    ln11.verifyAllergyAdvicePageHeadingAndURL();
    ln11.clickWhatsNewLink();
    ln11.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln1.clickNameLogo();
    ln1.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
}
)