e2e-testing-intro.md

## Reflection

**What is the difference between E2E, unit, and integration testing?**

- Unit testing checks small pieces of code like one function or method to make sure it works correctly on its own.
- Integration testing checks if two or more parts of the system work well together (for example, API and database).
- End-to-End (E2E) testing checks the whole app from the user’s point of view, from start to finish.
  It tests full user flows, like opening the app, logging in, saving data, and making sure everything connects and works as expected.

**What are the key benefits of E2E tests in a real-world application?**

- They make sure the main user features work after new updates.
- Catch bugs that smaller tests might miss.
- Help developers see if the full app flow still works — from the UI to the backend.
- Build confidence before releasing new versions.
- Save time by automating tests that would take long to repeat manually.

**How does automated testing help Focus Bear reduce regression bugs?**

Automated tests run every time there is a new change in the app.
This helps Focus Bear catch bugs early, especially when a new feature accidentally breaks an older one.
For example, when updating the habit creation flow, E2E tests can confirm that “Save Habit” and “Select Language” still work properly.
This keeps the app stable and gives users a smooth experience.

**What are some challenges of writing and maintaining E2E tests?**

- Setting up the environment and drivers can take time.
- If the UI changes (for example, button names or IDs), tests need to be updated.
- Some tests fail because of timing issues, even when the app is fine.
- E2E tests take longer to run than unit tests.
- It can be hard to find the exact reason for failure because E2E tests cover many parts of the system.
