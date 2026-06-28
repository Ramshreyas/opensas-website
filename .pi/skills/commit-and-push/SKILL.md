---
name: commit-and-push
description: Stages, commits (Conventional Commits), and pushes changes to the remote. Use when the user asks to commit, push, or save work.
---

# Commit and Push

Use this when the user asks you to commit and push changes. Always confirm what files are staged before committing.

## Steps

1. **Check status** — Run `git status` to see what's changed.

2. **Review diffs** — Run `git diff` (unstaged) and `git diff --cached` (staged) to verify changes look correct before staging or committing.

3. **Stage changes** — If nothing is staged:
   - `git add <file>` for specific files, or
   - `git add -A` for all changes (only if the user explicitly asks to stage everything).

4. **Commit** — Use [Conventional Commits](https://www.conventionalcommits.org/) format:

   | Prefix | When to use |
   |--------|-------------|
   | `feat:` | New feature or component |
   | `fix:` | Bug fix |
   | `docs:` | Documentation (agents.md, README, etc.) |
   | `style:` | Formatting, CSS, Tailwind class changes |
   | `refactor:` | Code restructuring without feature change |
   | `perf:` | Performance improvement |
   | `chore:` | Tooling, config, dependencies, CI |

   Example: `git commit -m "feat: add interactive 5-layer stack diagram"`

5. **Push** — `git push origin <current-branch>`.

6. **Confirm** — Tell the user the branch name and commit hash.
