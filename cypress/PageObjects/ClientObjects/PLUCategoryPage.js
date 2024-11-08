class PLUCategoryPage {
  Heading_Page = "//h3[normalize-space()='PLU Categories']";
  Sub_Heading_Page = ".dataTables_empty"
  Heading_Category_Modal = "//h3[normalize-space()='Create new category']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Menu/PLUCategory";
  Btn_Add_New_Category = "//a[@id='addNewCategory']";
  Btn_Save_Category = "#btnSavePLUCategory"
  Btn_Cancel_Modal = "(//button[@id='btnClosePLUCategory'])[1]"
Validation_Category = "#categoryMessage";
  verifyHeadingAndURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "PLU Categories")
    }
    verifySubHeading() {
      cy.get(this.Sub_Heading_Page)
        .should("be.visible")
        .and("contain", "No data available in table")
        }
      verifyCategoryModalHeading() {
        cy.xpath(this.Heading_Category_Modal).should("contain", "Create new category")
        }
      verifyCategoryValidation() {
           cy.get(this.Validation_Category)
          .should("be.visible")
          .and("contain", "Category Name is required.")
            } 
  clickAddNewCategoryButton() {
    cy.xpath(this.Btn_Add_New_Category).should("be.visible");
    cy.xpath(this.Btn_Add_New_Category).click();
  }
  clickSaveCategoryButton() {
    //cy.get(this.Btn_Save_Category).should("be.visible");
    cy.get(this.Btn_Save_Category).trigger('mouseover').click({force:true});
  }
  clickCancelModalButton() {
    //cy.xpath(this.Btn_Cancel_Modal).should("be.visible");
    cy.xpath(this.Btn_Cancel_Modal).trigger('mouseover').click({force:true});
  }
 }
export default PLUCategoryPage;
