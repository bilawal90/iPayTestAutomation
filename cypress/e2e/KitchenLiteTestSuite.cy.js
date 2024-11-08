import FundsPage from "../PageObjects/KitchenObjects/FundsPage.js"
import Login from "../PageObjects/KitchenObjects/LoginPage.js"
import KitchenHomePage from "../PageObjects/KitchenObjects/KitchenHomePage.js"
import KitchenLinksMenu from "../PageObjects/KitchenObjects/KitchenLinksMenu.js"
import KitchenPreOrderPage from "../PageObjects/KitchenObjects/KitchenPreOrderPage.js"
import KitchenPreOrderReportingPage from "../PageObjects/KitchenObjects/KitchenPreOrderReportingPage.js"
import PreOrderMealPage from "../PageObjects/KitchenObjects/PreOrderMealPage.js"
import CharityManualPaymentsPage from "../PageObjects/KitchenObjects/CharityManualPaymentsPage.js"
import PreOrderRefundPage from "../PageObjects/KitchenObjects/PreOrderRefundPage.js"
import MenuSubstitutionsPage from "../PageObjects/KitchenObjects/MenuSubstitutionsPage.js"
import SupervisorPage from "../PageObjects/KitchenObjects/SupervisorPage.js"
import ShopReportsPage from "../PageObjects/KitchenObjects/ShopReportsPage.js"
import PaymentBetweenDatesReport from "../PageObjects/KitchenObjects/PaymentBetweenDatesReport.js"
import BalancesReport from "../PageObjects/KitchenObjects/BalancesReport.js"
import FundExpenditureReport from "../PageObjects/KitchenObjects/FundExpenditureReport.js"
import FundArrearsReport from "../PageObjects/KitchenObjects/FundArrearsReport.js"
import UFSMEligibilityPage from "../PageObjects/KitchenObjects/UFSMEligibilityPage.js"
import AutoPaymentsPage from "../PageObjects/KitchenObjects/AutoPaymentsPage.js"
import AccountsPage from "../PageObjects/KitchenObjects/AccountsPage.js"
import ReportsPage from "../PageObjects/KitchenObjects/ReportsPage.js"
import MealNumbersReport from "../PageObjects/KitchenObjects/MealNumbersReport.js"
import MealNumbersYearsReport from "../PageObjects/KitchenObjects/MealNumbersYearsReport.js"
import PreOrderClassWeekly from "../PageObjects/KitchenObjects/PreOrderClassWeekly.js"
import PreOrderClassDaily from "../PageObjects/KitchenObjects/PreOrderClassDaily.js"
import DailyPreOrderSummary from "../PageObjects/KitchenObjects/DailyPreOrderSummary.js"
import FSMListPage from "../PageObjects/KitchenObjects/FSMListPage.js"
import POMealReconciliationReport from "../PageObjects/KitchenObjects/POMealReconciliationReport.js"
import BankingPage from "../PageObjects/KitchenObjects/BankingPage.js"
import LedgerCodesPage from "../PageObjects/KitchenObjects/LedgerCodesPage.js"
import AddLedgerCodePage from "../PageObjects/KitchenObjects/AddLedgerCodePage.js"
import FAQsPage from "../PageObjects/KitchenObjects/FAQsPage.js"
import WhatsNewPage from "../PageObjects/KitchenObjects/WhatsNewPage.js"
import ProfilePage from "../PageObjects/KitchenObjects/ProfilePage.js"
import ChangeEmailAddressPage from "../PageObjects/KitchenObjects/ChangeEmailAddressPage.js"
import ChangePasswordPage from "../PageObjects/KitchenObjects/ChangePasswordPage.js"
import FooterPage from "../PageObjects/KitchenObjects/FooterPage.js"
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
describe("KitchenLiteTestSuite", () => {
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
      ln.setUserName(data.KitchenLiteUsername)
      ln.setPassword(data.KitchenLitePassword)
      ln.clickLogon()
      ln1 = new KitchenHomePage
      ln1.verifyKitchenHeadingAndURL()
    })
  })
  it("Verify Menu Logo", () => {
    ln1.verifyLogoMenu()
  })
  it("Verify Menu Links", () => {
    ln1.VerifyLinksMenuKitchen()
  })
  it("Verify Home Navigation Link Functionality", () => {
    ln2 = new KitchenLinksMenu
    ln2.clickLinkHome()
    ln1.verifyKitchenHeadingAndURL()
  })
  it("Verify School Pre-Order Page from the Menu Links ", () => {
    ln2.clickLinkPreOrders();
    ln3 = new KitchenPreOrderPage
    ln3.verifyPageHeadingAndURL()
    ln3.clickPreOrderButton()
    ln3.verifyWeekValidationAppearing()
    ln3.selectWeek();
    ln3.selectYear();
    ln3.clickPreOrderButton()
    ln3.verifyClassPreOrderPageHeadingAndURL();
    ln3.verifyNoMenuText();
    ln3.clickBackButton();
  })
  it("Verify Pre-Order Reporting Page from the Menu Links", () => {
    ln2.clickLinkReporting()
    ln5 = new KitchenPreOrderReportingPage
    ln5.verifyPageHeadingAndURL()
    ln5.clickNonMealNumbersSection()
    ln5.clickTotalsSection()
    ln5.clickYearMealChoiceSection()
    ln5.clickMealChoiceLink();
    ln5.clickCustomiseButton();
    ln5.verifyCustomiseHeading();
    ln5.clickCustomiseCloseButton()
  })
  it("Verify Meal Fund Page from Side Menu List", () => {
    ln2.clickMealFundLink()
    ln6 = new PreOrderMealPage
    ln6.verifyPageHeadingAndURL();
    ln6.verifyFundDetailsHeading()
    ln6.verifyStatusHeading()
  });
  it("Verify Add Manual Payment action and its page artifacts on Pre-Order School Meals Fund Page", () => {
    cy.once('uncaught:exception', () => false);
    ln6.selectAddManualPayments()
    ln7 = new CharityManualPaymentsPage
    ln7.verifyPreOrderSchoolMealPageHeadingAndURL()
    ln7.clickMakePaymentButtons()
    ln7.verifyYearValidation()
    ln7.selectYear()
    ln7.clickMakePaymentButtons()
    ln7.verifyResultAppearing()
    ln7.clickSaveButton()
    ln7.verifyPaymentSuccess()
    ln7.clickReturnToFundButton()
    ln6.verifyPageHeadingAndURL();
  })
  it("Verify Group Refund Action and its page artifacts on Pre-Order School Meal Fund Page", () => {
    cy.once('uncaught:exception', () => false);
    ln6.selectGroupRefund();
    ln8 = new PreOrderRefundPage
    ln8.verifyPageHeadingAndURL();
    ln8.clickRefundButton();
    ln8.verifyReasonValidation();
    ln8.clickCancelButton();
    ln6.verifyPageHeadingAndURL();
  }
  )
  it("Verify Menu Substitutions Action and its page artifacts on Pre-Order School Meal Fund Page", () => {
    cy.once('uncaught:exception', () => false);
    ln6.selectMenuSubstitutions();
    ln9 = new MenuSubstitutionsPage
    ln9.verifyPageHeadingAndURL();
    ln9.clickSelectButton();
    ln9.verifyPageValidation();
    ln9.clickCancelButton();
    ln6.verifyPageHeadingAndURL();
  }
  )
  it("Verify Supervisor Action and its page artifacts on Pre-Order School Meal Fund Page", () => {
    cy.once('uncaught:exception', () => false);
    ln6.selectSupervisor();
    ln10 = new SupervisorPage
    ln10.verifyPageHeadingAndURL();
    ln10.clickSelectButton();
    ln10.verifyPageValidation();
    ln10.clickCancelButton();
    ln6.verifyPageHeadingAndURL();
  }
  )
  it("Verify Reports Page & Payment Between Dates Report On the PreOrder Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln6.clickReportsLink()
    ln12 = new ShopReportsPage
    ln12.verifyPageHeadingAndURL();
    ln12.clickPaymentBetweenDatesLink()
    ln13 = new PaymentBetweenDatesReport
    ln13.verifyPreOrderPageHeadingAndURL();
    ln13.clickRunReport();
    ln13.verifyTripReportHeadingAndURL();
    ln13.clickReportBackButton();
    ln12.verifyPageHeadingAndURL();
  })
  it("Verify Balances Report on the PreOrder Meal Fund", () => {
    ln12.clickBalancesLink();
    ln14 = new BalancesReport
    ln14.verifyPreOrderMealHeadingAndURL();
    ln14.clickRunReport();
    ln14.verifyPreOrderReportHeadingAndURL();
    ln14.clickReportBackButton();
    ln12.verifyPageHeadingAndURL();
  })
  it("Verify Fund Expenditure Report On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln15 = new FundExpenditureReport
    ln12.clickFundExpenditureLink();
    ln15.verifyReportHeadingAndURL();
    ln15.clickBackButtonOnReport();
    ln12.verifyPageHeadingAndURL();
  })
  it("Verify Fund Arrears Report On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln6.clickFundArrearsLink();
    ln16 = new FundArrearsReport
    ln16.verifyPageHeadingAndURL();
    ln16.clickRunReportButton();
    ln16.verifyReportHeadingAndURL();
    ln16.clickBackReportButton();
    ln12.verifyPageHeadingAndURL();
  })
  it("Verify UFSM Eligibility page and its artifacts On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln6.clickUFSMEligibilityLink();
    ln17 = new UFSMEligibilityPage
    ln17.verifyPageHeadingAndURL();
    ln17.clickAddButton();
    ln17.verifyAddUFSMPageHeadingAndURL();
    ln17.clickSaveButton();
    ln17.verifyYearValidation();
    ln17.clickUFSMListButton();
    ln17.verifyPageHeadingAndURLOnReturn();
  })
  it("Verify Auto Payments Link and Page Artifacts On the Pre-Order Meal Fund", () => {
    cy.once('uncaught:exception', () => false);
    ln6.clickAutoPaymentsLink()
    ln18 = new AutoPaymentsPage
    ln18.verifyTripAutoPaymentsHeading();
    ln18.clickBreadCrumb();
    ln6.verifyPageHeadingAndURL();
  })
  it("Verify Accounts Page from the Navigation Menu", () => {
    ln2.clickAccountsLink()
    ln19 = new AccountsPage
    ln19.verifyPageHeadingAndURL();
    ln20 = new FundsPage
    ln20.clickInactiveLink()
    ln20.verifyInactiveListInfo()
    ln20.clickAllLink()
  })
  it("Verify Search Accounts Functionality on the Accounts Page", () => {
    ln19.ValidateSearchWorking();
  })
  it("Verify Year Dropdown List Values On Accounts Page", () => {
    ln19.selectYearDropdownValues()
  })
  it("Verify Customise Button Action On Accounts Page", () => {
    ln20.clickCustomiseButton()
    ln20.verifyCustomisePageHeading()
    cy.wait(1000)
    ln20.clickCustomiseCloseButton()
  })
  it("Verify Reports Link Functionality and its page artifacts", () => {
    ln2.clickReports()
    ln21 = new ReportsPage
    ln21.verifyHeadingsAndURL();
  })
  it("Verify School Pre-Order Meal Numbers Report", () => {
    ln21.clickMealNumbersLink();
    ln23 = new MealNumbersReport;
    ln23.verifyPageHeadingAndURL();
    ln23.clickPreOrderDashboardLink()
    ln5.verifyPageHeadingAndURL()
    cy.go('back')
    ln23.verifyPageHeadingAndURL();
    ln23.clickRunReport();
    ln23.verifyReportHeadingAndURL();
    ln23.clickReportBackButton();
    ln21.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify School Pre-Order Meal Numbers Selected Years Report", () => {
    ln21.clickMealNumbersYearsLink();
    ln24 = new MealNumbersYearsReport;
    ln24.verifyPageHeadingAndURL();
    ln23.clickPreOrderDashboardLink()
    ln5.verifyPageHeadingAndURL()
    cy.go('back')
    ln24.verifyPageHeadingAndURL();
    ln24.clickYearsCheckbox()
    ln24.clickRunReport();
    ln24.verifyReportHeadingAndURL();
    ln24.clickReportBackButton();
    ln21.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify Pre-Order Class Listing Weekly Report", () => {
    ln21.clickPreOrderClassWeeklyLink();
    ln25 = new PreOrderClassWeekly;
    ln25.verifyPageHeadingAndURL();
    ln23.clickPreOrderDashboardLink()
    ln5.verifyPageHeadingAndURL()
    cy.go('back')
    ln25.verifyPageHeadingAndURL();
    ln25.selectYear();
    ln25.clickRunReport();
    ln25.verifyReportHeadingAndURL();
    ln25.clickReportBackButton();
    ln21.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify Pre-Order Class Listing Daily Report", () => {
    ln21.clickPreOrderClassDailyLink();
    ln26 = new PreOrderClassDaily;
    ln26.verifyPageHeadingAndURL();
    ln23.clickPreOrderDashboardLink()
    ln5.verifyPageHeadingAndURL()
    cy.go('back')
    ln26.verifyPageHeadingAndURL();
    ln26.selectYear();
    ln26.clickRunReport();
    ln26.verifyReportHeadingAndURL();
    ln26.clickReportBackButton();
    ln21.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify Daily PreOrder Summary Report", () => {
    ln21.clickDailyPreOrderSummaryLink();
    ln27 = new DailyPreOrderSummary;
    ln27.verifyPageHeadingAndURL();
    ln23.clickPreOrderDashboardLink()
    ln5.verifyPageHeadingAndURL()
    cy.go('back')
    ln27.verifyPageHeadingAndURL();
    ln27.selectYear();
    ln27.clickRunReport();
    ln27.verifyReportHeadingAndURL();
    ln27.clickReportBackButton();
    ln21.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify FSM list Report", () => {
    ln21.clickFSMListLink();
    ln28 = new FSMListPage;
    ln28.verifyPageHeadingAndURL();
    ln28.clickRunReport();
    ln28.verifyReportHeadingAndURL();
    ln28.clickReportBackButton();
    ln21.verifyHeadingsAndURLOnReturn();
  }
  );
  it("Verify Pre-Order Meal Reconciliation Report", () => {
    ln21.clickPOMealReconciliationLink();
    ln29 = new POMealReconciliationReport();
    ln29.verifyPageHeadingAndURL();
    ln29.clickRunReport();
    ln29.verifyReportHeadingAndURL();
    ln29.clickReportBackButton();
    ln21.verifyHeadingsAndURLOnReturn();
  });
  it("Verify Banking Page and its content ", () => {
    ln2.clickBanking();
    ln32 = new BankingPage
    ln32.verifyHeadingandURL();
    ln32.clickApplyFilterButton();
    ln32.verifyFilterURL();
  });
  it.skip("Scenario Failing Now - Verify Ledger Codes Page and its content", () => {
    ln32.clickManageLedgerCodesButton();
    ln33 = new LedgerCodesPage;
    ln33.verifyHeadingandURL();
    ln33.VerifyPageWebElements();
    ln33.clickAddLedgerCode();
    ln34 = new AddLedgerCodePage
    ln34.verifyHeadingandURL();
    ln34.clickSaveLedgerCode();
    ln34.VerifyValidationMessageAppearing();
    ln34.clickCancelButton();
    ln33.verifyHeadingandURLCallBack();
    ln33.clickBackButton();
    ln32.verifyHeadingandURL();
  });
  it("Verify FAQs Page Content from the Side Menu", () => {
    ln2.clickHelpLink();
    ln2.clickFAQLink();
    ln35 = new FAQsPage
    ln35.verifyHeadingAndURL();
    ln35.clickSearchButton();
    ln35.verifyValidation();
    ln35.typeSearchContent();
    ln35.clickSearchButton();
    ln35.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content from the Side Menu", () => {
    ln2.clickHelpLink();
    ln2.clickWhatsNewLink();
    ln36 = new WhatsNewPage
    ln36.verifyHeadingAndURL();
  });
  it("Verify My Profile Page Content", () => {
    ln2.clickNameLogo();
    ln2.clickMyProfilelink();
    ln37 = new ProfilePage
    ln37.verifyHeadingAndURL();
    ln37.clickSaveMyProfileButton();
    ln37.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln37.verifyHeadingAndURL();
  });
  it("Verify Change Email Address Page Content", () => {
    ln37.clickChangeEmailButton();
    ln38 = new ChangeEmailAddressPage
    ln38.verifyHeadingAndURL();
    ln38.clickChangeEmailAddressButton();
    ln38.verifyValidationsAppearing();
    ln38.clickBackToMyProfieButton();
    ln37.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln37.clickChangeIpayPasswordButton();
    ln39 = new ChangePasswordPage
    ln39.verifyHeadingAndURL();
    ln39.clickChangePasswordButton();
    ln39.verifyValidationsAppearing();
    ln39.clickBackToMyProfieButton();
    ln37.verifyHeadingAndURL();
    ln37.clickCancelButton();
    ln1.verifyKitchenHeadingAndURL()
  });
  it("Verify Footer Links", () => {
    ln40 = new FooterPage
    ln40.clickAccessibilityLink();
    ln40.verifyAccessibilityPageHeadingAndURL();
    ln40.clickCookiesLink();
    ln40.verifyCookiesPageHeadingAndURL();
    ln40.clickPrivacyStatementLink();
    ln40.verifyPrivacyStatementPageHeadingAndURL();
    ln40.clickSiteMapLink();
    ln40.verifySiteMapPageHeadingAndURL();
    ln40.clickPCIComplianceLink();
    ln40.verifyPCICompliancePageHeadingAndURL();
    ln40.clickAllergyAdviceLink();
    ln40.verifyAllergyAdvicePageHeadingAndURL();
    ln40.clickWhatsNewLink();
    ln40.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln2.clickNameLogo();
    ln2.clickLogOutLink();
    ln.verifyPageHeadingAndURL();
  });
}
)