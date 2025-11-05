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



Merge Conflict Exercise Completed Successfully 🎉

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

This prevents accidental overwrites 👏

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



