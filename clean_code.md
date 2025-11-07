clean_code.md

# Understanding Clean Code Principles

# Clean Code Principles

Clean code is code that is simple, readable, consistent, easy to maintain, and efficient.

---

## Simplicity

Do only what is necessary — avoid unnecessary complexity.

Good Example:
`int sum = a + b`;

Bad Example:
`int sum = (a * 2 + b * 2) / 2`;

---

## Readability

Code should be easy to understand at first glance.

Good Example:
`int itemCount = cart.getItemCount()`;

Bad Example:
`int x = cart.g()`;

---

## Maintainability

Future developers should easily update the code.

Example:

`String getFullName() {
    return firstName + " " + lastName;
}`

✔ If requirements change (middle name), you only update this method, not everywhere in the code.

---

## Consistency

Follow the same style rules throughout the project.

Good Example:
`String firstName`;
`String lastName`;
`String phoneNumber`;

Bad Example:
`String FirstName`;
`String phone_number`;
`String PHONENUM`;

✔ Consistency makes the code predictable and easier to read.

---

## Efficiency

Write performant code, but only after the code is clear.

Good Example:

`List<User> activeUsers = users.stream()
        .filter(User::isActive)
        .toList()`;

Bad Example:

    List<User> activeUsers = new ArrayList<>();

    for (int i = 0; i < users.size(); i++) {

    if (users.get(i).isActive()) {

        activeUsers.add(users.get(i));
    }
    }

---

## Messy vs Clean Code Example-Sum of Negative Numbers

### Messy Code

```java
int[] n = {1, -4, 3, -2, 5};
int s = 0;
for(int i=0;i<n.length;i++){if(n[i]<0){s+=n[i];}}
System.out.println(s);

- Variables n and s do not explain anything
- Hard to read, everything is in one line
- No spacing or formatting, which is confusing
```

### Clean Code

```java
int[] numbers = {1, -4, 3, -2, 5};
int sumOfNegatives = 0;

for (int number : numbers) {
    if (number < 0) {
        sumOfNegatives += number;
    }
}

System.out.println(sumOfNegatives);


- Variable names describe purpose
- Clean structure and formatting
- Enhanced readability
- Logic is easy to understand
```

---

## Reflection

**Why is code formatting important?**

Code formatting keeps the code clear and consistent. When everything looks the same, the code is much easier to read, review, and maintain. It helps avoid confusion and prevents mistakes.

---

**What issues did the linter detect?**

The linter did not show any major issues in my codebase. This means the rules were followed correctly. If there were problems, ESLint would list them and suggest fixes. Running the linter confirmed that the code meets the required standards.

---

**Did formatting the code make it easier to read?**

Yes. After running Prettier and enabling auto-format on save, the code became more organized and easier to read. Formatting fixed spacing, quotes, semicolons, and made everything much cleaner.

---

## Variable Naming – Unclear variables vs Clean variables

### Messy Code (unclear names)

```js
let x = [2, -3, 5];
let s = 0;

for (let i = 0; i < x.length; i++) {
  if (x[i] < 0) {
    s += x[i];
  }
}

console.log(s);
```

- x does not describe what the values represent

- s doesn’t tell what is being calculated

- Hard to understand the purpose without reading the logic

### Clean Code (clear names)

```js
let numbers = [2, -3, 5];
let sumOfNegatives = 0;

for (let number of numbers) {
  if (number < 0) {
    sumOfNegatives += number;
  }
}

console.log(sumOfNegatives);
```

- numbers explains what the array contains

- sumOfNegatives shows the meaning and purpose of the result

- Code is easier for others to read and understand

---

## Reflection

**What makes a good variable or function name?**

A good name clearly describes what the variable stores or what the function does. It should be simple, consistent, and easy to understand without needing comments. Good naming helps other developers quickly understand the purpose of the code.

---

**What issues can arise from poorly named variables?**

Poorly named variables make the code confusing and harder to read. Developers may misunderstand the purpose of the data, which can lead to bugs, mistakes, and longer debugging time. It slows down teamwork and maintenance.

