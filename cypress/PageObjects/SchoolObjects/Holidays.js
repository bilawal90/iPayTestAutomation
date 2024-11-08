class Holidays {
  Heading_Page = "//h3[normalize-space()='Holidays']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Holidays";
  Btn_AddNewHoliday = "//a[normalize-space()='Add New Holiday']";
  Btn_ReturnToEstablishment =
    "//a[normalize-space()='Return to Establishment List']";
  verifyHeadingandURL() 
  {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Holidays");
  }
  clickReturnToEstablishmentList() 
  {
    cy.xpath(this.Btn_ReturnToEstablishment).should("be.visible");
    cy.xpath(this.Btn_ReturnToEstablishment).click();
  }
  clickAddNewHoliday1() 
  {
    cy.xpath(this.Btn_AddNewHoliday).should("be.visible");
    cy.xpath(this.Btn_AddNewHoliday).click();
  }
}
export default Holidays;
