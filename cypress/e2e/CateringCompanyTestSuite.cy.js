import Login from "../PageObjects/ClientObjects/LoginPage.js";
import ClientHome from "../PageObjects/ClientObjects/ClientHomePage.js";
import LinksMenu from "../PageObjects/ClientObjects/LinksMenu.js";
import ClientDetailsPage from "../PageObjects/ClientObjects/ClientDetailsPage.js";
import MenuPage from "../PageObjects/ClientObjects/MenuPage.js";
import AddMenuPage from "../PageObjects/ClientObjects/AddMenuPage.js";
import PLUListPage from "../PageObjects/ClientObjects/PLUListPage.js";
import AddPLUPage from "../PageObjects/ClientObjects/AddPLUPage.js";
import PLUColoursPage from "../PageObjects/ClientObjects/PLUColoursPage.js";
import PLUCategoryPage from "../PageObjects/ClientObjects/PLUCategoryPage.js";
import MenuWeeksPage from "../PageObjects/ClientObjects/MenuWeeksPage.js";
import MealPricePage from "../PageObjects/ClientObjects/MealPricePage.js";
import AddMealPricePage from "../PageObjects/ClientObjects/AddMealPricePage.js";
import CutOffTimePage from "../PageObjects/ClientObjects/CutOffTimePage.js";
import ReportsPage from "../PageObjects/ClientObjects/ReportsPage.js";
import AccountsReportPage from "../PageObjects/ClientObjects/AccountsReportPage.js";
import InternetPaymentByBankReport from "../PageObjects/ClientObjects/InternetPaymentByBankReport.js";
import WhatsNewPage from "../PageObjects/ClientObjects/WhatsNewPage.js";
import ProfilePage from "../PageObjects/ClientObjects/ProfilePage.js";
import ChangeEmailAddressPage from "../PageObjects/ClientObjects/ChangeEmailAddressPage.js";
import ChangePasswordPage from "../PageObjects/ClientObjects/ChangePasswordPage.js";
import FooterPage from "../PageObjects/ClientObjects/FooterPage.js";
import FAQsPage from "../PageObjects/ClientObjects/FaQsPage.js";
import RecoverUsernamePage from "../PageObjects/ClientObjects/RecoverUsernamePage.js";
import ResetPasswordPage from "../PageObjects/ClientObjects/ResetPasswordPage.js";
import RegisterPage from "../PageObjects/ClientObjects/RegisterPage.js";
let ln;
let ln1;
let ln2;
let ln3;
let ln4;
let ln5;
let ln6;
let ln7;
let ln8;
let ln9;
let ln10;
let ln11;
let ln12;
let ln13;
let ln14;
let ln15;
let ln16;
let ln17;
let ln18;
let ln19;
let ln20;
let ln21;
let ln22;
let ln23;

let ln24;
let ln25;
let ln26;


