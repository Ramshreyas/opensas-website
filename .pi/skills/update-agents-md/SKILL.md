---
name: update-agents-md
description: Updates the agents.md context file. Use when the user asks to edit, revise, or update the agents.md file.
---

# Update agents.md

Use this when the user asks you to update `agents.md`. This skill documents the procedure for modifying it — including itself.

## Steps

1. **Read current** — Read `agents.md` to understand the full current state.

2. **Identify change location** — The file has these major sections:
   - Project Overview
   - Tech Stack
   - Project Structure
   - Common Commands
   - Git Conventions
   - Design & Visual Guidance
   - Personas
   - Call to Action
   - Site Structure
   - Priority Tasks
   - Skills
   - Rules for Pi

3. **Make targeted edits** — Use the `edit` tool with precise `oldText`/`newText`. Do not rewrite the entire file. Each edit must match the original file content exactly.

4. **Update the Skills section if needed** — If adding or modifying a skill:
   - Update the corresponding entry in `agents.md` section
   - Also create or update the corresponding `.pi/skills/<skill-name>/SKILL.md` file with proper frontmatter

5. **Create or update skill files** — If adding a new skill, also create a separate SKILL.md under `.pi/skills/<skill-name>/` with:
   - Valid YAML frontmatter (`name`, `description`)
   - Clear step-by-step instructions
   - The skill name must be lowercase alphanumeric with hyphens (e.g., `commit-and-push`)

6. **Verify** — Re-read `agents.md` to confirm changes are correct.

7. **Commit** — Use `docs: update agents.md with <description of change>`.
