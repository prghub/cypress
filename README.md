# Cypress SauceDemo Test Automation

This repository contains automated tests for the SauceDemo web application using **Cypress with Javascript**. It includes test scenarios for logging into the application with both valid and invalid credentials.

## Key Sections Breakdown:
- **[Project Setup](#project-setup):** Explains prerequisites (Node.js and Git) and how to install dependencies.
- **[Running Tests](#running-tests):** Describes how to run the tests in both interactive and headless modes.
- **[Test Cases](#test-cases):** Lists the test scenarios covered, such as valid and invalid login.
- **[Folder Structure](#folder-structure):** Provides an overview of the project's directory and key files.
- **[Reporting](#reporting):** Information about the Mochawesome reporter and where to find the reports.
- **[Example of Test File](#example-of-test-file):** Shows an example test file (`login.cy.js`) for login testing.

## Tools Used
- **Cypress**: A powerful testing framework for end-to-end testing.
- **JavaScript**: The programming language used for test scripts.
- **Node.js**: The runtime environment used to run the project.
- **Mochawesome Reporter**: Used for generating test reports in a beautiful format.

## Project Setup

Before running the tests, make sure you have the following prerequisites:

1. **Install Node.js**: If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/) and install the latest stable version.
   
2. **Install Git**: If you don't have Git installed, you can download it from [git-scm.com](https://git-scm.com/).

3. **Clone the Repository**: Clone this repository to your local machine.
    ```bash
    git clone https://github.com/your-username/cypress-saucedemo.git
    cd cypress-saucedemo
    ```

4. **Install Dependencies**:
    ```bash
    npm install
    ```

This will install the necessary dependencies, including Cypress and Mochawesome.

## Running Tests

Once the setup is complete, you can run the tests in either interactive or headless mode.

### Interactive Mode

To open Cypress in interactive mode (with the GUI):

```bash
npx cypress open
