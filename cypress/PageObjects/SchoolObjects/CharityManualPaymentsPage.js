class CharityManualPaymentsPage {
  HEADING_PAGE = "//h3[contains(text(),'Manual Payments')]"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/AddManualPayments?fundID="
  BTN_MAKE_PAYMENTS = "#submit"
  BTN_BACK = "//a[normalize-space()='Back']"
VALIDATION_YEAR = "#SelectedClass-error"
DROPDOWN_YEAR = "#SelectedClass"
GRID_RESULT = "//td[normalize-space()='Test, AccountAuto1']"
BTN_SAVE = "#btnSubmitBottom"
BTN_RETURN_TO_FUND = "//a[normalize-space()='Return To Fund']"
PAYMENT_SUCCESS = "//p[normalize-space()='Your Group Manual Payments have been saved']"
verifyPaymentSuccess()
  {
      cy.xpath(this.PAYMENT_SUCCESS)
        .should("be.visible")
        .contains("Your Group Manual Payments have been saved")
  }
clickReturnToFundButton()
  {
    cy.xpath(this.BTN_RETURN_TO_FUND).click()
  }
clickSaveButton()
  {
    cy.get(this.BTN_SAVE).click()
  }
selectYear()
  {
    cy.get(this.DROPDOWN_YEAR).select('N/A - N/A').should('have.value', 'N/A|N/A')
  }
clickBackButton()
  {
    cy.xpath(this.BTN_BACK).click()
  }
  clickMakePaymentButtons()
  {
    cy.get(this.BTN_MAKE_PAYMENTS).click()
  }
  verifyResultAppearing()
  {
      cy.xpath(this.GRID_RESULT)
        .should("be.visible")
  }
  verifyYearValidation()
{
    cy.get(this.VALIDATION_YEAR)
      .should("be.visible")
      .contains("The Select Year / Class field is required.")
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Manual Payments - Charity Test Automation Fund")
}
verifyPreOrderSchoolMealPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE)
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Manual Payments - Pre-order School Meals")
}
}
export default CharityManualPaymentsPage
