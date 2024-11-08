class AddMenuPage {
  Heading_Page = "//h3[normalize-space()='Adding New Menu']";
  Sub_Heading_Page = "//h4[normalize-space()='General Details']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Menu/ShowMenuDetails?menuID=0";
  Breadcrumb = "(//a[@href='/Test/Menu'])[2]";
  Btn_Update_Details = "//input[@id='btnSubmit']";
  Validation_Menu_Name = "#MenuName-error";
  Validation_Start_Date = "#StartDate-error";
  Validation_Menu = "#MenuCategoryID-error";
  verifyHeadingsAndURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Adding New Menu")
      cy.xpath(this.Sub_Heading_Page)
      .should("be.visible")
      .and("contain", "General Details");
  }
  clickUpdateDetailsButton() {
    cy.xpath(this.Btn_Update_Details).should("be.visible");
    cy.xpath(this.Btn_Update_Details).click();
  }
  verifyValidationMessagesAppearing()
  {
    cy.get(this.Validation_Menu_Name).should("be.visible").and("contain", "The Menu Name field is required.")
    cy.get(this.Validation_Start_Date).should("be.visible").and("contain", "The Start Date (Monday) field is required.")
    cy.get(this.Validation_Menu).should("be.visible").and("contain", "The Menu Category field is required.")
  }
  clickBreadCrumb() {
    cy.xpath(this.Breadcrumb).should("be.visible");
    cy.xpath(this.Breadcrumb).click();
  }
}
export default AddMenuPage;
