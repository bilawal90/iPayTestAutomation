class MealPricePage
{
  Heading_Page = "//h3[normalize-space()='Meal Prices']";
  Meal_Price_Heading_Page = "//h3[normalize-space()='Meal Prices - SAAuto1 *REMOVE*']"
  Page_URL = "https://test.ipayimpact.co.uk/Test/Preorder/ClientMealPrices"
  Meal_Price_Page_URL = "https://test.ipayimpact.co.uk/Test/Preorder/MealPrices?SchoolID=44401"
  Btn_Add_Meal_Price = "//a[normalize-space()='Add Meal Prices']";
  Btn_Return = "//a[normalize-space()='Return to Menu List']";
  Btn_Return_Meal_Price = "//a[normalize-space()='Return']";
  Btn_Select_Establishment = "//a[normalize-space()='Select']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').contains('Meal Prices')
  }
  verifyMealPriceHeadingandURL()
  {
    cy.url().should("eq", this.Meal_Price_Page_URL);
    cy.xpath(this.Meal_Price_Heading_Page).should('be.visible').contains('Meal Prices - SAAuto1 *REMOVE* ')
  }
  clickAddMealPricesButton()
  {
    cy.xpath(this.Btn_Add_Meal_Price).should('be.visible');
    cy.xpath(this.Btn_Add_Meal_Price).click();
  }
  clickReturnToMenuListButton()
  {
    cy.xpath(this.Btn_Return).should('be.visible');
    cy.xpath(this.Btn_Return).click();
  }
  clickReturnToMealPriceButton()
  {
    cy.xpath(this.Btn_Return_Meal_Price).should('be.visible');
    cy.xpath(this.Btn_Return_Meal_Price).click();
  }
  clickEstablishmentSelectButton()
  {
    cy.xpath(this.Btn_Select_Establishment).should('be.visible');
    cy.xpath(this.Btn_Select_Establishment).click();
  }
}
export default MealPricePage