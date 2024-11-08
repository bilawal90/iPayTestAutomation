class SalesProductsPage {
URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundProducts?fundID="
URL_PAGE_NEW_CATEGORY = "https://test.ipayimpact.co.uk/Test/Fund/CategoryDetails?categoryID="
HEADING_PAGE = "//h3[normalize-space()='Fund Products']"
HEADING_PAGE_NEW_CATEGORY= "//h3[contains(text(),'Shop Test Automation Fund -')]"
BTN_ADD_NEW_CATEGORY = "//a[normalize-space()='Add New Category']"
BTN_SAVE_CATEGORY = "#btnSubmit"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
VALIDATION_CATEGORY = "#CategoryName-error"
BREADCRUMB_FUND = "//a[normalize-space()='Funds']"
ValidateCategoryValidation()
{
  cy.get(this.VALIDATION_CATEGORY)
    .should("be.visible")
    .contains("The Category Name field is required.")
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click()
}
clickFundBreadCrumb()
{
  cy.xpath(this.BREADCRUMB_FUND).click()
}
clickSaveCategoryButton()
{
  cy.get(this.BTN_SAVE_CATEGORY).click()
}
clickAddNewCategoryButton()
{
  cy.xpath(this.BTN_ADD_NEW_CATEGORY).click()
}
verifyPageHeadingAndURL()
{
  cy.url().should("include", this.URL_PAGE)
  cy.xpath(this.HEADING_PAGE)
    .should("be.visible")
    .contains("Fund Products")
}
verifyNewCategoryPageHeadingAndURL()
{
  cy.url().should("include", this.URL_PAGE_NEW_CATEGORY)
  cy.xpath(this.HEADING_PAGE_NEW_CATEGORY)
    .should("be.visible")
    .contains("Adding New Product Category")
}
}
export default SalesProductsPage
