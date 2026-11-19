# Git Training Materials

A practical, visual introduction to Git for project managers, architects, and developers. The course is delivered as an accessible, responsive HTML slide deck; no build step or external assets are required.

## Start the course

Open [`index.html`](index.html) in a modern browser, or publish the repository root with GitHub Pages. Choose **English** or **Čeština** in the top bar; changing language keeps the current slide. The complete [Czech edition](index.cs.html) also opens directly, with no build step or network connection required. Use the on-screen arrows or the left/right arrow keys to navigate, **Contents** to jump to a section, **Copy** buttons for commands, and browser print to save or print slides in the selected language.

The Czech edition translates every slide, diagram label, command explanation, glossary entry, and navigation control. Git command names, flags, branch names, paths, and syntax placeholders stay unchanged; sample commit messages and lab text are localized. Illustrative Git output remains in English, with Czech explanations.

## Course contents

The deck covers the eight modules in [SPECIFICATION.md](SPECIFICATION.md), with learning goals, visual explanations, examples, takeaways, and knowledge checks, plus a guided lab, command cheat sheet, glossary, FAQ, and further reading. Commands are intended for Git 2.40 or later and use modern `switch` and `restore` syntax.

## Repository structure

```text
/
├── index.html       # Complete English course slide deck
├── index.cs.html    # Complete Czech course slide deck
├── assets/
│   ├── deck.css     # Responsive, accessible presentation styles
│   ├── deck.js      # Shared navigation, language links, and localized copy controls
│   └── favicon.svg  # Deck icon
├── README.md
└── SPECIFICATION.md
```

## Contributing

Keep examples safe to run in a practice repository, use the role labels `[All]`, `[PM]`, `[Architect]`, and `[Dev]`, and retain keyboard navigation, reduced-motion support, and print styles when editing the deck.

Keep both language editions in the same slide order, with matching slide IDs, command syntax, and examples. Translate explanatory text and accessibility labels, but not Git keywords or literal output from Git. Use consistent Czech terms: *pracovní strom* (working tree), *oblast přípravy / index* (staging area), *větev* (branch), *sloučení* (merge), *přeskládání* (rebase), and *značka* (tag).
