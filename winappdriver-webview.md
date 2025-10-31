# Automating WebViews Inside the Windows App

## Task

**WebView Detection Results (Using Inspect.exe)**

I used the Inspect.exe tool to examine UI elements inside the Focus Bear app.
(https://github.com/gagsss89/gaga-focus-bear-intern/blob/main/FB%20Inspect.png)

When hovering the time picker element, I found:

- `FrameworkId = Chrome` 
- `ControlType = time picker`
- `AutomationId = null` → not usable for WinAppDriver

This confirms that the UI runs inside a WebView.
Therefore, to automate these elements, we need Appium Web selectors such as XPath or CSS.

Example selector that would be needed:

- `By.xpath("//label[contains(text(),'Morning routine start time')]")`

WinAppDriver alone is not enough — we need a hybrid testing approach.

---

**Reminder**

Inspect.exe helped me understand that Focus Bear is a hybrid UI.
WinAppDriver can only interact with native Windows controls,
but for WebView controls (FrameworkId = Chrome),
we must use Appium and Web locators.

If FrameworkId = Win32
- Native Windows UI element
- Can be automated directly with WinAppDriver
- No need for WebView mode

If FrameworkId = Chrome
- WebView element (React web content inside the app)
- WinAppDriver alone cannot control it
- Needs Appium WebView context + CSS/XPath selectors


---

**Switching Between Native Windows Context and WebView Context**

The Focus Bear app is a hybrid application. That means some parts of the UI are native Windows elements, and other parts are WebView elements built with web technologies (like React). To automate this app, we need to switch between these two contexts during tests.

**How it works:**
- **NATIVE_APP** - for Windows UI elements (Win32)
- **WEBVIEW** - for content inside the embedded browser (React UI)

We first check what contexts are available, then select the correct one.

###  Example (Java + Appium)


        // Show all available contexts
        System.out.println(driver.getContextHandles());
        
        // Switch to WebView context
        for (String context : driver.getContextHandles()) {
        if (context.contains("WEBVIEW")) {
        driver.context(context); 
        // Now we can use CSS/XPath selectors
        break;
        }
        }

        // Example action inside the WebView
        driver.findElement(By.cssSelector("input[type='text']")).sendKeys("07:00 AM");

        // Switch back to native context
        driver.context("NATIVE_APP");

---
 
**Example Test: Interacting with a WebView Element**

This test shows how to switch into the WebView context and interact with a UI element inside the Focus Bear app (React content). The example clicks a button inside the WebView.

### Java + Appium Example


        @Test
        public void clickWebViewButton() throws InterruptedException {

    // Switch into WebView context
    for (String context : driver.getContextHandles()) {
        if (context.contains("WEBVIEW")) {
            driver.context(context);
            break;
        }
    }

    // Click a button inside the WebView (example: Save Habits button)
    driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();

    // Switch back to Native Windows context
    driver.context("NATIVE_APP");
    }

---

**Verifying That WinAppDriver Can Extract Text and Elements From the WebView**


### Example Test (Java + Appium)


    @Test
    public void verifyWebViewText() {

    // Switch into WebView context
    for (String context : driver.getContextHandles()) {
        if (context.contains("WEBVIEW")) {
            driver.context(context);
            break;
        }
    }

    // Locate an element inside the WebView and extract its text
    WebElement title = driver.findElement(By.xpath("//h1"));
    String text = title.getText();

    System.out.println("Text from WebView: " + text);

    // Simple validation (example)
    Assert.assertTrue(text.contains("Morning"));

    // Switch back to native context
    driver.context("NATIVE_APP");
    } 

---

## Reflection

### How do you detect WebView components in a Windows app?
I use **Inspect.exe** to inspect UI elements.  
If the element shows **FrameworkId = "Chrome"**, that means it is part of a **WebView**.
If it shows **FrameworkId = "Win32"**, then it is a **native** Windows element.  
This helps me know which automation strategy to use.

---

### What is the difference between testing native Windows UI and WebViews?
- **Native UI** uses Windows automation properties  
  - WinAppDriver can interact with them directly using AutomationId, Name, or ControlType
- **WebView UI** is actually a webpage inside the app  
  - We must use web automation selectors like CSS or XPath  
   and treat it like a browser test

In summary:  
Native = WinAppDriver locators  
WebView = Appium Web selectors

---

### How does WinAppDriver switch between native and WebView contexts?
We first ask the driver what contexts are available using:

    driver.getContextHandles();
There are usually two contexts:
"NATIVE_APP" and "WEBVIEW_Chrome"
- We switch to WebView when interacting with HTML elements
and switch back to Native for OS-level controls:

        driver.context("WEBVIEW_Chrome");
        driver.context("NATIVE_APP");

---


### What challenges might arise when automating WebViews, and how can they be resolved?

Challenges:
- Elements may not have AutomationId (null)
- WebView content loads slower than native UI
- Locators can break if the HTML structure changes

Solutions:
- Use XPath/CSS selectors instead of AutomationId
- Add explicit waits to handle loading time
- Use retry logic when needed to avoid flakiness
- Work closely with developers to choose stable attributes for locators
