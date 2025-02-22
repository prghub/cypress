import LoginPage from '../support/page_objects/loginPage'; // Importing the Page Object Model

describe('SauceDemo Login Page Tests', () => {

  // Hook to visit the login page before each test
  beforeEach(() => {
    LoginPage.visit(); // Visit the SauceDemo login page before each test
  });

  // Test for valid credentials
  describe('Valid Login Credentials', () => {
    it('should login successfully with valid credentials', () => {
      // Perform login with valid credentials using the Page Object Model
      LoginPage.login('standard_user', 'secret_sauce');
      
      // After successful login, verify if the user is redirected to the inventory page
      cy.url().should('include', '/inventory.html');  // Check URL to confirm successful login
      cy.get('.inventory_list').should('be.visible');  // Check if inventory list is visible
    });
  });

  // Test for invalid credentials
  describe('Invalid Login Credentials', () => {
    it('should show an error message with invalid credentials', () => {
      // Perform login with invalid credentials using the Page Object Model
      LoginPage.login('invalid_user', 'wrong_password');
      
      // Verify the error message is shown
      LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
  });

});
