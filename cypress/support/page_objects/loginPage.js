class LoginPage {
    // Elements
    get usernameInput() {
      return cy.get('input#user-name'); // Username input field
    }
  
    get passwordInput() {
      return cy.get('input#password'); // Password input field
    }
  
    get loginButton() {
      return cy.get('input#login-button'); // Login button
    }
  
    get errorMessage() {
      return cy.get('h3[data-test="error"]'); // Error message displayed on failed login
    }
  
    // Methods
    visit() {
      cy.visit('https://www.saucedemo.com/'); // Visit the SauceDemo login page
    }
  
    typeUsername(username) {
      this.usernameInput.type(username); // Type the provided username into the username input field
    }
  
    typePassword(password) {
      this.passwordInput.type(password); // Type the provided password into the password input field
    }
  
    submitLogin() {
      this.loginButton.click(); // Click the login button
    }
  
    login(username, password) {
      this.visit();             // Visit the login page
      this.typeUsername(username); // Type the username
      this.typePassword(password); // Type the password
      this.submitLogin();        // Submit the login form
    }
  
    verifyErrorMessage(message) {
      this.errorMessage.should('have.text', message); // Verify the error message text
    }
  }
  
  export default new LoginPage(); // Exporting an instance of LoginPage for use in the test files
  