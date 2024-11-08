class MenuPage {
  Heading_Page = "//h3[normalize-space()='Menus']";
  SubHeading_Page = "//h4[normalize-space()='Menu List']";
  Heading_Menu_Settings = "//h4[normalize-space()='Menu Settings']";
  Heading_Menu = "//p[normalize-space()='There are no menus to display.']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Menu";
  Historic_URL = "https://test.ipayimpact.co.uk/Test/Menu?filter=2";
  Inactive_URL = "https://test.ipayimpact.co.uk/Test/Menu?filter=0";
  Current_URL = "https://test.ipayimpact.co.uk/Test/Menu?filter=1";
  Btn_View_PLU_List = "//a[@href='/Test/Menu/PLUList']";
  Btn_Edit_PLU_Colours = "//a[@href='/Test/Menu/PLUColours']";
  Btn_Edit_PLU_Category =  "//a[@href='/Test/Menu/PLUCategory']";
  Btn_Edit_Menu_Primary = "(//a[@class='btn btn-sm btn-outline-secondary align-self-center'][normalize-space()='Edit'])[3]";
  Btn_Edit_Menu_Nursery = "(//a[@class='btn btn-sm btn-outline-secondary align-self-center'][normalize-space()='Edit'])[4]";
  Btn_View_MealPrices = "//a[@href='/Test/Preorder/ClientMealPrices']";
  Btn_Edit_CutOff = "//a[@href='/Test/Preorder/CutOffDayTime']";
  Btn_Create_Menu = "//a[normalize-space()='Create Menu']";
  Tab_Current = "//a[normalize-space()='Current & Upcoming']";
  Tab_Historic = "//a[normalize-space()='Historic']";
  Tab_Inactive ="//a[normalize-space()='Inactive']" ;
   verifyHeadingsAndURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Menus')
    cy.xpath(this.SubHeading_Page).should('be.visible').and('contain', 'Menu List')
    cy.xpath(this.Heading_Menu_Settings).should('be.visible').and('contain', 'Menu Settings')
  }
  verifyHistoricTabDisplay()
  {
    cy.url().should("eq", this.Historic_URL);
  }
  verifyInactiveTabDisplay()
  {
    cy.url().should("eq", this.Inactive_URL);
  }
  clickCreateMenuButton() {
    cy.xpath(this.Btn_Create_Menu).should("be.visible");
    cy.xpath(this.Btn_Create_Menu).click();
  }
  clickHistoricTab()
  {
    cy.xpath(this.Tab_Historic).should("be.visible");
    cy.xpath(this.Tab_Historic).click();
  }
  clickInactiveTab()
  {
    cy.xpath(this.Tab_Inactive).should("be.visible");
    cy.xpath(this.Tab_Inactive).click();
  }
  clickViewPluList()
  {
    cy.xpath(this.Btn_View_PLU_List).should("be.visible");
    cy.xpath(this.Btn_View_PLU_List).click();
  }
  clickEditPluColours()
  {
    cy.xpath(this.Btn_Edit_PLU_Colours).should("be.visible");
    cy.xpath(this.Btn_Edit_PLU_Colours).click();
  }
  clickEditPluCategories()
  {
    cy.xpath(this.Btn_Edit_PLU_Category).should("be.visible");
    cy.xpath(this.Btn_Edit_PLU_Category).click();
  }
  clickEditPrimaryMenuWeek()
  {
    cy.xpath(this.Btn_Edit_Menu_Primary).should("be.visible");
    cy.xpath(this.Btn_Edit_Menu_Primary).click();
  }
  clickEditNurseryMenuWeek()
  {
    cy.xpath(this.Btn_Edit_Menu_Nursery).should("be.visible");
    cy.xpath(this.Btn_Edit_Menu_Nursery).click();
  }
  clickViewMealPrices()
  {
    cy.xpath(this.Btn_View_MealPrices).should("be.visible");
    cy.xpath(this.Btn_View_MealPrices).click();
  }
  clickEditCutOffTime()
  {
    cy.xpath(this.Btn_Edit_CutOff).should("be.visible");
    cy.xpath(this.Btn_Edit_CutOff).click();
  }
}
export default MenuPage