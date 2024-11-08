class PreOrderThreshold {
  Heading_Page = "//h3[normalize-space()='Pre-order School Meals Balance Threshold']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Preorder/ClientThresholdManagement";
  Btn_Save = "//input[@id='btnSubmit']";
  //input[@id='btnSubmit']
  Btn_Cancel =
    "//a[normalize-space()='Cancel']";
  verifyHeadingandURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Pre-order School Meals Balance Threshold");
  }
  clickSaveThreshold() {
    cy.xpath(this.Btn_Save).should("be.visible");
    cy.xpath(this.Btn_Save).click();
  }
}
export default PreOrderThreshold;
