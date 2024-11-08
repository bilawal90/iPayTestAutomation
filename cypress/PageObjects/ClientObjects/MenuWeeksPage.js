class MenuWeeksPage {
  Primary_Heading_Page = "//h3[normalize-space()='Menu Weeks - Primary']";
  Primary_Sub_Heading_Page = "//p[normalize-space()='Please select the Menus and Weeks for each school.']";
  Primary_Page_URL = "https://test.ipayimpact.co.uk/Test/Menu/MenuWeeks?menuCategory=1";
  Nursery_Heading_Page = "//h3[normalize-space()='Menu Weeks - Nursery']";
  Nursery_Sub_Heading_Page = "//p[normalize-space()='Please select the Menus and Weeks for each school.']";
  Nursery_Page_URL = "https://test.ipayimpact.co.uk/Test/Menu/MenuWeeks?menuCategory=2";
  Btn_Save_Menu_Weeks = "//input[@id='Submit']";
  Btn_Return_Menu = "//a[normalize-space()='Return to Menu List']";
  Btn_Reset = "//a[normalize-space()='Reset']";
  Toast_Success = "//p[@class='text-success']";
  BREADCRUMB_MENU_WEEK = "(//a[@href='/Test/Menu'])[2]"
  clickMenuWeekBreadCrumb() {
    cy.xpath(this.BREADCRUMB_MENU_WEEK).should("be.visible");
    cy.xpath(this.BREADCRUMB_MENU_WEEK).click();
  }
  verifyPrimaryHeadingsAndURL() {
    cy.url().should("eq", this.Primary_Page_URL);
    cy.xpath(this.Primary_Heading_Page).contains("Menu Weeks - Primary");
      cy.xpath(this.Primary_Sub_Heading_Page)
      .should("be.visible")
      .and("contain", "Please select the Menus and Weeks for each school.");
  }
  verifyNurseryHeadingsAndURL() {
    cy.url().should("eq", this.Nursery_Page_URL);
    cy.xpath(this.Nursery_Heading_Page).contains("Menu Weeks - Nursery");
      cy.xpath(this.Nursery_Sub_Heading_Page)
      .should("be.visible")
      .and("contain", "Please select the Menus and Weeks for each school.");
  }
  clickSaveMenuWeeksButton() {
    cy.xpath(this.Btn_Save_Menu_Weeks).should("be.visible");
    cy.xpath(this.Btn_Save_Menu_Weeks).click();
  }
  clickResetMenuWeeksButton() {
    cy.xpath(this.Btn_Reset).should("be.visible");
    cy.xpath(this.Btn_Reset).click();
  }
  clickReturnToMenuListButton() {
    cy.xpath(this.Btn_Return_Menu).should("be.visible");
    cy.xpath(this.Btn_Return_Menu).click();
  }
  verifySuccessToastAppearing()
  {
    cy.xpath(this.Toast_Success).should("be.visible").and("contain", "Menu Weeks Saved.");
  }
verifySuccessToastNotAppearing()
  {
    cy.xpath(this.Toast_Success).should('not.exist');
  }
}
export default MenuWeeksPage;
