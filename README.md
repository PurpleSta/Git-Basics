# Git-Basics
Git Commands using git bash

## 1. Setup and Configuration
### Configure user name:
- `git config --global user.name "Your Name"`

### Configure user email:
- `git config --global user.email "Your email@example.com"`

### Check configuration:
- `git config --list`


## 2. Respository Management
### Initialize a new repository:
- `git init`

### Clone a remote repository:
- `git clone https://github.com/username/repository.git`


## 3. Basic File Operations
### Check the status of the files:
- `git status`

### Track new files:
- `git add filename`

### Add all changes:
- `git add .` or 
- `git add --all`

### Remove a file:
- `git rm filename`


## 4. Committing Changes
### Commit with a message:
- `git commit -m "Commit message"`

### Amend the last commit:
- `git commit --amend`


## 5.Git Branching
### Create a new branch:
- `git branch branch-name`

### List all branches:
- `git branch`

### Switch to a branch:
- `git checkout branch-name`

### Create and switch to a new branch:
- `git checkout -b branch-name`

### Delete a branch:
- `git branch -d branch-name`


## 6.Merging and Rebasing
### Merge a branch into the current branch:
- `git merge branch-name`

### Rebase the current branch onto another:
- `git rebase branch-name`


## 7.Pulling and Pushing
### Pull changes from a remote repository:
- `git pull origin branch-name`

### Push changes to a remote repository:
- `git push origin branch-name`

### Push a new branch:
- `git push -u origin branch-name`


## 8.Stashing Changes
### Stash changes:
- `git stash`

### List stashes:
- `git stash list`

### Apply stash:
- `git stash apply`

### Drop a stash:
- `git stash drop`


## 9.Undoing Changes
### Undo changes in a file(before committing):
- `git checkout -- filename`

### Unstage changes:
- `git reset HEAD filename`

### Revert a commit:
- `git revert commit-hash`

### Reset a branch to a previous commit: 
- `git reset --hard commit-hash`


## 10. Logs and History
### View commit history:
- `git log`

### View a compact log:
- `git log --oneline`

### View differences between commits:
- `git diff`


## 11. Remote Repositories
### Add a remote repository:
- `git remote add origin https://github.com/username/repo.git`

### View remote repositories:
- `git remote -v`

### Remove a remote:
- `git remote remove origin`


## 12.Tagging
### Create a tag: 
- `git tag tag-name`

### Push a tag:
- `git push origin tag-name`

### Delete a tag:
- `git tag -d tag-name`


## 13. Other Usefull Commands
### Check differences between commits and working directory:
- `git diff commit-hash`

### List files that have been changed:
- `git ls-files -m`

### Show changes in a specific file:
- `git show commit-hash:filename`


## 14.Collaboration and Submodules
### Add a submodule:
- `git submodule add https://github.com/username/repo.git`

### Initialize submodules:
- `git submodule init`

### Update submodule:
- `git submodule update`