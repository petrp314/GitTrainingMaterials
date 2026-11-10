# Git Training Material — Specification

## 1. Goals

After completing the training, participants can:

- Explain what Git is and why a **distributed** version control system (DVCS) differs from centralized ones.
- Describe the Git data model and the three areas (working tree, staging area, repository).
- Use the core commands confidently and explain what each one does.
- Understand branching, merging, and common team workflows well enough to make or evaluate process decisions.

## 2. Audience and Role Tracks

Audience is technical; no prior Git knowledge is assumed. Each page tags sections by role so readers can skim or skip.

| Track | Focus | Depth |
|-------|-------|-------|
| PM | Concepts, terminology, workflows, traceability, release/versioning implications | Conceptual; no command typing required |
| Architect | Branching strategies, repo layout (mono vs. multi-repo), CI/CD integration, access control, governance | Conceptual + trade-offs |
| Developer | All commands, hands-on exercises, conflict resolution, recovery | Practical, hands-on |

Role badges: `[All]`, `[PM]`, `[Architect]`, `[Dev]`.

## 3. Content Scope

### Module 1 — What is Git? `[All]`
- What version control solves (history, collaboration, traceability, rollback)
- Centralized (SVN, CVS) vs. distributed (Git) — diagram and comparison table
- Key properties: local operations, full history on every clone, integrity via SHA hashes, cheap branching
- Short history (Linux kernel, Linus Torvalds, 2005)
- Git vs. GitHub/GitLab/Azure DevOps/Bitbucket (tool vs. hosting platform)

### Module 2 — Core Concepts `[All]`
- Repository, commit, branch, tag, HEAD, remote, origin
- The three areas: **working directory → staging area (index) → local repository → remote repository** (diagram)
- Commits as snapshots; the commit graph (DAG)
- Basic data model: blobs, trees, commits (overview for Dev/Architect)

### Module 3 — Getting Started `[Dev]` (overview for `[All]`)
- Installation and configuration (`git config`, user name/email, editor, line endings)
- `git init`, `git clone`
- `.gitignore`, `.gitattributes` (overview)
- Authentication: HTTPS tokens, SSH keys (overview)

### Module 4 — Everyday Commands `[Dev]` (concepts `[All]`)

Each command is documented with: purpose, syntax, common options, a diagram of what changes, an example with output, and common pitfalls.

| Command | Topic |
|---------|-------|
| `git status`, `git diff` | Inspecting state |
| `git add` | Staging changes (stage/unstage, partial staging `-p`) |
| `git commit` | Recording snapshots; writing good commit messages |
| `git log`, `git show` | Viewing history |
| `git push` | Publishing local commits to a remote |
| `git fetch` | Downloading remote changes without merging |
| `git pull` | `fetch` + `merge`/`rebase`; pitfalls |
| `git remote` | Managing remotes |
| `git branch`, `git switch`/`git checkout` | Managing branches |
| `git merge` | Fast-forward vs. merge commit |
| `git rebase` | Rewriting history; golden rule (never rebase shared history) |
| `git stash` | Temporarily shelving work |
| `git tag` | Marking releases |

### Module 5 — Branching and Merging `[All]`
- Why branches are cheap in Git
- Merge strategies, merge conflicts: how they arise and how to resolve them (hands-on `[Dev]`)
- Pull/merge requests and code review

### Module 6 — Collaboration Workflows `[PM]` `[Architect]`
- Centralized workflow, feature-branch workflow, Gitflow, GitHub Flow, trunk-based development
- Comparison table: team size, release cadence, complexity, risk
- Branch protection, required reviews, CODEOWNERS
- Monorepo vs. multi-repo trade-offs
- Integration with CI/CD, issue tracking, and release management
- Versioning and tagging conventions (SemVer), conventional commits

### Module 7 — Undoing Things and Recovery `[Dev]`
- `git restore`, `git reset` (soft/mixed/hard), `git revert`, `git commit --amend`
- `git reflog` as a safety net
- Decision guide: which undo command to use and when (flowchart)

### Module 8 — Best Practices `[All]`
- Commit often, small atomic commits, meaningful messages
- Never commit secrets; handling accidental commits
- Large files (Git LFS overview)
- Security: signed commits, access control
- Common anti-patterns

### Appendix
- Command cheat sheet (printable, one page)
- Glossary
- Further reading (Pro Git book, official docs)
- FAQ

## 4. Page Structure and Navigation

- `index.html` — landing page: overview, role-track selector, table of contents.
- One page per module under `pages/` (`01-what-is-git.html`, `02-core-concepts.html`, ...).
- Every module page contains: learning objectives, content, key takeaways, knowledge check (3–5 questions), previous/next links.
- Persistent sidebar/top navigation; breadcrumb; client-side search (optional).
- Cheat sheet and glossary reachable from every page.

## 5. Exercises and Examples

- Hands-on lab for developers: create a repo, commit, branch, merge, create and resolve a conflict, push/pull against a remote, recover with `reflog`.
- Exercises provided as copy-paste command blocks with expected output.
- Sample repositories placed under `examples/`.
- Scenario-based discussion questions for PM/Architect tracks (e.g., "Choose a branching strategy for a team of 40 with weekly releases").

## 6. Visual Requirements

- Diagrams for: centralized vs. distributed, the three areas, commit graph, branch/merge, push/pull/fetch flow, workflow comparisons.
- Prefer SVG or Mermaid (text-based, version-controllable); include alt text.
- Code blocks with syntax highlighting and a copy button; terminal output visually distinguished from commands.

## 7. Technical Requirements

- Static site: plain HTML, CSS, and minimal JavaScript (or a static site generator if adopted later); no backend.
- Hosted on GitHub Pages.
- Responsive layout (desktop, tablet, mobile); printable cheat sheet.
- Accessibility: WCAG 2.1 AA (contrast, keyboard navigation, alt text, semantic HTML).
- Works in current versions of Chrome, Edge, Firefox, Safari.
- No external tracking; external assets (fonts, CDN) kept to a minimum.

## 8. Content and Style Guidelines

- Tone: concise, professional, practical.
- Commands shown for Git ≥ 2.40, cross-platform (Windows, macOS, Linux); note platform differences where relevant.
- Prefer modern commands (`git switch`/`git restore`) and mention legacy equivalents (`git checkout`).
- Terminology consistent with the glossary; define each term on first use.
- Every command example must be verified before publishing.

## 9. Out of Scope (initial version)

- Platform-specific administration (GitHub/GitLab/Azure DevOps setup)
- Advanced topics: submodules/subtrees, `git bisect`, hooks, internals deep dive, history rewriting with `filter-repo` (may be added as an advanced module later)
- Video content

## 10. Acceptance Criteria

- All modules in section 3 exist with the required page elements (section 4).
- Every command in Module 4 has purpose, syntax, example, and pitfalls.
- Each module is tagged by role and has a knowledge check.
- Hands-on lab completes successfully on a clean machine following the instructions only.
- Accessibility and responsiveness checks pass.
- Content reviewed by at least one person per audience role.

## 11. Suggested Delivery Phases

1. **Foundation** — site skeleton, navigation, styling, Modules 1–2.
2. **Core** — Modules 3–5, command pages, diagrams.
3. **Advanced and team topics** — Modules 6–8, hands-on lab.
4. **Polish** — cheat sheet, glossary, FAQ, accessibility review, publish.
