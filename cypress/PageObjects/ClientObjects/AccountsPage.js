class AccountsPage {
  Page_Heading = "//h3[normalize-space()='Accounts']";
  Label_Establishment = "//label[normalize-space()='Establishment']";
  Button_Establishment = "#btn-select-establishment";
  Dropdown_Establishment = "#SelectedEstablishment";
  Dropdown_Year ="#SelectedYearClass";
  //Labels_TextFields = ".col-sm-3.col-form-label";
  Label_Establishment = "//label[normalize-space()='Establishment']";
  Label_Year = "//label[normalize-space()='Year / Class']";
  Label_Surname = "//label[normalize-space()='Surname']";
  Label_Inactive = "//label[normalize-space()='Include Inactives']";
Button_ApplyFilter = "#btn-apply-filter";
Button_ClearFilter = "input[value='Clear Filter']" ;
Message_NoAccount = "//td[normalize-space()='No Accounts Found']";
Account_Info = "//td[normalize-space()='Test, AccountAuto1']" ;
URL_PAGE = "https://test.ipayimpact.co.uk/Test/ClientAccounts/ClientAccountList"
    HEADING_PAGE = "//h3[normalize-space()='Accounts']"
    verifyHeadingAndURL()
    {
        cy.url().should("include", this.URL_PAGE);
        cy.xpath(this.HEADING_PAGE).should('be.visible').and('contain', 'Accounts');
    }
verifyHeadingVisibility()
{
    cy.xpath(this.Page_Heading).should('be.visible').and('contain', 'Accounts');
}
selectYearValue()
{
  cy.get(this.Dropdown_Year)
    .select("N/A|N/A")
    .should("have.value", "N/A|N/A");
}
selectEstablishmentValue()
{
    cy.get(this.Button_Establishment).should('be.visible');
    cy.get(this.Dropdown_Establishment)
    .select("44401")
    .should("have.value", "44401");
    cy.get(this.Button_Establishment).click();
}
verifyTextboxLabelsVisibility()
{
    cy.xpath(this.Label_Establishment).should('be.visible');
    cy.xpath(this.Label_Year).should('be.visible');
    cy.xpath(this.Label_Surname).should('be.visible');
    cy.xpath(this.Label_Inactive).should('be.visible');
   }
verifyApplyFilterFunctionality()
{
    cy.get(this.Button_ApplyFilter).should('be.visible');
    cy.get(this.Button_ApplyFilter).click();
    cy.xpath(this.Account_Info).should('be.visible');
}
verifyClearFilterFunctionality()
{
    cy.get(this.Button_ClearFilter).should('be.visible');
    cy.get(this.Button_ClearFilter).click();
    cy.xpath(this.Message_NoAccount).should('be.visible');
}
}
export default AccountsPage;
