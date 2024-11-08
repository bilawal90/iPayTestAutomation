import Login from "../PageObjects/ClientObjects/LoginPage.js";
import ClientHome from "../PageObjects/ClientObjects/ClientHomePage.js";
import LinksMenu from "../PageObjects/ClientObjects/LinksMenu.js";
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
import FundArrearsReportPage from "../PageObjects/ClientObjects/FundArrearsReportPage.js";
import FundArrearsInActiveReportPage from "../PageObjects/ClientObjects/FundArrearsInActiveReportPage.js";
import PreorderFundArrearsReportPage from "../PageObjects/ClientObjects/PreorderFundArrearsReportPage.js";
import FundNotificationsPage from "../PageObjects/ClientObjects/FundNotificationsPage.js";
import POMealReconciliationReport from "../PageObjects/ClientObjects/POMealReconciliationReport.js";
import WhatsNewPage from "../PageObjects/ClientObjects/WhatsNewPage.js";
import ProfilePage from "../PageObjects/ClientObjects/ProfilePage.js";
import ChangeEmailAddressPage from "../PageObjects/ClientObjects/ChangeEmailAddressPage.js";
import ChangePasswordPage from "../PageObjects/ClientObjects/ChangePasswordPage.js";
import FooterPage from "../PageObjects/ClientObjects/FooterPage.js";
import FAQsPage from "../PageObjects/ClientObjects/FAQsPage.js";

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
describe("ClientCateringTestSuite", () => {
  before(() => {
    cy.fixture("TestData").then((data) => {
      cy.log(
        "Launch the Ipay Impact Website to Test the Client Catering Smoke Test Cases"
      );
      
      cy.visit(data.URL);
      
      ln = new Login();
      ln.verifyPageHeadingAndURL();
    });
  });
  it("Positive Login Testcase", () => {
    cy.fixture("TestData").then((data) => {
      ln.setUserName(data.ClientCateringUsername);
      ln.setPassword(data.ClientCateringPassword);
      ln.clickLogon();
      ln1 = new ClientHome();
      ln1.verifyClientCateringHeadingAndURL();
    });
  });
  it("Verify Page Logo", () => {
    ln1.verifyLogoMenu();
  });
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenuCC();
  });
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new LinksMenu();
    ln2.clickLinkHome();
    ln1.verifyClientCateringHeadingAndURL();
  });
  it("Verify Menus Link Functionality", () => {
    ln2.clickMenus();
    ln3 = new MenuPage();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Menus Page Content", () => {
    ln3.clickHistoricTab();
    ln3.verifyHistoricTabDisplay();
    ln3.clickInactiveTab();
    ln3.verifyInactiveTabDisplay();
    ln3.clickCreateMenuButton();
  });
  it("Verify Adding New Menu Page Content", () => {
    ln4 = new AddMenuPage();
    ln4.verifyHeadingsAndURL();
    ln4.clickUpdateDetailsButton();
    ln4.verifyValidationMessagesAppearing();
    ln4.clickBreadCrumb();
    ln3.verifyHeadingsAndURL();
    ln3.clickViewPluList();
  });
  it("Verify PLU List Page Content", () => {
    ln5 = new PLUListPage();
    ln5.verifyHeadingAndURL();
    //ln5.verifyInfoMessage();
    ln5.clickAddNewPluButton();
  });
  it("Verify Adding PLU Page Content", () => {
    ln6 = new AddPLUPage();
    ln6.verifyHeadingsAndURL();
    ln6.clickSaveButton();
    ln6.verifyValidationMessagesAppearing();
    ln6.clickCancelButton();
    ln5.verifyURLOnReturn();
    //ln5.clickReturnToMenuButton();
    ln5.clickMenuListBreadCrumb();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify PLU Colours Page Content", () => {
    ln3.clickEditPluColours();
    ln7 = new PLUColoursPage();
    ln7.verifyHeadingAndURL();
    ln7.clickAddNewColourButton();
    ln7.verifyValidationAppearing();
    ln5.clickMenuListBreadCrumb();
    //ln7.clickReturnToMenuListButton();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify PLU Categories Page Content", () => {
    ln3.clickEditPluCategories();
    ln8 = new PLUCategoryPage();
    ln8.verifyHeadingAndURL();
    //ln8.verifySubHeading();
    ln8.clickAddNewCategoryButton();
    ln8.verifyCategoryModalHeading();
    ln8.clickSaveCategoryButton();
    ln8.verifyCategoryValidation();
    ln8.clickCancelModalButton();
    ln8.verifyHeadingAndURL();
    ln2.clickMenus();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Menu Weeks - Primary Page Content", () => {
    ln3.clickEditPrimaryMenuWeek();
    ln9 = new MenuWeeksPage();
    ln9.verifyPrimaryHeadingsAndURL();
    ln9.clickSaveMenuWeeksButton();
    ln9.verifySuccessToastAppearing();
    ln9.clickResetMenuWeeksButton();
    ln9.verifySuccessToastNotAppearing();
    ln5.clickMenuListBreadCrumb();
    //ln9.clickReturnToMenuListButton();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Menu Weeks - Nursery Page Content", () => {
    ln3.clickEditNurseryMenuWeek();
    ln9.verifyNurseryHeadingsAndURL();
    ln9.clickSaveMenuWeeksButton();
    ln9.verifySuccessToastAppearing();
    ln9.clickResetMenuWeeksButton();
    ln9.verifySuccessToastNotAppearing();
    ln5.clickMenuListBreadCrumb();
    //ln9.clickReturnToMenuListButton();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Meal Price Page Content", () => {
    ln3.clickViewMealPrices();
    ln10 = new MealPricePage();
    ln10.verifyHeadingandURL();
    ln10.clickEstablishmentSelectButton();
  });
  it("Verify Meal Establishment Page Content", () => {
    ln10.verifyMealPriceHeadingandURL();
    ln10.clickReturnToMealPriceButton();
    ln10.verifyHeadingandURL();
    ln10.clickAddMealPricesButton();
  });
  it("Verify Add Meal Price Page Content", () => {
    ln11 = new AddMealPricePage();
    ln11.verifyHeadingAndURL();
    ln11.clickSaveMealPriceButton();
    ln11.verifyValidationMessagesAppearing();
    ln11.clickCancelButton();
    ln10.verifyHeadingandURL();
    ln5.clickMenuListBreadCrumb();
    //ln10.clickReturnToMenuListButton();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Cut Off Day Page Content", () => {
    ln3.clickEditCutOffTime();
    ln12 = new CutOffTimePage();
    ln12.verifyHeadingsandURL();
    ln12.clickSaveCutOffTimeButton();
    ln12.verifyValidationMessagesAppearing();
    ln5.clickMenuListBreadCrumb();
    //ln12.clickReturnToMenuListButton();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Reports Link Functionality", () => {
    ln2.clickReports();
    ln13 = new ReportsPage();
    ln13.verifyHeadingsAndURL();
  });
  it("Verify Login Activity Report", () => {
    ln13.clickLoginActivityLink();
    ln14 = new AccountsReportPage();
    ln14.verifyHeadingAndURL();
    ln14.clickReportReturnButton();
    ln13.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Unused Logins Report", () => {
    ln13.clickUnusedLoginsLink();
    ln14.verifyHeadersOnUnusedLoginPage();
    ln14.clickRunReportButton();
    ln14.verifyHeadersOnUnusedLoginReport();
    ln14.clickReportReturnButton();
    ln13.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts Without Logins Report", () => {
    ln13.clickAccountsWithoutLoginsLink();
    ln14.verifyHeadersOnAccountsWithoutLoginPage();
    ln14.clickRunReportButton();
    ln14.verifyHeadersOnAccountsWithoutLoginReport();
    ln14.clickReportReturnButton();
    ln13.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts With Registered Parents Report", () => {
    ln13.clickAccountsWithRegisteredParentLink();
    ln14.verifyHeadersOnAccountRegisteredLoginsPage();
    ln14.SelectEstablishment();
    ln14.clickRunReportOnAccountRegisterButton();
    ln14.verifyHeadersOnAccountDetailsReport();
    ln14.clickReportReturnButton();
    ln13.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Arrears Report", () => {
    ln13.clickFundArrearsReportLink();
    ln16 = new FundArrearsReportPage();
    ln16.verifyPageHeadingAndURL();
    ln16.clickRunReport();
    ln16.verifyValidationMessageOnFund();
    ln16.verifyValidationMessageOnPage();
    ln16.clickReturnToReportListButton();
    ln13.verifyHeadingsAndURL();
  });
  it("Verify Fund Arrears For Inactive Accounts Report", () => {
    ln13.clickFundArrearsInActiveReportLink();
    ln17 = new FundArrearsInActiveReportPage();
    ln17.verifyPageHeadingAndURL();
    ln17.clickRunReport();
    ln17.verifyReportHeadingAndURL();
    ln17.clickReportBackButton();
    ln13.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Pre-Order Fund Arrears Summary Report", () => {
    ln13.clickPreOrderFundArrearsLink();
    ln18 = new PreorderFundArrearsReportPage();
    ln18.verifyReportHeadingAndURL();
    ln18.clickReportBackButton();
    ln13.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Notifications Report", () => {
    ln13.clickFundNotificationsLink();
    ln19 = new FundNotificationsPage();
    ln19.verifyPageHeadingAndURL();
    ln19.clickRunReport();
    ln19.verifyValidationMessageOnFund();
    ln19.verifyValidationMessageOnPage();
    ln19.clickReturnToReportListButton();
    ln13.verifyHeadingsAndURL();
  });
  it("Verify Pre Order Meal Reconciliation Report", () => {
    ln13.clickPOMealReconciliationLink();
    ln20 = new POMealReconciliationReport();
    ln20.verifyPageHeadingAndURL();
    ln20.clickRunReport();
    ln20.verifyValidationAppearing();
    ln20.selectEstablishment();
    ln20.clickRunReport();
    ln20.verifyReportHeadingAndURL();
    ln20.clickReportBackButton();
    ln13.verifyHeadingsAndURLOnReturn();
  });
  it("Verify FAQs Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    ln21 = new FAQsPage();
    ln21.verifyHeadingAndURL();
    ln21.clickSearchButton();
    ln21.verifyValidation();
    ln21.typeSearchContent();
    ln21.clickSearchButton();
    ln21.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln22 = new WhatsNewPage();
    ln22.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln23 = new ProfilePage();
    ln23.verifyHeadingAndURL();
    ln23.clickSaveMyProfileButton();
    ln23.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln23.verifyHeadingAndURL();
    //ln23.clickCancelButton();
    //ln1.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    //ln2.clickHelpLink();
    //ln2.clickNameLogo();
    //ln2.clickMyProfilelink();
    //ln23.verifyHeadingAndURL();
    ln23.clickChangeEmailButton();
    ln24 = new ChangeEmailAddressPage();
    ln24.verifyHeadingAndURL();
    ln24.clickChangeEmailAddressButton();
    ln24.verifyValidationsAppearing();
    ln24.clickBackToMyProfieButton();
    ln23.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln23.clickChangeIpayPasswordButton();
    ln25 = new ChangePasswordPage();
    ln25.verifyHeadingAndURL();
    ln25.clickChangePasswordButton();
    ln25.verifyValidationsAppearing();
    ln25.clickBackToMyProfieButton();
    ln23.verifyHeadingAndURL();
    ln23.clickCancelButton();
    ln1.verifyClientCateringHeadingAndURL();
  });
  it("Verify Footer Links", () => {
    ln26 = new FooterPage();
    ln26.clickAccessibilityLink();
    ln26.verifyAccessibilityPageHeadingAndURL();
    ln26.clickCookiesLink();
    ln26.verifyCookiesPageHeadingAndURL();
    ln26.clickPrivacyStatementLink();
    ln26.verifyPrivacyStatementPageHeadingAndURL();
    ln26.clickSiteMapLink();
    ln26.verifySiteMapPageHeadingAndURL();
    ln26.clickPCIComplianceLink();
    ln26.verifyPCICompliancePageHeadingAndURL();
    ln26.clickAllergyAdviceLink();
    ln26.verifyAllergyAdvicePageHeadingAndURL();
    ln26.clickWhatsNewLink();
    ln26.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
});
