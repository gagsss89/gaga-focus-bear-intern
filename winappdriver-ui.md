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



