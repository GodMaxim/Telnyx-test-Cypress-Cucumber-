# Telnyx E2E Automation Framework (Cypress + Cucumber)

End-to-End (E2E) test automation framework for the **Telnyx** application, built using **Cypress**, **Cucumber (Gherkin)**, and the **Page Object Model (POM)** design pattern. Fully integrated with **GitHub Actions** for continuous integration (CI/CD).

---

## 🛠 Tech Stack

* **Test Runner:** [Cypress](https://www.cypress.io/) (^16.1.0)
* **BDD Framework:** [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) (^28.0.0)
* **Bundler:** [ESBuild](https://github.com/bahmutov/cypress-esbuild-preprocessor)
* **Selectors:** Native Cypress selectors
* **CI/CD:** GitHub Actions

---

## 📂 Project Structure

```text
telnyx-cypress-cucumber/
├── .github/
│   └── workflows/
│       └── cypress.yml       # GitHub Actions CI/CD pipeline configuration
├── cypress/
│   ├── e2e/                  # BDD feature scenarios (.feature files)
│   │   ├── VoiceAi.feature
│   │   ├── Login.feature
│   │   └── ...
│   ├── pages/                # Page Object Model classes (POM)
│   │   ├── CommunicationPage.js
│   │   ├── LoginPage.js
│   │   └── ...
│   ├── support/
│   │   ├── step_definitions/ # Step implementation files
│   │   └── e2e.js            # Global setup and exception handlers
│   └── screenshots/          # Test failure screenshots
├── cypress.config.ci.js      # Cypress configuration file for CI
├── cypress.config.js         # Cypress configuration file
├── package.json              # Project dependencies and scripts
└── README.md
```

## Getting Started

 * Prerequisites
 Make sure you have installed:
 - Node.js (LTS version recommended)
 - npm

* Installation
Clone the repository and install dependencies:
- git clone https://github.com/GodMaxim/Telnyx-test-Cypress-Cucumber-.git 
- cd telnyx-cypress-cucumber
- npm install

## Running Tests

1. Interactive Mode (Cypress Test Runner) 
* For debugging and visual test execution:
- npx cypress open

Select E2E Testing, pick your preferred browser, and choose the .feature file you want to run.

2. Headless Mode (CLI)
* To run all tests in the console (using the script defined in package.json):
- npm test

## CI/CD (GitHub Actions)
The project automatically triggers all E2E tests on every push or pull_request to the main/master branches, and also supports manual execution via workflow_dispatch from the GitHub Actions tab. The pipeline configuration is stored in .github/workflows/cypress.yml.




