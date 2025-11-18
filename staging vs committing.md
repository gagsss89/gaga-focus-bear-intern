git_understanding.md

### Git Staging vs Committing

**What is the difference between staging and committing?**

- Staging means preparing specific changes to be included in the next commit. You are not saving history yet. It’s like putting items into a shopping cart before paying.
- Committing means saving those staged changes permanently to the project history with a message that explains the update.It's like paying the items from the shopping cart.

**Staging = “select what will be saved”**  
**Committing = “save it to history”**

---

**Why does Git separate these two steps?**

Because it gives control and flexibility.  
I can stage only the correct and finished changes, while keeping unfinished work unstaged.  
This prevents mistakes and keeps Git history clean and easy to understand.

---

**When would I stage changes without committing?**

- When I want to review changes before saving them
- When part of my work is ready, but the rest is still in progress
- When I want to group related changes into a single commit
- When I want to avoid pushing broken code to the team

---

In my repo, I modified a file called staging-vs-committing.md to add reflections about staging and committing.

Here’s what I did:

Edited the file in VS Code.

Ran the following commands in my terminal:

- git status
- git add staging-vs-committing.md - staged the changes
- git status - checked what’s staged
- git commit -m "Added staging vs committing reflection"
- git push origin main

This created a commit only for that file instead of all other untracked changes in my project.
