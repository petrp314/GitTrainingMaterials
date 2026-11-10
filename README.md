# GitTrainingMaterials

Web-based training material that introduces **Git** to a technical audience: project managers, architects, and developers.

## Purpose

Give participants a shared, practical understanding of what Git is, why distributed version control matters, and how the everyday Git commands fit together — at a depth appropriate to each role.

## Audience

| Role | What they should take away |
|------|----------------------------|
| Project managers | Concepts and vocabulary, how Git supports collaboration, traceability and release management |
| Architects | Branching/repository strategies, trade-offs of workflows, how Git fits into CI/CD and governance |
| Developers | Hands-on command fluency for daily work, conflict resolution, and recovery from mistakes |

## Content Overview

1. What is Git? (version control, distributed model, history of Git)
2. Core concepts (repository, working tree, staging area, commit, branch, remote)
3. Getting started (install, configure, `init`, `clone`)
4. Everyday commands (`status`, `add`, `commit`, `push`, `pull`, `fetch`, ...)
5. Branching and merging
6. Collaboration workflows
7. Undoing changes and recovery
8. Best practices, plus cheat sheet, glossary and FAQ

The full scope, learning objectives, page structure, and acceptance criteria are defined in [SPECIFICATION.md](SPECIFICATION.md).

## Format

Static HTML/CSS/JS pages (no backend required), deployable via GitHub Pages.

## Repository Structure (planned)

```
/
├── README.md
├── SPECIFICATION.md
├── index.html          # landing page / table of contents
├── pages/              # one page per module
├── assets/             # css, js, images, diagrams
└── examples/           # sample repos and exercises
```

## Contributing

1. Create a branch from `main`.
2. Follow the content and style requirements in `SPECIFICATION.md`.
3. Open a pull request for review.

## Status

Specification phase — content not yet authored.