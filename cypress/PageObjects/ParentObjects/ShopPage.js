class ShopPage {
  Heading_Page = "//h3[normalize-space()='Shop - AccountAuto1 Test']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Fund/ProductCategorySelection?";
  SHOP_ADD_PAGE_URL = "https://test.ipayimpact.co.uk/Test/Fund/ProductDetailsCart"
  HEADING_SHOP_ADD = "//h3[normalize-space()='Shop - AccountAuto1 Test']"
DROPDOWN_CATEGORY = "#SelectedCategory"
BTN_SELECT_CATEGORY = "input[value='Select Category']"
BTN_DETAILS = "(//a[contains(text(),'Detail')])[1]"
TEXTBOX_QUANTITY = "#Quantity"
BTN_SAVE_ITEM = "#btnSubmit"
BTN_RETURN_TO_FUND = "//a[normalize-space()='Return to Funds']"
clickReturnToFundsButton()
{
  cy.xpath(this.BTN_RETURN_TO_FUND).click()
}
clickSaveItemToBasket()
{
  cy.get(this.BTN_SAVE_ITEM).click()
}
enterQuantity()
{
  cy.get(this.TEXTBOX_QUANTITY).clear();
  cy.get(this.TEXTBOX_QUANTITY).type("1");
}
clickDetailsButton()
{
  cy.xpath(this.BTN_DETAILS).click()
}
clickSelectCategoryButton()
{
  cy.get(this.BTN_SELECT_CATEGORY).click()
}
  verifyHeadingAndURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Shop - AccountAuto1 Test");
  }
  verifyShopAddHeadingAndURL() {
    cy.url().should("include", this.SHOP_ADD_PAGE_URL);
    cy.xpath(this.HEADING_SHOP_ADD)
      .should("be.visible")
      .and("contain", "Shop - AccountAuto1 Test");
  }
  selectCategory() {
    cy.get(this.DROPDOWN_CATEGORY).select('Test Category 1').should('have.value', '398')
  }
}
export default ShopPage;
