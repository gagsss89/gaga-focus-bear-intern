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
``` java 
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

