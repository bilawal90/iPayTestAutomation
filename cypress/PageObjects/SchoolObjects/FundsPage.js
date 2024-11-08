class FundsPage {
  HEADING_PAGE = "//h3[normalize-space()='Funds']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund"
  TEXTBOX_SEARCH = "(//input[@type='search'])[2]"
  //TEXTBOX_SEARCH_FUNDS = "//input[@type='search']"
  RESULT_SEARCH = "#fundTable_info"
  TEXT_INFO_SEARCH = "//td[@valign='top']"
  LINK_INACTIVE = "//a[normalize-space()='Inactive']"
  LINK_ALL = "//a[normalize-space()='All']"
  LINK_ARCHIVED = "//a[@id='data-archived']"
  LINK_ACTIVE_FUND = "//a[@id='data-active']";
  DROPDOWN_FUND_TYPE = "#SelectedFundType"
  BTN_CUSTOMISE = "//button[@id='customise-button']"
  HEADING_CUSTOMISE_SCREEN = "#customiseModalLabel"
  CUSTOMISE_CLOSE_BUTTON = "//button[normalize-space()='Close']"
  BTN_ADD_FUND = "//a[normalize-space()='Add a new fund']"
  VIEW_CHARITY_FUND = "a[href='Fund/FundDetails?fundID=6766']"
  VIEW_CLUB_FUND = "a[href='Fund/FundDetails?fundID=6764']"
  VIEW_MILK_FUND ="a[href='Fund/FundDetails?fundID=6761']"
  VIEW_LA_FUND ="a[href='Fund/FundDetails?fundID=6765']"
  VIEW_PREORDER_FUND ="a[href='Fund/FundDetails?fundID=6480']"
  VIEW_SHOP_FUND ="a[href='Fund/FundDetails?fundID=6767']"
  VIEW_TRIP_OPEN_FUND ="a[href='Fund/FundDetails?fundID=6523']"
  VIEW_TRIP_SELECTED_FUND = "a[href='Fund/FundDetails?fundID=6763']"
  VIEW_LA_FUND = "a[href='Fund/FundDetails?fundID=6765']"
  clickCharityFundViewButton() {
    cy.get(this.VIEW_CHARITY_FUND).click()
  }
  clickClubFundViewButton() {
    cy.get(this.VIEW_CLUB_FUND).click()
  }
  clickMilkFundViewButton() {
    cy.get(this.VIEW_MILK_FUND).click()
  }
   clickLAFundViewButton() {
    cy.get(this.VIEW_LA_FUND).click()
  }
  clickPreOrderFundViewButton() {
    cy.get(this.VIEW_PREORDER_FUND).click()
  }
  clickShopFundViewButton() {
    cy.get(this.VIEW_SHOP_FUND).click()
  }
  clickTripOpenFundViewButton() {
    cy.get(this.VIEW_TRIP_OPEN_FUND).click()
  }
  clickTripSelectedFundViewButton() {
    cy.get(this.VIEW_TRIP_SELECTED_FUND).click()
  }
  clickLAFundViewButton() {
    cy.get(this.VIEW_LA_FUND).click()
  }
  clickAddNewFund() {
    cy.xpath(this.BTN_ADD_FUND).click()
  }
  clickCustomiseCloseButton() {
     cy.xpath(this.CUSTOMISE_CLOSE_BUTTON)
    .should('be.visible')
    .should('be.enabled')
    .click();
  }
  verifyCustomisePageHeading() {
    cy.get(this.HEADING_CUSTOMISE_SCREEN)
      .should("be.visible")
      .contains("Customise");
  }
  clickCustomiseButton() {
    cy.xpath(this.BTN_CUSTOMISE).click()
  }
  //verifyCustomiseScreenAppearing() {
  //}
  selectDropdownValues() {
    cy.get(this.DROPDOWN_FUND_TYPE).select('Bookings').should('have.value', '9')
    cy.get(this.DROPDOWN_FUND_TYPE).select('General').should('have.value', '2')
    cy.get(this.DROPDOWN_FUND_TYPE).select('Milk').should('have.value', '5')
    cy.get(this.DROPDOWN_FUND_TYPE).select('Pre-order School Meals').should('have.value', '4')
    cy.get(this.DROPDOWN_FUND_TYPE).select('Shop').should('have.value', '6')
  }
  clickInactiveLink() {
    cy.xpath(this.LINK_INACTIVE).click();
  }
  clickActiveFundLink() {
    cy.xpath(this.LINK_ACTIVE_FUND).click();
  }
  clickAllLink() {
    cy.xpath(this.LINK_ALL).click();
  }
  clickArchivedFunds() {
    cy.xpath(this.LINK_ARCHIVED).click();
  }
  verifyPageHeadingAndURL() {
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Funds");
  }
  typeFundName() {
    cy.xpath(this.TEXTBOX_SEARCH).type("April")
  }
  typeInvalidFundName() {
    cy.xpath(this.TEXTBOX_SEARCH).type("asdsa")
  }
  clearSearchTextboxValue() {
    cy.xpath(this.TEXTBOX_SEARCH).focus().clear();
  }
  verifyFundPageListing() {
    cy.get(this.RESULT_SEARCH).should("be.visible")
      .contains("Showing 1 to 9 of 9 entries");
  }
  verifySearchResult() {
    cy.get(this.RESULT_SEARCH).should("be.visible")
      .contains("Showing 1 to 1 of 1 entries");
  }
  verifySearchInfoText() {
    cy.xpath(this.TEXT_INFO_SEARCH).should("be.visible")
      .contains("No matching records found");
  }
  verifyInactiveListInfo() {
    cy.xpath(this.TEXT_INFO_SEARCH).should("be.visible")
      .contains("No data available in table");
  }
}
export default FundsPage
