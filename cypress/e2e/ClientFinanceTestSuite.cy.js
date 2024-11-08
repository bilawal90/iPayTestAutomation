import Login from "../PageObjects/ClientObjects/LoginPage.js";
import ClientHome from "../PageObjects/ClientObjects/ClientHomePage.js";
import LinksMenu from "../PageObjects/ClientObjects/LinksMenu.js";
import AccountsPage from "../PageObjects/ClientObjects/AccountsPage.js";
import BankingPage from "../PageObjects/ClientObjects/BankingPage.js";
import LedgerCodesPage from "../PageObjects/ClientObjects/LedgerCodesPage.js";
import AddLedgerCodePage from "../PageObjects/ClientObjects/AddLedgerCodePage.js";
import ClientEditAccountPage from "../PageObjects/ClientObjects/ClientEditAccountPage.js";
import ClientBankCreditsPage from "../PageObjects/ClientObjects/ClientBankCreditsPage.js";
import ClientBankAmountPage from "../PageObjects/ClientObjects/ClientBankAmountPage.js";
import ClientBankOverviewPage from "../PageObjects/ClientObjects/ClientBankOverviewPage.js";
import ClientAddCardPage from "../PageObjects/ClientObjects/ClientAddCardPage.js";
import ClientAddAmountPage from "../PageObjects/ClientObjects/ClientAddAmountPage.js";
import ReportsPage from "../PageObjects/ClientObjects/ReportsPage.js";
import AccountsReportPage from "../PageObjects/ClientObjects/AccountsReportPage.js";
import AggregatedFundReportPage from "../PageObjects/ClientObjects/AggregatedFundReportPage.js";
import FundArrearsReportPage from "../PageObjects/ClientObjects/FundArrearsReportPage.js";
import FundArrearsInActiveReportPage from "../PageObjects/ClientObjects/FundArrearsInActiveReportPage.js";
import PreorderFundArrearsReportPage from "../PageObjects/ClientObjects/PreorderFundArrearsReportPage.js";
import FundNotificationsPage from "../PageObjects/ClientObjects/FundNotificationsPage.js";
import POMealReconciliationReport from "../PageObjects/ClientObjects/POMealReconciliationReport.js";
import PaymentBetweenDatesReport from "../PageObjects/ClientObjects/PaymentBetweenDatesReport.js";
import PaymentByLedgerReport from "../PageObjects/ClientObjects/PaymentByLedgerReport.js";
import InternetPaymentByBankReport from "../PageObjects/ClientObjects/InternetPaymentByBankReport.js";
import FAQsPage from "../PageObjects/ClientObjects/FaQsPage.js";
import WhatsNewPage from "../PageObjects/ClientObjects/WhatsNewPage.js";
import ProfilePage from "../PageObjects/ClientObjects/ProfilePage.js";
import ChangeEmailAddressPage from "../PageObjects/ClientObjects/ChangeEmailAddressPage.js";
import ChangePasswordPage from "../PageObjects/ClientObjects/ChangePasswordPage.js";
import FooterPage from "../PageObjects/ClientObjects/FooterPage.js";
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
let ln27;
let ln28;
let ln29;
let ln30;
describe("ClientFinanceTestSuite", () => {
  before(() => {
    cy.fixture("TestData").then((data) => {
    cy.log("Launch the Ipay Impact Website to Test the Client Finance Smoke Test Cases");
   
    cy.visit(data.URL);
    
    ln = new Login();
    ln.verifyPageHeadingAndURL();
  });
});
//})
  it("Positive Login Testcase", () => {
    cy.fixture("TestData").then((data) => {
      ln.setUserName(data.ClientFinanceUsername);
      ln.setPassword(data.ClientFinancePassword);
      ln.clickLogon();
      ln1 = new ClientHome();
      ln1.verifyClientFinanceHeadingAndURL();
    });
  });
  it("Verify Page Logo", () => {
    ln1.verifyLogoMenu();
  });
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenuSF();
  });
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new LinksMenu();
    ln2.clickLinkHome();
    ln1.verifyClientFinanceHeadingAndURL();
  });
  it("Verify Accounts Link Functionality", () => {
    ln2.clickAccountsLink();
    ln3 = new AccountsPage();
    ln3.verifyHeadingAndURL();
  });
  it("Verify Accounts Page Web Elements and validations", () => {
    ln3.selectEstablishmentValue();
    ln3.verifyTextboxLabelsVisibility();
    ln3.selectYearValue();
    ln3.verifyApplyFilterFunctionality();
    ln3.verifyClearFilterFunctionality();
  });
  it("Verify Reports Link Functionality", () => {
    ln2.clickReports();
    ln4 = new ReportsPage();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Login Activity Report", () => {
    ln4.clickLoginActivityLink();
    ln5 = new AccountsReportPage();
    ln5.verifyHeadingAndURL();
    ln5.clickReportReturnButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Unused Logins Report", () => {
    ln4.clickUnusedLoginsLink();
    ln5.verifyHeadersOnUnusedLoginPage();
    ln5.clickRunReportButton();
    ln5.verifyHeadersOnUnusedLoginReport();
    ln5.clickReportReturnButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts Without Logins Report", () => {
    ln4.clickAccountsWithoutLoginsLink();
    ln5.verifyHeadersOnAccountsWithoutLoginPage();
    ln5.clickRunReportButton();
    ln5.verifyHeadersOnAccountsWithoutLoginReport();
    ln5.clickReportReturnButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts With Registered Parents Report", () => {
    ln4.clickAccountsWithRegisteredParentLink();
    ln5.verifyHeadersOnAccountRegisteredLoginsPage();
    ln5.SelectEstablishment();
    ln5.clickRunReportOnAccountRegisterButton();
    ln5.verifyHeadersOnAccountDetailsReport();
    ln5.clickReportReturnButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Aggregated Fund Details Report", () => {
    ln4.clickAggregatedFundReportLink();
    ln6 = new AggregatedFundReportPage();
    ln6.verifyPageHeadingAndURL();
    ln6.clickRunReport();
    ln6.verifyValidationMessage();
    ln6.TypeFundName();
    ln6.clickRunReport();
    ln6.verifyReportHeadingAndURL();
    ln6.clickReportBackButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Arrears Report", () => {
    ln4.clickFundArrearsReportLink();
    ln7 = new FundArrearsReportPage();
    ln7.verifyPageHeadingAndURL();
    ln7.clickRunReport();
    ln7.verifyValidationMessageOnFund();
    ln7.verifyValidationMessageOnPage();
    ln7.clickReturnToReportListButton();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Fund Arrears For Inactive Accounts Report", () => {
    ln4.clickFundArrearsInActiveReportLink();
    ln8 = new FundArrearsInActiveReportPage();
    ln8.verifyPageHeadingAndURL();
    ln8.clickRunReport();
    ln8.verifyReportHeadingAndURL();
    ln8.clickReportBackButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Pre-Order Fund Arrears Summary Report", () => {
    ln4.clickPreOrderFundArrearsLink();
    ln9 = new PreorderFundArrearsReportPage();
    ln9.verifyReportHeadingAndURL();
    ln9.clickReportBackButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Notifications Report", () => {
    ln4.clickFundNotificationsLink();
    ln10 = new FundNotificationsPage();
    ln10.verifyPageHeadingAndURL();
    ln10.clickRunReport();
    ln10.verifyValidationMessageOnFund();
    ln10.verifyValidationMessageOnPage();
    ln10.clickReturnToReportListButton();
    ln4.verifyHeadingsAndURL();
  });
  it("Verify Pre Order Meal Reconciliation Report", () => {
    ln4.clickPOMealReconciliationLink();
    ln11 = new POMealReconciliationReport();
    ln11.verifyPageHeadingAndURL();
    ln11.clickRunReport();
    ln11.verifyValidationAppearing();
    ln11.selectEstablishment();
    ln11.clickRunReport();
    ln11.verifyReportHeadingAndURL();
    ln11.clickReportBackButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Payment Between Days Report", () => {
    ln4.clickPaymentBetweenDatesLink();
    ln12 = new PaymentBetweenDatesReport();
    ln12.verifyPageHeadingAndURL();
    ln12.clickAllCheckbox();
    ln12.clickRunReport();
    ln12.verifyReportHeadingAndURL();
    ln12.clickReportBackButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Payment By Ledger Report", () => {
    ln4.clickPaymentByLedgerLink();
    ln13 = new PaymentByLedgerReport();
    ln13.verifyPageHeadingAndURL();
    ln13.clickRunReport();
    ln13.verifyReportHeadingAndURL();
    ln13.clickReportBackButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Internet Payment By Bank Account Report", () => {
    ln4.clickInternetPaymentByBankAccountLink();
    ln14 = new InternetPaymentByBankReport();
    ln14.verifyClientPageHeadingAndURL();
    ln14.clickRunReport();
    ln14.verifyReportHeadingAndURL();
    ln14.clickReportBackButton();
    ln4.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Banking Link Functionality", () => {
    ln2.clickBanking();
    ln15 = new BankingPage();
    ln15.verifyHeadingandURL();
  });
  it("Verify Banking Page Content", () => {
    ln15.clickApplyFilterButton();
    ln15.verifyFilterURL();
    ln15.clickManageLedgerCodesButton();
    ln16 = new LedgerCodesPage();
    ln16.verifyHeadingandURL();
  });
  it("Verify Ledger Code Page Content", () => {
    ln16.VerifyPageWebElements();
    ln16.clickAddLedgerCode();
    ln17 = new AddLedgerCodePage();
    ln17.verifyHeadingandURL();
  });
  it("Verify Add Ledger Code Page Content", () => {
    ln17.clickSaveLedgerCode();
    ln17.VerifyValidationMessageAppearing();
    ln17.clickCancelButton();
    ln16.verifyHeadingandURLCallBack();
  });
  it("Verify Back Button on the Ledger Codes Page", () => {
    ln16.clickBackButton();
    ln15.verifyHeadingandURL();
  });
  it("Verify Manage Cient Accounts Link Functionality", () => {
    ln15.clickManageClientButton();
    ln18 = new ClientBankOverviewPage();
    ln18.verifyHeadingandURL();
  });
  it("Verify Client Bank Overview Page Content", () => {
    ln18.clickEditAccountButton();
    ln19 = new ClientEditAccountPage();
    ln19.verifyHeadingandURL();
    ln19.clickBackButton();
    ln18.verifyHeadingandURL();
    ln18.clickManageCreditButton();
    ln20 = new ClientBankCreditsPage();
    ln20.verifyHeadingandURL();
    ln20.clickBackButton();
    ln18.verifyHeadingandURL();
    ln18.clickManagebankedAmountButton();
    ln21 = new ClientBankAmountPage();
    ln21.verifyHeadingandURL();
    ln21.clickBackButton();
    ln18.verifyHeadingandURL();
  });
  it("Verify Client Edit Account Page Content", () => {
    ln18.clickEditAccountButton();
    ln19.verifyHeadingandURL();
    ln19.clickSaveAccount();
    ln18.verifyEditSuccessToast();
    ln18.verifyHeadingandURL();
  });
  it("Verify Client Bank Credits/Debits Page Content", () => {
    ln18.clickManageCreditButton();
    ln22 = new ClientBankCreditsPage();
    ln22.verifyHeadingandURL();
    ln22.clickAddNewCard();
  });
  it("Verify Client Add Card Page Content", () => {
    ln23 = new ClientAddCardPage();
    ln23.verifyHeadingandURL();
    ln23.clickSaveCard();
    ln23.verifyValidationMessages();
    ln23.clickCancelButton();
    ln22.verifyHeadingandURL();
    ln22.clickBackButton();
    ln18.verifyHeadingandURL();
  });
  it("Verify Client Banked Amount Page Content", () => {
    ln18.clickManagebankedAmountButton();
    ln21.verifyHeadingandURL();
    ln21.clickAddBankedAmount();
  });
  it("Verify Client Add Banked Amount Page Content", () => {
    ln24 = new ClientAddAmountPage();
    ln24.verifyHeadingandURL();
    ln24.clickSaveAmount();
    ln24.verifyValidationMessages();
    ln24.clickCancelButton();
    ln21.verifyReturnHeadingAndURL();
    ln21.clickBackButton();
    ln18.verifyHeadingandURL();
    ln21.clickBackButton();
    ln15.verifyHeadingandURL();
  });
  it("Verify FAQs Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    ln25 = new FAQsPage();
    ln25.verifyHeadingAndURL();
    ln25.clickSearchButton();
    ln25.verifyValidation();
    ln25.typeSearchContent();
    ln25.clickSearchButton();
    ln25.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln26 = new WhatsNewPage();
    ln26.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln27 = new ProfilePage();
    ln27.verifyHeadingAndURL();
    ln27.clickSaveMyProfileButton();
    ln27.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln27.verifyHeadingAndURL();
    //ln27.clickCancelButton();
    //ln1.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    //ln2.clickHelpLink();
    //ln2.clickNameLogo();
    //ln2.clickMyProfilelink();
    //ln27.verifyHeadingAndURL();
    ln27.clickChangeEmailButton();
    ln28 = new ChangeEmailAddressPage();
    ln28.verifyHeadingAndURL();
    ln28.clickChangeEmailAddressButton();
    ln28.verifyValidationsAppearing();
    ln28.clickBackToMyProfieButton();
    ln27.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln27.clickChangeIpayPasswordButton();
    ln29 = new ChangePasswordPage();
    ln29.verifyHeadingAndURL();
    ln29.clickChangePasswordButton();
    ln29.verifyValidationsAppearing();
    ln29.clickBackToMyProfieButton();
    ln27.verifyHeadingAndURL();
    ln27.clickCancelButton();
    ln1.verifyClientFinanceHeadingAndURL();
  });
  it("Verify Footer Links", () => {
    ln30 = new FooterPage();
    ln30.clickAccessibilityLink();
    ln30.verifyAccessibilityPageHeadingAndURL();
    ln30.clickCookiesLink();
    ln30.verifyCookiesPageHeadingAndURL();
    ln30.clickPrivacyStatementLink();
    ln30.verifyPrivacyStatementPageHeadingAndURL();
    ln30.clickSiteMapLink();
    ln30.verifySiteMapPageHeadingAndURL();
    ln30.clickPCIComplianceLink();
    ln30.verifyPCICompliancePageHeadingAndURL();
    ln30.clickAllergyAdviceLink();
    ln30.verifyAllergyAdvicePageHeadingAndURL();
    ln30.clickWhatsNewLink();
    ln30.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
});
