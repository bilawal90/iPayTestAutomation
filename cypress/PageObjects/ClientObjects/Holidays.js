class Holidays {
  Heading_Page = "//h3[normalize-space()='Holidays']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Holidays";
  Btn_AddNewHoliday = "//a[normalize-space()='Add New Holiday']";
  Btn_ReturnToEstablishment =
    "//a[normalize-space()='Return to Establishment List']";
  verifyHeadingandURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Holidays");
  }
  clickAddNewHoliday() {
    cy.xpath(this.Btn_AddNewHoliday).should("be.visible");
    cy.xpath(this.Btn_AddNewHoliday).click();
  }
  clickReturnToEstablishmentList() {
    cy.xpath(this.Btn_ReturnToEstablishment).should("be.visible");
    cy.xpath(this.Btn_ReturnToEstablishment).click();
  }
}
export default Holidays;