describe("CateringCompanyTestSuite", () => {
  before(() => {
    cy.fixture("TestData").then((data) => {
    cy.log("Launch the Ipay Impact Website");

    cy.visit(data.URL);
    ln = new Login();
    ln.verifyPageHeadingAndURL();
  });
});

it("Negative Login Testcase", () => {
  cy.fixture("TestData").then((data) => {
    ln.setUserName(data.InvalidUsername);
    ln.setPassword(data.InvalidPassword);
    ln.clickLogon();
    ln.verifyLoginError();
  });
});

it("Verify Recover Username Page Artifacts", () => {
  ln.clickUsernameLink();
  ln24 = new RecoverUsernamePage
  ln24.verifyUsernamePageHeadingAndURL();
  ln24.clickRecoverUsernameButton();
  ln24.verifyUsernameValidation();
  ln24.typeInvalidUsername();
  ln24.clickRecoverUsernameButton();
  ln24.invalidEmailValidation();
  ln24.typeValidUsername();
  ln24.clickRecoverUsernameButton();
  ln24.verifySuccessPageHeadingAndURL();
  ln24.clickSucessPageReturn();
  ln.verifyPageHeadingAndURL();
});


it("Verify Reset Password Page Artifacts", () => {
  ln.clickResetPasswordLink();
  ln25 = new ResetPasswordPage
  ln25.verifyPageHeadingAndURL();
  ln25.clickResetPasswordButton();
  ln25.verifyValidations();
  ln25.typeValidUsernamePassword();
  ln25.clickResetPasswordButton();
  ln25.verifySuccessPageHeadingAndURL();
  ln25.clickReturnToLoginButtonButton()
  ln.verifyPageHeadingAndURL();
});


it("Verify Register Page Artifacts", () => {
  ln.clickRegisterButton();
  ln26 = new RegisterPage
  ln26.verifyPageHeadingAndURL();
  ln26.clickRegisterButton()
  ln26.verifyValidations()
  ln26.clickReturnToLoginButton();
  ln.verifyPageHeadingAndURL();
});


it("Verify FAQ On Login Page", () => {
  ln.clickFAQLink();

  ln18 = new FAQsPage
  ln18.verifyHeadingAndURL();
  ln18.clickSearchButton();
  ln18.verifyValidation();
  ln18.typeSearchContent();
  ln18.clickSearchButton();
  ln18.verifyValidationNotAppearing();
  ln26.clickReturnToLoginButton();
  ln.verifyPageHeadingAndURL();
});
  it("Positive Login Testcase", () => {
    cy.fixture("TestData").then((data) => {
      ln.setUserName(data.CateringCompanyUsername);
      ln.setPassword(data.CateringCompanyPassword);
      ln.clickLogon();
      ln1 = new ClientHome();
      ln1.verifyClientCateringHeadingAndURL();
    });
  });
  it("Verify Menu Logo", () => {
    ln1.verifyLogoMenu();
  });
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenuCateringCompany();
  });
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new LinksMenu();
    ln2.clickLinkHome();
    ln1.VerifyLinksMenuCateringCompany();
  });
  it("Verify Client Details Link Functionality", () => {
    ln2.clickLinkClientDetails();
    ln3 = new ClientDetailsPage();
    ln3.verifyHeadingAndURL();
  });
  it("Verify Update Client Details Page WebElements", () => {
    ln3.verifyClientIDLbl();
    ln3.verifyClientNameLbl();
    ln3.verifyledgerCodeLbl();
    ln3.verifyBrandingRefLbl();
    ln3.verifyUpdateDetailsBtn();
    ln3.verifyBrandingRefTextbox();
  });
  it("Verify Menus Link Functionality", () => {
    ln2.clickMenus();
    ln4 = new MenuPage();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Menus Page Content", () => {
    ln4.clickHistoricTab();
    ln4.verifyHistoricTabDisplay();
    ln4.clickInactiveTab();
    ln4.verifyInactiveTabDisplay();
    ln4.clickCreateMenuButton();
  });
  it("Verify Adding New Menu Page Content", () => {
    ln5 = new AddMenuPage();
    ln5.verifyHeadingsAndURL();
    ln5.clickUpdateDetailsButton();
    ln5.verifyValidationMessagesAppearing();
    ln5.clickBreadCrumb();
    ln4.verifyHeadingsAndURL();
    ln4.clickViewPluList();
  });
  it("Verify PLU List Page Content", () => {
    ln6 = new PLUListPage();
    ln6.verifyHeadingAndURL();
    //ln6.verifyInfoMessage();
    ln6.clickAddNewPluButton();
  });
  it("Verify Adding PLU Page Content", () => {
    ln7 = new AddPLUPage();
    ln7.verifyHeadingsAndURL();
    ln7.clickSaveButton();
    ln7.verifyValidationMessagesAppearing();
    ln7.clickCancelButton();
    ln6.verifyURLOnReturn();
    ln6.clickMenuListBreadCrumb();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify PLU Colours Page Content", () => {
    ln4.clickEditPluColours();
    ln8 = new PLUColoursPage();
    ln8.verifyHeadingAndURL();
    ln8.clickAddNewColourButton();
    ln8.verifyValidationAppearing();
    ln6.clickMenuListBreadCrumb();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify PLU Categories Page Content", () => {
    ln4.clickEditPluCategories();
    ln9 = new PLUCategoryPage();
    ln9.verifyHeadingAndURL();
    //ln9.verifySubHeading();
    ln9.clickAddNewCategoryButton();
    ln9.verifyCategoryModalHeading();
    ln9.clickSaveCategoryButton();
    ln9.verifyCategoryValidation();
    ln9.clickCancelModalButton();
    ln9.verifyHeadingAndURL();
    ln2.clickMenus();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Menu Weeks - Primary Page Content", () => {
    ln4.clickEditPrimaryMenuWeek();
    ln10 = new MenuWeeksPage();
    ln10.verifyPrimaryHeadingsAndURL();
    ln10.clickSaveMenuWeeksButton();
    ln10.verifySuccessToastAppearing();
    ln10.clickResetMenuWeeksButton();
    ln10.verifySuccessToastNotAppearing();
    ln6.clickMenuListBreadCrumb();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Menu Weeks - Nursery Page Content", () => {
    ln4.clickEditNurseryMenuWeek();
    ln11 = new MenuWeeksPage();
    ln11.verifyNurseryHeadingsAndURL();
    ln11.clickSaveMenuWeeksButton();
    ln11.verifySuccessToastAppearing();
    ln11.clickResetMenuWeeksButton();
    ln11.verifySuccessToastNotAppearing();
    ln6.clickMenuListBreadCrumb();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Meal Price Page Content", () => {
    ln4.clickViewMealPrices();
    ln12 = new MealPricePage();
    ln12.verifyHeadingandURL();
    ln12.clickEstablishmentSelectButton();
  });
  it("Verify Meal Establishment Page Content", () => {
    ln12.verifyMealPriceHeadingandURL();
    ln12.clickReturnToMealPriceButton();
    ln12.verifyHeadingandURL();
    ln12.clickAddMealPricesButton();
  });
  it("Verify Add Meal Price Page Content", () => {
    ln13 = new AddMealPricePage();
    ln13.verifyHeadingAndURL();
    ln13.clickSaveMealPriceButton();
    ln13.verifyValidationMessagesAppearing();
    cy.scrollTo('bottom')
    ln13.clickCancelButton();
    ln12.verifyHeadingandURL();
    ln6.clickMenuListBreadCrumb();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Cut Off Day Page Content", () => {
    ln4.clickEditCutOffTime();
    ln14 = new CutOffTimePage();
    ln14.verifyHeadingsandURL();
    ln14.clickSaveCutOffTimeButton();
    ln14.verifyValidationMessagesAppearing();
    ln6.clickMenuListBreadCrumb();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Reports Link Functionality", () => {
    ln2.clickReports();
    ln15 = new ReportsPage();
    ln15.verifyHeadingsAndURL();
  });
  it("Verify Login Activity Report", () => {
    ln15.clickLoginActivityLink();
    ln16 = new AccountsReportPage();
    ln16.verifyHeadingAndURL();
    ln16.clickReportReturnButton();
    ln15.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Unused Logins Report", () => {
    ln15.clickUnusedLoginsLink();
    ln16.verifyHeadersOnUnusedLoginPage();
    ln16.clickRunReportButton();
    ln16.verifyHeadersOnUnusedLoginReport();
    ln16.clickReportReturnButton();
    ln15.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts Without Logins Report", () => {
    ln15.clickAccountsWithoutLoginsLink();
    ln16.verifyHeadersOnAccountsWithoutLoginPage();
    ln16.clickRunReportButton();
    ln16.verifyHeadersOnAccountsWithoutLoginReport();
    ln16.clickReportReturnButton();
    ln15.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts With Registered Parents Report", () => {
    ln15.clickAccountsWithRegisteredParentLink();
    ln16.verifyHeadersOnAccountRegisteredLoginsPage();
    ln16.SelectEstablishment();
    ln16.clickRunReportOnAccountRegisterButton();
    ln16.verifyHeadersOnAccountDetailsReport();
    ln16.clickReportReturnButton();
    ln15.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Internet Payment By Bank Account Report", () => {
    ln15.clickInternetPaymentByBankAccountLink();
    ln17 = new InternetPaymentByBankReport();
    ln17.verifyClientPageHeadingAndURL();
    ln17.clickRunReport();
    ln17.verifyReportHeadingAndURL();
    ln17.clickReportBackButton();
    ln15.verifyHeadingsAndURLOnReturn();
  });
  it("Verify FAQs Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    //ln18 = new FAQsPage
    ln18.verifyHeadingAndURL();
    ln18.clickSearchButton();
    ln18.verifyValidation();
    ln18.typeSearchContent();
    ln18.clickSearchButton();
    ln18.verifyValidationNotAppearing();
  });
  
  it("Verify What's New Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln19 = new WhatsNewPage();
    ln19.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln20 = new ProfilePage();
    ln20.verifyHeadingAndURL();
    ln20.clickSaveMyProfileButton();
    ln20.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln20.verifyHeadingAndURL();
   
  });
  it("Verify Change Email Address Page Content", () => {

    ln20.clickChangeEmailButton();
    ln21 = new ChangeEmailAddressPage();
    ln21.verifyHeadingAndURL();
    ln21.clickChangeEmailAddressButton();
    ln21.verifyValidationsAppearing();
    ln21.clickBackToMyProfieButton();
    ln20.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln20.clickChangeIpayPasswordButton();
    ln22 = new ChangePasswordPage();
    ln22.verifyHeadingAndURL();
    ln22.clickChangePasswordButton();
    ln22.verifyValidationsAppearing();
    ln22.clickBackToMyProfieButton();
    ln20.verifyHeadingAndURL();
    ln20.clickCancelButton();
    ln1.VerifyLinksMenuCateringCompany();
  });
  it("Verify Footer Links", () => {
    ln23 = new FooterPage();
    ln23.clickAccessibilityLink();
    ln23.verifyAccessibilityPageHeadingAndURL();
    ln23.clickCookiesLink();
    ln23.verifyCookiesPageHeadingAndURL();
    ln23.clickPrivacyStatementLink();
    ln23.verifyPrivacyStatementPageHeadingAndURL();
    ln23.clickSiteMapLink();
    ln23.verifySiteMapPageHeadingAndURL();
    ln23.clickPCIComplianceLink();
    ln23.verifyPCICompliancePageHeadingAndURL();
    ln23.clickAllergyAdviceLink();
    ln23.verifyAllergyAdvicePageHeadingAndURL();
    ln23.clickWhatsNewLink();
    ln23.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
});
