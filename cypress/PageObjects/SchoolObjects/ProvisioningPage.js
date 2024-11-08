class ProvisioningPage {
  Heading_Page = "//h3[normalize-space()='Order Provisioning']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Fund/OrderProvisioningList";
  verifyHeadingandURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Order Provisioning");
  }
}
export default ProvisioningPage;
