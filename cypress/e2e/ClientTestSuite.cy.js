import Login from "../PageObjects/ClientObjects/LoginPage.js"
import ClientHome from "../PageObjects/ClientObjects/ClientHomePage.js"
import LinksMenu from "../PageObjects/ClientObjects/LinksMenu.js";
import ClientDetailsPage from "../PageObjects/ClientObjects/ClientDetailsPage.js";
import ClientLoginsPage from "../PageObjects/ClientObjects/ClientLoginsPage.js";
import CreateLogin from "../PageObjects/ClientObjects/CreateLogin.js";
import AccountsPage from "../PageObjects/ClientObjects/AccountsPage.js";
import EstablishmentsPage from "../PageObjects/ClientObjects/EstablishmentsPage.js";
import EstablishmentAdminsPage from "../PageObjects/ClientObjects/EstablishmentAdminsPage.js";
import CreateEstablishmentUser from "../PageObjects/ClientObjects/CreateEstablishmentUser.js";
import EditUserPage from "../PageObjects/ClientObjects/EditUserPage.js";
import ContentPage from "../PageObjects/ClientObjects/ContentPage.js";
import TermDatesPage from "../PageObjects/ClientObjects/TermDatesPage.js";
import AddingTermPage from "../PageObjects/ClientObjects/AddingTermPage.js";
import Holidays from "../PageObjects/ClientObjects/Holidays.js";
import AddingHoliday from "../PageObjects/ClientObjects/AddingHoliday.js";
import PreOrderThreshold from "../PageObjects/ClientObjects/PreOrderThreshold.js";
import NotificationsPage from "../PageObjects/ClientObjects/NotificationsPage.js";
import BankingPage from "../PageObjects/ClientObjects/BankingPage.js";
import LedgerCodesPage from "../PageObjects/ClientObjects/LedgerCodesPage.js";
import AddLedgerCodePage from "../PageObjects/ClientObjects/AddLedgerCodePage.js";
import ClientEditAccountPage from "../PageObjects/ClientObjects/ClientEditAccountPage.js";
import ClientBankCreditsPage from "../PageObjects/ClientObjects/ClientBankCreditsPage.js";
import ClientBankAmountPage from "../PageObjects/ClientObjects/ClientBankAmountPage.js";
import ClientBankOverviewPage from "../PageObjects/ClientObjects/ClientBankOverviewPage.js";
import ClientAddCardPage from "../PageObjects/ClientObjects/ClientAddCardPage.js";
import ClientAddAmountPage from "../PageObjects/ClientObjects/ClientAddAmountPage.js";
import SchoolBankOverviewPage from "../PageObjects/ClientObjects/SchoolBankOverviewPage.js";
import SchoolBankCreditsPage from "../PageObjects/ClientObjects/SchoolBankCreditsPage.js";
import SchoolBankAmountPage from "../PageObjects/ClientObjects/SchoolBankAmountPage.js";
import SchoolAddCardPage from "../PageObjects/ClientObjects/SchoolAddCardPage.js";
import SchoolAddAmountPage from "../PageObjects/ClientObjects/SchoolAddAmountPage.js";
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
import AggregatedFundReportPage from "../PageObjects/ClientObjects/AggregatedFundReportPage.js";
import FundArrearsReportPage from "../PageObjects/ClientObjects/FundArrearsReportPage.js";
import FundArrearsInActiveReportPage from "../PageObjects/ClientObjects/FundArrearsInActiveReportPage.js";
import PreorderFundArrearsReportPage from "../PageObjects/ClientObjects/PreorderFundArrearsReportPage.js";
import FundNotificationsPage from "../PageObjects/ClientObjects/FundNotificationsPage.js";
import POMealReconciliationReport from "../PageObjects/ClientObjects/POMealReconciliationReport.js";
import MealRecordingByDayReport from "../PageObjects/ClientObjects/MealRecordingByDayReport.js";
import MealRecordingByWeekReport from "../PageObjects/ClientObjects/MealRecordingByWeekReport.js";
import MealRecordingUnAttendedReport from "../PageObjects/ClientObjects/MealRecordingUnAttendedReport.js";
import PaymentBetweenDatesReport from "../PageObjects/ClientObjects/PaymentBetweenDatesReport.js";
import PaymentByLedgerReport from "../PageObjects/ClientObjects/PaymentByLedgerReport.js";
import InternetPaymentByBankReport from "../PageObjects/ClientObjects/InternetPaymentByBankReport.js";
import CommunicationsPage from "../PageObjects/ClientObjects/CommunicationsPage.js";
import TemplatesPage from "../PageObjects/ClientObjects/TemplatesPage.js";
import CreateTemplatePage from "../PageObjects/ClientObjects/CreateTemplatePage.js";
import FAQsPage from "../PageObjects/ClientObjects/FaQsPage.js";
import FeedBackPage from "../PageObjects/ClientObjects/FeedBackPage.js";
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
let ln31;
let ln32;
let ln33;
let ln34;
let ln35;
let ln36;
let ln37;
let ln38;
let ln39;
let ln40;
let ln41;
let ln42;
let ln43;
let ln44;
let ln45;
let ln46;
let ln47;
let ln48;
let ln49;
let ln50;
let ln51;
let ln52;
let ln53;
let ln54;
let ln55;
let ln56;
let ln57;
let ln58;
let ln59;
let ln60;
let ln61;
let ln62;
let ln63;
let ln64;
let ln65;
describe("ClientTestSuite", () => {
  before(() => {
    cy.fixture("TestData").then((data) => {
    cy.log("Launch the Ipay Impact Website");
  
    cy.visit(data.URL);
    
    ln = new Login()
    ln.verifyPageHeadingAndURL();
  });
});
  it("Positive Login Testcase", () => {
    cy.fixture("TestData").then((data) => {
      ln.setUserName(data.ClientUsername);
      ln.setPassword(data.ClientPassword);
      ln.clickLogon();
      //ln1 = new ClientHome();
ln1 = new ClientHome();
      ln1.verifyHeadingAndURL();
    });
  });
  it("Verify Menu Logo", () => {
    ln1.verifyLogoMenu();
  });
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenu();
  });
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new LinksMenu();
    ln2.clickLinkHome();
    ln1.verifyTextHome();
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
  it("Verify Logins Link Functionality", () => {
    ln2.clickLoginsLink();
    ln4 = new ClientLoginsPage();
    //ln4.verifyHeadingVisibility();
    //ln4.verifyHeadingText();
    ln4.verifyHeadingAndURL();
  });
  it("Verify Login Page WebElements", () => {
    ln4.verifyCreateLoginBtnVisibility();
    ln4.verifyRefreshBtnVisibility();
    ln4.verifyCheckboxVisibility();
    ln4.verifyUserNameLblVisibility();
    //ln4.verifyEditBtnVisibility();
  });
  it("Verify Create Login Button Functionality", () => {
    ln4.clickCreateLoginBtn();
    ln5 = new CreateLogin();
    ln5.verifyHeadingAndURL();
    //ln5.verifyCreateLoginPageOpen();
  });
  it("Verify Create Login Page Web Elements and validations", () => {
    ln5.verifyTextFieldslabelsQuantity();
    ln5.verifyAlertText();
    ln5.verifyCreateButton();
    ln5.verifyCancelButton();
    ln5.clickCreateButton();
    ln5.verifyTextFieldsValidations();
    ln5.clickCancelButton();
    ln5.verifyCancelButtonFunctionality();
    ln4.verifyHeadingVisibility();
    ln4.verifyHeadingText();
  });
  it("Verify Accounts Link Functionality", () => {
    ln2.clickAccountsLink();
    ln6 = new AccountsPage();
    //ln6.verifyHeadingVisibility();
    ln6.verifyHeadingAndURL();
  });
  it("Verify Accounts Page Web Elements and validations", () => {
    //cy.wait(1000);
    ln6.selectEstablishmentValue();
    ln6.verifyTextboxLabelsVisibility();
    ln6.selectYearValue();
    ln6.verifyApplyFilterFunctionality();
    ln6.verifyClearFilterFunctionality();
  });
  it("Verify Establishments Link Functionality", () => {
    ln2.clickEstablishments();
    ln7 = new EstablishmentsPage();
    ln7.verifyPageHeadingAndURL();
  });
  it("Verify Establishments Page Content", () => {
    ln7.verifyEstablishmentNameVisibility();
    ln7.verifyEstablishmentIDVisibility();
    ln7.verifyUsersButtonVisibility();
    ln7.verifyNotificationsButtonVisibility();
    ln7.verifyThresholdButtonVisibility();
    ln7.verifyHolidaysButtonVisibility();
    ln7.verifyTermButtonVisibility();
    ln7.verifyContentButtonVisibility();
  });
  it("Verify Establishment Users Button", () => {
    ln7.clickUsersButton();
    ln8 = new EstablishmentAdminsPage();
    //ln8.verifyHeadingVisibility();
    ln8.verifyHeadingAndURL();
  });
  it("Verify Edit User Button Functionality on EA Page", () => {
    ln8.clickEditButton();
    ln13 = new EditUserPage();
    ln13.verifyHeadingAndURL();
    ln13.clickSaveButton();
    ln8.verifyHeadingAndURL();
    ln8.verifySuccessToast();
  });
  it("Verify Create EA Users Button", () => {
    ln8.clickCreateEAUserButton();
    ln9 = new CreateEstablishmentUser();
    ln9.verifyPageHeadingAndURL();
  });
  it("Verify Create Establishment Admin User Page Content", () => {
    ln9.verifyAlertVisibility();
    ln9.clickCreateButton();
    ln9.verifyValidationMessages();
    ln9.clickCancelButton();
    ln8.verifyHeadingAndURL();
  });
  it("Verify Return To Establishment List Button Functionality", () => {
    ln8.clickReturnButton();
    ln7.verifyPageHeadingAndURL();
  });
  it("Verify Content Button Functionality", () => {
    ln7.clickContentButton();
    ln14 = new ContentPage();
    ln14.verifyHeadingandURL();
  });
  it("Verify Content Page WebElements", () => {
    ln14.clickShowPreviewButton();
    ln14.VerifyShowPreviewEffect();
    ln14.clickSaveButton();
    ln7.verifyPageHeadingAndURL();
  });
  it("Verify Term Dates Button Functionality", () => {
    ln7.clickTermButton();
    ln15 = new TermDatesPage();
    ln15.verifyHeadingandURL();
  });
  it("Verify Add New Term Button Functionality", () => {
    ln15.clickAddNewTermButton();
    ln16 = new AddingTermPage();
    ln16.verifyHeadingandURL();
    ln16.clickSaveTermButton();
    ln16.verifyValidationMessagesAppearing();
    ln16.clickCancelButton();
    ln15.clickReturnToEstablishmentList();
    ln7.verifyPageHeadingAndURL();
  });
  it("Verify Holidays Button Functionality", () => {
    ln7.clickHolidaysButton();
    ln16 = new Holidays();
    ln16.verifyHeadingandURL();
  });
  it("Verify Add New Holiday Button Functionality", () => {
    ln16.clickAddNewHoliday();
    ln17 = new AddingHoliday();
    ln17.verifyHeadingandURL();
    ln17.clickSaveHolidayButton();
    ln17.verifyValidationMessagesAppearing();
    ln17.clickCancelButton();
    ln15.clickReturnToEstablishmentList();
    ln7.verifyPageHeadingAndURL();
  });
  it("Verify Pre-Order Threshold Button Functionality", () => {
    ln7.clickThresholdButton();
    ln18 = new PreOrderThreshold();
    ln18.verifyHeadingandURL();
  });
  it("Verify Pre-Order School Meals Balance Threshold Page Content", () => {
    ln18.clickSaveThreshold();
    //cy.wait(1000);
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Submit changes?  These changes are client-wide.");
    });
    ln7.verifyThresholdSuccessMessage();
  });
  it("Verify Notifications Button Functionality", () => {
    ln7.clickNotificationsButton();
    ln19 = new NotificationsPage();
    ln19.verifyHeadingandURL();
  });
  it("Verify Notifications Page Content", () => {
    ln19.clickSaveNotificationsButton();
    ln7.verifyNotificationsSuccessMessage();
    ln7.clickNotificationsButton();
    ln19.verifyHeadingandURL();
    ln19.clickPreOrderTab();
    ln19.clickSaveNotificationsButton();
    ln7.verifyNotificationsSuccessMessage();
  });
  it("Verify Banking Link Functionality", () => {
    ln2.clickBanking();
    ln20 = new BankingPage();
    ln20.verifyHeadingandURL();
  });
  it("Verify Banking Page Content", () => {
    ln20.clickApplyFilterButton();
    ln20.verifyFilterURL();
    ln20.clickManageLedgerCodesButton();
    ln21 = new LedgerCodesPage();
    ln21.verifyHeadingandURL();
  });
  it("Verify Ledger Code Page Content", () => {
    ln21.VerifyPageWebElements();
    ln21.clickAddLedgerCode();
    ln22 = new AddLedgerCodePage();
    ln22.verifyHeadingandURL();
  });
  it("Verify Add Ledger Code Page Content", () => {
    ln22.clickSaveLedgerCode();
    ln22.VerifyValidationMessageAppearing();
    ln22.clickCancelButton();
    ln21.verifyHeadingandURLCallBack();
  });
  it("Verify Back Button on the Ledger Codes Page", () => {
    ln21.clickBackButton();
    ln20.verifyHeadingandURL();
  });
  it("Verify Manage Client Accounts Link Functionality", () => {
    ln20.clickManageClientButton();
    ln23 = new ClientBankOverviewPage();
    ln23.verifyHeadingandURL();
  });
  it("Verify Client Bank Overview Page Content", () => {
    ln23.clickEditAccountButton();
    ln24 = new ClientEditAccountPage();
    ln24.verifyHeadingandURL();
    ln24.clickBackButton();
    ln23.verifyHeadingandURL();
    ln23.clickManageCreditButton();
    ln25 = new ClientBankCreditsPage();
    ln25.verifyHeadingandURL();
    ln25.clickBackButton();
    ln23.verifyHeadingandURL();
    ln23.clickManagebankedAmountButton();
    ln26 = new ClientBankAmountPage();
    ln26.verifyHeadingandURL();
    ln26.clickBackButton();
    ln23.verifyHeadingandURL();
  });
  it("Verify Client Edit Account Page Content", () => {
    ln23.clickEditAccountButton();
    ln24.verifyHeadingandURL();
    ln24.clickSaveAccount();
    ln23.verifyEditSuccessToast();
    ln23.verifyHeadingandURL();
  });
  it("Verify Client Bank Credits/Debits Page Content", () => {
    ln23.clickManageCreditButton();
    ln27 = new ClientBankCreditsPage();
    ln27.verifyHeadingandURL();
    ln27.clickAddNewCard();
  });
  it("Verify Client Add Card Page Content", () => {
    ln28 = new ClientAddCardPage();
    ln28.verifyHeadingandURL();
    ln28.clickSaveCard();
    ln28.verifyValidationMessages();
    ln28.clickCancelButton();
    ln27.verifyHeadingandURL();
    ln27.clickBackButton();
    ln23.verifyHeadingandURL();
  });
  it("Verify Client Banked Amount Page Content", () => {
    ln23.clickManagebankedAmountButton();
    ln26.verifyHeadingandURL();
    ln26.clickAddBankedAmount();
  });
  it("Verify Client Add Banked Amount Page Content", () => {
    ln29 = new ClientAddAmountPage();
    ln29.verifyHeadingandURL();
    ln29.clickSaveAmount();
    ln29.verifyValidationMessages();
    ln29.clickCancelButton();
    ln26.verifyReturnHeadingAndURL();
    ln26.clickBackButton();
    ln23.verifyHeadingandURL();
    ln26.clickBackButton();
    ln20.verifyHeadingandURL();
  });
  it("Verify Manage Establishment Link On Banking Page", () => {
    ln20.clickManageEstablishmentButton();
    ln30 = new SchoolBankOverviewPage();
    ln30.verifyHeadingandURL();
  });
  it("Verify School Bank Overview Page Content", () => {
    ln30.clickManageCreditButton();
    ln31 = new SchoolBankCreditsPage();
    ln31.verifyHeadingandURL();
    ln31.clickBackButton();
    ln30.verifyHeadingandURL();
    ln30.clickManagebankedAmountButton();
    ln32 = new SchoolBankAmountPage();
    ln32.verifyHeadingandURL();
    ln32.clickBackButton();
    ln30.verifyHeadingandURL();
    ln30.clickManageCreditButton();
  });
  it("Verify School Bank Credits/Debits Page Content", () => {
    ln31.verifyHeadingandURL();
    ln31.clickAddNewCard();
    ln33 = new SchoolAddCardPage();
    ln33.verifyHeadingandURL();
  });
  it("Verify School Add Card Page Content", () => {
    ln33.verifyHeadingandURL();
    ln33.clickSaveCard();
    ln33.verifyValidationMessages();
    ln33.clickCancelButton();
    ln31.verifyHeadingandURL();
    ln31.clickBackButton();
    ln30.verifyHeadingandURL();
  });
  it("Verify School Banked Amount Page Content", () => {
    ln30.clickManagebankedAmountButton();
    ln32.verifyHeadingandURL();
    ln32.clickAddBankedAmount();
  });
  it("Verify School Add Banked Amount Page Content", () => {
    ln34 = new SchoolAddAmountPage();
    ln34.verifyHeadingandURL();
    ln34.clickSaveAmount();
    ln34.verifyValidationMessages();
    ln34.clickCancelButton();
    ln32.verifyHeadingandURLOnBack();
    ln32.clickBackButton();
    ln30.verifyHeadingandURL();
    ln30.clickBackButton();
    ln20.verifyHeadingandURL();
  });
  it("Verify Menus Link Functionality", () => {
    ln2.clickMenus();
    ln35 = new MenuPage();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify Menus Page Content", () => {
    ln35.clickHistoricTab();
    ln35.verifyHistoricTabDisplay();
    ln35.clickInactiveTab();
    ln35.verifyInactiveTabDisplay();
    ln35.clickCreateMenuButton();
  });
  it("Verify Adding New Menu Page Content", () => {
    ln36 = new AddMenuPage();
    ln36.verifyHeadingsAndURL();
    ln36.clickUpdateDetailsButton();
    ln36.verifyValidationMessagesAppearing();
    ln36.clickBreadCrumb();
    ln35.verifyHeadingsAndURL();
    ln35.clickViewPluList();
  });
  it("Verify PLU List Page Content", () => {
    ln37 = new PLUListPage();
    ln37.verifyHeadingAndURL();
    //ln37.verifyInfoMessage();
    ln37.clickAddNewPluButton();
  });
  it("Verify Adding PLU Page Content", () => {
    ln38 = new AddPLUPage();
    ln38.verifyHeadingsAndURL();
    ln38.clickSaveButton();
    ln38.verifyValidationMessagesAppearing();
    ln38.clickCancelButton();
    ln37.verifyURLOnReturn();
    ln37.clickMenuListBreadCrumb();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify PLU Colours Page Content", () => {
    ln35.clickEditPluColours();
    ln39 = new PLUColoursPage();
    ln39.verifyHeadingAndURL();
    ln39.clickAddNewColourButton();
    ln39.verifyValidationAppearing();
    ln39.clickReturnToMenuListButton();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify PLU Categories Page Content", () => {
    ln35.clickEditPluCategories();
    ln40 = new PLUCategoryPage();
    ln40.verifyHeadingAndURL();
    //ln40.verifySubHeading();
    ln40.clickAddNewCategoryButton();
    ln40.verifyCategoryModalHeading();
    ln40.clickSaveCategoryButton();
    ln40.verifyCategoryValidation();
    ln40.clickCancelModalButton();
    ln40.verifyHeadingAndURL();
    ln2.clickMenus();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify Menu Weeks - Primary Page Content", () => {
    ln35.clickEditPrimaryMenuWeek();
    ln10 = new MenuWeeksPage();
    ln10.verifyPrimaryHeadingsAndURL();
    ln10.clickSaveMenuWeeksButton();
    ln10.verifySuccessToastAppearing();
    ln10.clickResetMenuWeeksButton();
    ln10.verifySuccessToastNotAppearing();
    //ln10.clickReturnToMenuListButton();
    ln10.clickMenuWeekBreadCrumb();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify Menu Weeks - Nursery Page Content", () => {
    ln35.clickEditNurseryMenuWeek();
    ln10 = new MenuWeeksPage();
    ln10.verifyNurseryHeadingsAndURL();
    ln10.clickSaveMenuWeeksButton();
    ln10.verifySuccessToastAppearing();
    ln10.clickResetMenuWeeksButton();
    ln10.verifySuccessToastNotAppearing();
    //ln10.clickReturnToMenuListButton();
    ln10.clickMenuWeekBreadCrumb();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify Meal Price Page Content", () => {
    ln35.clickViewMealPrices();
    ln11 = new MealPricePage();
    ln11.verifyHeadingandURL();
    ln11.clickEstablishmentSelectButton();
  });
  it("Verify Meal Establishment Page Content", () => {
    ln11.verifyMealPriceHeadingandURL();
    ln11.clickReturnToMealPriceButton();
    ln11.verifyHeadingandURL();
    ln11.clickAddMealPricesButton();
  });
  it("Verify Add Meal Price Page Content", () => {
    ln12 = new AddMealPricePage();
    ln12.verifyHeadingAndURL();
    ln12.clickSaveMealPriceButton();
    ln12.verifyValidationMessagesAppearing();
    ln12.clickCancelButton();
    ln11.verifyHeadingandURL();
    //ln11.clickReturnToMenuListButton();
    ln10.clickMenuWeekBreadCrumb();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify Cut Off Day Page Content", () => {
    ln35.clickEditCutOffTime();
    ln41 = new CutOffTimePage();
    ln41.verifyHeadingsandURL();
    ln41.clickSaveCutOffTimeButton();
    ln41.verifyValidationMessagesAppearing();
    //ln41.clickReturnToMenuListButton();
    ln10.clickMenuWeekBreadCrumb();
    ln35.verifyHeadingsAndURL();
  });
  it("Verify Reports Link Functionality", () => {
    ln2.clickReports();
    ln42 = new ReportsPage();
    ln42.verifyHeadingsAndURL();
  });
  it("Verify Login Activity Report", () => {
    ln42.clickLoginActivityLink();
    ln43 = new AccountsReportPage();
    ln43.verifyHeadingAndURL();
    ln43.clickReportReturnButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Unused Logins Report", () => {
    ln42.clickUnusedLoginsLink();
    ln43.verifyHeadersOnUnusedLoginPage();
    ln43.clickRunReportButton();
    ln43.verifyHeadersOnUnusedLoginReport();
    ln43.clickReportReturnButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts Without Logins Report", () => {
    ln42.clickAccountsWithoutLoginsLink();
    ln43.verifyHeadersOnAccountsWithoutLoginPage();
    ln43.clickRunReportButton();
    ln43.verifyHeadersOnAccountsWithoutLoginReport();
    ln43.clickReportReturnButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts With Registered Parents Report", () => {
    ln42.clickAccountsWithRegisteredParentLink();
    ln43.verifyHeadersOnAccountRegisteredLoginsPage();
    ln43.SelectEstablishment();
    ln43.clickRunReportOnAccountRegisterButton();
    ln43.verifyHeadersOnAccountDetailsReport();
    ln43.clickReportReturnButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Aggregated Fund Details Report", () => {
    ln42.clickAggregatedFundReportLink();
    ln44 = new AggregatedFundReportPage();
    ln44.verifyPageHeadingAndURL();
    ln44.clickRunReport();
    ln44.verifyValidationMessage();
    ln44.TypeFundName();
    ln44.clickRunReport();
    ln44.verifyReportHeadingAndURL();
    ln44.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Arrears Report", () => {
    ln42.clickFundArrearsReportLink();
    ln45 = new FundArrearsReportPage();
    ln45.verifyPageHeadingAndURL();
    ln45.clickRunReport();
    ln45.verifyValidationMessageOnFund();
    ln45.verifyValidationMessageOnPage();
    ln45.clickReturnToReportListButton();
    ln42.verifyHeadingsAndURL();
  });
  it("Verify Fund Arrears For Inactive Accounts Report", () => {
    ln42.clickFundArrearsInActiveReportLink();
    ln46 = new FundArrearsInActiveReportPage();
    ln46.verifyPageHeadingAndURL();
    ln46.clickRunReport();
    ln46.verifyReportHeadingAndURL();
    ln46.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Pre-Order Fund Arrears Summary Report", () => {
    ln42.clickPreOrderFundArrearsLink();
    ln47 = new PreorderFundArrearsReportPage();
    ln47.verifyReportHeadingAndURL();
    ln47.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Notifications Report", () => {
    ln42.clickFundNotificationsLink();
    ln48 = new FundNotificationsPage();
    ln48.verifyPageHeadingAndURL();
    ln48.clickRunReport();
    ln48.verifyValidationMessageOnFund();
    ln48.verifyValidationMessageOnPage();
    ln48.clickReturnToReportListButton();
    ln42.verifyHeadingsAndURL();
  });
  it("Verify Pre_Order Meal Reconciliation Report", () => {
    ln42.clickPOMealReconciliationLink();
    ln49 = new POMealReconciliationReport();
    ln49.verifyPageHeadingAndURL();
    ln49.clickRunReport();
    ln49.verifyValidationAppearing();
    ln49.selectEstablishment();
    ln49.clickRunReport();
    ln49.verifyReportHeadingAndURL();
    ln46.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Meal Recording By Day Report", () => {
    ln42.clickMealRecordingByDayLink();
    ln50 = new MealRecordingByDayReport();
    ln50.verifyPageHeadingAndURL();
    ln50.clickRunReport();
    ln50.verifyReportHeadingAndURL();
    ln50.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Meal Recording By Week Report", () => {
    ln42.clickMealRecordingByWeekLink();
    ln51 = new MealRecordingByWeekReport();
    ln51.verifyPageHeadingAndURL();
    ln51.clickRunReport();
    ln51.verifyReportHeadingAndURL();
    ln51.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Meal Recording - Unattended Report", () => {
    ln42.clickMealRecordingUnattendedLink();
    ln52 = new MealRecordingUnAttendedReport();
    ln52.verifyPageHeadingAndURL();
    ln52.clickRunReport();
    ln52.verifyReportHeadingAndURL();
    ln52.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Payment Between Days Report", () => {
    ln42.clickPaymentBetweenDatesLink();
    ln53 = new PaymentBetweenDatesReport();
    ln53.verifyPageHeadingAndURL();
    ln53.clickAllCheckbox();
    ln53.clickRunReport();
    ln53.verifyReportHeadingAndURL();
    ln53.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Payment By Ledger Report", () => {
    ln42.clickPaymentByLedgerLink();
    ln54 = new PaymentByLedgerReport();
    ln54.verifyPageHeadingAndURL();
    ln54.clickRunReport();
    ln54.verifyReportHeadingAndURL();
    ln54.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Internet Payment By Bank Account Report", () => {
    ln42.clickInternetPaymentByBankAccountLink();
    ln55 = new InternetPaymentByBankReport();
    ln55.verifyClientPageHeadingAndURL();
    ln55.clickRunReport();
    ln55.verifyReportHeadingAndURL();
    ln55.clickReportBackButton();
    ln42.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Communications Link Functionality", () => {
    ln2.clickCommunicationsLink();
    ln2.clickGenerateCSVLink();
    ln56 = new CommunicationsPage();
    ln56.verifyHeadingandURL();
  });
  it("Verify Communications Page Content", () => {
    ln56.clickAccountCSVLink();
    ln56.verifyHeadingandURLOnAccountCSVpage();
    ln56.clickCreateButton();
    ln56.verifyValidationMessage();
    ln56.clickReturnToComms();
    ln56.verifyHeadingandURL();
  });
  it("Verify Templates Page Content", () => {
    ln2.clickCommunicationsLink();
    ln2.clickTemplateManagementLink();
    ln57 = new TemplatesPage();
    ln57.verifyHeadingandURL();
    ln57.VerifyInfoTextOnEmpty();
    ln57.clickSystemTemplatesCheckBox();
    ln57.clickApplyFilterButton();
    ln57.VerifyInfoText();
    ln57.clickSetDefaultTemplateButton();
  });
  it("Verify Default Tamplates Page Content", () => {
    ln57.verifyDefaultTempHeadingAndURL();
    ln57.clickViewTemplateButton();
    ln57.verifyHeadingOnTempModal();
    ln57.clickCloseTempModalButton();
    ln57.clickSaveButtonOnDefaultTemp();
    ln57.verifySuccessToast();
    ln57.verifyHeadingandURL();
  });
  it("Verify Choose Template Type Page Content", () => {
    ln57.clickCreateTemplateButton();
    ln58 = new CreateTemplatePage();
    ln58.verifyHeadingAndURL();
    ln58.clickViewExampleButton();
    ln58.verifyHeadingOnViewExampleModal();
    ln58.clickCloseButtonOnModal();
    ln58.clickSelectTemplateButton();
  });
  it("Verify Create Email template Page Content", () => {
    ln58.verifyHeadingandURLOnCreateEmailTempPage();
    ln58.clickCreateTemplateButton();
    ln58.verifyValidationMessage();
    ln58.clickBackButtonOnCreateEmailTempPage();
    ln58.verifyHeadingAndURL();
    ln58.clickBackToTempPage();
    ln57.verifyHeadingandURL();
  });
  it("Verify FAQs Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    ln59 = new FAQsPage();
    ln59.verifyHeadingAndURL();
    ln59.clickSearchButton();
    ln59.verifyValidation();
    ln59.typeSearchContent();
    ln59.clickSearchButton();
    ln59.verifyValidationNotAppearing();
  });
  /*
  it("Verify Give Feedback Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickGiveFeedbackLink();
    window.postMessage();
    cy.origin("https://portal.productboard.com", () => {
      cy.on("uncaught:exception", (e) => {
        if (e.message.includes("Things went bad")) {
          return false;
        }
      });
    });
    ln60 = new FeedBackPage();
    ln60.verifyHeadingAndURL();
    ln60.clickSubmitIdeaButton();
    ln60.verifyModalHeading();
    ln60.clickCloseModalButton();
    cy.go("back");
    cy.go("back");
    cy.go("back");
    window.postMessage();
    ln1.verifyHeadingAndURL();
  });
*/
  it("Verify What's New Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln61 = new WhatsNewPage();
    ln61.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln62 = new ProfilePage();
    ln62.verifyHeadingAndURL();
    ln62.clickSaveMyProfileButton();
    ln62.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln62.verifyHeadingAndURL();
    //ln62.clickCancelButton();
    //ln1.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    //ln2.clickHelpLink();
    //ln2.clickNameLogo();
    //ln2.clickMyProfilelink();
    //ln62.verifyHeadingAndURL();
    ln62.clickChangeEmailButton();
    ln63 = new ChangeEmailAddressPage();
    ln63.verifyHeadingAndURL();
    ln63.clickChangeEmailAddressButton();
    ln63.verifyValidationsAppearing();
    ln63.clickBackToMyProfieButton();
    ln62.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln62.clickChangeIpayPasswordButton();
    ln64 = new ChangePasswordPage();
    ln64.verifyHeadingAndURL();
    ln64.clickChangePasswordButton();
    ln64.verifyValidationsAppearing();
    ln64.clickBackToMyProfieButton();
    ln62.verifyHeadingAndURL();
    ln62.clickCancelButton();
    ln1.verifyHeadingAndURL();
  });
  it("Verify Footer Links", () => {
    ln65 = new FooterPage();
    ln65.clickAccessibilityLink();
    ln65.verifyAccessibilityPageHeadingAndURL();
    ln65.clickCookiesLink();
    ln65.verifyCookiesPageHeadingAndURL();
    ln65.clickPrivacyStatementLink();
    ln65.verifyPrivacyStatementPageHeadingAndURL();
    ln65.clickSiteMapLink();
    ln65.verifySiteMapPageHeadingAndURL();
    ln65.clickPCIComplianceLink();
    ln65.verifyPCICompliancePageHeadingAndURL();
    ln65.clickAllergyAdviceLink();
    ln65.verifyAllergyAdvicePageHeadingAndURL();
    ln65.clickWhatsNewLink();
    ln65.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
});
