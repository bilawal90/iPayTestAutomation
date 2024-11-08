import Login from "../PageObjects/SchoolObjects/LoginPage.js"
import ParentHomePage from "../PageObjects/ParentObjects/ParentHomePage.js"
import LinkAccountPage from "../PageObjects/ParentObjects/LinkAccountPage.js"
import PreOrderMealPage from "../PageObjects/ParentObjects/PreOrderMealPage.js"
import AccountsPage from "../PageObjects/ParentObjects/AccountsPage.js"
import BasketPage from "../PageObjects/ParentObjects/BasketPage.js"
import AmendPage from "../PageObjects/ParentObjects/AmendPage.js"
import FundListPage from "../PageObjects/ParentObjects/FundListPage.js"
import PaymentPage from "../PageObjects/ParentObjects/PaymentPage.js"
import AutopayPage from "../PageObjects/ParentObjects/AutopayPage.js"
import AccountHistoryPage from "../PageObjects/ParentObjects/AccountHistoryPage.js"
import AddItemPage from "../PageObjects/ParentObjects/AddItemPage.js"
import TripDetailsPage from "../PageObjects/ParentObjects/TripDetailsPage.js"
import LABookPage from "../PageObjects/ParentObjects/LABookPage.js"
import ShopPage from "../PageObjects/ParentObjects/ShopPage.js"
import TransactionHistoryPage from "../PageObjects/ParentObjects/TransactionHistoryPage.js"
import PaymentDetailsPage from "../PageObjects/ParentObjects/PaymentDetailsPage.js"
import NotificationPage from "../PageObjects/ParentObjects/NotificationPage.js"
import NotificationDetailPage from "../PageObjects/ParentObjects/NotificationDetailPage.js"
import MessagesPage from "../PageObjects/ParentObjects/MessagesPage.js"
import ProfilePage from "../PageObjects/ParentObjects/ProfilePage.js"
import ChangeEmailAddressPage from "../PageObjects/ParentObjects/ChangeEmailAddressPage.js"
import ChangePasswordPage from "../PageObjects/ParentObjects/ChangePasswordPage.js"
import FAQsPage from "../PageObjects/ParentObjects/FAQsPage.js"
import WhatsNewPage from "../PageObjects/ParentObjects/WhatsNewPage.js"
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
describe("ParentTestSuite", () => {
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
      ln.setUserName(data.ParentUsername)
      ln.setPassword(data.ParentPassword)
      ln.clickLogon()
      ln1 = new ParentHomePage
      ln1.verifyParentHeadingAndURL()
      ln1.verifyPASubheading()
    })
  })
  it("Verify Home Page Navigation", () => {
    ln1.clickHomeLink();
    ln1.verifyParentHeadingAndURL()
    ln1.verifyPASubheading()
  })
  it("Verify Linking An Account From HomePage", () => {
    ln1.clickLinkAnAccount();
    ln2 = new LinkAccountPage
    ln2.verifyHeadingandURL();
    ln2.FindAccountRefTextboxAndButton()
  })
  it("Verify Term Dates Button On Home Page", () => {
    ln1.clickHomeLink();
    ln1.verifyParentHeadingAndURL()
    ln1.clickTermDatesButton();
    ln1.verifyTermDatesModuleHeading()
    ln1.clickTermModuleCloseButton()
    ln1.verifyParentHeadingAndURL()
  })
  it("Verify Holidays Button On Home Page", () => {
    ln1.clickHolidaysButton();
    ln1.verifyHolidaysModuleHeading()
    ln1.clickHolidaysModuleCloseButton()
    ln1.verifyParentHeadingAndURL()
  })
  it("Verify Pre-Order Button On Home Page", () => {
    cy.once('uncaught:exception', () => false);
    ln1.clickPreOrderButton();
    ln3 = new PreOrderMealPage
    ln3.verifyPageHeadingAndURL();
    ln3.selectWeek()
    ln3.clickSelectButton();
    ln3.verifyPreOrderPageHeadingAndURL();
    ln3.verifyNoMenuValidation()
    ln3.clickCancelButton();
    //ln3.verifyPageHeadingAndURL();
    ln3.clickCancelButton();
    ln7 = new FundListPage
    ln7.verifyHeadingandURL()
    ln1.clickHomeLink();
    ln1.verifyParentHeadingAndURL()
  })
  it("Verify Add Amount To Basket From HomePage", () => {
    cy.once('uncaught:exception', () => false);
    ln1.TypeAmount();
    ln1.clickAddToBasketButton();
    ln5 = new BasketPage
    ln5.verifyPageHeadingAndURL();
    ln5.verifyEstablishmentName();
  })
  it("Verify Continue Shopping Button Functionality of Basket Page ", () => {
    cy.once('uncaught:exception', () => false);
    ln5.clickContinueShoppingButton();
    ln4 = new AccountsPage
    ln4.verifyPageHeadingAndURL();
  })
  it("Verify Basket Icon Navigation from Home Page ", () => {
    cy.once('uncaught:exception', () => false);
    ln1.clickBasketIcon()
    ln5.verifyPageHeadingAndURL();
  })
  it("Verify Amend page Actions on the Basket Page ", () => {
    cy.once('uncaught:exception', () => false);
    ln5.clickAmendActionButton()
    ln6 = new AmendPage
    ln6.verifyHeadingandURL();
    ln6.clickFundListButton();
    ln7.verifyHeadingandURL();
    cy.go('back');
    ln6.verifyHeadingandURL();
    ln6.enterAmendAmount();
    ln6.clickSaveItemButton();
    ln5.verifyPageHeadingAndURL();
    ln5.verifyAmountText();
  })
  it("Verify Remove All Basket Item Functionality", () => {
    cy.once('uncaught:exception', () => false);
    ln5.clickRemoveAllItemsButton();
    cy.wait(500)
    ln5.verifyNoItemText();
    ln1.clickHomeLink();
    ln1.verifyParentHeadingAndURL()
  })
  it("Verify Basket Button Functionality On The Home Page", () => {
    cy.once('uncaught:exception', () => false);
    ln1.clickBasketButton();
    ln8 = new PaymentPage
    ln8.verifyPageHeadingAndURL();
    //ln8.verifyAmountText();
    ln8.clickSaveItem();
    ln8.verifyPermissionPopupHeading();
    ln8.clickConsentCheckbox();
    ln8.clickConfirmButton();
    ln5.verifyPageHeadingAndURL();
    ln5.verifyEstablishmentName();
    ln5.verifyBasketAmount();
  })
  it("Verify Remove Individual Item Basket Item Functionality", () => {
    cy.once('uncaught:exception', () => false);
    ln5.clickRemoveButton();
    cy.wait(500)
    ln5.verifyNoItemText();
    ln1.clickHomeLink();
    ln1.verifyParentHeadingAndURL()
  })
  it("Verify Checkout Basket Item Functionality", () => {
    cy.once('uncaught:exception', () => false);
    ln1.selectFund();
    ln1.typeDonatedAmount();
    ln1.clickCharityAddBasketButton();
    ln5.verifyCharityFund()
    //ln5.clickCheckoutButton();
    ln5.clickRemoveButton();
    cy.wait(500)
    ln5.verifyNoItemText();
    ln1.clickHomeLink();
    ln1.verifyParentHeadingAndURL()
    //ln5.clickCheckoutBackButton();
    //ln5.verifyPageHeadingAndURL();
  })
  it("Verify Accounts Page On Header", () => {
    cy.once('uncaught:exception', () => false);
    ln1.clickAccountsLink();
    ln4.verifyPageHeadingAndURL();
    ln4.clickSelectButton();
    ln7.verifyHeadingandURL();
    cy.go('back');
    ln4.verifyPageHeadingAndURL();
    ln4.clickLinkNewAccountButton();
    ln2.verifyHeadingandURL();
    ln2.SearchWrongRefKey();
    ln2.verifyNotFoundValidation();
    ln2.SearchCorrectRefKey();
    ln2.verifyFoundValidation()
  })
  it("Verify Auto Pay Page On Header", () => {
    cy.once('uncaught:exception', () => false);
    ln1.clickAutoPayLink();
    ln9 = new AutopayPage
    ln9.verifyPageHeadingAndURL();
    ln9.clickCreatePaymentButton()
  })
  it("Verify PreOrder Auto Pay Page", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickPreOrderAutoPayButton();
    ln9.verifyCreatePageHeadingAndURL();
    ln9.selectRegularityDropdown();
    ln9.clickSubmitButton()
    ln9.verifyFieldValidation()
    //ln9.verifyFundNamePreOrder();
    //ln9.verifyAccountName()
    ln9.clickCancelButton()
    ln7.verifyHeadingandURL();
  })
  it("Verify PreOrder History Page Content", () => {
    ln7.clickHistoryButton();
    ln10 = new AccountHistoryPage
    ln10.verifyHeadingAndURL();
    ln10.clickTransactionHistoryButton();
    ln10.verifyTextOnNoHistory()
    ln10.setStartDate()
    ln10.clickSearchButton()
    ln10.verifySearchResult();
    ln10.clickReturnToFundListButton()
    ln7.verifyHeadingandURL();
  });
  it("Verify PreOrder Pay Page Content", () => {
    ln7.clickPreOrderPayButton();
    ln11 = new AddItemPage
    ln11.verifyHeadingandURL();
    ln11.typeAmount();
    ln11.clickSaveItemButton();
    ln5.verifyPageHeadingAndURL()
    ln5.verifyPreOrderFund()
    //ln5.clickCheckoutButton();
    ln5.clickRemoveButton();
    cy.wait(500)
    ln5.verifyNoItemText();
    ln1.clickAccountsLink();
    ln4.verifyPageHeadingAndURL()
    ln4.clickSelectButton();
    ln7.verifyHeadingandURL();
  });
  it("Verify Trip Details Page Content", () => {
    ln7.clickTripDetailsButton();
    ln12 = new TripDetailsPage
    ln12.verifyHeadingandURL();
    ln12.verifyPageSubHeadings();
    ln12.clickReturnToFundsButton();
    ln7.verifyHeadingandURL();
  });
  it("Verify Trip History Page Content", () => {
    ln7.clickTripHistoryButton();
    ln10.verifyHeadingAndURLOnTripHistory();
    ln10.verifyTextOnNoHistory()
    ln10.clickReturnToFundListButton()
    ln7.verifyHeadingandURL();
  });
  it("Verify Trip Auto Pay Page", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickTripAutoPayButton();
    ln9.verifyCreatePageHeadingAndURL();
    ln9.selectRegularityDropdown();
    ln9.clickSubmitButton();
    ln9.verifyFieldValidation();
    ln9.clickCancelButton();
    ln7.verifyHeadingandURL();
  })
  it("Verify Trip Pay Page", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickTripPayButton();
    ln11.verifyHeadingandURL();
    ln11.typeAmountInTrip();
    ln11.clickSaveItemButton();
    ln8.verifyPermissionPopupHeading();
    ln8.clickConsentCheckbox();
    ln8.clickConfirmButton();
    ln5.verifyPageHeadingAndURL();
    ln5.verifyEstablishmentName();
    ln5.verifyTripFund();
    ln5.clickRemoveAllItemsButton();
    cy.wait(500)
    ln5.verifyNoItemText();
    ln1.clickAccountsLink();
    ln4.verifyPageHeadingAndURL()
    ln4.clickSelectButton();
    ln7.verifyHeadingandURL();
  })
  it("Verify Milk Pay Page", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickMilkPayButton();
    ln11.verifyHeadingandURL();
    ln11.typeAmountInTrip();
    ln11.clickSaveItemButton();
    ln5.verifyPageHeadingAndURL();
    ln5.verifyEstablishmentName();
    ln5.verifyMilkFund();
    ln5.clickRemoveAllItemsButton();
    cy.wait(500)
    ln5.verifyNoItemText();
    ln1.clickAccountsLink();
    ln4.verifyPageHeadingAndURL()
    ln4.clickSelectButton();
    ln7.verifyHeadingandURL();
  })
  it("Verify Milk History Page Content", () => {
    ln7.clickMilkHistoryButton();
    ln10.verifyHeadingAndURLOnTripHistory();
    ln10.verifyTextOnNoHistory()
    ln10.clickReturnToFundListButton()
    ln7.verifyHeadingandURL();
  });
  it("Verify Milk Auto Pay Page", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickMilkAutoPayButton();
    ln9.verifyCreatePageHeadingAndURL();
    ln9.selectRegularityDropdown();
    ln9.clickSubmitButton();
    ln9.verifyFieldValidation();
    ln9.clickCancelButton();
    ln7.verifyHeadingandURL();
  })
  it("Verify LA Book Page", () => {
    cy.once('uncaught:exception', () => false);
    ln7.clickLABookButton();
    ln13 = new LABookPage
    ln13.verifyHeadingAndURL();
    //ln13.clickSaveItem();
    //cy.wait(300)
    //ln13.clickSaveItem();
    //ln13.verifyBasketValidation();
    ln13.clickCancelButton();
    ln7.verifyHeadingandURL();
  })
  it("Verify LA History Page Content", () => {
    ln7.clickLAHistoryButton();
    ln10.verifyHeadingAndURLOnTripHistory();
    ln10.verifyTextOnNoHistory()
    ln10.clickReturnToFundListButton()
    ln7.verifyHeadingandURL();
  });
  it("Verify Shop Page Content", () => {
    ln7.clickShopButton();
    ln14 = new ShopPage
    ln14.verifyHeadingAndURL();
    ln14.selectCategory();
    ln14.clickSelectCategoryButton();
    ln14.clickDetailsButton()
    ln14.verifyShopAddHeadingAndURL();
    ln14.enterQuantity();
    ln14.clickSaveItemToBasket();
    ln14.verifyShopAddHeadingAndURL();
    ln14.clickReturnToFundsButton();
    ln7.verifyHeadingandURL();
    ln1.clickBasketIcon()
    ln5.verifyPageHeadingAndURL();
    ln5.clickRemoveAllItemsButton();
    cy.wait(500)
    ln5.verifyNoItemText();
    ln1.clickHomeLink();
    ln1.verifyParentHeadingAndURL()
  });
  it("Verify Transaction History Page from Header", () => {
    ln1.clickTransactionHistoryLink();
    //cy.wait(5000)
    ln15 = new TransactionHistoryPage
    ln15.verifyHeadingAndURL()

    ln15.typeStartDate()

    ln15.clickRefreshButton()
    ln15.clickDetailsButton();
    ln16 = new PaymentDetailsPage
    ln16.verifyPageHeadingAndURL();
    ln16.clickTransactionHistoryButton();
    ln15.verifyHeadingAndURL()
    ln15.clickRefundRequestsLink();
    ln15.verifyHeadingAndURLRefundRequests();
    ln15.clickRefreshButton();
  });
  it("Verify Notifications Page from Header", () => {
    ln1.clickNotificationsLink();
    ln17 = new NotificationPage
    ln17.verifyHeadingAndURL();

    ln15.typeStartDate()
    
    ln17.clickRefreshListButton()
    ln17.clickDetailsButton();
    ln18 = new NotificationDetailPage
    ln18.verifyHeadingAndURL();
    ln18.clickBackButton();
    ln17.verifyHeadingAndURL();
  });
  it("Verify Messages Icon Navigation from Header", () => {
    ln1.clickNotificationIcon();
    ln19 = new MessagesPage
    ln19.verifyHeadingAndURL();
    ln19.clickNewMessageButton()
    ln19.verifyHeadingAndURLCreateMessage();
    ln19.clickSendMessageButton();
    ln19.verifyValidationMessages();
    ln19.enterSubject();
    ln19.enterContent();
    ln19.clickSendMessageButton();
    ln19.verifySucessMessage();
  });
  it("Verify My Profile Page Content", () => {
    ln1.clickNameIcon();
    ln1.clickMyProfileLink();
    ln20 = new ProfilePage
    ln20.verifyHeadingAndURL()
    ln20.clickSaveMyProfileButton();
    ln20.verifyHeadingAndURLOnStatusUpdatePage();
    cy.go("back");
    ln20.verifyHeadingAndURL()
  });
  it("Verify Change Email Address Page Content", () => {
    ln20.clickChangeEmailButton();
    ln21 = new ChangeEmailAddressPage
    ln21.verifyHeadingAndURL();
    ln21.clickChangeEmailAddressButton();
    ln21.verifyValidationsAppearing();
    ln21.clickBackToMyProfieButton();
    ln20.verifyHeadingAndURL();
  });
  it("Verify Change Password Page Content", () => {
    ln20.clickChangeIpayPasswordButton();
    ln22 = new ChangePasswordPage()
    ln22.verifyHeadingAndURL();
    ln22.clickChangePasswordButton();
    ln22.verifyValidationsAppearing();
    ln22.clickBackToMyProfieButton();
    ln20.verifyHeadingAndURL();
    ln20.clickCancelButton();
    ln1.verifyParentHeadingAndURL();
  });
  it("Verify FAQs Page Content", () => {
    ln1.clickHelpLink();
    cy.wait(5000)
    ln1.clickFaqsLink();
    ln23 = new FAQsPage
    ln23.verifyHeadingAndURL();
    ln23.clickSearchButton();
    ln23.verifyValidation();
    ln23.typeSearchContent();
    ln23.clickSearchButton();
    ln23.verifyValidationNotAppearing();
  });
  it("Verify What's New Page Content", () => {
    ln1.clickHelpLink();
    ln1.clickWhatsNewLink();
    ln24 = new WhatsNewPage
    ln24.verifyHeadingAndURL();
  });
  it("Verify Footer Links", () => {
    ln25 = new FooterPage
    ln25.clickAccessibilityLink();
    ln25.verifyAccessibilityPageHeadingAndURL();
    ln25.clickCookiesLink();
    ln25.verifyCookiesPageHeadingAndURL();
    ln25.clickPrivacyStatementLink();
    ln25.verifyPrivacyStatementPageHeadingAndURL();
    ln25.clickSiteMapLink();
    ln25.verifySiteMapPageHeadingAndURL();
    ln25.clickPCIComplianceLink();
    ln25.verifyPCICompliancePageHeadingAndURL();
    ln25.clickAllergyAdviceLink();
    ln25.verifyAllergyAdvicePageHeadingAndURL();
    ln25.clickWhatsNewLink();
    ln25.verifyWhatsNewPageHeadingAndURL();
  });
  it("Verify Signout Functionality", () => {
    ln1.clickNameIcon();
    ln1.clickSignoutLink();
    ln.verifyPageHeadingAndURL();
  });
}
)