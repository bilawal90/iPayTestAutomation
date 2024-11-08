import Login from "../PageObjects/SchoolObjects/LoginPage.js"
import EstablishmentHomePage from "../PageObjects/SchoolObjects/EstablishmentHomePage.js"
import SchoolLinksMenu from "../PageObjects/SchoolObjects/SchoolLinksMenu.js"
import PaymentBetweenDatesReport from "../PageObjects/SchoolObjects/PaymentBetweenDatesReport.js"
import PreOrderSchoolFundPage from "../PageObjects/SchoolObjects/PreOrderSchoolFundPage.js"
import FundsPage from "../PageObjects/SchoolObjects/FundsPage.js"
import AddNewFundPage from "../PageObjects/SchoolObjects/AddNewFundPage.js"
import CharityFundPage from "../PageObjects/SchoolObjects/CharityFundPage.js"
import CharityManualPaymentsPage from "../PageObjects/SchoolObjects/CharityManualPaymentsPage.js"
import FundExpenditureReport from "../PageObjects/SchoolObjects/FundExpenditureReport.js"
import FundManagementPage from "../PageObjects/SchoolObjects/FundManagementPage.js"
import FundAddCardPage from "../PageObjects/SchoolObjects/FundAddCardPage.js"
import MilkFundPage from "../PageObjects/SchoolObjects/MilkFundPage.js"
import BalancesReport from "../PageObjects/SchoolObjects/BalancesReport.js"
import AutoPaymentsPage from "../PageObjects/SchoolObjects/AutoPaymentsPage.js"
import TripFundPage from "../PageObjects/SchoolObjects/TripFundPage.js"
import FundDescriptionPage from "../PageObjects/SchoolObjects/FundDescriptionPage.js"
import ManualPaymentsPage from "../PageObjects/SchoolObjects/ManualPaymentsPage.js"
import PermissionsPage from "../PageObjects/SchoolObjects/PermissionsPage.js"
import FundNotificationsPage from "../PageObjects/SchoolObjects/FundNotificationsPage.js"
import FundAccountsPage from "../PageObjects/SchoolObjects/FundAccountsPage.js"
import AddAccountPage from "../PageObjects/SchoolObjects/AddAccountPage.js"
import TripReportsPage from "../PageObjects/ClientObjects/TripReportsPage.js"
import PaidAccountsReport from "../PageObjects/SchoolObjects/PaidAccountsReport.js"
import TripPaymentReceivedReport from "../PageObjects/SchoolObjects/TripPaymentReceivedReport.js"
import AllocationsReport from "../PageObjects/SchoolObjects/AllocationsReport.js"
import ParentPermissionReport from "../PageObjects/SchoolObjects/ParentPermissionReport.js"
import LAFundPage from "../PageObjects/SchoolObjects/LAFundPage.js"
import LADetailsPage from "../PageObjects/SchoolObjects/LADetailsPage.js"
import LADatesPage from "../PageObjects/SchoolObjects/LADatesPage.js"
import LATimesPage from "../PageObjects/SchoolObjects/LATimesPage.js"
import LAAvailabilityPage from "../PageObjects/SchoolObjects/LAAvailabilityPage.js"
import LABulkDatesPage from "../PageObjects/SchoolObjects/LABulkDatesPage.js"
import LAQuickEntryPage from "../PageObjects/SchoolObjects/LAQuickEntryPage.js"
import LAReportsPage from "../PageObjects/SchoolObjects/LAReportsPage.js"
import BookingsReportPage from "../PageObjects/SchoolObjects/BookingsReportPage.js"
import BookingsDetailPage from "../PageObjects/SchoolObjects/BookingsDetailPage.js"
import ShopFundPage from "../PageObjects/SchoolObjects/ShopFundPage.js"
import ShopReportsPage from "../PageObjects/SchoolObjects/ShopReportsPage.js"
import AccountPurchasesReport from "../PageObjects/SchoolObjects/AccountPurchasesReport.js"
import StockSummaryPage from "../PageObjects/SchoolObjects/StockSummaryPage.js"
import StockPurchasesPage from "../PageObjects/SchoolObjects/StockPurchasesPage.js"
import PreOrderMealPage from "../PageObjects/SchoolObjects/PreOrderMealPage.js"
import PreOrderRefundPage from "../PageObjects/SchoolObjects/PreOrderRefundPage.js"
import SupervisorPage from "../PageObjects/SchoolObjects/SupervisorPage.js"
import FundArrearsReport from "../PageObjects/SchoolObjects/FundArrearsReport.js"
import UFSMEligibilityPage from "../PageObjects/SchoolObjects/UFSMEligibilityPage.js"
import AccountsPage from "../PageObjects/SchoolObjects/AccountsPage.js"
import ProvisioningPage from "../PageObjects/SchoolObjects/ProvisioningPage.js"
import ReportsPage from "../PageObjects/SchoolObjects/ReportsPage.js"
import AccountsReportPage from "../PageObjects/SchoolObjects/AccountsReportPage.js"
import FundReconciliationReport from "../PageObjects/SchoolObjects/FundReconciliationReport.js"
import InternetPaymentByBankReport from "../PageObjects/SchoolObjects/InternetPaymentByBankReport.js"
import PaymentByLedgerReport from "../PageObjects/SchoolObjects/PaymentByLedgerReport.js"
import BankingPage from "../PageObjects/SchoolObjects/BankingPage.js"
import AddLedgerCodePage from "../PageObjects/SchoolObjects/AddLedgerCodePage.js"
import LedgerCodesPage from "../PageObjects/SchoolObjects/LedgerCodesPage.js"
import FAQsPage from "../PageObjects/SchoolObjects/FAQsPage.js"
import WhatsNewPage from "../PageObjects/SchoolObjects/WhatsNewPage.js"
import ProfilePage from "../PageObjects/SchoolObjects/ProfilePage.js"
import ChangeEmailAddressPage from "../PageObjects/SchoolObjects/ChangeEmailAddressPage.js"
import ChangePasswordPage from "../PageObjects/SchoolObjects/ChangePasswordPage.js"
import FooterPage from "../PageObjects/SchoolObjects/FooterPage.js"
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
let ln12
let ln13
let ln14
let ln15
let ln16
let ln17
let ln18
let ln19
let ln20
let ln21
let ln22
let ln23
let ln24
let ln25
let ln26
let ln27
let ln28
let ln29
let ln30
let ln31
let ln32
let ln33
let ln34
let ln35
let ln36
let ln37
let ln38
let ln39
let ln40
let ln41
let ln42
let ln43
let ln44
let ln45
let ln46
let ln47
let ln48
let ln49
let ln50
let ln51
let ln52
let ln53
let ln54
let ln55
let ln56
let ln57
let ln58
let ln59
let ln60
let ln61
let ln62
let ln63
describe("SchoolFinanceTestSuite", () => {
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
      ln.setUserName(data.SchoolFinanceUsername)
      ln.setPassword(data.SchoolFinancePassword)
      ln.clickLogon()
      ln1 = new EstablishmentHomePage
      ln1.verifySFHeadingAndURL()
      ln1.verifySASubheading()
    })
  })
  it("Verify Menu Logo", () => {
    ln1.verifyLogoMenu()
  })
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenuSF()
  })
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new SchoolLinksMenu
    ln2.clickLinkHome()
    ln1.verifySFHeadingAndURL()
  })
  it("Verify Configure Link On Home Page", () => {
    ln1.clickConfigureLink()
    ln1.verifyPopupWindowHeading()
    ln1.closePopupWindow()
    cy.wait(150)
    ln1.verifySFHeadingAndURL()
  })
  it("Verify Daily Payments View Report Link On Home Page", () => {
    ln1.clickDailyPaymentsViewReport()
    ln3 = new PaymentBetweenDatesReport
    ln3.verifyReportHeadingAndURL()
    cy.go('back')
    ln1.verifySFHeadingAndURL()
  })
  it("Verify View PreOrder Fund Link On Home Page", () => {
    ln1.clickViewPreOrderFundLink()
    ln4 = new PreOrderSchoolFundPage
    ln4.verifyPageHeadingAndURL()
    ln2.clickLinkHome()
    ln1.verifySFHeadingAndURL()
  })
  it("Verify Funds Page from the Navigation Menu", () => {
    ln2.clickFundsLink()
    ln5 = new FundsPage
    ln5.verifyPageHeadingAndURL()
    ln5.clickInactiveLink()
    ln5.verifyInactiveListInfo()
    ln5.clickAllLink()
    ln5.verifyFundPageListing()
    ln5.clickArchivedFunds()
    ln5.verifyInactiveListInfo()
    ln5.clickActiveFundLink()
  })
  it("Verify Search Fund Functionality on the Fund Page", () => {
    ln5.typeFundName()
    cy.wait(1000)
    ln5.verifySearchResult()
    ln5.typeInvalidFundName()
    ln5.verifySearchInfoText()
    ln5.clearSearchTextboxValue()
    ln5.verifyFundPageListing()
  })
  it("Verify Fund Type Dropdown List Values", () => {
    ln5.selectDropdownValues()
  })
  it("Verify Customise Button Action", () => {
    ln5.clickCustomiseButton()
    ln5.verifyCustomisePageHeading()
    cy.wait(1000)
    ln5.clickCustomiseCloseButton()
  })
  it("Verify Add New Fund Action Button and Page Artifacts On Fund Page", () => {
    ln5.clickAddNewFund()
    ln6 = new AddNewFundPage
    ln6.verifyPageHeadingAndURL()
    ln6.selectDropdownValues()
    ln6.clickSaveFundDetails()
    ln6.verifyValidationsOnNewFundPage()
    ln6.clickReturnToFundList()
    ln5.verifyPageHeadingAndURL()
  })
  it("Verify Charity Fund Details", () => {
    ln5.clickCharityFundViewButton()
    ln7 = new CharityFundPage
    ln7.verifyPageHeadingAndURL()
    ln7.verifySummaryHeading()
    ln7.clickReportsLink()
    ln7.verifyReportsHeading()
    ln7.clickFundManagementLink()
    ln7.verifyFundManagementHeading()
    //ln7.clickPaymentsLink()
    //ln7.verifyPaymentsHeading()
    ln7.clickSummaryLink()
    ln7.verifySummaryHeading()
  })
  it("Verify Edit Charity Fund Details", () => {
    ln7.clickEditDetailsLink()
    ln7.verifyEditPageHeadingAndURL()
    ln7.clickSaveFundButton()
  })
  it("Verify Add Manual Payments Fund Actions and its page artifacts", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectAddManualPayments()
    ln8 = new CharityManualPaymentsPage
    ln8.clickMakePaymentButtons()
    ln8.verifyYearValidation()
    ln8.selectYear()
    ln8.clickMakePaymentButtons()
    ln8.verifyResultAppearing()
    ln8.clickSaveButton()
    //cy.wait(1000)
    ln8.verifyPaymentSuccess()
    ln8.clickReturnToFundButton()
    ln7.verifySummaryHeading()
  })
  it("Verify Archive Fund Action On Charity Fund Details Screen", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectArchiveFund();
    ln7.verifyArchiveFundPopupHeading();
  cy.wait(150)
  ln7.clickCancelArchiveFund();
    cy.wait(150)
    ln7.verifySummaryHeading()
  })
  it("Verify Cancel Fund Action On Charity Fund Details Screen", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectCancelFund();
    ln7.verifyCancelFundPopupHeading();
    cy.wait(150)
    ln7.clickCancelCancellingFund();
    cy.wait(150)
  })
  it("Verify Reports On Charity Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickReportsLink()
    ln7.verifyReportsHeading()
    ln7.clickPaymentReports();
    ln3.verifyCharityReportPageHeadingAndURL();
    ln3.clickRunReport();
    ln3.verifyReportHeadingAndURL();
    cy.go('back')
    //ln3.clickReportBackButton();
    ln3.verifyCharityReportPageHeadingAndURL();
    ln3.clickReturnToReportListBtn();
    ln7.verifyReportsHeading()
  })
  it("Verify Fund Expenditure Reports On Charity Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickFundExpenditureReports();
    ln9 = new FundExpenditureReport
    ln9.verifyReportHeadingAndURL();
    ln9.clickBackButtonOnReport();
    ln7.verifyReportsHeading()
  })
  it("Verify Add New Card Artifacts On Charity Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickFundManagementLink()
    ln7.verifyFundManagementHeading()
    ln10 = new FundManagementPage
    ln10.clickAddNewCard();
    ln11 = new FundAddCardPage
    ln11.verifyPageHeadingAndURL();
    ln11.clickSaveBtn();
    ln11.verifyValidationAppearing();
    ln11.clickCancelBtn();
    ln7.verifyFundManagementHeading()
    ln7.clickFundBreadcrumb()
  })
  it("Verify Milk Fund Details", () => {
    ln5.clickMilkFundViewButton();
    ln12 = new MilkFundPage
    ln12.verifyPageHeadingAndURL();
    ln12.verifySummaryHeading();
    ln12.verifyFundStatusHeading();
  })
  it("Verify Edit Milk Fund Details", () => {
    ln12.clickEditDetailsLink();
    ln12.clickSaveFundButton();
    ln12.verifySuccessToastAppearing();
  })
  it("Verify Add Manual Payments Fund Actions and its page artifacts On Milk Funds", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectAddManualPayments()
    ln8.clickMakePaymentButtons()
    ln8.verifyYearValidation()
    ln8.selectYear()
    ln8.clickMakePaymentButtons()
    ln8.verifyResultAppearing()
    ln8.clickSaveButton()
    ln8.verifyPaymentSuccess()
    ln8.clickReturnToFundButton()
    ln7.verifySummaryHeading()
  })
  it("Verify Archive Fund Action On Milk Fund Details Screen", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectArchiveFund();
    ln7.verifyArchiveFundPopupHeading();
    ln7.clickCancelArchiveFund();
    ln7.verifySummaryHeading()
  })
  it("Verify Cancel Fund Action On Milk Fund Details Screen", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectCancelFund();
    ln7.verifyCancelFundPopupHeading();
    ln7.clickCancelCancellingFund();
  })
  it("Verify Reports On Milk Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln12.clickReportsLink()
    ln12.verifyReportsHeading()
    ln12.clickPaymentReports();
    ln3.verifyMilkReportPageHeadingAndURL();
    ln3.clickRunReport();
    ln3.verifyReportHeadingAndURL();
    cy.go('back')
    //ln3.clickReportBackButton();
    ln3.verifyMilkReportPageHeadingAndURL();
    ln3.clickReturnToReportListBtn();
    ln7.verifyReportsHeading()
  })
  it("Verify Fund Expenditure Reports On Milk Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickFundExpenditureReports();
    ln9.verifyReportHeadingAndURL();
    ln9.clickBackButtonOnReport();
    ln7.verifyReportsHeading()
  })
  it("Verify Balances Reports On Milk Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln13 = new BalancesReport
    ln12.clickBalancesReport();
    ln13.verifyPageHeadingAndURL();
    ln13.clickInactiveAccounts();
    ln13.clickRunReport();
    ln13.verifyReportHeadingAndURL();
    ln13.clickReportBackButton();
    ln12.verifyPageHeadingAndURLOnReturn()
  })
  it("Verify Auto Payments Link and Page Artifacts On Milk Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln14 = new AutoPaymentsPage
    ln14.clickAutoPayments();
    ln14.verifyPageHeadingAndURL();
    ln14.verifyAutoPaymentsHeading();
    ln14.clickBreadCrumb();
    ln5.verifyPageHeadingAndURL()
  })
  it("Verify Trip Fund Details", () => {
    ln5.clickTripSelectedFundViewButton();
    ln15 = new TripFundPage
    ln15.verifyPageHeadingAndURL();
    ln15.verifyFundDetailsHeading()
    ln15.verifyStatusHeading()
    ln15.verifyFundExpenditureHeading()
    ln15.verifyFormsHeading()
    ln15.verifyFormsIcon()
    ln15.verifyFormsChartText()
    ln15.verifyAccountStatusHeading()
    ln15.verifyAccountStatusChart()
    ln15.verifyAccountBalanceHeading()
    ln15.verifyAllocatedPlacesHeading()
    ln15.verifyAllocatedPlacesChart()
  })
  it("Verify Edit Trip Fund Details Page", () => {
    ln15.clickEditDetailsLink()
    ln12.clickSaveFundButton();
    ln12.verifySuccessToastAppearing();
    ln15.verifyPageHeadingAndURLEdit();
  })
  it("Verify Description Action on the Trip Fund", () => {
    ln15.selectDescriptionAction()
    ln16 = new FundDescriptionPage
    ln16.verifyPageHeadingAndURL()
    ln16.clickSaveDescriptionBtn();
    ln15.verifyPageHeadingAndURL();
  })
  it("Verify Add Manual Payments Action on the Trip Fund", () => {
    ln15.selectAddManualPayments()
    ln17 = new ManualPaymentsPage
    ln17.verifyPageHeadingAndURL()
    ln17.selectYear();
    ln17.clickMakePaymentButton();
    ln17.selectPaymentTypeValues();
    ln17.clickSaveButton();
    ln17.verifyAmountValidationsMessage();
    ln17.verifyPayeeValidationsMessage();
    ln17.submitAmountAndPayee();
    ln17.clickSaveButton();
    ln17.verifySucessMessage();
    ln17.clickReturnToFundButton();
    ln15.verifyPageHeadingAndURLOnReturn();
  })
  it("Verify Permission Action on the Trip Fund", () => {
    ln15.selectPermissions()
    ln18 = new PermissionsPage
    ln18.verifyPageHeadingAndURL()
    ln18.selectYear();
    ln18.clickViewPermissionsButton();
    ln18.verifyPermissionListUrl();
    ln18.clickSaveButton();
    ln18.verifyPageHeadingAndURLOnSave();
    ln18.clickReturnToFundButton();
    ln15.verifyPageHeadingAndURLOnReturn();
  })
  it("Verify Notifications Link on the Trip Fund", () => {
    ln15.clickNotificationsLink();
    ln19 = new FundNotificationsPage
    ln19.verifyPageHeadingAndURL()
    ln19.verifyStep1Heading()
    ln19.verifyAccountsInfo();
    ln19.clickSearchAccounts();
    ln19.verifySearchResult();
    ln19.verifyAccountsInfoNotAppearing();
    ln19.clickSentNotificationsLink();
    ln19.verifySentNotificationInfoText();
  })
  it("Verify Accounts Link on the Trip Fund", () => {
    ln15.clickAccountsLink();
    ln20 = new FundAccountsPage
    ln20.verifyPageHeadingAndURL();
    ln20.verifyAccountStatusHeading();
    ln20.verifyAccountBalanceHeading();
    ln20.verifyAllocatedPlacesHeading();
    ln20.verifyChartsAppearing();
    ln20.selectYearValue();
    ln20.clickBultActionButton();
cy.get(500)
    ln20.verifyBulkOptionsAppearing();
    ln20.inputSearchValue();
    ln20.emptySearchMessage();
    ln20.clearSearchBox();
    ln20.SearchResultCount();
    ln20.selectSearchCriteria();
    ln20.verifyAccountsLinkAppearing();
    ln20.clickCustomiseButton();
    cy.wait(300)
    ln20.clickCustomiseCloseButton();
  })
  it("Verify Add Account Button on the Trip Fund Account Page", () => {
    ln20.clickAddAccountButton();
    ln22 = new AddAccountPage
    ln22.verifyPageHeadingAndURL();
    ln22.clickYearTextBox()
    ln22.clickYearValue()
    ln22.clickSearchButton()
    ln22.ValidateRecordAppearing()
    ln22.ValidateSearchWorking()
    ln22.ValidateRecordAppearing()
    ln22.clickPageBreadcrumb()
    ln20.verifyPageURLOnReturn();
  })
  it("Verify Reports Link on the Trip Fund", () => {
    ln15.clickReportsLink();
    ln23 = new TripReportsPage
    ln23.verifyHeadingsAndURL();
  })
  it("Verify Payments Between Dates Report on the Trip Fund", () => {
    ln23.clickPaymentBetweenDatesLink();
    ln3.verifyPageHeadingAndURL1();
    ln3.clickRunReport();
    ln3.verifyTripReportHeadingAndURL();
    ln3.clickReportBackButton();
    ln23.verifyHeadingsAndURL();
  })
  it("Verify Balances & FSM/UFSM Status Report on the Trip Fund", () => {
    ln23.clickBalancesAndFsmStatusLink();
    ln13.verifyTripPageHeadingAndURL();
    ln13.clickInactiveAccounts();
    ln13.clickRunReport();
    ln13.verifyTripReportHeadingAndURL();
    ln13.clickReportBackButton();
    ln23.verifyHeadingsAndURL();
  })
  it("Verify Paid Accounts Report on the Trip Fund", () => {
    ln23.clickPaidAccountsLink();
    ln24 = new PaidAccountsReport
    ln24.verifyReportHeadingAndURL();
    ln24.clickReportBackButton();
    ln23.verifyHeadingsAndURL();
  })
  it("Verify Fund Expenditure Report on the Trip Fund", () => {
    ln23.clickFundExpenditureLink();
    ln9.verifyReportHeadingAndURL();
    ln9.clickBackButtonOnReport();
    ln23.verifyHeadingsAndURL();
  })
  it("Verify Trip Payment Received Report on the Trip Fund", () => {
    ln23.clickTripPaymentReceivedLink();
    ln25 = new TripPaymentReceivedReport
    ln25.verifyPageHeadingAndURL();
    ln25.clickRunReportButton();
    ln25.verifyReportHeadingAndURL();
    ln25.clickReportBackButton();
    ln23.verifyHeadingsAndURL();
  })
  it("Verify Allocations Report on the Trip Fund", () => {
    ln23.clickAllocationsLink();
    ln26 = new AllocationsReport
    ln26.verifyPageHeadingAndURL();
    ln26.clickReportBackButton();
    ln23.verifyHeadingsAndURL();
  })
  it.skip("Verify Parent Permissions Report on the Trip Fund-- This report is Missing", () => {
    ln23.clickParentPermissionsLink();
    ln27 = new ParentPermissionReport
    ln27.verifyPageHeadingAndURL();
    ln27.clickRunReportButton();
    ln27.verifyReportHeadingAndURL();
    ln27.clickReportBackButton();
    ln23.verifyHeadingsAndURL();
  })
  it("Verify Fund Management Link and Page Artifacts On the Trip Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln15.clickFundManagementLink();
    ln10.verifyTripPageHeadingAndURL();
    ln10.clickAddNewCard();
    ln11.verifyTripAddCardPageURL();
    ln11.clickSaveBtn();
    ln11.verifyValidationAppearing();
    ln11.clickCancelBtn();
    ln10.verifyTripPageHeadingAndURL();
  })
  it("Verify Auto Payments Link and Page Artifacts On the Trip Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln15.clickAutoPaymentsLink();
    ln14.verifyTripAutoPaymentsHeading();
    ln14.clickBreadCrumb();
    ln5.verifyPageHeadingAndURL()
  })
  it("Verify LA Fund Details", () => {
    ln5.clickLAFundViewButton();
    ln28 = new LAFundPage
    ln28.verifyPageHeadingAndURL();
    ln28.verifyFundDetailsHeading()
    ln28.verifyStatusHeading()
    ln28.verifyFundExpenditureHeading()
  })
  it("Verify Edit LA Fund Details Page", () => {
    ln28.clickEditDetailsLink()
    ln28.verifyEditPageHeadingAndURL();
    ln12.clickSaveFundButton();
    ln12.verifySuccessToastAppearing();
    ln28.verifyPageHeadingAndURLOnSAve();
  })
  it("Verify LA fund Description Action", () => {
    ln15.selectDescriptionAction()
    ln16.verifyLAPageHeadingAndURL()
    ln16.clickSaveDescriptionBtn();
  })
  it("Verify Add Manual Payments Action on the LA Fund", () => {
    ln15.selectAddManualPayments()
    ln17.verifyLAPageHeadingAndURL()
    ln17.clickBackButton();
    ln28.verifyPageHeadingAndURL();
  })
  it("Verify Archive Fund Action On LA Fund ", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectArchiveFund();
    ln7.verifyArchiveFundPopupHeading();
    //cy.wait(150)
    ln7.clickCancelArchiveFund();
    //cy.wait(150)
    ln7.verifySummaryHeading()
  })
  it("Verify Cancel Fund Action On LA Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln7.selectCancelFund();
    ln7.verifyCancelFundPopupHeading();
    //cy.wait(150)
    ln7.clickCancelCancellingFund();
    //cy.wait(150)
  })
  it("Verify LA Details Dates page on the LA Fund", () => {
    ln28.clickLAScheduleLink();
    ln29 = new LADetailsPage
    ln29.verifyPageHeadingAndURL();
    ln29.clickDatesButton();
    ln30 = new LADatesPage
    ln30.verifyPageHeadingAndURL()
    ln30.verifyTextOnRecordGrid()
    ln30.clickAddRowButton()
    ln30.verifyNoTextOnRecordGrid();
    ln30.clickDeleteButton()
    ln30.clickSaveButton();
    ln29.verifyPageHeadingAndURL();
  })
  it("Verify LA Details Times Page on the LA Fund", () => {
    ln29.clickTimesButton();
    ln31 = new LATimesPage
    ln31.verifyPageHeadingAndURL();
    ln31.clickSaveButton();
    ln29.verifyPageHeadingAndURL();
  })
  it("Verify LA Availability/Prices Page on the LA Fund", () => {
    ln29.clickAvailabilityButton()
    ln32 = new LAAvailabilityPage
    ln32.verifyPageHeadingAndURL()
    ln32.clickAddAvailabilityButton()
    ln32.verifyAddPageHeadingAndURL()
    //ln32.clickSaveButton()
    //ln32.verifyValidationAppearing()
    ln32.clickCancelButton()
    ln32.verifyPageHeadingAndURL();
    ln32.clickDetailsButton()
    ln29.verifyPageHeadingAndURL();
  })
  it("Verify Bulk Editor Modules", () => {
    ln29.clickBulkEditorButton();
    cy.wait(200)
    ln29.clickCreateDatesLink();
    ln33 = new LABulkDatesPage
    ln33.verifyBulkDatesModuleHeading();
    ln33.clickCreateDatesButton();
    ln33.verifyStartDateValidation()
    ln33.clickCancelButton()
    ln29.verifyPageHeadingAndURL();
    ln29.clickBulkEditorButton();
    ln29.clickRemoveDatesLink();
    ln33.verifyRemoveDatesModuleHeading()
    ln33.clickRemoveDatesButton()
    ln33.verifyStartRemoveDateValidation();
    ln33.clickCancelButtonOnRemoveDatesModule();
    ln29.verifyPageHeadingAndURL();
  })
  it.skip("Verify LA Quick Entry Page", () => {
    ln29.clickQuickEntryButton();
    ln34 = new LAQuickEntryPage
    ln34.verifyPageHeadingAndURL();
    ln34.clickSaveButton();
    ln34.verifyCostValidation();
    ln34.clickDetailsButton();
    ln29.verifyPageHeadingAndURL();
  })
  it("Verify Reports Page and balances report on the LA Fund", () => {
    ln28.clickReportsLink();
    ln35 = new LAReportsPage
    ln35.verifyPageHeadingAndURL();
    ln35.clickBalancesLink();
    ln13.verifyLAPageHeadingAndURL();
    ln13.clickInactiveAccounts();
    ln13.clickRunReport();
    ln13.verifyReportHeadingAndURL();
    ln13.clickReportBackButton();
    ln35.verifyPageHeadingAndURL();
  })
  it("Verify Bookings report on the LA Fund", () => {
    ln35.clickBookingsLink();
    ln36 = new BookingsReportPage
    ln36.verifyReportHeadingAndURL();
    ln36.clickBackButton();
    ln35.verifyPageHeadingAndURL();
  })
  it("Verify Bookings Details report on the LA Fund", () => {
    ln35.clickBookingsDetailsLink();
    ln37 = new BookingsDetailPage
    ln37.verifyPageHeadingAndURL();
    ln37.clickRunReportButton();
    ln37.verifyDateValidationMessage();
    ln37.clickReturnToReportButton();
    ln35.verifyPageHeadingAndURL();
  })
  it("Verify Fund Expenditure report on the LA Fund", () => {
    ln35.clickFundExpenditureLink();
    ln9.verifyReportHeadingAndURL();
    ln9.clickBackButtonOnReport();
    ln35.verifyPageHeadingAndURL();
  })
  it("Verify Payment Between Dates report on the LA Fund", () => {
    ln35.clickPaymentBetweenDatesLink();
    ln3.verifyLAPageHeadingAndURL();
    ln3.clickRunReport();
    ln3.verifyTripReportHeadingAndURL();
    ln3.clickReportBackButton();
    ln35.verifyPageHeadingAndURL();
  })
  it("Verify Fund Management Link and Page Artifacts On the LA Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln28.clickFundManagementLink();
    ln10.verifyLAPageHeadingAndURL();
    ln10.clickAddNewCard();
    ln11.verifyLAPageHeadingAndURL();
    ln11.clickSaveBtn();
    ln11.verifyValidationAppearing();
    ln11.clickCancelBtn();
    ln10.verifyLAPageHeadingAndURL();
    ln28.clickFundBreadCrumb();
    ln5.verifyPageHeadingAndURL()
  })
  it("Verify Shop Fund Details", () => {
    ln5.clickShopFundViewButton()
    ln38 = new ShopFundPage
    ln38.verifyPageHeadingAndURL();
    ln38.verifyFundDetailsHeading()
    ln38.verifyStatusHeading()
  })
  it("Verify Edit Shop Fund Details Page", () => {
    ln38.clickEditDetailsLink()
    ln38.verifyEditPageHeadingAndURL();
    ln12.clickSaveFundButton();
    ln12.verifySuccessToastAppearing();
    ln38.verifyPageHeadingAndURLOnSAve();
  })
  it("Verify Notifications Link on the Shop Fund", () => {
    ln38.clickNotificationsLink();
    ln19.verifyPageHeadingAndURL()
    ln19.verifyStep1Heading()
    ln19.verifyAccountsInfo();
    ln19.clickSearchAccounts();
    ln19.verifySearchResult();
    ln19.verifyAccountsInfoNotAppearing();
    ln19.clickSentNotificationsLink();
    ln19.verifySentNotificationInfoText();
  })
  it("Verify Reports Page & PaymentBetweenDatesLink Report On the Shop Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln38.clickReportsLink()
    ln39 = new ShopReportsPage
    ln39.verifyPageHeadingAndURL();
    ln39.clickPaymentBetweenDatesLink()
    ln3.verifyShopPageHeadingAndURL();
    ln3.clickRunReport();
    ln3.verifyTripReportHeadingAndURL();
    ln3.clickReportBackButton();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify Fund Expenditure Report On the Shop Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln39.clickFundExpenditureLink();
    ln9.verifyReportHeadingAndURL();
    ln9.clickBackButtonOnReport();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify Account Purchases Report On the Shop Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln39.clickAccountPurchasesLink();
    ln40 = new AccountPurchasesReport
    ln40.verifyPageHeadingAndURL();
    ln40.clickSetYearButton();
    ln40.ValidateYearValidation();
    ln40.selectYearDropdown()
    ln40.clickSetYearButton();
    ln40.clickRunReport();
    ln40.verifyReportHeadingAndURL();
    ln40.clickBackButtonOnReport();
    ln40.clickReturnReportButton();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify balances Report on the Shop Fund", () => {
    ln39.clickBalancesLink();
    ln13.verifyShopPageHeadingAndURL();
    ln13.clickRunReport();
    ln13.verifyShopReportHeadingAndURL();
    ln13.clickReportBackButton();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify Stock Summary Report on the Shop Fund", () => {
    ln39.clickStockSummaryLink();
    ln41 = new StockSummaryPage
    ln41.verifyReportHeadingAndURL();
    ln41.clickBackButton();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify Stock Purchases Report on the Shop Fund", () => {
    ln39.clickStockPurchasesLink();
    ln42 = new StockPurchasesPage
    ln42.verifyPageHeadingAndURL();
    ln42.clickRunReportButton();
    ln42.verifyReportHeadingAndURL()
    ln41.clickBackButton();
    ln39.verifyPageHeadingAndURL();
    ln28.clickFundBreadCrumb();
    ln5.verifyPageHeadingAndURL()
  })
  it("Verify Pre-Order School Meals Fund Details", () => {
    ln5.clickPreOrderFundViewButton()
    ln43 = new PreOrderMealPage
    ln43.verifyPageHeadingAndURL();
    ln43.verifyFundDetailsHeading()
    ln43.verifyStatusHeading()
  })
  it("Verify Edit Shop Fund Details Page", () => {
    ln43.clickEditDetailsLink()
    ln43.verifyEditPageHeadingAndURL();
    ln12.clickSaveFundButton();
    ln12.verifySuccessToastAppearing();
    ln43.verifyPageHeadingAndURL();
  })
  it("Verify Add Manual Payment action and its artifacts on Pre-Order School Meal Fund Page", () => {
    cy.once('uncaught:exception', () => false);
    ln43.selectAddManualPayments()
    ln8.verifyPreOrderSchoolMealPageHeadingAndURL()
    ln8.clickMakePaymentButtons()
    ln8.verifyYearValidation()
    ln8.selectYear()
    ln8.clickMakePaymentButtons()
    ln8.verifyResultAppearing()
    ln8.clickSaveButton()
    ln8.verifyPaymentSuccess()
    ln8.clickReturnToFundButton()
    ln43.verifyPageHeadingAndURL();
  })
  it("Verify Group Refund Action and its page artifacts on Pre-Order School Meal Fund Page", () => {
    cy.once('uncaught:exception', () => false);
    ln43.selectGroupRefund();
    ln44 = new PreOrderRefundPage
    ln44.verifyPageHeadingAndURL();
    ln44.clickRefundButton();
    ln44.verifyReasonValidation();
    ln44.clickCancelButton();
    ln43.verifyPageHeadingAndURL();
  }
  )
  it("Verify Supervisor Action and its page artifacts on Pre-Order School Meal Fund Page", () => {
    cy.once('uncaught:exception', () => false);
    ln43.selectSupervisor();
    ln45 = new SupervisorPage
    ln45.verifyPageHeadingAndURL();
    ln45.clickSelectButton();
    ln45.verifyPageValidation();
    ln45.clickCancelButton();
    ln43.verifyPageHeadingAndURL();
  }
  )
  it("Verify Notifications Link on the Pre Order School Meal Fund", () => {
    ln43.clickNotificationsLink();
    ln19.verifyPageHeadingAndURL()
    ln19.verifyStep1Heading()
    ln19.verifyAccountsInfo();
    ln19.clickSentNotificationsLink();
    ln19.verifySentNotificationInfoText();
    ln19.clickAutoNotificationsLink()
    ln19.verifyBalanceAlertText()
    ln19.clickReturnToFundButton();
    ln43.verifyPageHeadingAndURL();
  })
  it("Verify Reports Page & Payment Between Dates Report On the PreOrder Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln43.clickReportsLink()
    ln39.verifyPageHeadingAndURL();
    ln39.clickPaymentBetweenDatesLink()
    ln3.verifyPreOrderPageHeadingAndURL();
    ln3.clickRunReport();
    ln3.verifyTripReportHeadingAndURL();
    ln3.clickReportBackButton();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify Balances Report on the PreOrder Meal Fund", () => {
    ln39.clickBalancesLink();
    ln13.verifyPreOrderMealHeadingAndURL();
    ln13.clickRunReport();
    ln13.verifyPreOrderReportHeadingAndURL();
    ln13.clickReportBackButton();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify Fund Expenditure Report On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln39.clickFundExpenditureLink();
    ln9.verifyReportHeadingAndURL();
    ln9.clickBackButtonOnReport();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify Fund Arrears Report On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln43.clickFundArrearsLink();
    ln46 = new FundArrearsReport
    ln46.verifyPageHeadingAndURL();
    ln46.clickRunReportButton();
    ln46.verifyReportHeadingAndURL();
    ln46.clickBackReportButton();
    ln39.verifyPageHeadingAndURL();
  })
  it("Verify UFSM Eligibility page and its artifacts On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln43.clickUFSMEligibilityLink();
    ln47 = new UFSMEligibilityPage
    ln47.verifyPageHeadingAndURL();
    ln47.clickAddButton();
    ln47.verifyAddUFSMPageHeadingAndURL();
    ln47.clickSaveButton();
    ln47.verifyYearValidation();
    ln47.clickUFSMListButton();
    ln47.verifyPageHeadingAndURLOnReturn();
  })
  it("Verify Auto Payments Link and Page Artifacts On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln43.clickAutoPaymentsLink()
    ln14.verifyTripAutoPaymentsHeading();
    ln14.clickBreadCrumb();
    ln5.verifyPageHeadingAndURL()
  })
  it("Verify Accounts Page from the Navigation Menu", () => {
    ln2.clickAccountsLink()
    ln48 = new AccountsPage
    ln48.verifyPageHeadingAndURL();
    ln5.clickInactiveLink()
    ln5.verifyInactiveListInfo()
    ln5.clickAllLink()
  })
  it("Verify Search Accounts Functionality on the Accounts Page", () => {
    ln48.ValidateSearchWorking();
  })
  it("Verify Year Dropdown List Values On Accounts Page", () => {
    ln48.selectYearDropdownValues()
  })
  it("Verify Customise Button Action On Accounts Page", () => {
    ln5.clickCustomiseButton()
    ln5.verifyCustomisePageHeading()
    cy.wait(1000)
    ln5.clickCustomiseCloseButton()
  })
  it("Verify Provisioning Link Functionality and its page artifacts", () => {
    ln2.clickProvisioningLink()
    ln49 = new ProvisioningPage
    ln49.verifyHeadingandURL();
  })
  it("Verify Reports Link Functionality and its page artifacts", () => {
    ln2.clickReports()
    ln50 = new ReportsPage
    ln50.verifyHeadingsAndURL();
  })
  it("Verify Login Activity Report", () => {
    ln50.clickLoginActivityLink();
    ln51 = new AccountsReportPage
    ln51.verifyHeadingAndURL();
    ln51.clickReportReturnButton();
    ln50.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Unused Logins Report", () => {
    ln50.clickUnusedLoginsLink();
    ln51.verifyHeadersOnUnusedLoginPage();
    ln51.clickRunReportButton();
    ln51.verifyHeadersOnUnusedLoginReport();
    ln51.clickReportReturnButton();
    ln50.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts With Registered Parents Report", () => {
    ln50.clickAccountsWithRegisteredParentLink();
    ln51.verifyHeadersOnAccountRegisteredLoginsPage();
    ln51.SelectYear();
    ln51.verifyHeadersOnAccountDetailsReport();
    ln51.clickReportReturnButton();
    ln50.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Accounts History Report", () => {
    ln50.clickAccountHistoryLink();
    ln51.verifyAccountHistoryHeadingAndURL();
    ln51.SelectYearOnAccountListing();
    ln51.clickSetYearButton();
    cy.wait(150)
    ln51.SelectAccount();
    ln51.clickRunReportOnAccountRegisterButton()
    ln51.verifyHeadersOnAccountHistoryReport();
    ln51.clickReportBackButton();
    ln50.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Fund Arrears Report", () => {
    ln50.clickFundArrearsReportLink();
    ln46.verifySchoolPageHeadingAndURL();
    ln46.clickRunReportButton();
    ln46.verifySchoolReportHeadingAndURL();
    ln46.clickBackReportButton();
    ln50.verifyHeadingsAndURLOnReturn();
  });
  it("Verify School Funds Expenditure Report", () => {
    ln50.clickFundExpenditureLink();
    ln9.verifySchoolPageHeadingAndURL();
    ln9.clickRunReportButton();
    ln9.clickBackButtonOnReport();
    ln50.verifyHeadingsAndURLOnReturn();
  });
  it("Verify School Fund Account Reconciliation Report", () => {
    ln50.clickAccountReconciliationLink();
    ln52 = new FundReconciliationReport
    ln52.verifySchoolPageHeadingAndURL();
    ln52.SelectBankAccount();
    ln52.clickRunReportButton();
    ln52.verifySchoolReportHeadingAndURL();
    ln52.clickBackReportButton();
    ln50.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Internet Payments By Bank Account Report", () => {
    ln50.clickInternetPaymentByBankAccountLink();
    ln53 = new InternetPaymentByBankReport
    ln53.verifyPageHeadingAndURL();
    ln53.clickRunReport();
    ln53.verifyReportHeadingAndURL();
    ln53.clickReportBackButton();
    ln50.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify School Payment Between Dates Report", () => {
    ln50.clickPaymentBetweenDatesLink()
    ln3.verifySchoolPageHeadingAndURL();
    ln3.clickAllCheckbox()
    ln3.clickRunReport();
    ln3.verifySchoolReportHeadingAndURL();
    ln3.clickReportBackButton();
    ln50.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify School Payments By Ledger Report", () => {
    ln50.clickPaymentByLedgerLink();
    ln54 = new PaymentByLedgerReport;
    ln54.verifyPageHeadingAndURL();
    ln54.clickRunReport();
    ln54.verifyReportHeadingAndURL();
    ln54.clickReportBackButton();
    ln50.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify Banking Page and its content ", () => {
    ln2.clickBanking();
    ln55 = new BankingPage();
    ln55.verifyHeadingandURL();
    ln55.clickApplyFilterButton();
    ln55.verifyFilterURL();
    ln55.clickManageLedgerCodesButton();
    ln56 = new LedgerCodesPage();
    ln56.verifyHeadingandURL();
  });
  it("Verify Ledger Codes Page and its content", () => {
    ln56.VerifyPageWebElements();
    ln56.clickAddLedgerCode();
    ln57 = new AddLedgerCodePage();
    ln57.verifyHeadingandURL();
    ln57.clickSaveLedgerCode();
    ln57.VerifyValidationMessageAppearing();
    ln57.clickCancelButton();
    ln56.verifyHeadingandURLCallBack();
    ln56.clickBackButton();
    ln55.verifyHeadingandURL();
  });
  it("Verify FAQs Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    ln58 = new FAQsPage
    ln58.verifyHeadingAndURL();
    ln58.clickSearchButton();
    ln58.verifyValidation();
    ln58.typeSearchContent();
    ln58.clickSearchButton();
    ln58.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln59 = new WhatsNewPage();
    ln59.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickHelpLink();
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln60 = new ProfilePage
    ln60.verifyHeadingAndURL();
    ln60.clickSaveMyProfileButton();
    ln60.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln60.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    ln60.clickChangeEmailButton();
    ln61 = new ChangeEmailAddressPage();
    ln61.verifyHeadingAndURL();
    ln61.clickChangeEmailAddressButton();
    ln61.verifyValidationsAppearing();
    ln61.clickBackToMyProfieButton();
    ln60.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln60.clickChangeIpayPasswordButton();
    ln62 = new ChangePasswordPage();
    ln62.verifyHeadingAndURL();
    ln62.clickChangePasswordButton();
    ln62.verifyValidationsAppearing();
    ln62.clickBackToMyProfieButton();
    ln60.verifyHeadingAndURL();
    ln60.clickCancelButton();
    ln1.verifySFHeadingAndURL();
  });
  it("Verify Footer Links", () => {
    ln63 = new FooterPage
    ln63.clickAccessibilityLink();
    ln63.verifyAccessibilityPageHeadingAndURL();
    ln63.clickCookiesLink();
    ln63.verifyCookiesPageHeadingAndURL();
    ln63.clickPrivacyStatementLink();
    ln63.verifyPrivacyStatementPageHeadingAndURL();
    ln63.clickSiteMapLink();
    ln63.verifySiteMapPageHeadingAndURL();
    ln63.clickPCIComplianceLink();
    ln63.verifyPCICompliancePageHeadingAndURL();
    ln63.clickAllergyAdviceLink();
    ln63.verifyAllergyAdvicePageHeadingAndURL();
    ln63.clickWhatsNewLink();
    ln63.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
}
)