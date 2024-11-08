class PLUListPage {
  Heading_Page = "//h3[normalize-space()='PLU List']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Menu/PLUList";
  Page_URL_Return = "https://test.ipayimpact.co.uk/Test/Menu/PLUList?menuID=0&activesOnly=True"
  Btn_Return_Menu = "//a[normalize-space()='Return to Menu List']";
BREADCRUMB_MENU_LIST = "(//a[@href='/Test/Menu'])[2]"
  Btn_Add_New_Plu = "//a[normalize-space()='Add New PLU']";
  Info_Table = "//td[@class='dataTables_empty']";
  clickMenuListBreadCrumb() {
    cy.xpath(this.BREADCRUMB_MENU_LIST).should("be.visible");
    cy.xpath(this.BREADCRUMB_MENU_LIST).click();
  }
  verifyHeadingAndURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "PLU List")
    }
    verifyURLOnReturn() {
      cy.url().should("eq", this.Page_URL_Return);
      }
    verifyInfoMessage() {
      cy.xpath(this.Info_Table)
        .should("be.visible")
        .and("contain", "No data available in table")
      }
  clickAddNewPluButton() {
    cy.xpath(this.Btn_Add_New_Plu).should("be.visible");
    cy.xpath(this.Btn_Add_New_Plu).click();
  }
  clickReturnToMenuButton() {
    cy.xpath(this.Btn_Return_Menu).should("be.visible");
    cy.xpath(this.Btn_Return_Menu).click();
  }
}
export default PLUListPage;
