class NotificationsPage
{
  Heading_Page = "//h3[normalize-space()='Notifications']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Notifications/AutoFundNotificationsSettings?fundType=1"
  Tab_PreOrder = "//a[normalize-space()='Pre-Order School Meals']";
  Tab_SchoolMeal= "//a[normalize-space()='School Meals']";
  Btn_Save_Notifications = "#Action";
  Btn_Return = "//a[normalize-space()='Return to Establishments']";
  verifyHeadingandURL()
  {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page).should('be.visible').and('contain', 'Notifications')
  }
  clickSaveNotificationsButton()
  {
    cy.get(this.Btn_Save_Notifications).should('be.visible');
    cy.get(this.Btn_Save_Notifications).click();
  }
  clickPreOrderTab()
  {
    cy.xpath(this.Tab_PreOrder).should('be.visible');
    cy.xpath(this.Tab_PreOrder).click();
  }
  clickSchoolMealstab()
  {
    cy.xpath(this.Tab_SchoolMeal).should('be.visible');
    cy.xpath(this.Tab_SchoolMeal).click();
  }
}
export default NotificationsPage