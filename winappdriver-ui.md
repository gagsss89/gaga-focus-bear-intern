# Interacting with Native Windows UI Elements

## Task

**Use inspect.exe or Appium Desktop to locate UI elements**

### Inspect.exe Example: Locating a UI Element

(https://github.com/gagsss89/gaga-focus-bear-intern/blob/main/FocusBear%20UI%20Element.png)

Here is an example where I inspected the **Select Language** dropdown inside the Focus Bear Windows app.

Inspect.exe shows useful element properties:

- **ControlType**: Combo box
- **AutomationId**: cmbLanguage
- **FrameworkId**: "WPF"
- **ClassName**: "ComboBox"

📌 Based on these properties, a valid WinAppDriver locator could be:

        driver.findElement(By.id("cmbLanguage")).click();

---

**Write a test that clicks a button and verifies the result**

https://github.com/gagsss89/gaga-focus-bear-intern/blob/main/SaveHabitsBTN.png

    @Test
    public void testSaveHabitsButton() {

    //Find the Save Habits button by Name
    WebElement saveButton = driver.findElement(By.name("Save Habits"));

    //Perform click action
    saveButton.click();

    //Verify expected result — example: success message appears
    WebElement confirmationMessage = driver.findElement(By.name("Successfully added habit"));
    assertTrue(confirmationMessage.isDisplayed());

}

---

**Automate typing into an input field and checking the entered value**

https://github.com/gagsss89/gaga-focus-bear-intern/blob/main/inputField%20Screenshot.png

    @Test
    public void testEnterHabitName() {

    // Locate the second Habit text input
    WebElement habitInput = driver.findElement(By.xpath("(//Edit)[2]"));

    // Enter habit name
    String expectedText = "Walk";
    habitInput.clear();
    habitInput.sendKeys(expectedText);

    // Verify typed value
    String actualText = habitInput.getAttribute("Value.Value");
    assertEquals(expectedText, actualText);

}

**Note**

habitInput.getAttribute("Value.Value"); - What text is currently stored inside this input field?
This makes it the correct way to verify text entry for desktop apps — instead of .getText() which often returns empty string in Windows UI automation.

**Additional Note:**

The Habit input field is hosted inside a WebView (FrameworkId = Chrome), not a native WPF/Win32 element. Because of this:

- AutomationId was not available for this element
- I used an XPath locator: (//Edit)[2])
- To verify the text, I accessed "Value.Value" attribute (WebView behavior)
- WinAppDriver needs this method to read typed text inside WebView input fields

This shows the difference in automation strategies between **native Windows UI** and **WebViews**.

---

**Handle modal dialogs and dropdown interactions**

Modal dialogs are small windows that require the user to confirm or cancel an action before continuing.
They can be automated by locating the dialog and clicking a button inside it.

**Example**

```WebElement confirmDialog = driver.findElement(By.name("Confirm Exit"));
WebElement okButton = confirmDialog.findElement(By.name("OK"));
okButton.click();
```

**Dropdown Interaction**

In Focus Bear, I used Inspect.exe to inspect the Select Language dropdown inside the settings window.

Inspect.exe Properties:

- ControlType: ComboBox
- AutomationId: cmbLanguage
- FrameworkId: WPF
- ClassName: ComboBox

```
@Test
public void testSelectLanguageDropdown() {
    // Open the dropdown
    WebElement dropdown = driver.findElement(By.id("cmbLanguage"));
    dropdown.click();

    // Select an option (example: English)
    WebElement option = driver.findElement(By.name("English"));
    option.click();

    // Verify selected value
    String selectedValue = dropdown.getAttribute("Value.Value");
    assertEquals("English", selectedValue);
}
```

---

## Reflection

**How do you locate and interact with Windows UI elements in WinAppDriver?**

In WinAppDriver, I use Inspect.exe to find details about each UI element in the app, such as its name, control type, or automation ID.
Once I have that information, I can write locators in my test to find and interact with the element.
Common actions include clicking buttons, typing into text boxes, opening dropdowns, and verifying text or values.
These actions help automate how a user would normally interact with the Windows app.

**What are the different ways to find elements (e.g., XPath, Accessibility ID)?**

There are several ways to locate elements in WinAppDriver:

- AutomationId - the most reliable and preferred method if available.
- Name - uses the visible label of the element.
- XPath - helpful when AutomationId is missing, especially in WebViews or complex UIs.
- ClassName or ControlType - sometimes used to identify elements by type.

**How would you handle UI elements that load dynamically?**

Some UI elements take time to appear, especially after clicking a button or switching tabs.
To handle that, I use waits in my test, for example, WebDriverWait or Thread.sleep() to pause until the element becomes visible.
This helps avoid errors like “element not found” or “stale element.”
Another option is to check for the element in a loop until it shows up.

**What are common challenges when automating native Windows UI interactions?**

- Some elements don’t have AutomationIds, which makes them harder to find.
- Apps with WebViews (like Focus Bear) can mix web and native elements, which need different locator strategies.
- Timing issues - some elements appear slowly or change position.
- Flaky tests can happen if the app UI changes after updates.
- Sometimes WinAppDriver doesn’t recognize custom controls or third-party UI frameworks.
