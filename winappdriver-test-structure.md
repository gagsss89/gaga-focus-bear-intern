# Structuring E2E Tests for Maintainability

## Structuring E2E Test Files

A good structure makes E2E tests easy to read, easy to use, and easy to maintain as the project grows.

We use the Page Object Model (POM) to organize each application page with its web elements and actions. This reduces duplicated code and simplifies updates when the UI changes.

Typical folder structure:
• pages - locators and methods for each page• step_definitions - connection between Gherkin steps and code  
• features - feature files grouped by modules (Login, Profile, Settings)  
• runner - test runner setup  
• utilities - helpers like WebDriver setup, BrowserUtils, waits, configuration

We apply BDD (Behavior-Driven Development) to write test scenarios using Gherkin (Given-When-Then), so the tests are understandable to both technical and non-technical team members.

We also implement design patterns like Singleton Driver to ensure only one WebDriver instance is used during the test run, improving stability.

Tests should be independent from each other, so if one fails, others can still pass.

We generate reports and take screenshots when a test fails. This helps the team understand the problem faster and improves debugging.

This structure helps keep automation clean, organized, and scalable.

--- 

### Organizing Test Cases into Reusable Helper Functions

In E2E automation, some actions repeat in many test cases, such as login, navigation, or logout.  
Instead of writing the same code in every test, we create helper functions that can be reused.  
This keeps tests clean and easier to maintain.


Examples of helper actions:

• login  
• navigate to a module  
• logout  
• setup or teardown steps

We used these in the Bootcamp project inside:

• Page Object methods (like loginPage.login())  
• Utility methods (BrowserUtils such as waits and scrolling)  


In BDD, we often put repeated steps like login or teardown into the **Background** section of a feature file.  
This means those steps run before every scenario automatically, so we don’t have to write them again.

If something changes in the application (example: login page is updated),  
we only update one helper method and all tests benefit from the fix.

This approach reduces duplicated code and makes the test framework more organized, readable, and easier to maintain.

---


### Implement Page Object Model (POM) to separate test logic from UI interactions

Page Object Model (POM) is a way to organize automation code so that tests are clean and easy to maintain.  
Instead of writing locators and UI actions directly in test files, we store them inside special classes.

Each page of the application has its own class in the "pages" folder.  
That class contains:
• locators for elements on that page  
• reusable methods for actions (click, enter text, select, etc.)

        Example idea:
        • LoginPage → username field, password field, login() method  
        • DashboardPage → menu buttons, navigateTo() method


We also use a BasePage class inside the pages folder. The BasePage contains common elements and actions that are shared across multiple pages, such as navigation buttons, logout, or wait methods. Other page classes extend BasePage, so they automatically inherit these shared features.

---

### Refactor an existing test to improve maintainability

Refactoring means improving the structure of the test without changing what it does.  
The goal is to make tests easier to read, update, reduce duplication and make the automation framework more stable.

In E2E automation, we refactor by removing repeated code and moving it into:
• Page Object methods  
• Helper (utility) functions  
• Background section in feature files  
• Hooks (Before/After) for setup and teardown actions

Hooks help reduce repetition because actions like opening the browser, login, or closing the browser run automatically for every test.  
This keeps test files clean and focused only on the behavior being tested.


Refactoring also includes:

• improving locators and naming  
• removing hard-coded data  
• splitting long test steps into smaller reusable steps


---  



## Reflection

What are the key principles of maintainable E2E test code?  
- Tests should be clean, easy to read, and not have repeated code.  
   Everything should be simple to update when the application changes.

How does the Page Object Model (POM) improve test readability?  
- POM keeps all locators and actions in page classes, so the test only shows the steps the user takes.  
   This makes the test look more like a real user journey and easier to understand.

Why should repetitive actions (like login steps) be moved to reusable helpers?  
- Because writing the same steps in every test is hard to maintain.  
   If something changes, we only update the helper once and all tests will use the update automatically.

How can a well-structured test suite speed up debugging and test writing?  
- When everything is organized, pages, helpers, steps, it’s easier to find what is broken when a test fails.  
   Also, we write new tests faster because we already have reusable methods.




