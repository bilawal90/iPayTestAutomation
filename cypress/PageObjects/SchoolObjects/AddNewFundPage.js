class AddNewFundPage {
  HEADING_PAGE = "//h3[normalize-space()='Add A New Fund']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/CreateFundDetails"
  BTN_SAVE_FUND = "#btnSubmit";
  BTN_RETURN_TO_FUND = "//a[normalize-space()='Return to Fund List']";
  VALIDATION_FUND_NAME = "#FundName-error";
  VALIDATION_FUND_TYPE = "#SchoolFundType-error";
  VALIDATION_START_DATE = "#StartDate-error"
  VALIDATION_VAT_CODE =  "#VATID-error"
  VALIDATION_BANK_DETAILS =  "#BankDetailID-error"
  VALIDATION_FORM = "div[id='ErrorPanel'] p"
  DROPDOWN_FUND_TYPE = "#SchoolFundType"
  clickSaveFundDetails()
  {
    cy.get(this.BTN_SAVE_FUND).click();
  }
  clickReturnToFundList()
  {
    cy.xpath(this.BTN_RETURN_TO_FUND).click();
  }
  verifyValidationsOnNewFundPage()
  {
      cy.get(this.VALIDATION_FUND_NAME)
        .should("be.visible")
        .contains("The Fund Name field is required.");
        cy.get(this.VALIDATION_START_DATE)
        .should("be.visible")
        .contains("The Start Date field is required.");
        cy.get(this.VALIDATION_VAT_CODE)
        .should("be.visible")
        .contains("The VAT Code field is required.");
        cy.get(this.VALIDATION_BANK_DETAILS)
        .should("be.visible")
        .contains("The Bank Details field is required.");
        cy.get(this.VALIDATION_FORM)
        .should("be.visible")
        .contains("Please review the form and correct the errors before submitting.");
  }
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Add A New Fund");
}
selectDropdownValues() {
  //cy.get(this.DROPDOWN_FUND_TYPE).select('Charity / Donation').should('have.value', '7')
  //cy.get(this.DROPDOWN_FUND_TYPE).select('Club / Society').should('have.value', '3')
  cy.get(this.DROPDOWN_FUND_TYPE).select('Bookings').should('have.value', '9')
  cy.get(this.DROPDOWN_FUND_TYPE).select('General').should('have.value', '2')
  //cy.get(this.DROPDOWN_FUND_TYPE).select('Misc - Not for parents').should('have.value', '8')
  cy.get(this.DROPDOWN_FUND_TYPE).select('Milk').should('have.value', '5')
}
}
export default AddNewFundPage
