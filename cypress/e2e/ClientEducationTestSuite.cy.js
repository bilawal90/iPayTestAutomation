import Login from "../PageObjects/ClientObjects/LoginPage.js";
import ClientHome from "../PageObjects/ClientObjects/ClientHomePage.js";
import LinksMenu from "../PageObjects/ClientObjects/LinksMenu.js";
import ReportsPage from "../PageObjects/ClientObjects/ReportsPage.js";
import AccountsReportPage from "../PageObjects/ClientObjects/AccountsReportPage.js";
import FundArrearsReportPage from "../PageObjects/ClientObjects/FundArrearsReportPage.js";
import FundArrearsInActiveReportPage from "../PageObjects/ClientObjects/FundArrearsInActiveReportPage.js";
import PreorderFundArrearsReportPage from "../PageObjects/ClientObjects/PreorderFundArrearsReportPage.js";
import FundNotificationsPage from "../PageObjects/ClientObjects/FundNotificationsPage.js";
import FAQsPage from "../PageObjects/ClientObjects/FaQsPage.js";
import WhatsNewPage from "../PageObjects/ClientObjects/WhatsNewPage.js";
import ProfilePage from "../PageObjects/ClientObjects/ProfilePage.js";
import ChangeEmailAddressPage from "../PageObjects/ClientObjects/ChangeEmailAddressPage.js";
import ChangePasswordPage from "../PageObjects/ClientObjects/ChangePasswordPage.js";
import FooterPage from "../PageObjects/ClientObjects/FooterPage.js";
import PaymentBetweenDatesReport from "../PageObjects/ClientObjects/PaymentBetweenDatesReport.js";
import PaymentByLedgerReport from "../PageObjects/ClientObjects/PaymentByLedgerReport.js";
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
describe("ClientEducationTestSuite", () => {
  before(() => {
    cy.fixture("TestData").then((data) => {
      cy.log(
        "Launch the Ipay Impact Website to Test the Client Education Smoke Test Cases"
      );
      
      cy.visit(data.URL);
      
      ln = new Login();
      ln.verifyPageHeadingAndURL();
    });
  });
  //})
  it("Positive Login Testcase", () => {
    cy.fixture("TestData").then((data) => {
      ln.setUserName(data.ClientEducationUsername);
      ln.setPassword(data.ClientEducationPassword);
      ln.clickLogon();
      ln1 = new ClientHome();
      ln1.verifyClientCateringHeadingAndURL();
    });
  });
  it("Verify Page Logo", () => {
    ln1.verifyLogoMenu();
  });
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenuCE();
  });
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new LinksMenu();
    ln2.clickLinkHome();
    ln1.verifyClientCateringHeadingAndURL();
  });
  it("Verify Reports Link Functionality", () => {
    ln2.clickReports();
    ln3 = new ReportsPage();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Login Activity Report", () => {
    ln3.clickLoginActivityLink();
    ln4 = new AccountsReportPage();
    ln4.verifyHeadingAndURL();
    ln4.clickReportReturnButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Unused Logins Report", () => {
    ln3.clickUnusedLoginsLink();
    ln4.verifyHeadersOnUnusedLoginPage();
    ln4.clickRunReportButton();
    ln4.verifyHeadersOnUnusedLoginReport();
    ln4.clickReportReturnButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts Without Logins Report", () => {
    ln3.clickAccountsWithoutLoginsLink();
    ln4.verifyHeadersOnAccountsWithoutLoginPage();
    ln4.clickRunReportButton();
    ln4.verifyHeadersOnAccountsWithoutLoginReport();
    ln4.clickReportReturnButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts With Registered Parents Report", () => {
    ln3.clickAccountsWithRegisteredParentLink();
    ln4.verifyHeadersOnAccountRegisteredLoginsPage();
    ln4.SelectEstablishment();
    ln4.clickRunReportOnAccountRegisterButton();
    ln4.verifyHeadersOnAccountDetailsReport();
    ln4.clickReportReturnButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Arrears Report", () => {
    ln2.clickReports();
    ln3.clickFundArrearsReportLink();
    ln5 = new FundArrearsReportPage();
    ln5.verifyPageHeadingAndURL();
    ln5.clickRunReport();
    ln5.verifyValidationMessageOnFund();
    ln5.verifyValidationMessageOnPage();
    ln5.clickReturnToReportListButton();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Fund Arrears For Inactive Accounts Report", () => {
    ln3.clickFundArrearsInActiveReportLink();
    ln6 = new FundArrearsInActiveReportPage();
    ln6.verifyPageHeadingAndURL();
    ln6.clickRunReport();
    ln6.verifyReportHeadingAndURL();
    ln6.clickReportBackButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Pre-Order Fund Arrears Summary Report", () => {
    ln3.clickPreOrderFundArrearsLink();
    ln7 = new PreorderFundArrearsReportPage();
    ln7.verifyReportHeadingAndURL();
    ln7.clickReportBackButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Notifications Report", () => {
    ln3.clickFundNotificationsLink();
    ln8 = new FundNotificationsPage();
    ln8.verifyPageHeadingAndURL();
    ln8.clickRunReport();
    ln8.verifyValidationMessageOnFund();
    ln8.verifyValidationMessageOnPage();
    ln8.clickReturnToReportListButton();
    ln3.verifyHeadingsAndURL();
  });
  it("Verify Payment Between Days Report", () => {
    ln3.clickPaymentBetweenDatesLink();
    ln9 = new PaymentBetweenDatesReport();
    ln9.verifyPageHeadingAndURL();
    ln9.clickAllCheckbox();
    ln9.clickRunReport();
    ln9.verifyReportHeadingAndURL();
    ln9.clickReportBackButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Payment By Ledger Report", () => {
    ln3.clickPaymentByLedgerLink();
    ln10 = new PaymentByLedgerReport();
    ln10.verifyPageHeadingAndURL();
    ln10.clickRunReport();
    ln10.verifyReportHeadingAndURL();
    ln10.clickReportBackButton();
    ln3.verifyHeadingsAndURLOnReturn();
  });
  it("Verify FAQs Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    ln11 = new FAQsPage();
    ln11.verifyHeadingAndURL();
    ln11.clickSearchButton();
    ln11.verifyValidation();
    ln11.typeSearchContent();
    ln11.clickSearchButton();
    ln11.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln12 = new WhatsNewPage();
    ln12.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln13 = new ProfilePage();
    ln13.verifyHeadingAndURL();
    ln13.clickSaveMyProfileButton();
    ln13.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln13.verifyHeadingAndURL();
    //ln13.clickCancelButton();
    //ln1.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    //ln2.clickHelpLink();
    //ln2.clickNameLogo();
    //ln2.clickMyProfilelink();
    //ln13.verifyHeadingAndURL();
    ln13.clickChangeEmailButton();
    ln14 = new ChangeEmailAddressPage();
    ln14.verifyHeadingAndURL();
    ln14.clickChangeEmailAddressButton();
    ln14.verifyValidationsAppearing();
    ln14.clickBackToMyProfieButton();
    ln13.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln13.clickChangeIpayPasswordButton();
    ln15 = new ChangePasswordPage();
    ln15.verifyHeadingAndURL();
    ln15.clickChangePasswordButton();
    ln15.verifyValidationsAppearing();
    ln15.clickBackToMyProfieButton();
    ln13.verifyHeadingAndURL();
    ln13.clickCancelButton();
    ln1.verifyClientCateringHeadingAndURL();
  });
  it("Verify Footer Links", () => {
    ln16 = new FooterPage();
    ln16.clickAccessibilityLink();
    ln16.verifyAccessibilityPageHeadingAndURL();
    ln16.clickCookiesLink();
    ln16.verifyCookiesPageHeadingAndURL();
    ln16.clickPrivacyStatementLink();
    ln16.verifyPrivacyStatementPageHeadingAndURL();
    ln16.clickSiteMapLink();
    ln16.verifySiteMapPageHeadingAndURL();
    ln16.clickPCIComplianceLink();
    ln16.verifyPCICompliancePageHeadingAndURL();
    ln16.clickAllergyAdviceLink();
    ln16.verifyAllergyAdvicePageHeadingAndURL();
    ln16.clickWhatsNewLink();
    ln16.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
});
