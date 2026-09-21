---
name: demo-test-review
description: Use this skill when asked to review test coverage for a changed feature.
---

# Demo test review

Review test coverage for a changed feature. Do not edit code. Do not claim to have run tests.

## Workflow

1. Inspect the feature diff and nearby tests.
2. Identify uncovered behavior and edge cases.
3. Return a short coverage checklist with file references.

## Checklist

For each item, name the behavior or edge case and cite the feature file and the nearby test file. Mark whether existing tests cover it. If no nearby test exists, say so and still cite the feature file. End by stating that tests were not run.
