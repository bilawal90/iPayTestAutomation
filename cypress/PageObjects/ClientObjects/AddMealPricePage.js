class AddMealPricePage {
  Heading_Page = "//h3[normalize-space()='Add Meal Prices']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Preorder/ClientAddEditMealPrice";
  Btn_Save_Meal_Price = "//input[@id='btnSubmit']";
  Btn_Cancel = "//a[normalize-space()='Cancel']";
  Validation_Adult = "#MealPriceList_0__Cost-error";
  Validation_Adult_Supervisor = "#MealPriceList_1__Cost-error";
  Validation_Pupil = "#MealPriceList_2__Cost-error"
  Validation_Pupil_FSM = "#MealPriceList_3__Cost-error"
  Validation_Pupil_Nursery = "#MealPriceList_4__Cost-error"
  Validation_Pupil_UFSM = "#MealPriceList_5__Cost-error"
  verifyHeadingAndURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Add Meal Prices")
  }
  clickSaveMealPriceButton() {
    cy.xpath(this.Btn_Save_Meal_Price).should("be.visible");
    cy.xpath(this.Btn_Save_Meal_Price).click();
  }
  verifyValidationMessagesAppearing()
  {
    cy.get(this.Validation_Adult).should("be.visible").and("contain", "The field Cost must be between 0.01 and 100.")
    cy.get(this.Validation_Adult_Supervisor).should("be.visible").and("contain", "The field Cost must be between 0.01 and 100.")
    cy.get(this.Validation_Pupil_FSM).should("be.visible").and("contain", "The field Cost must be between 0.01 and 100.")
    cy.get(this.Validation_Pupil_Nursery).should("be.visible").and("contain", "The field Cost must be between 0.01 and 100.")
    cy.get(this.Validation_Pupil_UFSM).should("be.visible").and("contain", "The field Cost must be between 0.01 and 100.")
  }
  clickCancelButton() {
    cy.xpath(this.Btn_Cancel).should("be.visible");
    cy.xpath(this.Btn_Cancel).click();
  }
}
export default AddMealPricePage;
