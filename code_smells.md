code_smells.md

# Code Smells and How They Affect Code Quality

Code smells are small warning signs in the code that show something might be wrong with its structure or design. The program still works, but it’s harder to read, understand, and change later.

**Magic Numbers & Strings**

This happens when we use hardcoded values instead of giving them clear names. Hardcoded values make the code confusing and hard to change.

- Bad Example

```
if (userType.equals("A")) {
    discount = 0.1;
} else if (userType.equals("B")) {
    discount = 0.2;
}
```

- Better Example

```
final String ADMIN = "A";
final String BUSINESS = "B";

if (userType.equals(ADMIN)) {
    discount = 0.1;
} else if (userType.equals(BUSINESS)) {
    discount = 0.2;
}
```

**Long Functions**

Long functions are hard to read and maintain because they try to do too much at once. It’s better to split them into smaller, focused methods.

- Bad Example

```
public void processOrder(Order order) {
    validateOrder(order);
    calculateDiscount(order);
    applyTaxes(order);
    printReceipt(order);
    sendEmailToCustomer(order);
    updateDatabase(order);
}
```

- Better Example

```
public void processOrder(Order order) {
    validate(order);
    applyDiscount(order);
    finalizeOrder(order);
}

private void validate(Order order) { /* ... */ }
private void applyDiscount(Order order) { /* ... */ }
private void finalizeOrder(Order order) { /* ... */ }
```

**Duplicate Code**

Duplicate code means the same logic appears in several places. This makes it harder to update and can lead to mistakes.

- Bad Example

```
double total1 = price1 + (price1 * 0.07);
double total2 = price2 + (price2 * 0.07);
```

- Better Example

```
public double addTax(double price) {
    return price + (price * 0.07);
}

double total1 = addTax(price1);
double total2 = addTax(price2);
```

**Large Classes (God Objects)**

A “God Object” is a class that tries to do everything — managing data, logic, and communication all in one place.

- Bad Example

```
public class StoreManager {
    public void addProduct() {}
    public void removeProduct() {}
    public void calculatePayroll() {}
    public void hireEmployee() {}
    public void trackInventory() {}
    public void handleCustomerComplaint() {}
}
```

- Better Example

```
public class ProductManager { /* addProduct, removeProduct */ }
public class EmployeeManager { /* hireEmployee, calculatePayroll */ }
public class InventoryManager { /* trackInventory */ }
```

**Deeply Nested Conditionals**

Too many nested if statements make code hard to read and understand.

- Bad Example

```
if (user != null) {
    if (user.isActive()) {
        if (user.hasPermission("ADMIN")) {
            System.out.println("Access granted");
        }
    }
}
```

- Better Example (with Guard Clauses)

```
if (user == null) return;
if (!user.isActive()) return;
if (!user.hasPermission("ADMIN")) return;

System.out.println("Access granted");
```

**Commented-Out Code**

Commented-out code makes files messy and confusing, especially when it’s old and unused.

- Bad Example

```
// calculateTotalPrice(order);
// sendConfirmationEmail(order);
updateDatabase(order);
```

- Better Example

```
updateDatabase(order);
```

**Inconsistent Naming**

Inconsistent or unclear variable names make code confusing for others.

- Bad Example

```
int x;
String n;
boolean doneFlag;
```

- Better Example

```
int userCount;
String userName;
boolean isActive;
```

---

## Reflection

What code smells did you find in your code?
In my code I found a few issues like magic numbers, long functions that were doing too much, and some repeated code.
Also, some variable names were not clear, and there were a few places with nested if statements that made the code harder to read.
I also noticed a few lines of commented-out code that were not needed anymore.

How did refactoring improve the readability and maintainability of the code?
After refactoring the code looks much cleaner and easier to understand.
I used constants instead of hardcoded values, split long functions into smaller ones, and removed old comments.
Now each method has one purpose, names are more clear, and it’s easier to follow what happens in the code.

How can avoiding code smells make future debugging easier?
When the code is clean and well organized it’s easier to find problems.
If functions are short and clear, I can quickly see where something went wrong.
Avoiding code smells helps to understand the code faster and fix bugs without breaking anything else.
