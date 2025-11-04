ai_tools.md
# Set Up AI Tools for Development

**Generate code snippets and analyze how useful they are.**

**Example request:**

“Write a Java method that checks if a string is a palindrome.”

**What AI generetad:**

      public static boolean isPalindrome(String text) {
    if (text == null) {
        return false;
    }
    String reversed = new StringBuilder(text).reverse().toString();
    return text.equalsIgnoreCase(reversed);
}

AI helped me quickly generate a working Java method
Now, we can check if the code is working as expected, is it easy to read, or ask for improvements.

This showed me how helpful AI can be in speeding up development and teaching different ways of coding practices.



Also, I asked ChatGPT to help me write Markdown documentation and code examples in JavaScript.  
AI provided clean and structured outputs, saving me time and helping me learn better formatting.

**Example Request:**  
"Write top 10 VS Code shortcuts and categorize them."

**Result:**  
AI generated a professional and formatted Markdown table that I directly used in my repository.


---
**Use AI for debugging a simple problem.**

I used ChatGPT to help me understand and resolve a merge conflict in Git.  
AI guided me step-by-step through using IntelliJ merge tools and fixing the conflicting lines.

- The issue was solved  
- The code compiled  
- I learned why conflicts happen

This showed how AI can act as a **debugging assistant** and teaching tool at the same time.

---

**Ask AI for explanations on a new concept you're learning.**

I asked AI to explain **Native vs WebView elements**.


### What I Learned

**Native elements**
- Part of the actual mobile operating system UI (Android/iOS)
- Very fast and smooth for user interactions
- Examples: navigation bars, system dialogs, keyboard, camera buttons
- Automation uses native locators like accessibility IDs, resource IDs, XCUITest IDs

**WebView elements**
- A mini web browser displayed inside the app
- Shows web content using HTML, CSS, and JavaScript
- Examples: login pages, embedded websites, payment forms
- Automation requires switching to a web context and using locators like CSS selectors or XPath

### Why this matters in automation

In hybrid mobile apps, both element types can exist in the same screen.  
Automation tools (like Appium) need the correct **context**:

- `NATIVE_APP` → for native elements
- `WEBVIEW` → for web-based elements

If I do not recognize the difference, my test will fail because the automation code will not find the element.

**Reflection**

AI helped me understand this topic much faster and more clearly than searching online.  
I now understand why identifying element type matters and how it affects:

- Locator strategy
- Debugging failures
- Stability of automation tests

This concept will help me a lot when I start mobile test automation in the future.

---
**My experince with AI tools:**



During my internship tasks, I used:

- **ChatGPT**  
  To ask questions, generate code, debug issues, and learn new concepts.

- **GitHub Copilot**  
  For real-time code suggestions inside VS Code and better productivity.
  

**What worked well?**

ChatGPT
- Gave very clear explanations when I didn’t understand something
- Helped debug issues (ex: merge conflict, Java error handling)
- Generated clean code examples and documentation
- Saved time searching through multiple websites


GitHub Copilot
- Suggested useful autocomplete for Java and Markdown
- Helped write cleaner code faster
- Reduced typing repetitive code

**What didn’t work perfectly?**

- Sometimes code or suggestions are not completely correct
- AI does not always understand the full context of the project
- Screenshots are not always interpreted correctly

For example:  
When I asked ChatGPT to help me identify Native vs WebView elements from a screenshot taken with inspect.exe, the AI gave me wrong `AutomationId` and `Name`.  
If I had copied the locator values without checking, my test automation would have been incorrect.

This reminded me that:
- AI is helpful  
- but I must always understand what I am doing  
- Double-check information  
- Never copy blindly


**When is AI most useful for coding?**

AI is most helpful when:
- Learning a new programming language, tool or concept (ex: JavaScript, VS Code, Native vs WebView)
- Generating repetitive or boilerplate code
- Debugging errors and understanding why something broke
- Creating documentation like Markdown files
- Speeding up development and improving productivity

By combining my testing knowledge and AI suggestions, I can work faster, focus on logic, and feel more confident in solving problems.

