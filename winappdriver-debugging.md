# Debugging & Handling Common Test Failures

## Task

### Learn how to debug failing WinAppDriver tests using logs and screenshots

When a WinAppDriver test fails, we use logs and screenshots to understand what really happened.

Logs show the steps the test executed and where it stopped.  
The error message inside the logs tells us exactly what went wrong,  
such as which element was not found or not clickable.

We also take a screenshot at the time of failure.  
This shows what the application looked like when the error happened,  
for example if the page was still loading or a popup was blocking the element.

Logs show me the steps that were executed,
and the error message tells me exactly what element was not found.
Then I check the screenshot to see why it wasn’t visible at that moment.

Using logs + screenshots together helps find the cause of the problem faster,  
so we can fix the locator, add waits, or update the test if needed.

---

### Use explicit waits to handle elements that take time to load

Sometimes the application needs more time to show a button, field, or message.  
If the test tries to click too early, it will fail even though the app is working correctly.

Explicit waits allow the test to wait for a specific condition, like:

• element becomes visible  
• element becomes clickable  
• text appears

Example (Java + Selenium):

        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.elementToBeClickable(By.id("loginBtn")));

---

### Investigate and fix a flaky test (a test that sometimes passes and sometimes fails)

Flaky tests fail sometimes even though the application is working fine.  

To investigate a flaky test, first check:

• Logs → to see exactly which step failed  
• Error message → to understand the reason  
• Screenshot → to see what the UI looked like at that moment

Example:
The test failed when trying to click an element (Login btn) that wasn’t fully loaded yet.
The screenshot showed the page was still loading.
The logs showed a "not clickable" or "element not found" error.

Fix:

Add an explicit wait to make sure the element becomes visible and clickable
before the action happens. This helps the test wait for the UI instead of failing too early.

After adding the wait, ran the test multiple times to confirm it is now stable.

---

### Implement retry logic for WebView interactions when needed

A WebView is a part of a desktop or mobile app that displays web content inside the app, So even though the app looks like a normal Windows app, part of it is really a website inside the app.

Parts of the application that use WebView can load slower because they depend on web content.  
Sometimes the element is there, but it is not fully ready to click or interact with yet.

Retry logic helps in these cases by trying the interaction again if it fails the first time.  
This gives the WebView a little extra time to load before the test gives up.

Example concept:
1. Try to click a WebView element
2. If it fails, wait a short moment
3. Try again before marking the test as failed


---

## Reflection

- What are the most common reasons for E2E test failures?  
   Most E2E failures happen because the test runs faster than the UI.  
   Elements are not ready yet, or the page is still loading.  
   Other causes include unstable locators, pop-ups blocking elements, or slow network responses.

- How do you determine if a test is flaky?  
   If the test sometimes passes and sometimes fails with the same steps and same data,  
   then it is flaky. Running it a few times in a row helps check if the result is consistent.

- What strategies can you use to improve test reliability?  
   Use better waits, stable locators, reusable helpers, and keep tests independent.  
   Avoid repeated code in tests, and fix tests that fail often instead of ignoring them.

- How can logging and screenshots help with debugging test failures?  
   Logs show which step failed and the error message tells what went wrong.  
   Screenshots show what the application looked like at that moment.  
   Together, they help understand the real cause of the failure much faster.


