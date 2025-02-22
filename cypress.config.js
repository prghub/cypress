const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, // Disable watching for file changes (optional)
    reporter: "mochawesome",    // Set Mochawesome as the reporter
    reporterOptions: {
      reportDir: "cypress/results", // Directory where the JSON reports will be saved
      overwrite: false,             // Do not overwrite existing reports
      html: true,                   // Generate an HTML report
      json: true,                   // Generate a JSON report
      reportFilename: "[name]-report" // This will generate unique reports per spec file
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here (if needed)
    },
  },
});
