# Handling Flaky Tests & Improving Stability

## Task

Common Causes of Flaky Tests in E2E Automation
- Flaky tests are tests that sometimes pass and sometimes fail, even when nothing has changed.  
The most common problems, that happen often in UI automation and can make tests fail randomly are:
    - Elements are not fully loaded when the test tries to click them
    - The UI is still changing (animations, pop-ups, page transitions)
    - Locators are unstable or changing over time
    - The system, internet, or environment is running slowly

---

Use implicit waits (setImplicitWaitTimeout) to wait until elements appear before interacting

- Implicit waits help the test wait for elements to appear before interacting with them.  
Sometimes the UI loads slower than the test, so the element is not ready yet.  
With implicit waits, WebDriver keeps checking for the element for a few seconds  
instead of failing right away.


Example (Java + Selenium):

    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
The test will wait up to 5 seconds for any element to appear before throwing an error (Element Not Found).

---

Apply explicit waits (waitUntil) for specific conditions

- Explicit waits are used when the test needs to wait for something special to happen, like when an element must be:
  - visible
  - clickable
  - have certain text

Unlike implicit waits (which apply everywhere),
explicit waits are only used when needed.

Example (Java + Selenium):

    WebDriverWait wait = new WebDriverWait(driver, 5);
    wait.until(ExpectedConditions.elementToBeClickable(By.id("login-button")));

The test will wait up to 5 seconds until the login button is clickable.

---

Stabilizing Tests with Retry Logic

- Retry logic is used when a test sometimes fails due to temporary issues such as slow UI responses, network delays, or animations. Even if nothing is wrong with the application, the timing can cause the first attempt to fail.

With retry logic, the test runs again before being marked as failed.  
This helps distinguish between:
  - Temporary glitches
  - Actual defects in the system
  

**Example concept:**
1. Run the test
2. If it fails, run it again
3. If it fails the second time, then report failure


However, retries should be used carefully. If a test needs frequent retries, it may indicate a deeper issue that should be investigated, such as unstable locators or missing waits.

---

Run tests multiple times to detect inconsistencies in execution

- Sometimes a test may pass once and then fail the next time, even though nothing changed in the application. This usually means the test is flaky.

- By running the same test a few times in a row, I can see if the result is always the same.  
If the test keeps passing it means it’s stable.  
If it passes sometimes and fails sometimes it means something needs to be improved (like waits, locators, or test data).

- Running tests multiple times helps me find these hidden problems early, so the tests become more reliable in the future.



## Reflection

### What are the most common causes of flaky tests in WinAppDriver?
Flaky tests usually happen when the test runs faster than the application.  
The most common causes are:
- UI elements are not loaded in time
- Animations or pop-ups block actions
- Locators change or are not stable
- Test environment is slow or responds differently each run


---

### How do implicit waits help prevent timing-related test failures?
Implicit waits tell the test to wait a little before failing if an element is not found right away.  
This helps because the test doesn’t click too early and gives the UI time to appear,  
which makes tests less flaky.

---

### When should explicit waits be used instead of implicit waits?
Explicit waits are used only when waiting for something specific like:
- Element becomes visible
- Button becomes clickable
- Text appears on the screen

They are helpful when the UI needs extra time for certain actions or changes.  
They give the test more control and make it smarter.

---

### How does retry logic help with test stability, and when should it be avoided?
Retry logic means running the test again if it fails the first time due to a small delay.  
This helps separate real bugs from temporary failures.
  
If a test needs retries often, the test should be improved.

---

### What strategies can prevent flaky tests in large test suites?
To reduce flakiness in many tests, we can:
- Use stable locators instead of changing ones
- Add proper waits for loading and animations
- Keep test data clean and reset when needed
- Run tests in a consistent environment
- Fix tests that fail often instead of ignoring them





