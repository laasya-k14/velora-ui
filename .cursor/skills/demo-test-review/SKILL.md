---
name: demo-test-review
description: Use this skill when asked to review test coverage for a changed feature.
---

# Demo test coverage review

Review test coverage for a changed feature. Do not edit code. Do not claim to have run tests.

## Workflow

1. Inspect the feature diff and identify changed behavior, including nearby files that share state or components.
2. Inspect nearby tests (colocated `*.test.*` / `*.spec.*` files and related suites) and map them to the changed behavior.
3. Identify uncovered behavior and edge cases: empty/error states, validation, reset/submit paths, and variants the tests do not exercise.
4. Return a short coverage checklist with file references. Mark each item as covered or uncovered, citing the feature file and the test file (or noting that no nearby test exists).

## Output

Keep the checklist short. Cite paths and, when useful, symbols or line ranges. End with gaps only—do not propose patches unless asked.
