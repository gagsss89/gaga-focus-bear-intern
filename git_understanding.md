# Merge Conflicts & Conflict Resolution

## Git Merge Conflict Exercise

**What caused the merge conflict?**

A merge conflict occurred because two different branches modified the same line inside the **README.md** file. Git couldn’t automatically determine which change should be kept when merging the branches together.

---

**Steps I took to create the merge conflict**

1. Created a new branch called `feature/conflict-test` from `main`
2. Edited the first line in `README.md` with a change specific to the feature branch
3. Committed and pushed the change to GitHub
4. Switched back to the `main` branch
5. Modified the same exact line in `README.md` in a different way
6. Attempted to merge `feature/conflict-test` into `main`
7. Git detected different changes on the same line and raised a merge conflict

---

**How I resolved the merge conflict**

Used IntelliJ's to compare and combine changes:

- Reviewed the conflicting versions (“Yours” = main branch, “Theirs” = feature branch)
- Selected the preferred content 
- Marked the conflict as resolved
- Committed the merge resolution
- Pushed the resolved merge back to GitHub

---

**What I learned**

- What merge conflicts are and why they happen
- How branching and merging works in Git
- How to safely resolve conflicts in IntelliJ
- Proper workflow: Commit → Push → Resolve → Commit merge → Push
- That merge conflicts are normal in collaborative environments and not errors — just decisions that need developer input

---

Screenshots included for proof of completion

https://github.com/gagsss89/gaga-focus-bear-intern/blob/main/Git%20conflict.png

Merge Conflict Resolution Evidence

The screenshot below shows the final result of resolving the merge conflict:

- main branch selected after merge
- Resolve merge conflict in README.md commit visible in Git Log
- Conflicting commits can be seen below it
- README.md is updated and consistent



Merge Conflict Exercise Completed Successfully 

---

## Branching Reflection

**Why is pushing directly to main problematic?**

Main is the main source of truth for the entire project.  
If someone pushes unfinished or broken code to main:
- It can break the project for everyone
- Other teammates are blocked from continuing work
- Bugs can go to production quickly

Teams protect main to keep the project stable.

---

**How do branches help with reviewing code?**

Branches allow everyone to work separately on new features or fixes.  
Before merging into main:
- Code can be reviewed through Pull Requests
- Tests can be run without risk
- QA can validate changes safely

This improves collaboration and quality.

---

**What if two people change the same file in different branches?**

When merging:
- Git detects conflicts
- Developer must choose what stays



---

**Branches help teams work safely without breaking each other’s work, allow proper review, and keep main clean and stable.**



---


##  Git Commands Reflection

### `git checkout main -- <file>`

**What does it do?**  
Restores a specific file to the version from `main` (or another branch) **without affecting other files**.

**When would this be used in a real project?**  
- When I make a mistake in only one file and want to undo it quickly
- When I need the updated version of a file from another branch

**What surprised me?**  
How easy it is to fix one file without undoing other work in progress.

---

### `git cherry-pick <commit>`

**What does it do?**  
Applies **one specific commit** from another branch onto the current branch.

**When would this be used in a real project?**  
- When a bug fix is made in the wrong branch but is needed in `main`
- When I want only one part of another branch instead of merging everything

**What surprised me?**  
I can move a single change between branches with just one command - very powerful!

---

### `git log`

**What does it do?**  
Shows commit history (who changed what and when).  
With flags like `--oneline --graph --decorate --all`, it also shows branches visually.

**When would this be used in a real project?**  
- To understand development history before testing a feature
- To locate where a change was introduced
- During code reviews or release planning

**What surprised me?**  
It provides so much information in a very readable way, especially with graphs and branch labels.

---

### `git blame <file>`

**What does it do?**  
Shows who last modified each line in a file and in which commit.

**When would this be used in a real project?**  
- Debugging to find which commit introduced a bug
- Knowing who to ask about a specific change
- Tracking changes to critical code

**What surprised me?**  
How specific it is, every line has a detailed history!

---



##  Git Bisect Reflection

### What does `git bisect` do?
`git bisect` helps find exactly which commit introduced a bug by using binary search to move through your commit history.  
Instead of checking every commit one by one, Git automatically jumps to the middle commit and asks if the bug is present.  
Then it continues narrowing down until it finds the first bad commit.

### When would you use it in a real-world debugging situation?
- When a bug appears and you don’t know which change caused it
- When there are many commits between the last working version and the broken version
- When multiple developers are contributing and you need to trace where the problem began
- When automated tests suddenly start failing and you must locate the cause quickly

### How does it compare to manually reviewing commits?
Using `git bisect` is:
- Faster because Git tests fewer commits
- More efficient because it avoids guessing
- More accurate because it finds the exact commit where the bug was introduced
- Less stressful than manually jumping through every commit to search for the issue

---

## Writing Meaningful Commit Messages


I explored commit messages in the open-source React project on GitHub.  (https://github.com/facebook/react/commits/main)

By reviewing real commits from professional developers, I learned what makes a commit message helpful versus confusing.

### What I learned from good commit messages
- They clearly explain what changed and why
- They include context such as the feature name or component affected
- They often reference an issue or pull request number (e.g. #35048), making it easy to track related work
- Using tags like `fix:`, `docs:`, or `[Fiber]` helps identify the type of change quickly

Good commit messages improve communication, make code reviews faster, and help anyone understand the purpose of a change without reading the code.

### What I learned from bad commit messages
- Vague messages like “update” or “changes” provide no useful information
- Poor messages make debugging harder, especially when searching history to locate bugs
- Team members may waste time trying to understand what was actually done
- They hurt long-term project maintainability