---

**How did refactoring improve code readability?**

Refactoring by renaming variables and functions made the intention of the code clear. I can now understand what each part does at a glance, without guessing. The code became more organized, structured, and professional.

---

## Example of a Long Function (3 Responsibilities)

```js
function handleScore(playerScore) {
  // Validate score
  if (playerScore < 0) {
    console.log('Invalid score');
    return;
  }

  // Update high score
  if (playerScore > highScore) {
    highScore = playerScore;
    console.log('New high score!');
  }

  // Display result
  console.log('Your score is ' + playerScore);
}
```

## Refactored Version

```js
function isScoreValid(score) {
  return score >= 0;
}

function updateHighScore(score) {
  if (score > highScore) {
    highScore = score;
    console.log('New high score!');
  }
}

function displayScore(score) {
  console.log('Your score is ' + score);
}
```

## Reflection

**Why is breaking down functions beneficial?**

Breaking down functions into smaller parts makes the code easier to read, test, and maintain. Each small function has one clear job, which reduces confusion and helps prevent bugs.

**How did refactoring improve the structure of the code?**

After refactoring, the code became more organized and logical. Each function now focuses on a single task, and the main function reads like a list of simple actions. This structure makes the code easier to understand and modify.

---

## The DRY (Don't Repeat Yourself) Principle

**DRY** stands for **Don't Repeat Yourself** - a key clean code principle that says:

> Every piece of knowledge or logic should exist in only one place in the codebase.

If you find yourself copying and pasting code or logic, it’s time to **refactor** it into a function, class, or shared module.

---

### Why DRY is Important?

- **Less duplication:** Avoids repeating the same code in multiple places.
- **Easier maintenance:** Fix a bug or make a change in one place instead of many.
- **Consistency:** Prevents small differences between repeated code that can cause bugs.
- **Smaller codebase:** Cleaner, easier to navigate and understand.

---

**What were the issues with duplicated code?**

When the same code was written in many places, it became harder to change or fix. If one part needed an update, I had to change it everywhere. That made the code confusing and easy to break.

**How did refactoring improve maintainability?**

After cleaning up the repeated code and putting it into one shared method, it became easier to update. Now, if something needs to change, I only fix it once, and everything stays the same and works better.

---

## Refactoring Code for Simplicity

Refactoring means improving the internal structure of code **without changing what it does**.  
It helps make the code cleaner, easier to read, and easier to maintain.

**Extract Method**

Move a piece of code into a separate method or function.

**Rename Variable or Function**

Use clear and meaningful names.

Bad examlpe:

`let x = 20;
function f(y) { return y * 2; }`

Good example:

`let itemPrice = 20;
function doubleValue(number) { return number * 2; }`

**Remove Duplicated Code**

If the same code appears in multiple places, combine it into one shared method. It is easier to maintain, change once, fix everywhere.

**Simplify Conditional Logic**

Bad example:

`if (age > 17) {
  canVote = true;
} else {
  canVote = false;
}`

Good example:

`canVote = age > 17`;

**Extract Common Code into Utilities**

If multiple files use the same logic (e.g., waits, login), move it into a helper or utils file.

**Remove Dead or Unused Code**

Delete old functions or variables that are never used, they just create confusion.

**Break Large Functions into Smaller Ones**

Each function should have one purpose.
This improves testing and readability.

---

## Reflection

**What made the original code complex?**

In the example “Example of a Long Function (3 Responsibilities)”, the original code was complex because one function was doing several different things — it validated the score, updated the high score, and displayed the result. Having all these actions inside one function made it harder to understand and maintain. If one part needed a change, the whole function had to be edited.

**How did refactoring improve it?**

After refactoring, the code was split into smaller functions — isScoreValid(), updateHighScore(), and displayScore(). Each function now has a single, clear purpose. This made the main function shorter and easier to read. The structure became more organized, and changes can now be made in one small place without affecting other parts of the code.
