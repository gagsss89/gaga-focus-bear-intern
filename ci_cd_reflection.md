ci_cd_reflection.md

## Reflections

**What is the purpose of CI/CD?**

The purpose of CI/CD is to make software development faster, more reliable, and less manual.
Continuous Integration (CI) automatically tests and checks the code every time someone makes changes, so problems are found early.
Continuous Delivery or Deployment (CD) helps release updates quickly and safely.
Together they make sure the project stays stable and ready to use at any time.

**How does automating style checks improve project quality?**

Automating style checks helps keep all the code and documentation consistent.
Instead of everyone having their own writing or formatting style, tools like linters check everything the same way.
This makes the project cleaner, easier to read, and more professional.
It also saves time because small mistakes and typos are caught automatically before reviews.

**What are some challenges with enforcing checks in CI/CD?**

Sometimes CI/CD checks can be too strict and fail for small issues that don’t really matter.
Setting them up correctly takes some time and testing, especially when different tools use different rules.
Also, builds can take longer when many checks run at once, which can slow down development if not optimized.
But once everything is configured, it becomes much easier to manage.

**How do CI/CD pipelines differ between small projects and large teams?**

In small projects, CI/CD pipelines are usually simple, maybe just running tests or style checks on each commit.
In large teams, the pipelines are more complex and include steps for building, testing, security scanning, and deploying to different environments.
Big projects often use multiple pipelines and approval stages before code goes live.
The main goal is the same, but the setup depends on the size of the team and how often the code changes.
